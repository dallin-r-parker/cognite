"use client";

import ChatWindow from "./components/ChatWindow";
import FriendsList from "./components/FriendsList";
import Modal from "./components/Modal";
import { format } from "date-fns";
import { useFriends } from "./context/FriendsContext";
import { useState } from "react";

interface Message {
  text: string;
  sender: string;
  time: string;
}

export default function Home() {
  const { friends, addFriend, updateFriendLastSeen } = useFriends();

  const [selectedFriend, setSelectedFriend] = useState<string | null>(
    friends[0].name
  );
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (selectedFriend && input.trim()) {
      setMessages((prev) => ({
        ...prev,
        [selectedFriend]: [
          ...(prev[selectedFriend] || []),
          { text: input, sender: "You", time: format(new Date(), "h:mm a") },
        ],
      }));
      updateFriendLastSeen(selectedFriend); // This will move the friend to the top
      setInput("");
    }
  };

  const handleAddFriend = (name: string) => {
    addFriend(name);
    setIsOpen(false);
  };

  return (
    <>
      <FriendsList
        friends={friends}
        selectedFriend={selectedFriend}
        onSelectFriend={setSelectedFriend}
        onAddFriend={() => setIsOpen(true)}
      />
      <ChatWindow
        selectedFriend={selectedFriend}
        messages={messages}
        input={input}
        onInputChange={setInput}
        onSend={handleSend}
      />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleAddFriend={handleAddFriend}
        handleInput={setInput}
      />
    </>
  );
}