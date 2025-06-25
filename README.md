# 🥦 Food Expiry Tracker System

A responsive full-stack web application that helps users manage their food inventory, track expiry dates, and reduce food waste. Users can add, update, and delete food items, view expiration status, and receive alerts before items expire.

---

## 🌐 Live Website

🔗 [Visit Live Site](https://food-expiry-tracker-e6971.web.app/)

---

## 🚀 Technologies Used

### 🔧 Frontend:
- React
- React Router DOM
- Tailwind CSS
- DaisyUI
- Framer Motion

### 🔧 Backend:
- Node.js
- Express.js
- MongoDB (Native Driver)
- JSON Web Token (JWT)

### 🔐 Authentication:
- Firebase Authentication (Email/Password & Google Login)

### 🚀 Deployment:
- Client: Firebase Hosting
- Server: Render

---

## ✨ Key Features

- 🔐 Firebase Authentication with Email/Password & Google login
- 🔒 JWT-secured protected routes
- ➕ Add, Update, and Delete food items (CRUD)
- 🗓️ Track Expired and Nearly Expired Items (next 5 days)
- 🔍 Search and Filter foods by keywords and category
- 📝 Add personal notes to food items (with access control)
- ⏳ Expiry Countdown Timer per item
- 👤 Private Routes with token persistence on reload
- 📈 Expired & Near-Expiry stats using React CountUp
- 🎨 Smooth animations via Framer Motion
- 🧪 Form validation and alert system with Toastify and SweetAlert2
- 🧩 Responsive UI for all screen sizes (Mobile, Tablet, Desktop)
- ⚙️ Environment-secured Firebase and MongoDB credentials

---

## 📦 Dependencies

### Client-Side

- `react`
- `react-router-dom`
- `tailwindcss` & `daisyui`
- `firebase`
- `framer-motion`
- `react-toastify`
- `sweetalert2`
- `react-countup`

### Server-Side

- `express`
- `cors`
- `dotenv`
- `cookie-parser`
- `jsonwebtoken`
- `mongodb` (native driver)

---

## 🛠️ How to Run Locally

### Step 1: Clone the Repositories

```bash
# Clone the client repo
git clone https://github.com/redoy49/food-expiry-tracker-client.git

# Clone the server repo
git clone https://github.com/redoy49/food-expiry-tracker-server.git
```

### Step 2: Install Dependencies

```bash
# Client
cd food-expiry-tracker-client
npm install

# Server
cd food-expiry-tracker-server
npm install
```

### Step 3: Configure Environment Variables

#### ⚙️ Client `.env`

```ini
VITE_API_BASE_URL=https://your-server-url.onrender.com
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

#### ⚙️ Server `.env`

```ini
PORT=5000
DB_USER=your_db_user
DB_PASS=your_db_password
JWT_SECRET=your_jwt_secret
CLIENT_URL=https://food-expiry-tracker-e6971.web.app
```

### Step 4: Run the App

```bash
# Start the backend
npm run dev

# Start the frontend
npm run dev
```

---

## 🔗 Relevant Links

- 🔴 Live Website: https://food-expiry-tracker-e6971.web.app/
- 🟠 Client GitHub Repo: https://github.com/redoy49/food-expiry-tracker-client
- 🟢 Server GitHub Repo: https://github.com/redoy49/food-expiry-tracker-server

---

## 📌 Important Notes

✅ Ensure JWT cookies are secure and HTTP-only  
✅ Add your frontend domain to Firebase Authentication settings  
✅ The app should not break on page reloads or private routes  
✅ Use .env files to keep credentials safe  

---

## 💡 Project Purpose

This project was created as a full-stack development practice to implement authentication, data security, and user interaction features in a real-world context — focused on reducing food waste through expiry tracking.

---

## 👤 Author
 
🐦 Twitter: mdredoyhasan49  
📧 Email: mdredoyhasan49@gmail.com
