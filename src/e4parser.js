
export default (form, dateTimeReason) => {
  const { afmEmployer, ameEmployer, afmEmployee } = form

  const vatNums = ['Σ1', afmEmployer + ameEmployer, afmEmployee]
  const dtrs = dateTimeReason.map(dtr => {
    const { date, start, finish, isWork } = dtr
    const dtrData = [date, isWork ? 'Α' : 'Δ', start + finish]
    return dtrData.join(' ')
  })
  const parsedData = [...vatNums, ...dtrs]
  const erganiCode = parsedData.join(' ')
  return erganiCode
}
