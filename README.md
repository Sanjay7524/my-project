# 🌌 Futuristic Premium Web Experience

A high-end, responsive professional website built with a cutting-edge tech stack. This project features advanced 3D animations, glassmorphism, and a cinematic user experience, designed to meet "Awwwards-level" design standards.

![Project Preview](https://via.placeholder.com/1200x600?text=Futuristic+Web+Experience+Preview)

## ✨ Key Features

- **🚀 Cinematic UI/UX**: Implemented with React, Framer Motion, and GSAP for smooth, high-performance animations.
- **💎 Glassmorphic Design**: Modern aesthetics using Tailwind CSS v4 with sophisticated backdrop blurs and subtle borders.
- **🎮 Interactive 3D Elements**: Integrated Three.js via React Three Fiber for immersive floating particles and 3D scenes.
- **📝 Dynamic Blog System**: Full-featured blog with categories, slugs, and a secure administration panel.
- **🛠️ Admin Dashboard**: Secure backend for managing blog posts and viewing incoming contact messages.
- **📨 Contact Integration**: Functional contact form with validation and backend storage.
- **⚡ Performance Optimized**: Smooth scrolling with Lenis and efficient asset loading.
- **💾 Portable Database**: Powered by SQLite for zero-config database setup and easy portability.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
- **3D Engine**: [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)

### Backend
- **Language**: PHP 8.x
- **Database**: SQLite 3 (PDO)
- **API**: RESTful architecture with JSON responses
- **CORS**: Configured for cross-origin frontend-backend communication

## 📂 Project Structure

```text
├── backend/                # PHP Backend Files
│   ├── api/                # API Endpoints (Blog, Contact, Admin)
│   ├── config/             # Database & System Configuration
│   └── database.sqlite     # SQLite Database File (Auto-generated)
├── frontend/               # React Frontend (Vite)
│   ├── src/
│   │   ├── components/     # UI Components (Hero, Blog, ThreeScene, etc.)
│   │   ├── App.jsx         # Main Application Logic
│   │   └── index.css       # Global Styles & Tailwind Config
│   └── package.json        # Frontend Dependencies
├── sql/                    # SQL Database Schemas
└── README.md               # Project Documentation
```

## 📊 Google Spreadsheet Integration

To store contact form submissions in your Google Spreadsheet:
1. Open [Google Sheets](https://sheets.google.com) with `sanjaysanju752004@gmail.com`.
2. Create a new sheet and add headers: `Timestamp`, `Name`, `Email`, `Phone`, `Message`.
3. Follow the instructions in `google_script_instructions.js` to deploy a Google Apps Script.
4. Copy your Web App URL and paste it into `frontend/src/components/Contact.jsx` (line 14).

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [PHP](https://www.php.net/) (v8.0+)
- A local web server for PHP (like XAMPP, WAMP, or PHP's built-in server)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd web_development
   ```

2. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Backend Setup**:
   - Ensure PHP is installed and in your PATH.
   - Start a local PHP server pointing to the root or backend folder:
     ```bash
     cd backend
     C:\xampp\php\php.exe -S localhost:8000
     ```
   - *The SQLite database will be automatically initialized on the first request.*
   

## 🔐 Admin Panel
- **URL**: Accessible via the `/admin` route or the link in the footer.
- **Default Credentials**:
  - **Username**: `admin`
  - **Password**: `admin123`

## 🎨 Design System
The project uses a custom-tailored color palette:
- **Primary**: `#ADB2D4` (Soft Lavender)
- **Secondary**: `#C7D9DD` (Cool Mist Blue)
- **Mint**: `#D5E5D5` (Soft Mint)
- **Cream**: `#EEF1DA` (Warm Cream)

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---
Built with ❤️ for a futuristic web experience.
