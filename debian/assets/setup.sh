#/bin/bash


# Some useful software for administration
apt-get install -q -y --no-install-recommends apt-utils curl wget zip unzip net-tools


# Easy administration with vim, nano e tmux
apt-get install -q -y --no-install-recommends tmux git vim nano -y && \
echo "export LS_OPTIONS='--color=auto'" >> ~/.bashrc && \
echo "alias tmux='tmux -u'" >> ~/.bashrc && \
echo "alias ls='ls $LS_OPTIONS'" >> ~/.bashrc && \
echo "alias ll='ls $LS_OPTIONS -l'" >> ~/.bashrc && \
echo "alias l='ls $LS_OPTIONS -lA'" >> ~/.bashrc && \
echo 'set -g default-terminal "screen-256color"' >> ~/.tmux.conf
cat >> ~/.bashrc <<EOF
# Run tmux on startup
if command -v tmux>/dev/null; then
        if [ ! -z "\$PS1" ]; then # unless shell not loaded interactively, run tmux
                [[ ! \$TERM =~ screen ]] && [ -z "\$TMUX" ] && tmux
        fi
fi
EOF


# Some important libraries for ErlangMS
apt-get install -q -y --no-install-recommends unixodbc \
					  tdsodbc \
					  freetds-common \
					  odbcinst1debian2 \
					  odbcinst \
					  libcppdb-sqlite3-0 \
					  libodbc1 \
					  libiodbc2 \
					  libcppdb-odbc0 \
					  libltdl7 \
					  libcppdb0 \
					  ldap-utils


echo "Register FreeTDS SQL-server driver in /etc/odbcinst.ini..."
echo "[FreeTDS]" >> /etc/odbcinst.ini 
echo "Description=FreeTDS Driver" >> /etc/odbcinst.ini 
echo "Driver=/usr/lib/x86_64-linux-gnu/odbc/libtdsodbc.so" >> /etc/odbcinst.ini 
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


