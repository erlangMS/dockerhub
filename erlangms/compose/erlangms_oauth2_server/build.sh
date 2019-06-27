#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

clear
sudo docker swarm leave --force > /dev/null 2>&1
sudo docker-compose down > /dev/null 2>&1
#sudo docker-compose build --force-rm --no-cache --pull
sudo docker-compose build --force-rm --no-cache

