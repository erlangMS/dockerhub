#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

# Configura os catálogos de serviços do projeto unb_servicos em /var/opt/erlangms
echo "Configurando os catálogos de serviços..."
rm -f /var/opt/erlangms/catalogo.zip
rm -rf /tmp/unb_servicos
ls /var/opt/wildfly/standalone/deployments
WAR_FILE="$(find /var/opt/wildfly/standalone/deployments -name "*.war" | head -1)"
if [ -f $WAR_FILE ]; then
	unzip -q "$WAR_FILE" -d /tmp/unb_servicos
	cd /tmp/unb_servicos/WEB-INF/classes
	zip -qr /var/opt/erlangms/catalogo.zip catalogo/
	rm -rf /tmp/unb_servicos
fi
