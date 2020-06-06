import { Context } from '@interfaces/apollo/context'
import fetch from 'node-fetch'

export const researchProject = (_, { id }, { apiUrl }: Context) => fetch(apiUrl)
