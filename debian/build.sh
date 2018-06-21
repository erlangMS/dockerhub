#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

clear
echo "Starting build erlangms/debian..."
sudo docker swarm leave --force > /dev/null 2>&1
sudo docker-compose down > /dev/null 2>&1
sudo docker-compose build --force-rm --pull

