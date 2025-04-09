import { useEffect, useRef } from "react";

import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

interface Message {
  text: string;
  sender: string;
  time: string;
}

interface ChatWindowProps {
  selectedFriend: string | null;
  messages: Record<string, Message[]>;
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
}

export default function ChatWindow({
  selectedFriend,
  messages,
  input,
  onInputChange,
  onSend,
}: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedFriend]);

  return (
    <div className="flex flex-col w-3/4 p-4 bg-slate-900 rounded-xl shadow ml-4">
      <h2 className="text-slate-200 text-lg font-bold mb-4">{`To: ${selectedFriend}`}</h2>
      <div className="flex-1 overflow-auto p-2 border rounded h-96 border-slate-700">
        {(messages[selectedFriend || ""] || []).map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            text={msg.text}
            time={msg.time}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput
        input={input}
        onInputChange={onInputChange}
        onSend={onSend}
      />
    </div>
  );
}
