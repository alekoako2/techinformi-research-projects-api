import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  extend type Query {
    countResearchProjects(query: ResearchProjectQueryInput): Int
    researchProjects(
      language: LanguageCode
      query: ResearchProjectQueryInput
      first: Int
      skip: Int
      orderBy: String
    ): [ResearchProject!]!
    researchProject(id: ID, language: LanguageCode): ResearchProject!
  }

  enum LanguageCode {
    KA
    EN
    FR
    DE
    RU
    ES
    IT
  }

  input ResearchProjectQueryInput {
    eTitle: String
    eAuthor: String
    eWords: String
    eOrganization: String
    eCodes: String
    fromYear: String
    toYear: String
  }

  type ResearchProject {
    id: String
    eTitle: String
    eAuthor: String
    eWords: String
    eOrganization: String
    eCodes: String
    fromYear: String
    toYear: String
  }
`
