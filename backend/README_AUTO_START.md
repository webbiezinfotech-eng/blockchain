# 🚀 Auto-Start Backend Setup

## ✅ Bas Ek Baar Setup - Phir Automatic!

Yeh setup ek baar karein, phir backend **hamesha automatically start** hoga!

## 📋 Quick Setup (Ek Baar)

### Method 1: SSH Se (Recommended - 2 Minutes)

```bash
# SSH se connect
ssh u723435472@srv2050.hstgr.io -p 65002

# Backend folder mein jao
cd public_html/backend

# Complete setup script run karein
chmod +x install-and-start.sh
./install-and-start.sh
```

**Yeh script automatically:**
- ✅ Dependencies install karega
- ✅ PM2 install karega
- ✅ Backend start karega
- ✅ Auto-start on reboot setup karega
- ✅ Server verify karega

### Method 2: Manual Setup

```bash
cd public_html/backend
npm install
npm install -g pm2
pm2 start server.js --name email-server
pm2 save
pm2 startup
# PM2 jo command dega wo run karein (usually sudo command)
```

## 🔄 Auto-Start Features

**PM2 automatically:**
- ✅ System reboot ke baad server start karega
- ✅ Server crash hone par restart karega
- ✅ Logs maintain karega
- ✅ Background mein chalega

## 🌐 PHP Auto-Start (Optional)

Agar server crash ho jaye aur manually start karna ho:

**Browser mein open karein:**
```
https://blockchain.webbiezinfotech.in/backend/auto-start.php
```

Yeh script check karega aur agar server running nahi hai to start kar dega.

## ✅ Verification

```bash
# Server status check
pm2 status

# Health check
curl http://localhost:3001/api/health
```

## 🎯 Important

**Ek baar setup karo - phir hamesha automatic chalega!**
- System reboot ke baad bhi start hoga
- Crash hone par auto-restart hoga
- Manual start ki zarurat nahi!

## 📞 Troubleshooting

**Server start nahi ho raha?**
```bash
pm2 logs email-server
```

**Server restart karna hai?**
```bash
pm2 restart email-server
```

**Server stop karna hai?**
```bash
pm2 stop email-server
```

---

**Setup ek baar - phir automatic! 🎉**
