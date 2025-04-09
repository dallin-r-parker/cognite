"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

interface Friend {
  name: string;
  lastSeen: string;
}

interface FriendsListProps {
  friends: Friend[];
  selectedFriend: string | null;
  onSelectFriend: (name: string) => void;
  onAddFriend: () => void;
}

export default function FriendsList({
  friends,
  selectedFriend,
  onSelectFriend,
  onAddFriend,
}: FriendsListProps) {
  return (
    <div className="w-1/4 bg-slate-900 p-4 rounded-xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-slate-200">Friends</h2>
        <button className="cursor-pointer" onClick={onAddFriend}>
          <FontAwesomeIcon
            className="text-blue-700 hover:text-blue-500"
            size="xl"
            icon={faPlusSquare}
          />
        </button>
      </div>
      {friends.map((friend) => (
        <div
          key={friend.name}
          className={`p-2 mb-1.5 flex justify-between items-center cursor-pointer overflow-auto rounded
            ${
              selectedFriend === friend.name
                ? "bg-blue-700 text-white"
                : "bg-gray-200 hover:bg-slate-300 "
            }`}
          onClick={() => onSelectFriend(friend.name)}
        >
          <div>{friend.name}</div>
          <div>{friend.lastSeen}</div>
        </div>
      ))}
    </div>
  );
}
