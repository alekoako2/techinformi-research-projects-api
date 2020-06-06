import { Context } from '@interfaces/apollo/context'
import { getWhereInput } from '../../utils'
import fetch from 'node-fetch'

export const countResearchProjects = (_, { query }, { apiUrl }: Context) => 10
