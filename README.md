# OneStopOnline.net 🌐

**Created by Eugine Okero**

OneStopOnline.net is a powerful, all-in-one full-stack web platform designed to centralize access to essential digital services and shopping needs. From professional **web development** and **SEO optimization** services to **medical support** and a feature-rich **online store**, this platform is built to serve a wide range of users and businesses.

---

## 🔧 Features

### 🖥 Web Services
- Custom Web Development packages
- SEO Optimization tools & plans
- Contact forms for service requests

### 🩺 Medical Services
- Book online doctor consultations
- Order medicine and lab tests
- Schedule appointments with ease

### 🛒 E-Commerce Store
- Products include:
  - Phone accessories
  - Laptops & electronics
  - Furniture & household items
  - General merchandise
- Shopping cart and secure checkout
- **M-Pesa STK Push** integration for mobile payments (via Safaricom Daraja API)

### 🛠️ Tech Stack
- **Frontend**: React.js + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Payments**: M-Pesa STK Push

---

## 🌍 Live Website

> Coming Soon: [https://www.onestoponline.net](https://www.onestoponline.net)

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/drillertech/onestoponline.net.git
2.Install frontend dependencies:

bash
Copy
Edit
cd client
npm install
3.Install backend dependencies:

bash
Copy
Edit
cd server
npm install
4.Create a .env file in the server folder:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
MPESA_CONSUMER_KEY=your_daraja_consumer_key
MPESA_CONSUMER_SECRET=your_daraja_consumer_secret
MPESA_SHORTCODE=your_shortcode
MPESA_PASSKEY=your_passkey
CALLBACK_URL=https://yourdomain.com/api/mpesa/callback
5.Start the development servers:

bash
Copy
Edit
# Backend
cd server
npm run dev

# Frontend (in a new terminal)
cd client
npm start
👤 Developer
Eugine Okero

Full-stack Developer & Digital Service Provider
[LinkedIn Profile] (optional)
Email: drillerktech.com

📜 License
This project is licensed under the MIT License.

