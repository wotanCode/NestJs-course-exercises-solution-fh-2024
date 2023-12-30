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

7. Ejecutar Seed. Get method

```sh
http://localhost:3000/api/seed
```

## Requisitos

- Docker

## Doc

Conectar NestJs con la base de datos
<a href="https://docs.nestjs.com/techniques/database" target="blank">https://docs.nestjs.com/techniques/database</a>

File Upload
<a href="https://docs.nestjs.com/techniques/file-upload" target="blank">https://docs.nestjs.com/techniques/database</a>

Passaport
<a href="https://docs.nestjs.com/recipes/passport" target="blank">https://docs.nestjs.com/recipes/passport</a>

jwt functionality
<a href="https://docs.nestjs.com/recipes/passport#jwt-functionality" target="blank">https://docs.nestjs.com/recipes/passport#jwt-functionality</a>

Decorator composition
<a href="https://docs.nestjs.com/custom-decorators#decorator-composition" target="blank">https://docs.nestjs.com/custom-decorators#decorator-composition</a>
