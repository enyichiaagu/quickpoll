const addBtn = document.querySelector('#addBtn')
const form = document.querySelector('form')
const optionContainer = document.querySelector('#option-container')
const question = document.querySelector('#question')

function addNewOptionItem(e){
    e.preventDefault()
    const newItem = document.createElement('div')
    const newOption = document.createElement('input')

    newOption.setAttribute('type', 'text')
    newOption.setAttribute('class', 'option')
    newOption.setAttribute('required', true)
    newItem.appendChild(newOption)

    const removeBtn = document.createElement('button')
    removeBtn.setAttribute('class', 'removeBtn')
    removeBtn.textContent = '❌'
    removeBtn.addEventListener('click', removeNewOption)

    newItem.appendChild(removeBtn)
    optionContainer.appendChild(newItem)
}

function removeNewOption({ target }){
    target.removeEventListener('click', removeNewOption)
    target.parentNode.remove()
}

function savePoll(){
    const voteOptions = []
    const options = document.querySelectorAll('input.option')
    for (let i = 0; i < options.length; i++) {
        const item = {}
        item.value = options[i].value
        item.votes = 0
        voteOptions.push(item)
    }
    localStorage.setItem('question', question.value)
    localStorage.setItem('options', options)
}

addBtn.addEventListener('click', addNewOptionItem)
form.addEventListener('submit', savePoll)
