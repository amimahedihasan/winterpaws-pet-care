# 🐾 WinterPaws – Pet Care in Winter

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://winterpaws-auth.web.app)
[![Build Status](https://img.shields.io/badge/Build-Passing-blue?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](#)

A cozy, modern, and approachably designed winter companion platform built for pet owners. The platform ensures that furry friends stay warm, safe, and healthy during the cold season. Users can seamlessly explore local pet care services, premium winter pet clothing, specialized grooming options, and expert veterinary tips—all bundled inside a high-performance Single Page Application (SPA).

---

## 🔗 Project Links
- **Live URL:** [https://winterpaws-auth.web.app](https://winterpaws-auth.web.app)
- **GitHub Repository:** [https://github.com/amimahedihasan/winterpaws-pet-care](https://github.com/amimahedihasan/winterpaws-pet-care)

---

## ✨ Key Features

- **Cozy Winter Theme & Modern UI:** A fully responsive, minimalist layout crafted using Tailwind CSS and DaisyUI, focusing on approachability and clean aesthetics.
- **Dynamic Hero Slider:** Built using `Swiper.js` to smoothly showcase happy pets in cute winter outfits.
- **Robust Authentication System:** Fully secured Firebase Authentication integrating:
  - Email & Password Login / Signup with robust real-time validation (Minimum 6 characters, uppercase, and lowercase constraint check).
  - Social Auth integration featuring one-click **Google** and **GitHub** login.
  - Interactive password visibility eye-toggle button.
- **Protected Service Details Routing:** Core service details are safely gated. Unauthenticated users are smartly redirected to login and pushed back to their desired service page post-auth.
- **Seamless Booking Mechanism:** Users can dynamically fill out custom booking details with immediate, non-intrusive toast alert notifications on success.
- **Advanced Profile Management & Password Reset Challenges:**
  - Fully functional profile updates (`updateProfile`) for instantaneous global navbar status changes.
  - Interactive Forgot Password sequence that securely transfers typed login emails directly to the reset pane and forwards onto Gmail seamlessly.
- **SPA Routing Stability:** Built-in Firebase rewrite rule structures ensuring absolutely **zero 404 crash errors on route reloads**.

---

## 🛠️ Tech Stack & Packages Used

### Core Technologies
- **Frontend:** React.js (Vite)
- **Styling Framework:** Tailwind CSS & DaisyUI
- **Database & Authentication:** Firebase (Auth & Hosting)

### NPM Packages Implemented
- `react-router-dom` (Declarative Routing)
- `swiper` (Premium dynamic slides/carousels)
- `react-hot-toast` (Elegant success/error push notifications)
- `aos` (Animate On Scroll for clean modern motion cues)
- `react-icons` (Sleek minimalist icon integration)

---

## ⚙️ Environment Variables Setup

To run this project locally, ensure you configure your private Firebase keys securely. Create a `.env.local` file in your root folder and structure it as follows:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here