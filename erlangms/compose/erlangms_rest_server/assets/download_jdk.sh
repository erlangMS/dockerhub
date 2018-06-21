#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

printf "Install /var/opt/jdk/jdk1.8.0_152..."
cat /assets/jdk.tar.xz.part{00..01} > /assets/jdk.tar.xz 
tar -xJf /assets/jdk.tar.xz -C /var/opt
echo "OK"
