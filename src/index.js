let undefinedValue
const nullValue = null
const zeroValue = 0
const emptyStringValue = ''
const faleValue = false

console.group('values')
console.log(undefinedValue)
console.log(nullValue)
console.log(zeroValue)
console.log(emptyStringValue)
console.log(faleValue)
console.groupEnd('values')


console.group('|| operator')
console.log(undefinedValue || 'default value')
console.log(nullValue || 'default value')
console.log(zeroValue || 300)
console.log(emptyStringValue || 'default value')
console.log(faleValue || true)
console.groupEnd('|| operator')

console.group('?? operator')
console.log(undefinedValue ?? 'default value')
console.log(nullValue ?? 'default value')
console.log(zeroValue ?? 300)
console.log(emptyStringValue ?? 'default value')
console.log(faleValue ?? true)
console.groupEnd('?? operator')

let inputValue = null
const input = document.querySelector('.input')
const result = document.querySelector('.result')

const printResult = () => {
    // if (inputValue === null) {
    //     result.innerText = 'input was never touched'
    //     return
    // }

    // result.innerText = inputValue || 'input is empty'

    result.innerText = (inputValue ?? 'input was never touched') || 'input is empty'
}

printResult()

input.addEventListener(
    'input',
    (event) => {
        inputValue = event.target.value
        printResult()
    }
)