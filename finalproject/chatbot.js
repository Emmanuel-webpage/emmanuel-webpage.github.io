function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        const chatBox = document.getElementById('chat-box');
        const userMessage = document.createElement('div');
        userMessage.className = 'alert alert-primary';
        userMessage.textContent = 'You: ' + userInput;
        chatBox.appendChild(userMessage);

        const botMessage = document.createElement('div');
        botMessage.className = 'alert alert-secondary';
        botMessage.textContent = 'Bot: ' + getBotResponse(userInput);
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;
        document.getElementById('user-input').value = '';
    }
}

function getBotResponse(input) {
    // Simple bot responses
    const responses = {
        'hello': 'Hi there!',
        'how are you': 'I am just a bot, but I am doing great!',
        'bye': 'Goodbye!',
        'what can you do': 'respond',
        'what is your favorite color': 'blue',
        'what is one plus one': 'two',
        'what is your hobby': 'chat',
        'what is your name': 'I am your friendly chatbot!', 'What can you do': 'I can chat with you and provide information.', 
        'tell me a joke': 'Why did the scarecrow win an award? Because he was outstanding in his field!',
         'what is the weather like': 'I am not sure, but you can check a weather website for the latest updates.',
          'who created you': 'I was created by a team of developers using HTML, CSS, JavaScript, and Bootstrap!'

    };
    return responses[input.toLowerCase()] || 'I am not sure how to respond to that.';
}