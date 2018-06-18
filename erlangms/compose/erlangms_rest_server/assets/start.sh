#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

export JAVA_HOME=/var/opt/jdk/jdk1.8.0_152
export JBOSS_HOME=/var/opt/wildfly
export JBOSS_CLI=$JBOSS_HOME/bin/jboss-cli.sh
export JBOSS_CONFIG=standalone.xml
export LAUNCH_JBOSS_IN_BACKGROUND=1

CURRENT_DIR="$PWD"

# Start epmd
echo "Iniciando o Erlang Port Daemon..."
epmd -daemon

# Start wildfly
echo "Iniciando WildFly em background..."
$JBOSS_HOME/bin/standalone.sh -b 0.0.0.0 -c $JBOSS_CONFIG > $JBOSS_HOME/standalone/log/jboss-console.log 2>&1 &

# Instala os catálogos de serviços do projeto unb_servicos em /var/opt/erlangms
echo "Instalando os catálogos unb_servicos..."
rm -f /var/opt/erlangms/catalogo.zip
rm -rf /tmp/unb_servicos
unzip -q /var/opt/wildfly/standalone/deployments/unb_servicos-1.0.45-RELEASE.war -d /tmp/unb_servicos
cd /tmp/unb_servicos/WEB-INF/classes
zip -qr /var/opt/erlangms/catalogo.zip catalogo/
rm -rf /tmp/unb_servicos

sleep 5
while true; do
	if ! grep "started in" $JBOSS_HOME/standalone/log/jboss-console.log > /dev/null 2>&1 ; then 
		sleep 2
	else 
		break
	fi
done

# Start erlangms
cd $CURRENT_DIR
deps=$(ls -d deps/*/ebin)

echo "Iniciando ErlangMS server em background..."
erl -pa $CURRENT_DIR/ebin $deps \
	-sname emsbus -setcookie erlangms \
	-eval "ems_bus:start()" \
	-boot start_sasl \
	-config $CURRENT_DIR/priv/conf/elog
	
