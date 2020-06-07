import { Context } from '@interfaces/apollo/context'
import { getWhereInput } from '../../utils'
import fetch from 'node-fetch'
import { IResearchProjects } from './research-projects'

export const countResearchProjects = async (
  _,
  { query, first, skip, orderBy },
  { apiUrl }: Context
) => {
  let url = getWhereInput(query, apiUrl)

  if (first) url += `&records_per_page=${first}`
  if (skip) url += `&page=${skip}`

  const res = await fetch(url)
  const { paging }: IResearchProjects = await res.json()
  const { total_row } = paging.pages[0]
  console.log(total_row)
  return total_row
}
