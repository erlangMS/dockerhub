echo off
cls
docker swarm leave --force > /dev/null 2>&1
docker-compose down > /dev/null 2>&1
docker-compose build --force-rm --pull
docker-compose up --force-recreate --remove-orphans
