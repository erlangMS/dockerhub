#/bin/bash

# The following paths point to /var/opt/erlangms, which is the current directory of ErlangMS
ln -s /root/.bashrc ~/.bashrc && \
ln -s /root/.profile ~/.profile && \
ln -s /root/.erlangms ~/.erlangms && \
ln -s /root/.odbc.ini ~/.odbc.ini
    

# ErlangMs installation
cd $HOME
git clone http://github.com/erlangms/ems-bus ems-bus
cd ems-bus
git checkout v1.0.25.ldap
./build.sh


# Clean
apt-get clean && apt-get --purge -y autoremove


