#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

clear
echo "Starting erlangms/oauth2_server..."
sudo docker-compose up --force-recreate --remove-orphans
