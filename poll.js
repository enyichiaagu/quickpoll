const form = document.querySelector('form')
const optionsContainer = document.querySelector('#options-container')

const question = localStorage.getItem('question')
const voteOptions = JSON.parse(localStorage.getItem('options'))

const questionElement = document.querySelector('#question-element')
questionElement.textContent = question

const voters = JSON.parse(localStorage.getItem('voters'))
const countHeader = document.querySelector('h2')
countHeader.textContent += ` ${voters+1}` 

voteOptions.forEach((option, index) => {
    const field = document.createElement('div')
    const radioBtn = document.createElement('input')
    radioBtn.setAttribute('type', 'radio')
    radioBtn.setAttribute('id', `option${index}`)
    radioBtn.setAttribute('name', 'choose')
    radioBtn.setAttribute('class', 'radio')
    const label = document.createElement('label')
    label.setAttribute('for', `option${index}`)
    label.textContent = option.value
    field.appendChild(radioBtn)
    field.appendChild(label)
    optionsContainer.appendChild(field)
})

function vote(){
    const radios = document.querySelectorAll('input.radio')
    for (let i = 0; i < radios.length; i++){
        if (radios[i].checked) {
            voteOptions[i].votes++
            localStorage.setItem('options', JSON.stringify(voteOptions))
            localStorage.setItem('voters', JSON.stringify(voters+1))
            return
        }
    }
}

form.addEventListener('submit', vote)

console.log(localStorage.getItem('question'))
console.log(localStorage.getItem('options'))
console.log(localStorage.getItem('voters'))