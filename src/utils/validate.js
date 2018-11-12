const validate = arrayOfTests => arrayOfTests.reduce((sum, currentValue) => sum && currentValue)

export default validate
