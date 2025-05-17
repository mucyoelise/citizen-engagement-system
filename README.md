# Citizen Engagement System (MVP)
## Demo Link: [Citizen-Engagement-Site](https://deploy-preview-3--citizen-engagement-site.netlify.app/)

A full-stack web application that allows citizens to submit complaints or feedback on public services. Government institutions can review, respond, and track the status of each complaint through an admin interface.

This is a Minimum Viable Product (MVP) developed to improve transparency, responsiveness, and engagement between citizens and public service providers.
### Frontend Documentation
[![Frontend Documentation](https://img.shields.io/badge/Frontend-blue?style=for-the-badge)](./frontend/README.md) 
### Backend Documentation
[![Backend Documentation](https://img.shields.io/badge/Backend-green?style=for-the-badge)](./backend/README.md)

## 🚀 Features

### For Citizens
- Submit feedback or complaints via a web form
- Select complaint category (e.g., roads, electricity, health)
- Receive a ticket ID for tracking
- Check the status and response of a complaint

### For Admins
- View all complaints via Django Admin
- Update status (Pending, In Progress, Resolved)
- Respond to complaints with feedback
- Categorize and manage routing (optional extension)

---

## 🛠 Tech Stack

- **Frontend:** Vite, Bootstrap, Vanilla JS
- **Backend:** Django, Django REST Framework
- **Database:** SQL
- **Deployment:** Render (Backend) and Netlify (Frontend)

---
## 📁 Project Structure

```bash
├── citizen-engagement-system/
├── backend/
│   ├── gov_feedback/
│   ├── manage.py
├── frontend/
│   ├── src/
```

---

## ⚙️ Local Development

### 🔧 Backend Setup

`cd backend`
`python -m venv venv`
`source venv/bin/activate  # or venv\Scripts\activate`
`pip install -r requirements.txt`
`python manage.py migrate`
`python manage.py runserver`

### 🔧 Frontend Setup
`cd frontend`
`npm install`
`npm start`


## 🌍 Deployment

🧩 Backend on Render
💻 Frontend on Netlify

Deploy from frontend/ directory

Set REACT_APP_API_URL in environment variables to backend endpoint








