import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; // ✅ Import axios
import "./FarmAI.css";

const API_URL = "https://farmsmartai.onrender.com/chat"; // include the route in the URL

function App() {
  const [messages, setMessages] = useState([{ sender: "AI", text: "Hi! I am FarmSmart AI. What can I help with?" }]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "You", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post(API_URL, { message: input });
      const aiMessage = { sender: "AI", text: response.data.response };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { sender: "AI", text: "Failed to connect to the server." }]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "You" ? "user-msg" : "ai-msg"}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Ask about farming..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>↑</button>
      </div>
    </div>
  );
}

export default App;
