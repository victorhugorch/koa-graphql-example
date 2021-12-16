# Koa Graphql Example

Domain based GraphQL API

## Available Scripts

- yarn test: runs unitary tests
- dev: start development mode
- lint: check code styleguide
- lint:format: apply code styleguide rules

## How to install

### Application

```
cp .env.example .env
yarn dev
```

### Database

```
docker run -d -P --name rethink1 rethinkdb
```

Access [dashboard](http://0.0.0.0:55002/) and create database and tables.


## How to run

Just run `yarn dev` to boots up the development mode
