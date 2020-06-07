import { Context } from '@interfaces/apollo/context'
import fetch from 'node-fetch'
import { getWhereInput } from '../../utils'
import { IResearchProjects } from './research-projects'

export const researchProject = async (_, { id }, { apiUrl }: Context) => {
  const res = await fetch(apiUrl)
  const { records }: IResearchProjects = await res.json()
  return records[0][0]
}
