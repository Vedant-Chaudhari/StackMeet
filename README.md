# StackMeet

A real-time video calling web application built with React, Node.js, and WebRTC.

🔗 **Live Demo:** https://stackmeetfrontend.onrender.com

## Features

- 🎥 Real-time video calling using WebRTC
- 🎤 Audio/Video controls (mute, camera on/off)
- 🖥️ Screen sharing
- 💬 In-call chat messaging
- 🔐 User authentication (Register/Login)
- 📜 Meeting history
- 👥 Multiple participants support

## Tech Stack

**Frontend**
- React.js
- Material UI (MUI)
- Socket.io Client
- WebRTC

**Backend**
- Node.js
- Express.js
- Socket.io
- MongoDB

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

**Clone the repository**
```bash
git clone https://github.com/Vedant-Chaudhari/StackMeet.git
cd StackMeet
```

**Setup Frontend**
```bash
cd frontend
npm install
npm start
```

**Setup Backend**
```bash
cd backend
npm install
npm start
```

### Environment Variables

Create a `.env` file in the backend folder:
```
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

## Usage

1. Register or login to your account
2. From the home page, enter a meeting code to join
3. Share the meeting code with others to invite them
4. Use the controls to manage audio, video, screen share and chat

## Author

**Vedant Chaudhari**
- GitHub: [@Vedant-Chaudhari](https://github.com/Vedant-Chaudhari)

## License

MIT License
