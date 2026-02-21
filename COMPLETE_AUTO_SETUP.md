# 🎯 Complete Auto-Start Setup Guide

## ✅ Bas Ek Baar Setup - Phir Hamesha Automatic!

Yeh guide follow karein aur backend **hamesha automatically start** hoga!

## 🚀 Step 1: Server Par Files Upload Karein

1. **Backend folder** upload karein `public_html/backend/` mein
2. **Frontend build** upload karein `public_html/` mein
3. **`.htaccess`** file upload karein `public_html/` mein

## 🔧 Step 2: SSH Se Connect Karein

Hostinger mein SSH access lein:
- Dashboard → **Advanced** → **SSH Access**
- SSH credentials note karein
- Terminal mein connect karein:

```bash
ssh u723435472@srv2050.hstgr.io -p 65002
```

## ⚡ Step 3: Auto-Start Setup (Ek Baar)

Backend folder mein jao aur setup script run karein:

```bash
cd public_html/backend
chmod +x install-and-start.sh
./install-and-start.sh
```

**Yeh script automatically sab kuch kar dega:**
- ✅ Dependencies install
- ✅ PM2 install
- ✅ Backend start
- ✅ Auto-start on reboot setup
- ✅ Server verification

## 🎉 Done! Ab Automatic Hai!

**Ab backend:**
- ✅ System reboot ke baad automatically start hoga
- ✅ Crash hone par automatically restart hoga
- ✅ Background mein hamesha running rahega
- ✅ Manual start ki zarurat nahi!

## 🌐 Optional: PHP Auto-Start Script

Agar kabhi server crash ho jaye aur manually start karna ho:

**Browser mein open karein:**
```
https://blockchain.webbiezinfotech.in/backend/auto-start.php
```

Yeh script automatically check karega aur start kar dega.

## ✅ Verification Commands

```bash
# Server status
pm2 status

# Server logs
pm2 logs email-server

# Health check
curl http://localhost:3001/api/health
```

## 📋 Checklist

- [ ] Backend folder upload ho gaya
- [ ] Frontend build upload ho gaya
- [ ] `.htaccess` file upload ho gaya
- [ ] SSH se connect ho gaya
- [ ] `install-and-start.sh` script run kiya
- [ ] PM2 startup command run kiya (agar diya ho)
- [ ] `pm2 status` se verify kiya
- [ ] Website test kiya - email working! ✅

## 🔧 Useful Commands

```bash
# Server status
pm2 status

# Server logs
pm2 logs email-server

# Server restart
pm2 restart email-server

# Server stop
pm2 stop email-server

# Server start (agar manually karna ho)
pm2 start email-server
```

## ⚠️ Important Notes

1. **Ek baar setup karo** - phir automatic!
2. **PM2 startup command** zaroor run karein (system reboot ke liye)
3. **Backend folder** mein `.env` file zaroor honi chahiye
4. **Port 3001** accessible hona chahiye

## 🎯 Final Step

Setup complete hone ke baad:
1. Browser mein website kholo
2. Contact form submit karo
3. Email jayegi! 🎉

---

**Ek baar setup - phir hamesha automatic! 🚀**
