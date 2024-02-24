console.log("JAVASCRIPT!!!")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/weather?adress='+location).then((response) => {
        response.json().then((data) => {
    
        if(data.error)
        {
            messageOne.textContent = "You dumbass lmao"
            messageTwo.textContent = "You done did goofed"
        }
        else
        {

        }
    })})
    console.log("What is the problem officer?")
})