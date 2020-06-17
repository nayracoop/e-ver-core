#!/bin/bash
source /home/nayracoop/.nvm/nvm.sh
nvm use v8.11.3
pm2 restart ecosystem.config.yml --only $1
