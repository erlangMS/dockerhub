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
echo "Start Erlang Port Daemon..."
epmd -daemon

# Start wildfly
echo "Start WildFly in background..."
$JBOSS_HOME/bin/standalone.sh -b 0.0.0.0 -c $JBOSS_CONFIG > $JBOSS_HOME/standalone/log/jboss-console.log 2>&1 &

echo "Waiting for the wildfly to be ready..."
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

echo "Start ErlangMS REST server em background..."
erl -pa $CURRENT_DIR/ebin $deps \
	-sname emsbus -setcookie erlangms \
	-eval "ems_bus:start()" \
	-boot start_sasl \
	-config $CURRENT_DIR/priv/conf/elog
	
