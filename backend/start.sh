#!/bin/bash

# Backend Server Start Script
# Server par yeh script run karein

echo "🚀 Starting Email Server..."

# .env file check
if [ ! -f "../.env" ]; then
    echo "❌ Error: .env file not found in parent directory"
    echo "Please create .env file with GMAIL_USER and GMAIL_APP_PASSWORD"
    exit 1
fi

# Node check
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed"
    exit 1
fi

# Dependencies check
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start server
echo "✅ Starting server on port 3001..."
node server.js
