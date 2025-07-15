# 🔗 URL Shortener

A simple and elegant full-stack URL shortening application built using **Node.js**, **Express**, **React (Vite)**, and **Material UI**. This project allows users to shorten long URLs, view statistics, and track click counts for each shortened link.

## 📁 Folder Structure

project-root/
├── server/
│ ├── server.js
│ ├── data.js
│ ├── routes/
│ │ ├── shorten.js
│ │ └── stats.js
│ └── Logging Middleware/
│ └── logger.js
├── client/
│ ├── index.html
│ ├── main.jsx
│ ├── App.jsx
│ ├── api.js
│ ├── styles.css
│ └── components/
│ ├── UrlForm.jsx
│ └── StatsPage.jsx
└── README.md

yaml
Copy
Edit

---

## 🚀 Features

- 🔗 Shorten any valid URL instantly
- 📊 View stats (click count, original and short URLs)
- 🧠 Error logging using a centralized logging service
- 📦 React frontend with Material UI components
- 🌐 CORS-enabled and client-server communication using Axios

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Material UI, Axios
- **Backend**: Node.js, Express.js
- **Middleware**: Custom logger with remote error reporting
- **Storage**: In-memory (no database for this version)

---

## 🧪 Installation & Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
2. Set up the backend
bash
Copy
Edit
cd server
npm install
node server.js
Runs at http://localhost:3000

3. Set up the frontend
bash
Copy
Edit
cd client
npm install
npm run dev
Runs at http://localhost:5173 (Vite default)

🌐 API Endpoints
POST /shorten
Request Body:

json
Copy
Edit
{ "originalUrl": "https://example.com" }
Response:

json
Copy
Edit
{ "shortUrl": "http://localhost:3000/abc123" }
