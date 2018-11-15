const reduceWith = reducer => arrayOfTests => arrayOfTests.reduce(reducer, true)
const logicalAndReducer = (sum, currentValue) => sum && currentValue
const reduceWithAnd = reduceWith(logicalAndReducer)

export default reduceWithAnd
