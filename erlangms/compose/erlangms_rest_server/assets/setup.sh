#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#


JAVA_HOME=/var/opt/jdk/jdk1.8.0_152
JBOSS_HOME=/var/opt/wildfly
JBOSS_CLI=$JBOSS_HOME/bin/jboss-cli.sh
JBOSS_MODE=standalone
JBOSS_CONFIG=$JBOSS_MODE.xml

wait_for_server() {
  until `$JBOSS_CLI -c ":read-attribute(name=server-state)" 2> /dev/null | grep -q running`; do
    sleep 1
  done
}

$JBOSS_HOME/bin/add-user.sh geral 123456 --silent

echo "=> Iniciando WildFly"
$JBOSS_HOME/bin/$JBOSS_MODE.sh -b 0.0.0.0 -c $JBOSS_CONFIG &

echo "=> Esperando o servidor iniciar ..."
wait_for_server

echo "=> Parando WildFly"
sh $JBOSS_CLI --connect command=:shutdown


