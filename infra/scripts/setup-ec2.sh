#!/bin/bash
# Run this ONCE on a fresh EC2 Amazon Linux 2023 / Ubuntu instance.
# chmod +x setup-ec2.sh && sudo ./setup-ec2.sh

set -e

echo "==> Updating system packages..."
if command -v dnf &> /dev/null; then
    dnf update -y
    dnf install -y docker git
else
    apt-get update -y
    apt-get install -y docker.io docker-compose-plugin git
fi

echo "==> Starting Docker..."
systemctl enable docker
systemctl start docker
usermod -aG docker ec2-user 2>/dev/null || usermod -aG docker ubuntu 2>/dev/null || true

echo "==> Installing Docker Compose..."
COMPOSE_VERSION="2.27.1"
curl -SL "https://github.com/docker/compose/releases/download/v${COMPOSE_VERSION}/docker-compose-linux-x86_64" \
     -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

echo "==> Creating app directory..."
mkdir -p /opt/liznat-labs
chown ec2-user:ec2-user /opt/liznat-labs 2>/dev/null || \
chown ubuntu:ubuntu    /opt/liznat-labs 2>/dev/null || true

echo ""
echo "======================================================="
echo "  EC2 setup complete."
echo "  Next steps:"
echo "  1. Clone your repo:  git clone <your-repo> /opt/liznat-labs"
echo "  2. Create .env file: nano /opt/liznat-labs/.env.local"
echo "     Add:  RESEND_API_KEY=re_..."
echo "           CONTACT_TO=liznatlabs@gmail.com"
echo "  3. Build & run:      cd /opt/liznat-labs && ./infra/scripts/start-prod.sh"
echo "======================================================="
