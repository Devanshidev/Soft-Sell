"use client";

import React, { useState } from "react";
import { SiChatbot } from "react-icons/si";

interface ChatMessage {
  from: "user" | "bot"; // This ensures the message is either from the user or the bot
  text: string;
}
const SoftBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>("");

  // Function to handle sending a message
  const handleSend = async (msg?: string): Promise<void> => {
    const userMsg = msg || input;
    if (!userMsg.trim()) return;

    // Add user message
   const updatedChat: ChatMessage[] = [
      ...chat,
      { from: "user", text: userMsg } // TypeScript now knows 'from' is 'user'
    ];
    setChat(updatedChat);
    setInput("");

    // Simulate bot response
    const mockResponse = getMockResponse(userMsg);
    setChat([...updatedChat, { from: "bot", text: mockResponse }]);
  };

  // Returns a canned bot response
  const getMockResponse = (query: string): string => {
    if (query.includes("license")) return "You can sell your license by visiting the 'Check value' tab.";
    if (query.includes("documents")) return "You'll need your ID and proof of purchase.";
    return "Thanks for your query! Our team will respond soon.";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button to open chatbot */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-950 dark:bg-[#1E1D1D] text-white px-4 py-2 rounded-full shadow-lg flex justify-center items-center flex-col"
        >
          <SiChatbot />
        </button>
      ) : (
        <div className="w-80 h-[400px] bg-[#F1FBFF] dark:bg-[#2a2a2a] shadow-lg rounded-lg flex flex-col pn:max-sm:w-72">
          {/* Header */}
          <div className="bg-blue-950 dark:bg-[#1E1D1D] text-white px-4 py-2 rounded-t-lg flex justify-between items-center font-sans">
            <span>SoftBot</span>
            <button onClick={() => setIsOpen(false)}>&times;</button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {chat.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded ${
                  msg.from === "user"
                    ? "bg-blue-950 self-end ml-auto dark:bg-[#1E1D1D] text-white"
                    : "bg-[#d0cece5b] text-black dark:text-white dark:bg-[#242626] self-start mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Suggestion buttons shown only when chat is empty */}
            {chat.length === 0 && (
              <div className="space-y-2">
                <p className="text-[#7a7a7a]">Try asking:</p>
                {["How do I sell my license?", "What documents do I need?", "Where can I track my order?"].map(
                  (prompt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(prompt)}
                      className="block w-full text-left text-blue-950 dark:text-white hover:underline"
                    >
                      {prompt}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="p-2 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question..."
              className="flex-1 px-2 py-1 border border-[#ebe3e3] rounded outline-none text-sm text-black placeholder:text-sm placeholder:text-[#7a7a7a] dark:text-white font-sans"
              aria-label="Chat input" // Accessibility improvement
            />
            <button
              onClick={() => handleSend()}
              className="ml-2 bg-blue-950 dark:bg-[#1E1D1D] text-white px-3 rounded-xl text-sm font-sans"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SoftBot;
