#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

# Baixa e instala o wildfly
if [ ! -f /assets/wildfly.tar.gz ]; then
	printf "Download wildfly-10.1.0.Final.tar.gz..."
	wget -q http://download.jboss.org/wildfly/10.1.0.Final/wildfly-10.1.0.Final.tar.gz -O /assets/wildfly.tar.gz
	echo "OK"
else
	echo "Download wildfly-10.1.0.Final.tar.gz...OK"
fi
printf "Install Wildfly-10.1.0.Final..."
tar -xzf /assets/wildfly.tar.gz
mv wildfly-10.1.0.Final /var/opt/wildfly
rm -f /assets/wildfly.tar.gz
echo "OK"
