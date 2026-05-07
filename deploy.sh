#!/bin/bash

# Cirronyx Website Deployment Script
# Deploys to Google Cloud Storage bucket

# Configuration
BUCKET_NAME="www.cirronyx.com"
BUILD_DIR="build"
GSUTIL="/home/admin1/google-cloud-sdk/bin/gsutil"

echo "🚀 Starting Cirronyx website deployment..."
echo ""

# Check if build directory exists
if [ ! -d "$BUILD_DIR" ]; then
    echo "❌ Error: Build directory not found. Run 'npm run build' first."
    exit 1
fi

echo "📦 Uploading files to gs://$BUCKET_NAME/..."
$GSUTIL -m rsync -r -d $BUILD_DIR/ gs://$BUCKET_NAME/

if [ $? -ne 0 ]; then
    echo "❌ Upload failed"
    exit 1
fi

echo ""
echo "⚙️  Setting cache control headers..."
# Set cache control for static assets
$GSUTIL -m setmeta -h "Cache-Control:public, max-age=31536000" \
    gs://$BUCKET_NAME/static/**

# Set cache control for index.html (no cache)
$GSUTIL setmeta -h "Cache-Control:no-cache, no-store, must-revalidate" \
    gs://$BUCKET_NAME/index.html

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your website is live at: https://www.cirronyx.com"
echo ""
