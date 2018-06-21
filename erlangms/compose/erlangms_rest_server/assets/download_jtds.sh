#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

printf "Install /var/opt/wildfly/modules/system/layers/base/com/jtds..."
tar -xJf /assets/jtds.tar.xz -C /var/opt/wildfly/modules/system/layers/base/com
echo "OK"
