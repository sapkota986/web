const input = document.querySelector('input')
const lowerCaseOutput = document.querySelector('#lowercase span');
const upperCaseOutput = document.querySelector('#uppercase span');
const camelCaseOutput = document.querySelector('#camelcase span');
const pascalCaseOutput = document.querySelector('#pascalcase span');
const snakeCaseOutput = document.querySelector('#snakecase span');
const kebabCaseOutput = document.querySelector('#kebabcase span');
const TrimCaseOutput = document.querySelector('#Trimcase span');

function capitalizeString(string) {
    const firstCharacter = string[0].toUpperCase()
    return firstCharacter + string.slice(1, string.length)
}


//for camel case string
function camelCase(string) {
    const lowerCaseString = string.toLowerCase()
    const wordsArray = lowerCaseString.split(' ')
    const finalArray = wordsArray.map((word, i) => {
        //map is used to represent in string to  array format
        if (i === 0) return word
        return capitalizeString(word)

    })

    return finalArray.join('')
}

//for pascal case string
function pascalCase(string) {
    const lowerCaseString = string.toLowerCase()
    const wordsArray = lowerCaseString.split(' ')
    const finalArray = wordsArray.map((word) => {
        //map is used to represent in string to  array format

        return capitalizeString(word)

    })

    return finalArray.join('')
}
//for snake case string
function snakeCase(string) { 
    const wordsArray = string.split(' ')
    // return wordsArray.join('_')  OR
    return string.replaceAll(' ','_')

}

//for kebab case string
function kebabCase(string) { 
    const wordsArray = string.split(' ')
    // return wordsArray.join('-')  OR
    return string.replaceAll(' ','-')
}

//for Trim case string
function TrimCase(string) {
    const wordsArray = string.split(' ')
    // return wordsArray.join('-')  OR
     return string.replaceAll(' ','')
}
    

function updateScreen() {
    lowerCaseOutput.innerText = input.value.toLowerCase()
    upperCaseOutput.innerText = input.value.toUpperCase()
    camelCaseOutput.innerText = camelCase(input.value)
    pascalCaseOutput.innerText = pascalCase(input.value)
    snakeCaseOutput.innerText = snakeCase(input.value)
    kebabCaseOutput.innerText = kebabCase(input.value)
    TrimCaseOutput.innerText = TrimCase(input.value)




}
updateScreen()


input.addEventListener('input',()=>{
    updateScreen()

})