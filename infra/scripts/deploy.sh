#!/bin/bash
# Deploy from your local machine to EC2 via SSH.
# Usage: ./infra/scripts/deploy.sh
#
# Before first run, set these in your shell or a local .deploy.env file:
#   EC2_HOST  — your EC2 public IP or domain   e.g. 13.233.45.67
#   EC2_USER  — SSH user                        e.g. ec2-user OR ubuntu
#   EC2_KEY   — path to your .pem key file      e.g. ~/.ssh/liznat-key.pem

set -e

# Load deploy config if present
[ -f "$(dirname "$0")/../../.deploy.env" ] && source "$(dirname "$0")/../../.deploy.env"

EC2_HOST="${EC2_HOST:?Set EC2_HOST in your environment or .deploy.env}"
EC2_USER="${EC2_USER:-ec2-user}"
EC2_KEY="${EC2_KEY:?Set EC2_KEY (path to .pem) in your environment or .deploy.env}"
APP_DIR="${APP_DIR:-/opt/liznat-labs}"

echo "==> Deploying to $EC2_USER@$EC2_HOST..."

ssh -i "$EC2_KEY" -o StrictHostKeyChecking=no "$EC2_USER@$EC2_HOST" \
    "cd $APP_DIR && bash infra/scripts/start-prod.sh"

echo ""
echo "Deploy complete. Visit http://$EC2_HOST"
