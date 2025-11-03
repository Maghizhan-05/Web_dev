# Web Dev Project
This repository contains a full-stack web application consisting of a **backend API** (Node.js + Express + MongoDB + Socket.IO) and a **frontend UI** (React + Vite).  
It’s designed to explore real-time messaging, authentication, and full-stack workflows.

---

## 📂 Repository Structure
```
/
├── backend/             # Server side code
│   ├── src/
│   │   ├── index.js     # Entry point: Express app setup
│   │   ├── lib/
│   │   │   └── db.js    # MongoDB connection logic
│   │   ├── routes/
│   │   │   ├── auth.route.js     # Authentication API endpoints
│   │   │   └── message.route.js  # Message API endpoints
│   └── package.json      # Backend dependencies & scripts
├── frontend/            # Client side code (React + Vite)
│   ├── src/
│   │   └── …             # React application components, pages, etc.
│   └── package.json      # Frontend dependencies & scripts
└── README.md             # This file
```

---

## 🛠 Tech Stack
**Backend**
- Node.js + Express (ES Modules enabled via `"type": "module"`)
- MongoDB + Mongoose for data persistence
- Authentication with JWT & bcryptjs
- Real-time messaging via Socket.IO
- Environment configuration via `dotenv`
- Dev workflow using `nodemon` for hot reload

**Frontend**
- React (latest version) bootstrapped via Vite
- Hot module replacement, build/preview via Vite scripts
- Modern JS features (React Hooks, ES Modules)

---

## 🎬 Getting Started

### 1️⃣ Clone the Repository
```
git clone https://github.com/Maghizhan-05/Web_dev.git
cd Web_dev
```

### 2️⃣ Setup Backend
```
cd backend
npm install
```

Create a `.env` file in the backend folder (or copy from `.env.example` if available):

```
PORT=5001
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Then run:
```
npm run dev
```

This starts the backend API at [http://localhost:5001](http://localhost:5001).

---

### 3️⃣ Setup Frontend
In a new terminal:
```
cd frontend
npm install
npm run dev
```

This launches the frontend (default: [http://localhost:5173](http://localhost:5173)).

Ensure the frontend `.env` (if needed) points to your backend API:
```
VITE_API_URL=http://localhost:5001/api
VITE_SOCKET_URL=http://localhost:5001
```

---

### 4️⃣ Production Build

**Frontend:**
```
cd frontend
npm run build
npm run preview
```

**Backend:**
```
cd backend
node src/index.js
```

Set `NODE_ENV=production` for live environments.

---

## ✅ Key Features
- 🔐 **Authentication** — Secure JWT login/register with cookies
- 💬 **Real-time Chat** — Socket.IO-powered instant messaging
- 🗄️ **MongoDB Integration** — Persistent user/message storage
- ⚛️ **React Frontend** — Clean, fast, and modular UI
- ⚙️ **Environment Variables** — Separate `.env` per environment
- 🔁 **Full Dev Workflow** — Hot reload and modular structure

---

## 🔧 Environment Variables Reference

**Backend `.env`**
```
PORT=5001
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=yourVerySecretKey
NODE_ENV=development
```

**Frontend `.env`**
```
VITE_API_URL=http://localhost:5001/api
VITE_SOCKET_URL=http://localhost:5001
```

---

## 🧩 How It Works
- The backend (Express) exposes `/api/auth` and `/api/message` routes.
- `Socket.IO` manages real-time connections and broadcasts.
- The frontend React app connects via REST + WebSocket to display messages instantly.
- Mongoose models handle database persistence and schema validation.

---

## 🚀 Future Improvements
- ✅ Add unit & integration tests
- ✅ Deploy via CI/CD pipeline (GitHub Actions)
- ✅ Add user presence indicators, message timestamps
- ✅ Implement file/image uploads via Cloudinary
- ✅ Document endpoints via Swagger/OpenAPI

---

## 🧠 Learning Goals
This project serves as a full-stack sandbox to understand:
- Modular REST API design
- Real-time socket communication
- Secure authentication
- State management and data flow in React
- Environment-based configuration

---

## 📄 License
This project is open-source and free to use.  
Feel free to fork, modify, and build upon it.

---

**Author:** Maghizhan Kamaraj  
GitHub: [Maghizhan-05](https://github.com/Maghizhan-05)
