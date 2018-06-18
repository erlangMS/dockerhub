#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

echo "Download and install wildfly-10.1.0.Final.tar.gz..."
wget -q http://download.jboss.org/wildfly/10.1.0.Final/wildfly-10.1.0.Final.tar.gz -O wildfly.tar.gz
tar -xzf wildfly.tar.gz
mv wildfly-10.1.0.Final /var/opt/wildfly
rm -f wildfly.tar.gz

echo JAVA_OPTS=\"\$JAVA_OPTS -Dems_node=node01 -Dems_bus_url=https://desenvservicos.unb.br:2301 -Dems_user=erlangms -Dems_password=5outLag1\" >> /var/opt/wildfly/bin/standalone.conf
echo JAVA_OPTS=\"\$JAVA_OPTS -Dems_smtp_passwd=erl1523 -Dems_smtp_from=erlangms@unb.br -Dems_smtp_port=587 -Dems_smtp=mail.unb.br -Dems_environment=desenv\" >> /var/opt/wildfly/bin/standalone.conf

