#!/bin/bash

# The following paths point to /var/opt/erlangms, which is the current directory of ErlangMS
ln -s /root/.bashrc ~/.bashrc
ln -s /root/.profile ~/.profile
ln -s /root/.erlangms ~/.erlangms
ln -s /root/.odbc.ini ~/.odbc.ini
ln -s /root/.hosts.erlang ~/.hosts.erlang

# Limpar a pasta do ems-bus antes de instalar
rm -rf /assets/ems-bus/rel
rm -rf /assets/ems-but/.git
rm -rf /assets/ems-but/test
rm -rf /assets/ems-but/contrib
rm -rf /assets/ems-but/doc
rm -rf /assets/ems-but/priv/db
rm -rf /assets/ems-but/priv/log
rm -rf /assets/ems-but/priv/archive_log
rm -f /assets/ems-bus/*.dump

# ErlangMs installation
mv  /assets/ems-bus $HOME
cd $HOME/ems-bus
echo "Fazendo build do ems-bus com rebar..."
./build.sh --skip-deps

# Configurações de log
ln -s /var/opt/erlangms/ems-bus/priv/log /var/log/ems-bus


# Clean
apt-get clean && apt-get --purge -y autoremove


