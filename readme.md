# SMS Middleware API

## Overview
This is a simple **Node.js Express server** that acts as a middleware for sending SMS via the **JazzCMT API**. The server exposes a **`/send-sms`** endpoint that allows sending SMS messages using a simple HTTP POST request.

## Features
- Built using **Node.js** and **Express.js**.
- Uses **Axios** for making HTTP requests to JazzCMT API.
- Environment variables support using **dotenv**.
- Secure handling of API credentials.

## Prerequisites
Ensure you have the following installed:
- **Node.js** (>= v14)
- **npm** (or **yarn**)
- A valid **JazzCMT API account** with credentials

## Installation
### 1. Clone the repository
```sh
git clone https://github.com/usamasindhu/jazz-sms-middleware.git
cd jazz-sms-middleware
```

### 2. Install dependencies
```sh
npm install
```

### 3. Create a `.env` file and configure API credentials
Create a `.env` file in the root directory and add:
```ini
JAZZ_USERNAME=your_username_here
JAZZ_PASSWORD=your_password_here
PORT=3000
```

### 4. Run the server
```sh
node index.js
```
OR using **PM2** for production:
```sh
pm install -g pm2
pm2 start index.js --name sms-middleware
pm2 save
```

## API Endpoints
### 1. **Health Check**
```http
GET /
```
- **Response:**
```json
"Hello World!"
```

### 2. **Send SMS**
```http
POST /send-sms
```
#### Request Body (JSON)
```json
{
   "to": "03086830973",
   "message": "Hello from the SMS API!"
}
```
#### Response (Success)
```json
{
   "success": true,
   "data": "SMS sent successfully (API response)"
}
```
#### Response (Error)
```json
{
   "success": false,
   "error": "Error message"
}
```

## Deployment on AWS EC2
1. Launch an **AWS EC2** instance (Ubuntu recommended).
2. Install **Node.js** and **npm**:
   ```sh
   sudo apt update && sudo apt install -y nodejs npm
   ```
3. Upload your project files to the server.
4. Install dependencies and start the server:
   ```sh
   npm install
   node index.js
   ```
5. Open **port 3000** in AWS Security Group for public access.
6. Verify by visiting `http://<your-ec2-public-ip>:3000/`

## Troubleshooting
- If `npm install` fails, check network connectivity.
- If API calls fail, verify your **JazzCMT credentials**.
- Ensure the **server is listening on 0.0.0.0**, not just `localhost`.

## License
This project is open-source and available for customization.

---
Happy Coding! 🚀

