  // Define Classes
        class Student {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
        }

        class HonorsStudent extends Student {
            constructor(name, age, honors) {
                super(name, age);
                this.honors = honors;
            }
        }

        // Initialize Arrays
        let regularStudents = [];
        let honorsStudents = [];

        // Render Function
        function renderStudents() {
            const studentTable = document.getElementById('studentTable');
            studentTable.innerHTML = ''; // Clear existing rows

            // Render Regular Students
            regularStudents.forEach((student, index) => {
                const row = studentTable.insertRow();
                row.innerHTML = `
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>Regular</td>
                    <td><button data-index="${index}" data-type="regular" class="btn btn-danger btn-sm delete-btn">Delete</button></td>
                `;
            });

            // Render Honors Students
            honorsStudents.forEach((student, index) => {
                const row = studentTable.insertRow();
                row.innerHTML = `
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>Honors</td>
                    <td><button data-index="${index}" data-type="honors" class="btn btn-danger btn-sm delete-btn">Delete</button></td>
                `;
            });
        }

        // Form Submission Event
        document.getElementById('studentForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const type = document.getElementById('type').value;

            // Create Student Object
            if (type === 'regular') {
                const student = new Student(name, age);
                regularStudents.push(student);
            } else if (type === 'honors') {
                const honors = document.getElementById('honors').value;
                const student = new HonorsStudent(name, age, honors);
                honorsStudents.push(student);
            }

            // Render Students
            renderStudents();
        });

        // Delete Event Handling
        document.getElementById('studentTable').addEventListener('click', function(event) {
            if (event.target.classList.contains('delete-btn')) {
                const index = event.target.getAttribute('data-index');
                const type = event.target.getAttribute('data-type');

                // Remove from Array
                if (type === 'regular') {
                    regularStudents.splice(index, 1);
                } else if (type === 'honors') {
                    honorsStudents.splice(index, 1);
                }

                // Render Students
                renderStudents();
            }
        });

        
       