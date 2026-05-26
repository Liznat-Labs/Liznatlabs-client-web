#!/bin/bash
# Run on EC2 to build and start the production containers.
# Usage: cd /opt/liznat-labs && ./scripts/start-prod.sh

set -e

echo "==> Pulling latest code..."
git pull origin main

echo "==> Building Docker image..."
docker build -t liznat-labs:latest .

echo "==> Stopping old containers (if any)..."
docker-compose -f docker-compose.prod.yml down || true

echo "==> Starting production stack..."
docker-compose -f docker-compose.prod.yml up -d

echo ""
echo "==> Running containers:"
docker-compose -f docker-compose.prod.yml ps

echo ""
echo "Site is live on port 80."
