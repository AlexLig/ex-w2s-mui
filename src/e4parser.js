export default (vatNums, dateTimeReasons) => {
  const erganiCode = [
    ...parseVatNums(vatNums),
    ...dateTimeReasons.map(dtr => parseDtr(dtr)),
  ]
  return erganiCode.join(' ')
}

const parseVatNums = vatNums => {
  const { afmEmployer, ameEmployer, afmEmployee } = vatNums
  return [afmEmployer + ameEmployer, afmEmployee].map(el=>el.trim())
}
const parseDtr = dateTimeReason => {
  const { date, start, finish, isWork } = dateTimeReason
  return [date, isWork ? 'Α' : 'Δ', start + finish].map(el=>el.trim()).join(' ')
}


