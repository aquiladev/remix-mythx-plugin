export const isFatal = (fatal, severity) => fatal || severity === 2

const getUniqueMessages = messages => {
  const jsonValues = messages.map(m => JSON.stringify(m))
  const uniuqeValues = jsonValues.reduce((accum, curr) => {
    if (accum.indexOf(curr) === -1) {
      accum.push(curr)
    }
    return accum
  }, [])

  return uniuqeValues.map(v => JSON.parse(v))
}

const calculateErrors = messages =>
  messages.reduce((acc, { fatal, severity }) => isFatal(fatal, severity) ? acc + 1 : acc, 0)

const calculateWarnings = messages =>
  messages.reduce((acc, { fatal, severity }) => !isFatal(fatal, severity) ? acc + 1 : acc, 0)

export const getUniqueIssues = issues =>
  issues.map(({ messages, ...restProps }) => {
    const uniqueMessages = getUniqueMessages(messages)
    const warningCount = calculateWarnings(uniqueMessages)
    const errorCount = calculateErrors(uniqueMessages)

    return {
      ...restProps,
      messages: uniqueMessages,
      errorCount,
      warningCount
    }
  })
