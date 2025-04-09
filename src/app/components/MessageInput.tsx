interface MessageInputProps {
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
}

export default function MessageInput({
  input,
  onInputChange,
  onSend,
}: MessageInputProps) {
  return (
    <div className="mt-4 flex">
      <input
        autoFocus={true}
        className="flex-1 p-2 border rounded border-slate-700 text-slate-200 focus:outline-none"
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
        placeholder="Type a message..."
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-700 text-slate-50 rounded"
        onClick={onSend}
      >
        Send
      </button>
    </div>
  );
}
