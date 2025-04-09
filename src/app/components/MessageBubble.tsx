interface MessageBubbleProps {
  text: string;
  sender: string;
  time: string;
}

export default function MessageBubble({
  text,
  sender,
  time,
}: MessageBubbleProps) {
  return (
    <div
      className={`mb-2 ${
        sender === "Yo" ? "text-right" : "text-left"
      } flex flex-row items-center justify-end`}
    >
      <span className="inline-block px-3 py-1 mr-1.5 bg-blue-700 text-slate-50 rounded-lg">
        {text}
      </span>
      <div className="text-slate-500 text-xs">{time}</div>
    </div>
  );
}
