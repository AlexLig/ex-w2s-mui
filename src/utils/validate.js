const validate = arrayOfTests => arrayOfTests.reduce(reducer, true)

const reducer = (sum, currentValue) => sum && currentValue

export default validate
