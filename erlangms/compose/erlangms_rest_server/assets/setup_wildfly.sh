#!/bin/bash
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#


export JAVA_HOME=/var/opt/jdk/jdk1.8.0_152
export JBOSS_HOME=/var/opt/wildfly
export JBOSS_CLI=$JBOSS_HOME/bin/jboss-cli.sh
export JBOSS_MODE=standalone
export JBOSS_CONFIG=$JBOSS_MODE.xml

wait_for_server() {
  sleep 4
  until `$JBOSS_CLI -c ":read-attribute(name=server-state)" 2> /dev/null | grep -q running`; do
    sleep 1
  done
}

# Criar usuário geral
$JBOSS_HOME/bin/add-user.sh geral 123456 --silent

# Configurações para o barramento
echo JAVA_OPTS=\"\$JAVA_OPTS -XX:+UnlockExperimentalVMOptions -Xms220m -Xmx750m -XX:MinHeapFreeRatio=10 -XX:MaxHeapFreeRatio=70 -XX:CompressedClassSpaceSize=64m -XX:ReservedCodeCacheSize=64m -XX:MaxMetaspaceSize=256m -XX:+UseCGroupMemoryLimitForHeap -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=70 -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark\" >> /var/opt/wildfly/bin/standalone.conf
echo JAVA_OPTS=\"\$JAVA_OPTS -Dems_node=node01 -Dems_bus_url=127.0.0.1:2301 -Dems_user=erlangms -Dems_password=5outLag1\" >> /var/opt/wildfly/bin/standalone.conf
echo JAVA_OPTS=\"\$JAVA_OPTS -Dems_smtp_passwd=erl1523 -Dems_smtp_from=erlangms@unb.br -Dems_smtp_port=587 -Dems_smtp=mail.unb.br -Dems_environment=desenv\" >> /var/opt/wildfly/bin/standalone.conf

echo "=> Iniciando WildFly"
$JBOSS_HOME/bin/$JBOSS_MODE.sh -b 0.0.0.0 -c $JBOSS_CONFIG &

echo "=> Esperando o WildFly iniciar ..."
wait_for_server

echo "=> Parando WildFly"
sh $JBOSS_CLI --connect command=:shutdown


