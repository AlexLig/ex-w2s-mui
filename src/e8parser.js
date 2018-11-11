export default form => {
  const erganiCode = ['Υ1',...parseForm(form)]
  return erganiCode.join(' ')
}

const parseForm = form => {
  const { afmEmployer, ameEmployer, afmEmployee, startHour, finishHour } = form
  return [afmEmployer + ameEmployer, afmEmployee, startHour+finishHour]
}
