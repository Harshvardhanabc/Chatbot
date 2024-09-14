document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function getResponse(userInput) {
    const qna = {
        "hello": "Hello, nice to meet you.",
        "what is a list in python": "A list is a mutable, ordered sequence of elements in Python. It is defined using square brackets [ ].",
        "bye": "Goodbye!",
        "what is python": "Python is a versatile programming language used in various fields such as web development, data science, and more.",
        "what is pep 8": "PEP 8 is Python's style guide for writing clean and readable code.",
    };

    for (const question in qna) {
        if (userInput.includes(question)) {
            return qna[question];
        }
    }
    return "I'm sorry, I don't understand that question.";
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    
    if (userInput === "") return;

    // Add the user's message to the chat log
    addMessageToChat("You: " + userInput, "user-message");

    // Get the chatbot response and add it to the chat log
    setTimeout(() => {
        const botResponse = getResponse(userInput);
        addMessageToChat("Chatbot: " + botResponse, "bot-message");
    }, 500);  // Simulate a typing delay

    // Clear the input field
    document.getElementById("user-input").value = "";
}

function addMessageToChat(message, className) {
    const chatLog = document.getElementById("chat-log");
    const newMessage = document.createElement("p");
    newMessage.className = className;
    newMessage.textContent = message;
    chatLog.appendChild(newMessage);
    
    // Scroll to the bottom of the chat log to show the latest message
    chatLog.scrollTop = chatLog.scrollHeight;
}
