import { Context } from '@interfaces/apollo/context'
import { IResearchProjects } from './research-projects'
import axios from 'axios'

export const researchProject = async (_, { id }, { apiUrl }: Context) => {
  const res = await axios.get(apiUrl)
  const { records }: IResearchProjects = await res.data
  return records[0][0]
}
