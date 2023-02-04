# Server Template
###  General Componets.
- Typescript
- Sequelize
- Swagger
- Redis

## Access redis-cli in container:
1. Run
```sh
docker ps
```
2. Find redis pid[example - a205b8802b6f]. Run:
```sh
docker exec -it a205b8802b6f sh
```
3. Run:
```sh
redis-cli
```

#
#

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
> We assume that you are suing Unix based operation system ;)
<a href="server/README.md#section" target="_blank">comment</a>

## Requirements
- [Node.js](https://nodejs.org/) 12+

```sh
$ git clone --branch development git@bitbucket.org:jetsoftpro/connect.git
```

### List
1. Connect to server using ssh
2. Install Docker
3. Init Docker Swarm


### YML

```yml
version: "3.1"
services:
  server:
    image: $IMAGE_NAME_SERVER
    ports:
      - 80:3000
    networks:
      - local
    deploy:
      replicas: 1
    environment:
      TRANSPORT: direct
      NODE_ENV: production
      MONGO_CONNECTION_STRING: $MONGO_CONNECTION_STRING

networks:
  local:
  ```