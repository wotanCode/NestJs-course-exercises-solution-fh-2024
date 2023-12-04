<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Ejecutar en desarrollo

1. Clonar repositorio
2. Ejecutar

```sh
npm install
```

3. Tener Nest CLI Instalado

```sh
npm i g @nestjs/cli
```

4. Levantar la base de datos

```sh
docker-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar la copia a **.env**

6. Llenar las variables de entorno definidas en `.env`

7. Ejecutar la apicación de desarrollo con el comando:

```sh
npm run start:dev
```

8. Reconstruir la base de datos con la semilla.

```sh
http://localhost:3000/api/seed
```

## Stack usado

- MongoDB (v5)
- Nest
- Docker
