# Looking_Like_Zhoom 🎥

**Looking_Like_Zhoom** is a full-stack real-time video conferencing application inspired by Zoom. Built using Node.js, Express, Socket.IO, MongoDB, and React (powered by Vite), it enables real-time WebRTC video signaling, room-based chat messaging, user authentication, and meeting history tracking.

---

## 🌟 Key Features

- 👤 **User Authentication**: Secure registration and login using `bcrypt` password hashing and session tokens.
- 📹 **Real-Time Video Signaling**: Socket.IO-based signaling server supporting WebRTC peer-to-peer video connection establishment.
- 💬 **In-Meeting Chat**: Real-time room-isolated messaging for active meeting participants.
- 📅 **Meeting Activity Log**: Track created and joined meeting sessions stored in MongoDB.
- ⚡ **Fast Modern Frontend**: Responsive user interface built with React and Vite.

---

## 🛠 Tech Stack

### **Backend**
- **Runtime**: Node.js
- **Framework**: Express.js
- **Real-Time Engine**: Socket.IO
- **Database**: MongoDB via Mongoose ORM
- **Security & Utilities**: `bcrypt`, `crypto`, `cors`, `http-status`

### **Frontend**
- **UI Framework**: React / JSX
- **Build Tool**: Vite
- **Styling**: Modular CSS

---

## 📂 Directory Structure
Looking_Like_Zhoom/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── socketManager.js     # WebRTC signaling & real-time chat
│   │   │   └── user.controller.js  # Auth & meeting activity logic
│   │   ├── models/
│   │   │   ├── meeting.model.js     # Meeting collection schema
│   │   │   └── user.model.js        # User account schema
│   │   ├── routes/
│   │   │   └── users.routes.js      # User REST API endpoints
│   │   └── app.js                   # Express & Socket.IO server entry
│   └── package.json
│
└── frontend/
├── public/                      # Static assets & icons
├── src/
│   ├── assets/                  # Graphics and images
│   ├── pages/                   # Views & components (e.g. landing page)
│   ├── style.css                # Base styling
│   └── main.js                  # App entry point
├── index.html                   # HTML template
└── package.json

---

## 🌐 REST API Endpoints

### User Routes (`/api/v1/users`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/login` | Authenticate user credentials & return token |
| `POST` | `/register` | Register a new user account |
| `POST` | `/add_to_activity` | Save meeting code to user history |
| `GET` | `/get_all_activity` | Retrieve user's meeting activity logs |

---

## 📡 Socket.IO Real-Time Events

- `join-call`: Emitted when a user joins a meeting room.
- `signal`: Relays WebRTC SDP offers/answers and ICE candidates between peers.
- `chat-message`: Broadcasts messaging across room participants.
- `user-left` / `disconnect`: Handles user disconnection and room cleanup.

---

## 🚀 Setup & Installation

### **Prerequisites**
- Node.js (v18+)
- MongoDB instance (Local server or MongoDB Atlas URI)

---

### **1. Backend Installation**

```bash
cd backend
npm install

PORT=8000


cd frontend
npm install
npm run dev
