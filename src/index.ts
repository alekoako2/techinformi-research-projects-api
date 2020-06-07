import { ApolloServer } from 'apollo-server-express'
import { buildFederatedSchema } from '@apollo/federation'

import { ResearchProjectsModule } from './research-projects'
import express from 'express'

const apiUrl = `http://techinformi.ge/api/product/read_paging.php`

const server = new ApolloServer({
  schema: buildFederatedSchema([ResearchProjectsModule]),
  context: (request) => ({
    ...request,
    apiUrl,
  }),
})

const app = express()

server.applyMiddleware({
  app,
  cors: true,
  path: '/graphql',
})

app.listen({ port: 4002 }, () =>
  console.log(
    `🚀 Research Projects Server ready at http://localhost:4002${server.graphqlPath}`
  )
)
