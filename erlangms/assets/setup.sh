#/bin/bash

# The following paths point to /var/opt/erlangms, which is the current directory of ErlangMS
ln -s /root/.bashrc ~/.bashrc
ln -s /root/.profile ~/.profile
ln -s /root/.erlangms ~/.erlangms
ln -s /root/.odbc.ini ~/.odbc.ini
ln -s /root/.hosts.erlang ~/.hosts.erlang

# ErlangMs installation
mv  /assets/ems-bus $HOME
cd $HOME/ems-bus
#git clone -b odbc_db2_driver --single-branch  https://github.com/erlangms/ems-bus ems-bus
echo "Fazendo build do ems-bus..."
./build.sh --skip-deps

# Configurações de log
ln -s /var/opt/erlangms/ems-bus/priv/log /var/log/ems-bus

# Configurações para o cliente SSH
echo 'StrictHostKeyChecking no' >> /etc/ssh/ssh_config

# Clean
apt-get clean && apt-get --purge -y autoremove


