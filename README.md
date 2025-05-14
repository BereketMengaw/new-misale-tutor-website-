

# Misale Tutors

## Overview

**Misale Tutors** is a web platform built for a tutoring agency. It connects students with qualified tutors by displaying relevant tutor information sourced directly from a **Google Sheet**. This approach allows non-technical admins to easily update tutor listings without needing access to a database or CMS.

---

## Key Features

* **Live Tutor Listings**: Tutor data is pulled dynamically from a connected Google Sheet.
* **Simple Management**: Agency staff can update tutor information by editing the Google Sheet — no coding required.
* **Google API Integration**: Uses Google Sheets API to fetch and display live data on the website.
* **Mobile-Responsive Design**: Clean, user-friendly interface that works on phones, tablets, and desktops.

---

## Technologies Used

* **Frontend**: HTML, Tailwind CSS, JavaScript
* **Backend (Data Source)**: Google Sheets (via Google Sheets API)
* **APIs**: Google Sheets API, possibly Google Maps API (if location data is included)

---

## How It Works

1. A Google Sheet is created and formatted with tutor data (e.g., Name, Subject, Phone, Email).
2. The sheet is shared publicly or via API access.
3. The frontend app fetches data from the sheet using the Google Sheets API.
4. Tutor listings are dynamically rendered on the website based on this live data.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/misale-tutors.git
cd misale-tutors
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Google Sheets API

* Go to [Google Cloud Console](https://console.cloud.google.com/)
* Create a new project
* Enable the **Google Sheets API**
* Create a service account and generate an API key or service credentials
* Share your Google Sheet with the service account email if using private access
* Add your Google Sheet ID and API key to a `.env` file:

```
GOOGLE_SHEET_ID=your_sheet_id
GOOGLE_API_KEY=your_api_key
```

### 4. Run the Project

```bash
npm run dev
```

---

## Folder Structure (Example)

```
misale-tutors/
├── public/
├── src/
│   ├── components/
│   ├── utils/         # Google Sheets API logic
│   ├── pages/
│   └── App.js
├── .env
└── package.json
```

---

## Project Status

Misale Tutors is fully deployed and in use as a simple, no-database solution for managing tutor listings. It’s ideal for small agencies that prefer Google Sheets as a familiar and easy-to-edit backend.


