import { Context } from '@interfaces/apollo/context'
import { getWhereInput } from '../../utils'
import { IResearchProjects } from './research-projects'
import axios from 'axios'

export const countResearchProjects = async (
  _,
  { query, first, skip, orderBy },
  { apiUrl }: Context
) => {
  let url = getWhereInput(query, apiUrl)

  if (first) url += `&records_per_page=${first}`
  if (skip) url += `&page=${skip}`

  const res = await axios.get(url)
  const { paging }: IResearchProjects = await res.data
  const { total_row } = paging.pages[0]
  return total_row
}
