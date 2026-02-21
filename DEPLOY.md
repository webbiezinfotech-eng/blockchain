# Server Deployment - Quick Guide

## 🚀 Production Server Par Deploy Karein

### Step 1: Files Upload Karein
Sabhi files server par upload karein (FTP/SSH se).

### Step 2: Server Par Setup

**SSH se connect karein aur yeh commands run karein:**

```bash
# Dependencies install
npm install
cd backend && npm install && cd ..

# .env file banayein (root folder mein)
nano .env
```

`.env` file mein yeh add karein:
```env
GMAIL_USER=poojadhameja36@gmail.com
GMAIL_APP_PASSWORD=deyydbermjzmxiky
PORT=3001
NODE_ENV=production
```

### Step 3: Backend Server Start Karein

**PM2 Install Karein (agar nahi hai):**
```bash
npm install -g pm2
```

**Backend Start Karein:**
```bash
cd backend
pm2 start server.js --name email-server
pm2 save
pm2 startup
```

### Step 4: Frontend Build Karein

```bash
npm run build
```

### Step 5: Web Server Configure Karein

**Apache (.htaccess already banaya gaya hai):**
- `.htaccess` file root folder mein hai
- Apache mod_rewrite aur mod_proxy enable hona chahiye

**Ya phir Nginx:**
```nginx
location /api {
  proxy_pass http://localhost:3001;
}

location / {
  try_files $uri $uri/ /index.html;
}
```

### Step 6: Check Karein

1. Backend running: `curl http://localhost:3001/api/health`
2. Website open karein browser mein
3. Contact form test karein

## ✅ Checklist:

- [ ] Backend server running (PM2 se)
- [ ] `.env` file configured
- [ ] Frontend build ho gaya
- [ ] `.htaccess` ya Nginx configured
- [ ] Port 3001 accessible hai

## 🔧 Commands:

```bash
# Backend status check
pm2 status

# Backend logs
pm2 logs email-server

# Backend restart
pm2 restart email-server

# Backend stop
pm2 stop email-server
```
