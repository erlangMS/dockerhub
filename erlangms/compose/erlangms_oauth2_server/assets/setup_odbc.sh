#!/bin/sh
#
# author Everton de Vargas Agilar <<evertonagilar@gmail.com>>
#

ln -sf /var/opt/erlangms/.erlangms/odbc.ini /var/opt/erlangms/.odbc.ini
ln -sf /var/opt/erlangms/.erlangms/odbc.ini /root/.odbc.ini

ln -sf /var/opt/erlangms/.erlangms/odbcinst.ini /var/opt/erlangms/.odbcinst.ini
ln -sf /var/opt/erlangms/.erlangms/odbcinst.ini /root/.odbcinst.ini

cp /var/opt/erlangms/.erlangms/odbcinst.ini /etc/odbcinst.ini
