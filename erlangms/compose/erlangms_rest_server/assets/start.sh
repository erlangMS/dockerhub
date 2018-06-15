#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

CURRENT_DIR="$PWD"
JAVA_HOME=/var/opt/jdk/jdk1.8.0_152
JBOSS_HOME=/var/opt/wildfly
JBOSS_CLI=$JBOSS_HOME/bin/jboss-cli.sh
JBOSS_CONFIG=standalone.xml

# Start epmd
echo "Iniciando o Erlang Port Daemon..."
epmd -daemon


# Instala os catálogos de serviços do projeto unb_servicos em /var/opt/erlangms
echo "Instalando os catálogos do unb_servicos..."
rm -f /var/opt/erlangms/catalogo.zip
rm -rf /tmp/unb_servicos
unzip -q /var/opt/wildfly/standalone/deployments/unb_servicos-1.0.45-RELEASE.war -d /tmp/unb_servicos
cd /tmp/unb_servicos/WEB-INF/classes
zip -qr /var/opt/erlangms/catalogo.zip catalogo/
rm -rf /tmp/unb_servicos


# Start wildfly
echo "Iniciando WildFly..."
$JBOSS_HOME/bin/standalone.sh -b 0.0.0.0 -c $JBOSS_CONFIG &
sleep 4


# Start erlangms
cd $CURRENT_DIR
deps=$(ls -d deps/*/ebin)

echo "=> Iniciando ErlangMS server..."
erl -pa $CURRENT_DIR/ebin $deps \
	-sname emsbus -setcookie erlangms \
	-eval "ems_bus:start()" \
	-boot start_sasl \
	-config $CURRENT_DIR/priv/conf/elog
