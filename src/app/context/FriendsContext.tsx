'use client';

import { createContext, useContext, useState } from 'react';

import { format } from 'date-fns';

interface Friend {
  name: string;
  lastSeen: string;
}

interface FriendsContextType {
  friends: Friend[];
  addFriend: (name: string) => void;
  updateFriendLastSeen: (name: string) => void;
}

const defaultFriends = [
  { name: "Alice", lastSeen: format(new Date(), "h:mm a") },
  { name: "Bob", lastSeen: format(new Date(), "h:mm a") },
  { name: "Charlie", lastSeen: format(new Date(), "h:mm a") },
];

const FriendsContext = createContext<FriendsContextType | undefined>(undefined);

export function FriendsProvider({ children }: { children: React.ReactNode }) {
  const [friends, setFriends] = useState<Friend[]>(defaultFriends);

  const addFriend = (name: string) => {
    setFriends(prev => {
      const newFriend = {
        name,
        lastSeen: format(new Date(), 'h:mm a')
      };
      return [newFriend, ...prev.filter(f => f.name !== name)];
    });
  };

  const updateFriendLastSeen = (name: string) => {
    setFriends(prev => {
      const friend = prev.find(f => f.name === name);
      if (!friend) return prev;
      
      const updatedFriend = {
        ...friend,
        lastSeen: format(new Date(), 'h:mm a')
      };
      
      return [
        updatedFriend,
        ...prev.filter(f => f.name !== name)
      ];
    });
  };

  return (
    <FriendsContext.Provider value={{ friends, addFriend, updateFriendLastSeen }}>
      {children}
    </FriendsContext.Provider>
  );
}

export function useFriends() {
  const context = useContext(FriendsContext);
  if (context === undefined) {
    throw new Error('useFriends must be used within a FriendsProvider');
  }
  return context;
}