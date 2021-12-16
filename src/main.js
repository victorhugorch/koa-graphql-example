/**
 * Server instance
 */
import Koa from 'koa'
import cors from 'koa2-cors'
import { ApolloServer } from 'apollo-server-koa'
import logger from 'hoopa-logger'
// GraphQL Definitions
import { appSchema as schema } from './graphql'

const Server = new ApolloServer({ schema })
const koa = new Koa()

const port = process.env.PORT || 4005
const { graphqlPath } = Server

koa.use(cors())
Server.applyMiddleware({ app: koa })

koa.listen({ port }, () =>
  logger.info(`🚀 running at http://localhost:${port}${graphqlPath}`)
)
