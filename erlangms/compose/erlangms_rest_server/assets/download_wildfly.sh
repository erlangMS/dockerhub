#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

printf "Install /var/opt/Wildfly-10.1.0.Final..."
cat /assets/wildfly-10.1.0.Final.tar.xz.part{00..01} > /assets/wildfly-10.1.0.Final.tar.xz
tar -xJf /assets/wildfly-10.1.0.Final.tar.xz -C /var/opt
ln -s /var/opt/wildfly-10.1.0.Final /var/opt/wildfly
echo "OK"
