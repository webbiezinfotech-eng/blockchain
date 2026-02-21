# Backend Server - Server Par Start Karne Ke Liye

## 🚀 Server Par Backend Start Karein

### Method 1: PM2 (Recommended - Auto Restart)

```bash
# SSH se connect karein
ssh user@your-server.com
cd public_html/backend

# PM2 install (agar nahi hai)
npm install -g pm2

# Dependencies install
npm install

# Server start
pm2 start server.js --name email-server

# Auto-start on reboot
pm2 save
pm2 startup
```

### Method 2: Nohup (Simple Method)

```bash
cd public_html/backend
npm install
nohup node server.js > server.log 2>&1 &
```

### Method 3: Screen (Alternative)

```bash
cd public_html/backend
npm install
screen -S email-server
node server.js
# Ctrl+A then D to detach
```

## ✅ Check Karein Server Running Hai

```bash
curl http://localhost:3001/api/health
```

Agar "Email server is running" dikhe to ✅

## 🔧 Useful Commands

```bash
# PM2 status
pm2 status

# PM2 logs
pm2 logs email-server

# PM2 restart
pm2 restart email-server

# PM2 stop
pm2 stop email-server
```

## ⚠️ Important

- Backend server **hamesha running** rakhna hoga
- Port 3001 accessible hona chahiye
- `.env` file backend folder mein honi chahiye
