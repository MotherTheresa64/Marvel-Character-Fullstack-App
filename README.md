# 🦸 Marvel Character Full-Stack Application

This full-stack CRUD app lets you browse, add, update, and delete Marvel characters from a live MySQL database. It simulates a real-world scenario where a frontend React dev must work with a pre-built Flask backend.

Built for the Module 7 Capstone Project at Coding Temple.

---

## 📁 Folder Structure

Project_Marvel_Character_FullStack/
├── backend/
│ ├── server.py
│ ├── requirements.txt
│ └── marvel_characters.sql
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ ├── HomePage.jsx
│ │ │ ├── CharacterList.jsx
│ │ │ ├── CharacterDetails.jsx
│ │ │ ├── CharacterForm.jsx
│ │ │ ├── NotFound.jsx
│ │ │ └── Footer.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── index.css
│ │ └── App.css
└── README.md


---

## 🚀 Features

- 🔍 View all characters (grid of cards with images)
- 🧾 View individual character details
- ➕ Add new characters
- ✏️ Edit existing characters (with pre-filled form)
- ❌ Delete characters with confirmation
- ✅ React Bootstrap styling + layout
- 🧭 Full routing (with 404 page)
- 🧠 Form validation, loading states, error messages

---

## 🧪 Technologies Used

- **Frontend**: React, React Router, Axios, React Bootstrap
- **Backend**: Flask, SQLAlchemy, MySQL
- **Dev Tools**: Vite, MySQL Workbench

---

## 🛠️ Setup Instructions

### 🔌 Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows

pip install -r requirements.txt

# Edit server.py to insert your MySQL password
python server.py             # Should say "Running on http://127.0.0.1:5000"

🗄️ Populate the Database
Open MySQL Workbench

Open marvel_characters.sql

Set marvel as the default schema

Run the SQL to populate the table

🌐 Frontend Setup
cd frontend
npm install
npm run dev
