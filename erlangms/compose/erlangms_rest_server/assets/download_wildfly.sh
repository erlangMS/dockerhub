#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

echo "Download and install wildfly-10.1.0.Final.tar.gz..."
wget -q http://download.jboss.org/wildfly/10.1.0.Final/wildfly-10.1.0.Final.tar.gz -O wildfly.tar.gz
tar -xzf wildfly.tar.gz
mv wildfly-10.1.0.Final /var/opt/wildfly
