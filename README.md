# Next.js Messenger App

A modern, real-time messaging application built with Next.js and TypeScript. The app features a clean, intuitive interface for chatting with friends.

## Features

- 💬 Real-time messaging interface
- 👥 Friend management system
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🔄 Auto-scrolling messages
- ➕ Add new contacts through a modal interface
- 🕒 Last seen timestamps for contacts


## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Font Awesome](https://fontawesome.com/) - Icons
- [date-fns](https://date-fns.org/) - Date formatting

## Project Structure

```
app/
├── components/
│   ├── ChatWindow.tsx    # Main chat interface
│   ├── FriendsList.tsx   # Friends sidebar
│   ├── MessageBubble.tsx # Individual message component
│   ├── MessageInput.tsx  # Message input field
│   └── Modal.tsx         # Add friend modal
├── context/
│   └── FriendsContext.tsx # Friends state management
├── page.tsx              # Main application page
└── layout.tsx            # Root layout with providers
```

## Component Architecture

- **ChatWindow**: Manages the display of messages and input field
- **FriendsList**: Handles friend selection and display
- **MessageBubble**: Renders individual messages with GIFs
- **MessageInput**: Handles message input and sending
- **Modal**: Manages adding new friends

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

The application uses a component-based architecture for maintainability and reusability. State management is handled through React Context API for global friend state, with local component state for UI elements. The Context API ensures friends are always ordered by most recent activity.

### Key Features Implementation

- **Auto-scrolling**: Implemented using `useRef` and `useEffect` to scroll to newest messages
- **Friend Management**: Context-based friend list with automatic ordering by recent activity
- **Message History**: Messages stored in a Record/Map structure by friend name
- **Responsive Design**: Tailwind CSS classes for mobile-friendly layout

## Future Enhancements

- Backend integration for persistent data storage
- Real-time messaging using WebSocket
- User authentication
- Message search functionality
- File sharing capabilities
- Online/offline status
- Message reactions

## License

MIT
