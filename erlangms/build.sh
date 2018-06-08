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

VERSION=2.0.1
IMAGE=erlangms

echo "Build $IMAGE:$VERSION..."


ID_IMAGE=$(sudo docker images $IMAGE | awk '{print $3}' | uniq | sed '1d')
if [ ! -z "$ID_IMAGE" ]; then
	sudo docker stop $ID_IMAGE > /dev/null 2>&1
	sudo docker rmi -f $ID_IMAGE > /dev/null 2>&1
fi

sudo docker build --no-cache -t $IMAGE:$VERSION $(dirname $0)
#sudo docker build -t $IMAGE:$VERSION $(dirname $0)

ID=$(sudo docker images | grep "$IMAGE" | head -n 1 | awk '{print $3}')

sudo docker tag "$ID" $IMAGE:latest
sudo docker tag "$ID" $IMAGE:$VERSION
sudo docker tag "$ID" erlangms/erlangms
sudo docker tag "$ID" docker.io/erlangms/erlangms
sudo docker push docker.io/erlangms/erlangms
