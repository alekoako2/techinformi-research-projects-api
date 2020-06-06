export function getWhereInput(query, apiUrl) {
  let url = `${apiUrl}?`
  if (query) {
    const {
      language,
      eTitle,
      eAuthor,
      eWords,
      eOrganization,
      eCodes,
      fromYear,
      toYear,
    } = query

    if (language) url += `&lang=${language}`
    if (eTitle) url += `&eTitle=${eTitle}`
    if (eAuthor) url += `&eAuthor=${eAuthor}`
    if (eWords) url += `&eWords=${eWords}`
    if (eOrganization) url += `&eOrganization=${eOrganization}`
    if (eCodes) url += `&eCodes=${eCodes}`
    if (fromYear) url += `&fromYear=${fromYear}`
    if (toYear) url += `&toYear=${toYear}`
  }
  return encodeURI(url)
}
