
# 🃏 Card Flip Game – Backend API

This is the **backend** for the [Card Flip Guess Game](https://github.com/ziyamohammad/card-flip-game), designed to store player scores, track high scores/leaderboards, and optionally manage user sessions or authentication. Built using **Node.js**, **Express.js**, and **MongoDB**.

---

## 🔗 Related Frontend Repo

👉 [Frontend Repository](https://github.com/ziyamohammad/card-flip-game)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication (optional):** JWT + bcrypt
- **Tools:** Postman, Nodemon, dotenv

---

## 📁 Folder Structure

```

card-flip-backend/
├── models/         # MongoDB Schemas
│   └── Score.js
├── routes/         # Express routes
│   └── scoreRoutes.js
├── controllers/    # Logic for routes
│   └── scoreController.js
├── config/         # MongoDB connection
│   └── db.js
├── middleware/     # Error & Auth middleware
├── server.js       # Entry point
└── .env            # Environment variables

````

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/ziyamohammad/card-flip-backend.git
cd card-flip-backend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root folder with the following:

```env
MONGO_URI=your_mongodb_connection_uri
PORT=5000
JWT_SECRET=your_jwt_secret   # only if auth is implemented
```

---

## 🧪 Run the Server

```bash
npm start
```

Server runs on: `http://localhost:5000`

---

## 📡 API Endpoints

### 🔖 Score APIs

| Method | Route            | Description                  |
| ------ | ---------------- | ---------------------------- |
| GET    | /api/scores      | Get all player scores        |
| POST   | /api/scores      | Submit a new score           |
| GET    | /api/scores/top  | Get top scores (leaderboard) |
| DELETE | /api/scores/\:id | Delete a score (admin)       |

> 💡 Scores can be sorted by time, moves, or both — depending on how you’ve structured it.

---

## 📚 Sample Score Schema (Mongoose)

```js
{
  username: String,
  moves: Number,
  time: Number,
  date: { type: Date, default: Date.now }
}
```

---

## 🔐 (Optional) Authentication

If you're managing registered users:

* Add login/register routes
* Use JWT to protect score submission
* Hash passwords using bcrypt

---

## 💡 Possible Extensions

* 🏆 Leaderboard Page
* 🧑‍🤝‍🧑 Multiplayer tracking
* 📈 Analytics dashboard for player stats

---

## 👨‍💻 Author

**Mohammad Ziya**
🔗 [LinkedIn](https://www.linkedin.com/in/mohammad-ziya-84a97232a/)
🔗 [GitHub](https://github.com/ziyamohammad)

---

## ⭐ Feedback

If this backend helped you or inspired your own game logic API, consider giving it a ⭐ on [GitHub](https://github.com/ziyamohammad/card-flip-backend)!

Feel free to fork, suggest improvements, or open PRs! 🚀

```

