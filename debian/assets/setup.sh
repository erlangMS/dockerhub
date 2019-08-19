#/bin/bash

export ENV=~/.bashrc
ln -sf /bin/bash /bin/sh

# Some useful software for administration
apt-get install -q -y --no-install-recommends apt-utils curl wget zip unzip net-tools dos2unix


# Easy administration with vim, tmux
apt-get install -q -y --no-install-recommends tmux git-core vim -y && \
echo "export LS_OPTIONS='--color=auto'" >> ~/.bashrc && \
echo "alias tmux='tmux -u'" >> ~/.bashrc && \
echo "alias ls='ls $LS_OPTIONS'" >> ~/.bashrc && \
echo "alias ll='ls $LS_OPTIONS -l'" >> ~/.bashrc && \
echo "alias l='ls $LS_OPTIONS -lA'" >> ~/.bashrc && \
echo 'set -g default-terminal "screen-256color"' >> ~/.tmux.conf
#cat >> ~/.bashrc <<EOF
# Run tmux on startup
#if command -v tmux>/dev/null; then
#        if [ ! -z "\$PS1" ]; then # unless shell not loaded interactively, run tmux
#                [[ ! \$TERM =~ screen ]] && [ -z "\$TMUX" ] && tmux
#        fi
#fi
#EOF


# Some important libraries for ErlangMS
apt-get install -q -y --no-install-recommends unixodbc \
					  odbcinst1debian2 \
					  odbcinst \
					  libcppdb-sqlite3-0 \
					  libodbc1 \
					  libiodbc2 \
					  libcppdb-odbc0 \
					  libltdl7 \
					  libcppdb0 \
					  ldap-utils \
					  odbc-postgresql \
					  apt-transport-https
					  #freetds-common \
					  #tdsodbc \
					  
curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -

curl https://packages.microsoft.com/config/debian/9/prod.list > /etc/apt/sources.list.d/mssql-release.list

apt-get update

ACCEPT_EULA=Y apt-get install msodbcsql17=17.3.1.1-1

# echo "Register FreeTDS SQL-server driver in /etc/odbcinst.ini..."
# echo "[FreeTDS]" >> /etc/odbcinst.ini 
# echo "Description=FreeTDS Driver" >> /etc/odbcinst.ini 
# echo "Driver=/usr/lib/x86_64-linux-gnu/odbc/libtdsodbc.so" >> /etc/odbcinst.ini 
# echo " " >> /etc/odbcinst.ini 

echo "Register Postgresql driver in /etc/odbcinst.ini..."
echo "[PostgreSQL]" >> /etc/odbcinst.ini 
echo "Description=ODBC for PostgreSQL" >> /etc/odbcinst.ini 
echo "Driver=/usr/lib/x86_64-linux-gnu/odbc/psqlodbcw.so" >> /etc/odbcinst.ini 
echo "Driver64=/usr/lib/x86_64-linux-gnu/odbc/psqlodbcw.so" >> /etc/odbcinst.ini 
echo " " >> /etc/odbcinst.ini 

echo "Register ODBC Driver 17 for SQL Server driver in /etc/odbcinst.ini..."
echo "[MSODBCSQL]" >> /etc/odbcinst.ini 
echo "Description=Microsoft ODBC Driver 17 for SQL Server" >> /etc/odbcinst.ini 
echo "Driver=/opt/microsoft/msodbcsql17/lib64/libmsodbcsql-17.3.so.1.1" >> /etc/odbcinst.ini 
echo " " >> /etc/odbcinst.ini 

echo "Tunning fs.file-max. At least it should be 1000000..."
FILE_MAX_DEF=1000000
FILE_MAX=$(cat /proc/sys/fs/file-max)
if [ $FILE_MAX -lt $FILE_MAX_DEF ]; then
	# Ajusta ou adiciona o valor para fs.file-max
	if grep -q 'fs.file-max' /etc/sysctl.conf ; then
		sed -ri "s/^fs.file-max=[0-9]{1,10}$/fs.file-max=$FILE_MAX_DEF/" /etc/sysctl.conf
	else
		echo "" >> /etc/sysctl.conf
		echo "# File descriptors limit" >> /etc/sysctl.conf
		echo "fs.file-max=$FILE_MAX_DEF" >> /etc/sysctl.conf
	fi
	sysctl -p > /dev/null 2>&1
fi


# Clean
apt-get clean && apt-get --purge -y autoremove
