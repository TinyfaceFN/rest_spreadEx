const filterOutOdds = (...arg) => arg.filter((num) => num % 2 === 0)

const findMin = (...arg) => Math.min(...arg)

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })

const doubleAndReturnArgs = (array, ...arg) => [...array, ...arg.map((val) => val * 2)]

const removeRandom = (items) => {
    let rngRemove = Math.floor(Math.random() * items.length + 1);
    return items.filter((val) => items[val] !== items[rngRemove])

}

const extend = (array1, array2) => [...array1, ...array2]

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val })

const removeKey = (obj, key) => {
    let newObj = ({ ...obj })
    delete newObj[key]
    return newObj
}

const combine = (obj1, obj2) => {
    let newObj = ({ ...obj1, ...obj2 })
    return newObj
}

const update = (obj, key, val) => {
    let newObj = ({ ...obj }, { [key]: val })
    return newObj
}