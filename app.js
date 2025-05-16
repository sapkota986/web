const userInput=document.querySelector('.user-input')
const form=document.querySelector('form')
const result=document.querySelector('.result')
const allGuess=document.querySelector('.all-guesses')
const submitBtn=document.querySelector('.submit-btn')
const startGameBtn=document.querySelector('.start-btn')
const  allGuessesArray=[]

let randomnumber=Math.round(Math.random()*100)
    
function a(){
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const userInputValue=parseInt(userInput.value)
        if(userInputValue < randomnumber){
            result.innerText='Too Low!'
        }else if(userInputValue > randomnumber){
            result.innerText='Too high!'
    
        }else{
            result.innerText='congrats!'
            startGameBtn.disabled=false
            submitBtn.disabled=true
        }
        allGuessesArray.push(userInputValue)
        allGuess.innerText ='Your guesses: '+ allGuessesArray.join(', ')
    //    userInput.value='';//or form.reset()
          form.reset();
    })
    // page refresh nagarauna ko lagi event(e) and preventDefault lekheko ho 
    startGameBtn.addEventListener('click',()=>{
        result.innerText=''
        allGuess.innerText=''
        startGameBtn.disabled=true
        submitBtn.disabled=false
        randomnumber=Math.round(Math.random()*100)
     
    })

}
a()