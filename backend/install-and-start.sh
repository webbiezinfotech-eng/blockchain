#!/bin/bash

# Complete Installation and Auto-Start Script
# Server par yeh script ek baar run karein - sab automatic ho jayega!

echo "🚀 Blockchain Backend - Complete Setup"
echo "========================================"
echo ""

# Get current directory
BACKEND_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$BACKEND_DIR"

echo "📍 Backend Directory: $BACKEND_DIR"
echo ""

# Step 1: Check Node.js
echo "1️⃣ Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js first"
    exit 1
fi
echo "✅ Node.js found: $(node --version)"
echo ""

# Step 2: Create .env if not exists
echo "2️⃣ Checking .env file..."
if [ ! -f ".env" ]; then
    echo "⚠️  .env file not found. Creating..."
    cat > .env << EOF
GMAIL_USER=poojadhameja36@gmail.com
GMAIL_APP_PASSWORD=deyydbermjzmxiky
PORT=3001
NODE_ENV=production
EOF
    echo "✅ .env file created"
else
    echo "✅ .env file exists"
fi
echo ""

# Step 3: Install dependencies
echo "3️⃣ Installing dependencies..."
if [ ! -d "node_modules" ]; then
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi
echo ""

# Step 4: Install PM2 globally
echo "4️⃣ Installing PM2..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
    echo "✅ PM2 installed"
else
    echo "✅ PM2 already installed"
fi
echo ""

# Step 5: Stop existing server (if running)
echo "5️⃣ Stopping existing server (if running)..."
pm2 stop email-server 2>/dev/null || true
pm2 delete email-server 2>/dev/null || true
echo "✅ Cleaned up existing processes"
echo ""

# Step 6: Start server with PM2
echo "6️⃣ Starting backend server with PM2..."
pm2 start server.js --name email-server
pm2 save
echo "✅ Server started"
echo ""

# Step 7: Setup PM2 startup (auto-start on reboot)
echo "7️⃣ Setting up auto-start on system reboot..."
STARTUP_OUTPUT=$(pm2 startup 2>&1)
echo "$STARTUP_OUTPUT"
echo ""

# Step 8: Verify server is running
echo "8️⃣ Verifying server status..."
sleep 2
HEALTH_CHECK=$(curl -s http://localhost:3001/api/health 2>/dev/null || echo "")

if echo "$HEALTH_CHECK" | grep -q "running"; then
    echo "✅ Backend server is running successfully!"
    echo ""
    echo "📊 Server Status:"
    pm2 status
    echo ""
    echo "🎉 Setup Complete!"
    echo ""
    echo "Backend server will automatically start:"
    echo "  ✅ On system reboot"
    echo "  ✅ If server crashes (PM2 auto-restart)"
    echo ""
    echo "Useful commands:"
    echo "  pm2 status          - Check server status"
    echo "  pm2 logs email-server - View logs"
    echo "  pm2 restart email-server - Restart server"
else
    echo "⚠️  Server started but health check failed"
    echo "Check logs: pm2 logs email-server"
fi
