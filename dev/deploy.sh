#!/usr/bin/env bash
set -e

# ----- CONFIG -----
APP_NAME="hipfoam.com"
APP_DIR="$HOME/hipfoam/hipfoam-website"
WWW_ROOT="/var/www"
LIVE_LINK="$WWW_ROOT/$APP_NAME"
KEEP_LAST=3

# Timestamp for this deploy
TIMESTAMP=$(date +%Y%m%d%H%M%S)
NEW_DIR="$WWW_ROOT/${APP_NAME}_$TIMESTAMP"

echo "🚀 Deploy started..."

# ----- 1️⃣ Pull latest code -----
cd "$APP_DIR"
echo "📥 Pulling latest code..."
git pull origin main

# ----- 2️⃣ Install deps & build -----
echo "📦 Installing dependencies..."
npm ci
echo "🏗 Building Next.js..."
npm run build

# ----- 3️⃣ Move build to new versioned folder -----
echo "🧹 Moving build to $NEW_DIR"
mv out "$NEW_DIR"

# ----- 4️⃣ Swap symlink atomically -----
echo "🔁 Swapping live symlink..."
ln -sfn "$NEW_DIR" "$LIVE_LINK"

# ----- 5️⃣ Reload Nginx -----
echo "🔄 Reloading Nginx..."
sudo systemctl reload nginx

# ----- 6️⃣ Cleanup old builds -----
echo "🧽 Cleaning old builds..."
ls -1dt $WWW_ROOT/${APP_NAME}_* | tail -n +$((KEEP_LAST+1)) | xargs -r rm -rf

echo "✅ Deploy finished successfully!"

# Find previous version
# ls -1dt /var/www/hipfoam.com_* 
# e.g., hipfoam.com_20251219120000
# ln -sfn /var/www/hipfoam.com_20251219120000 /var/www/hipfoam.com
# sudo systemctl reload nginx