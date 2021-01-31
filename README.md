# Ratings Service API

## Description
This application is responsible for managing store data in flutterwave

## Running the application
This application depends on a couple of services to run fully. The command below would build and start all dependent containers and take you into the bash temrinal of the main (`rule-validation`) container:

$ ./bin/start_disposable.sh

## Installation

```bash
$ yarn install
```

## Starting this application
you will need to change the server listening part of the application to use:
```
app.listen(8000, '0.0.0.0')
```
For local development, the magento database details has to be passed into the .env file.

```
MAGENTO_DATABASE_USERNAME=
MAGENTO_DATABASE_HOST=
MAGENTO_DATABASE_PASSWORD=
MAGENTO_DATABASE_NAME=
```
Note: Don't forget to remove the details when you are done.

If you need to alter the database, then you will need to change the synchronization setting to true in the ormconfig.js file.
```
"synchronize": true,
```
For managing your database during development use [Docker Adminer](https://beta.docs.docker.com/samples/library/adminer/). It is a web client editor that helps in managing the database. It is already part of the docker services that has been setup in the application.

### How to Use Adminer
When you run this docker command:

```
docker ps
```
* look for the adminer IP address and port.
* run the IP address in your browser to get access to the adminer dashboard.
* you will need to login to get access to the database.
* you can check for the login details in the .env file or in the docker-compose.yml file

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
## Technology used
[Fastify] (https://www.fastify.io/docs/)

[NestJS] (https://docs.nestjs.com/)
[TypeORM] (https://typeorm.io/#/)

## Test

### Framework Used
* [Jest] (https://jestjs.io/docs/en/getting-started)

You can run the test by using the following command:

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
