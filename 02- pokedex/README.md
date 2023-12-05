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

## Production Build

1. Crear el archivo `.env.prod`
2. Llenar las variables de entorno de prod.
3. Construir la nueva imagen imagen.

```sh
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

<hr/>
<h3>¡Sigueme en mis redes!</h3>

[![GitHub Followers](https://img.shields.io/github/followers/wotanCode?style=social)](https://github.com/wotanCode)
[![GitHub Followers](https://img.shields.io/github/stars/wotanCode?style=social)](https://github.com/wotanCode)
[![Youtube](https://img.shields.io/badge/Youtube-FF0000?style=for-the-badge&logo=Youtube&logoColor=white&labelColor=101010)](https://www.youtube.com/channel/UCwISu2hFg7EpOIZ8aV7iS6g?sub_confirmation=1)
[![Linkedin](https://img.shields.io/badge/Linkedin-00d8fd?&logo=linkedin&logoColor=white&labelColor=101010)](https://www.linkedin.com/in/pedro-yanez/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?&logo=instagram&logoColor=white&labelColor=101010)](https://www.instagram.com/pedroelhumano/?theme=dark)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?&logo=twitter&logoColor=white&labelColor=101010)](https://www.twitter.com/pedroelhumano)
