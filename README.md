## 🎉 Event Hub

A modern full-stack Event Management platform where users can explore upcoming events, view event details, and authenticated users can add and manage events seamlessly.

## 🌐 Live Site: https://your-event-hub-project.vercel.app/

## 🖼️ Project Overview

Event Hub is a full-stack web application designed to connect users with various events such as workshops, seminars, concerts, and community meetups. The platform allows visitors to browse events publicly, view detailed information, and authenticated users to create and manage events through a secure and user-friendly interface. The application ensures smooth navigation, responsive design, and reliable data handling using modern web technologies.

## 🚀 Tech Stack

### Frontend
- Next.js 15/16 (App Router)
- Firebase Authentication
- Tailwind CSS
- React Hook Form
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- CORS
- Dotenv

---

## ⭐ Main Features

- 🔐 Firebase Authentication (Email/Password login)
- 📅 Public Event Listing Page
- 📄 Event Details Page (Dynamic Route)
- ➕ Add New Event (Protected Route)
- 🔒 Route Protection using Authentication
- 🔔 Toast Notification on successful event creation
- 🌐 Data fetched from Express API
- 📸 Event cards with images and details
- 📱 Fully Responsive UI (Mobile, Tablet, Desktop)
- 🧭 Authentication persistence on page reload
- ❌ Custom 404 Page
- 🧭 Clean Navigation with Navbar & Footer

---

## 📦 Dependencies

### Client
- next
- react
- react-dom
- firebase
- react-hook-form
- react-hot-toast
- tailwindcss

### Server
- express
- mongodb
- cors
- dotenv

---

## 🔐 Authentication

Firebase Authentication is used to handle user login and secure protected routes. Only authenticated users can access event creation features, while public users can browse and view event details without logging in.

---

## 🧪 Environment Variables

All sensitive information such as Firebase credentials and MongoDB URI are stored securely using environment variables.

---

## 📌 Routes Summary

- `/` → Landing Page  
- `/login` → Login Page  
- `/events` → Event Listing Page  
- `/events/[id]` → Event Details Page  
- `/add-event` → Protected Add Event Page  

---

## 🛠️ Setup & Installation

### Client
```bash
git clone https://github.com/your-username/event-hub-client.git
cd event-hub-client
npm install
npm run dev
