#!/bin/bash

# Backend Server Start Script for Hostinger Server
# Server par yeh script run karein

echo "🚀 Starting Blockchain Email Server..."
echo "======================================"

# Check if we're in backend folder
if [ ! -f "server.js" ]; then
    echo "❌ Error: server.js not found!"
    echo "Please run this script from the backend folder"
    exit 1
fi

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed"
    exit 1
fi

# Check .env file
if [ ! -f ".env" ]; then
    echo "⚠️  Warning: .env file not found"
    echo "Creating .env file..."
    cat > .env << EOF
GMAIL_USER=poojadhameja36@gmail.com
GMAIL_APP_PASSWORD=deyydbermjzmxiky
PORT=3001
NODE_ENV=production
EOF
    echo "✅ .env file created. Please update GMAIL_APP_PASSWORD if needed."
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if PM2 is installed
if command -v pm2 &> /dev/null; then
    echo "✅ PM2 found. Starting server with PM2..."
    pm2 start server.js --name email-server
    pm2 save
    echo "✅ Server started with PM2!"
    echo ""
    echo "Useful commands:"
    echo "  pm2 status          - Check server status"
    echo "  pm2 logs email-server - View logs"
    echo "  pm2 restart email-server - Restart server"
else
    echo "⚠️  PM2 not found. Starting server directly..."
    echo "⚠️  Note: Server will stop when you close terminal"
    echo "⚠️  Install PM2 for auto-restart: npm install -g pm2"
    echo ""
    node server.js
fi
