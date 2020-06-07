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
    researchProject(id: String, language: LanguageCode): ResearchProject!
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
    toYear: String
    eWords: String
    final: String
    title: String
    author: String
    organization: String
    fromYear: String
    inp_tarigi: String
    reg_tarigi: String
    reg_numb: String
    geo_dasaxeleba: String
    eng_dasaxeleba: String
    kvleva: String
    kvlev_mimart: String
    kvlev_mimart_kodi: String
    kvlev_mimart_kodi2: String
    kvlev_mimart_kodi3: String
    geo_key: String
    eng_key: String
    safudz: String
    referati: String
    anotaciaeng: String
    start_samushao_tarigi: String
    end_samushao_tarigi: String
    biujeti: String
    org_dasaxeleba: String
    org_short_dasaxeleba: String
    org_kodi: String
    org_ufrosi: String
    org_qalaqi: String
    org_misamarti: String
    org_indexi: String
    org_telefoni: String
    org_webi: String
    tan_dasaxeleba: String
    tan_qvekana_qalaqi: String
    tan_telefoni: String
    tan_email: String
    tan_webi: String
    xel_gvari_saxeli: String
    xel_tanamdeboba: String
    xel_xarisxi: String
    xel_bin_telefoni: String
    xel_sam_telefoni: String
    xel_email: String
    shemsruleblebis: String
    financing: String
    shenishvna: String
    PINCODE: String
    username: String
    oecd1: String
    oecd2: String
    oecd3: String
    org_dasaxeleba_eng: String
    org_short_dasaxeleba_eng: String
    org_email: String
    xel_gvari_saxeli_eng: String
  }
`
