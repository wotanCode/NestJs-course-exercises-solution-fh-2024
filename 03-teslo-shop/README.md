<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Testlo API

## Levantar DB

1. Clonar proyecto
2. `npm install`
3. Clonar archivo `.env.template` y renombrar a `.env`
4. Cambiar las variables de entorno acorde a uso.
5. Levantar base de datos

```sh
docker-compose up -d
```

6. Levantar proyecto:

```sh
 npm run start:dev
```

## Requisitos

- Docker

## Doc

Conectar NestJs con la base de datos
<a href="https://docs.nestjs.com/techniques/database" target="blank">https://docs.nestjs.com/techniques/database</a>

```sh
npm install @nestjs/typeorm typeorm
npm install pg
```
