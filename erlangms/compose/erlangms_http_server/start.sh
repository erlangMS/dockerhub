#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

clear
echo "Starting erlangms/http_server..."
sudo docker-compose up --force-recreate --remove-orphans
