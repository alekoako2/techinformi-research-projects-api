import { Context } from '@interfaces/apollo/context'
import { getWhereInput } from '../../utils'
import fetch from 'node-fetch'

interface IResearchProject {
  id: string
  eTitle: string
  eAuthor: string
  eWords: string
  eOrganization: string
  eCodes: string
  fromYear: string
  toYear: string
}

export interface IResearchProjects {
  records: IResearchProject[]
  paging: {
    first: string
    pages: { total_row: number }[]
    last: string
  }
}
export const researchProjects = async (
  _,
  { query, first, skip, orderBy },
  { apiUrl }: Context
) => {
  let url = getWhereInput(query, apiUrl)

  if (first) url += `&records_per_page=${first}`
  if (skip) url += `&page=${skip}`

  const res = await fetch(url)
  const { records }: IResearchProjects = await res.json()
  return records[0]
}
