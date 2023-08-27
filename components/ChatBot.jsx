'use client'
import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInput = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputText.trim() === "") {
      return;
    }

    const userMessage = { text: inputText, type: "user" };
    const botResponse = generateBotResponse(inputText);
    const botMessage = { text: botResponse, type: "bot" };

    setMessages([...messages, userMessage, botMessage]);
    setInputText("");
  };

  const generateBotResponse = (userInput) => {
    if (
      userInput.toLowerCase().includes("hi") ||
      userInput.toLowerCase().includes("hello") ||
      userInput.toLowerCase().includes("hey")
    ) {
      return "Hi there!";
    } else if (userInput.toLowerCase().includes("how are you")) {
      return "I'm doing fine!";
    } else {
      return "I'm sorry, join our Discord Server for more help!";
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-slate-100 rounded-lg shadow-md">
      <div className="h-40 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              message.type === "bot" ? "bg-blue-200" : "bg-green-200"
            }`}
          >
            <span className={message.type === "bot" ? "text-blue-800" : "text-green-800"}>
              {message.type === "user" ? "You: " : "Kirti: "}
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <form className="mt-4 flex" onSubmit={handleSubmit}>
        <input
          className="flex-1 p-2 rounded-l-lg"
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInput}
        />
        <button className="bg-sky-500 hover:bg-sky-700 ... text-white px-4 py-2 rounded-r-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
