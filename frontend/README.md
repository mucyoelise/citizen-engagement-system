# Citizen Complaints and Engagement System

This is the frontend part of the **Citizen Complaints and Engagement System**, developed using [Vite](https://vitejs.dev/), [Bootstrap](https://getbootstrap.com/), and vanilla JavaScript.

<h2>🚀 Getting Started</h2>

### Prerequisites

- Node.js
- Vs code

### Quick Start

1. Clone and install:

```bash
git clone https://github.com/mucyoelise/citizen-engagement-system.git
cd citizen-engagement-system/frontend/
npm install #To download all dependencies
```

2. Running application on local server:

```bash
npm start || npm run dev
```

<summary><h2>Features</h2></summary>

Our application implements the below functional requirements:

- [x] **Account Management**

- Create account with unique email, full name, and password
- Log in using registered credentials
- View and update account profile
- Log out securely

- [x] **Complaint Submission**

- Submit new complaints with category, description, and location
- Attach files or images (e.g./ photos of the issue)
- Receive instant submission confirmation

- [x] **Complaint Tracking**

- View all submitted complaints in a dashboard
- See real-time complaint status updates (e.g., Pending, In progress, Resolved)
- Tested with two **wire protocols**: JSON and our custom protocol (SAMIRA🔥)

- [x] **Government services**

- Navigate to dedicated Goverment Services page
- Browse service information and receive alerts or notices

</details>

<details>
  <summary><h2>Page-Based UI (Multi-Page Frontend)</h2></summary>

Our pages is organized for easy navigation:

[x] **Individual pages for:**

- Login: For signing in with existing accounts
- Register: For new people wants to create account
- Submit Complaint: The page for submitting complaints or suggestion
- Track Complaint: The page for tracking your request/complaints.
- Government services: The page for checking current govern services


</details>

<details>
<summary><h2>Project Structure</h2></summary>

```bash
├── backend/
├── frontend/
│   ├── src/ # Vite source directory
│   │   ├── index.html/ # Main landing page
│   │   └── pages/
│   │   │   ├── login.html
│   │   │   ├── register.html
│   │   │   ├── submitComplaint.html
│   │   │   └── trackComplaint.html
│   │   │   └── govServices.html
│   │   ├── js/ # Javascript files
│   │   └── img/ #Images and assets
│   │   └── scss/ #SCSS styles
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js