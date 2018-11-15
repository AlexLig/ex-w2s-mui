const reduceWith = reducer => arrayOfTests => arrayOfTests.reduce(reducer, true)
const logicalAndReducer = (sum, currentValue) => sum && currentValue
const assert = reduceWith(logicalAndReducer)

export default assert
