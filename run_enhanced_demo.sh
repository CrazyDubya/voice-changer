#!/bin/bash

# Enhanced Voice Changer Demo Launcher
# This script sets up and runs the enhanced demo

echo "🎤 Enhanced Voice Changer Demo Launcher 🎤"
echo "==========================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js to continue."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "client/demo/package.json" ]; then
    echo "❌ Please run this script from the project root directory."
    exit 1
fi

echo "📦 Installing dependencies..."
cd client/demo
npm install

echo "🏗️ Building the enhanced demo..."
npm run build:dev

echo "🚀 Starting development server..."
echo "📖 The demo will be available at: http://localhost:8080"
echo "🌟 Features included:"
echo "   • Real-time voice conversion"
echo "   • Multiple AI models (RVC, Beatrice v2, MMVC, etc.)"
echo "   • Audio visualization"
echo "   • Voice effects controls"
echo "   • Performance monitoring"
echo "   • Multilingual interface (10+ languages)"
echo "   • Interactive feature tour"
echo "   • Comprehensive documentation"
echo ""
echo "🎯 Getting started:"
echo "   1. Grant microphone permissions when prompted"
echo "   2. Take the feature tour or click the help button"
echo "   3. Choose an AI model from the showcase"
echo "   4. Start recording and experience real-time voice conversion!"
echo ""
echo "Press Ctrl+C to stop the server"
echo "===========================================" 

npm start