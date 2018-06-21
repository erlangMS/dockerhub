#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

clear
echo "Starting erlangms/debian..."
sudo docker run --rm --hostname debian -it erlangms/debian
