"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Olá! Para começar, me fale um pouco sobre o sistema que você deseja desenvolver." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);

  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // Adiciona a entrada do usuário ao histórico da conversa
    const updatedHistory = [...conversationHistory, { role: "user", content: input }];
    setConversationHistory(updatedHistory);

    try {
      const response = await axios.post("/api/chat", { messages: updatedHistory });

      if (response.data.reply) {
        const botResponse = { role: "assistant", content: response.data.reply };
        setMessages([...newMessages, botResponse]);
        setConversationHistory([...updatedHistory, botResponse]);
      } else {
        setMessages([...newMessages, { role: "assistant", content: "Desculpe, não entendi. Poderia reformular?" }]);
      }
    } catch (error) {
      console.error("Erro na API:", error);
      setMessages([...newMessages, { role: "assistant", content: "Houve um erro ao processar sua solicitação." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-lg border border-stroke bg-white shadow-lg dark:border-transparent dark:bg-[#2C303B]">
      <div className="p-4 border-b border-stroke bg-primary text-white flex justify-between items-center rounded-t-lg">
        <h3 className="text-lg font-medium">Atendente Virtual</h3>
        <button className="text-white hover:text-gray-300 text-lg">✖</button>
      </div>

      <div className="p-4 h-96 overflow-y-auto space-y-3" ref={chatBoxRef}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`w-full px-4 py-3 rounded-sm text-sm ${
              msg.role === "user"
                ? "bg-primary text-white self-end ml-auto"
                : "bg-[#f8f8f8] text-dark dark:bg-[#2C303B] dark:text-body-color-dark"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && (
          <div className="w-full px-4 py-3 bg-[#f8f8f8] rounded-sm text-sm dark:bg-[#2C303B]">
            Digitando...
          </div>
        )}
      </div>

      <div className="border-t border-stroke p-4 flex items-center gap-2 dark:border-[#1E2128]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua resposta..."
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          className="w-full border border-stroke rounded-sm bg-[#f8f8f8] px-4 py-2 text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"
        />
        <button
          onClick={sendMessage}
          className="bg-primary text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-primary/90"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
