# ⚡ URGENT: Server Par Backend Start Karein

## 🔴 Problem
Error: "Server returned HTML instead of JSON"
- Yeh matlab backend server **running nahi hai** server par
- Backend folder upload ho gaya hai, lekin server start nahi hua

## ✅ Solution - 3 Simple Steps

### Step 1: SSH Se Connect Karein

Hostinger mein SSH access karein:
1. Hostinger dashboard mein jao
2. **Advanced** → **SSH Access** section mein jao
3. SSH credentials note karein
4. Terminal/Command Prompt mein:

```bash
ssh u723435472@blockchain.webbiezinfotech.in -p 65002
```

(Yeh example hai - apne actual SSH credentials use karein)

### Step 2: Backend Folder Mein Jao Aur Start Karein

```bash
cd public_html/backend

# Dependencies install (agar nahi kiye)
npm install

# PM2 install (agar nahi hai)
npm install -g pm2

# Backend start
pm2 start server.js --name email-server
pm2 save
pm2 startup
```

### Step 3: Test Karein

```bash
curl http://localhost:3001/api/health
```

Agar "Email server is running" dikhe to ✅ **Backend sahi se chal raha hai!**

## 🔧 Agar SSH Access Nahi Hai?

**Hostinger File Manager se:**

1. **Terminal Option:**
   - File Manager mein `backend` folder kholo
   - **Terminal** option click karein (agar available hai)

2. **Ya Phir Support Se Contact:**
   - Hostinger support se backend server start karne ko kaho
   - Unhe batao: "Node.js backend server start karna hai port 3001 par"

## ⚠️ Important

**Backend server start karna ZAROORI hai!**
- Backend folder upload karne se kaam nahi hoga
- Server ko **start** karna hoga
- PM2 use karein taaki server hamesha running rahe

## ✅ Checklist

- [ ] SSH se connect ho gaya
- [ ] `cd public_html/backend` kiya
- [ ] `npm install` kiya
- [ ] `pm2 start server.js` kiya
- [ ] `curl http://localhost:3001/api/health` test kiya
- [ ] "Email server is running" dikha

## 🎯 Final Step

Backend start hone ke baad:
1. Browser mein website refresh karo
2. Contact form submit karo
3. Email jayegi! 🎉

---

**Note:** Agar SSH access nahi hai to Hostinger support se contact karein - backend server start karne ke liye SSH ya terminal access chahiye.
