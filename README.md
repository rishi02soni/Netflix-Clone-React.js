# 🎬 Netflix Clone (React.js)

A fully functional **Netflix Clone built using React.js** that fetches real-time movie data and displays it in a beautiful, responsive UI similar to Netflix.


---

## 📌 Features

* 🎥 Netflix-style homepage UI
* 🔥 Trending, Top Rated, Action, Comedy sections
* 🎬 Movie banners with dynamic background
* ▶️ Watch trailers (YouTube integration)
* 📱 Fully responsive design
* ⚡ Fast API fetching using Axios
* 🧩 Component-based scalable architecture

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **API:** TMDB (The Movie Database)
* **HTTP Client:** Axios
* **Trailer Player:** react-youtube
* **Trailer Fetching:** movie-trailer

---

## 📁 Project Structure

```
netflix-clone/
│── public/
│── src/
│   │── components/
│   │   │── NavBar.js
│   │   │── Banner.js
│   │   │── Row.js
│   │── screens/
│   │   │── HomeScreen.js
│   │── axios.js
│   │── requests.js
│   │── App.js
│   │── index.js
│── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Get API Key

1. Go to: https://www.themoviedb.org/
2. Create an account
3. Generate your API key

---

### 4️⃣ Add API Key

Open:

```
src/requests.js
```

Replace:

```javascript
const API_KEY = "YOUR_API_KEY";
```

with:

```javascript
const API_KEY = "your_actual_api_key";
```

---

### 5️⃣ Run the Project

```bash
npm start
```

App will run on:

```
http://localhost:3000
```

---

## 🎮 How It Works

* The app fetches movie data from TMDB API
* Displays movies in horizontal scroll rows
* Clicking on a movie opens its trailer
* Banner dynamically updates based on featured content

---

## 📸 Screenshots

<img width="1919" height="950" alt="image" src="https://github.com/user-attachments/assets/d86938f6-9d94-4da6-b738-8efc504b7dcd" />

<img width="1918" height="945" alt="image" src="https://github.com/user-attachments/assets/84c1b94f-1500-48ba-8a2c-f4400b03b34d" />


---

## 🔥 Future Improvements

* 🔐 User Authentication (Firebase)
* 💳 Subscription System (Stripe)
* 📺 Video Streaming Backend
* ⭐ Watchlist Feature
* 🌙 Dark/Light Mode
* 🔍 Search Functionality

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📜 License

This project is for **educational purposes only**.
All rights belong to Netflix and TMDB.

---

## 👨‍💻 Author

**Rishi Soni**

* 💼 Aspiring Software Engineer
* 🚀 Passionate about Web Development & Problem Solving

---

## ⭐ Support

If you like this project:

👉 Star the repo
👉 Share with others
👉 Follow for more projects

---

## 💡 Inspiration

Inspired by the UI/UX of Netflix and built as a learning project to understand real-world React architecture.

---

### 🚀 “Code. Build. Scale. Repeat.”
