#/bin/bash

# The following paths point to /var/opt/erlangms, which is the current directory of ErlangMS
ln -s /root/.bashrc ~/.bashrc
ln -s /root/.profile ~/.profile
ln -s /root/.erlangms ~/.erlangms
ln -s /root/.odbc.ini ~/.odbc.ini
ln -s /root/.hosts.erlang ~/.hosts.erlang

# ErlangMs installation
cd $HOME
git clone http://github.com/erlangms/ems-bus ems-bus
cd ems-bus
git checkout v2.0.1
./build.sh

# Configurações de log
mkdir -p /var/log/ems-bus
ln -s /var/log/ems-bus /var/opt/erlangms/ems-bus/priv/log

# Clean
apt-get clean && apt-get --purge -y autoremove


