#!/bin/bash
#
# Autor: Everton de Vargas Agilar
#
# Objetivo: Faz o build da image debian para os projetos Erlang
#
# Modo de usar: 
#
#    $ ./build.sh
#
#
#
## Software modification history:
#
# Data       |  Quem           |  Mensagem  
# -----------------------------------------------------------------------------------------------------
# 25/05/2018  Everton Agilar     Initial release
#
#
#
#
#
#
########################################################################################################

clear
sudo docker swarm leave --force > /dev/null 2>&1
sudo docker-compose down > /dev/null 2>&1
sudo docker-compose build --force-rm --pull

