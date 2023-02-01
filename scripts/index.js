const addBtn = document.querySelector('#addBtn')
const form = document.querySelector('form')
const optionContainer = document.querySelector('#option-container')
const question = document.querySelector('#question')

localStorage.clear()

let optionCounter = 2;
function addNewOptionItem(e){
    e.preventDefault()
    const newItem = document.createElement('span')
    newItem.setAttribute('class', 'inp')
    const newOption = document.createElement('input')

    newOption.setAttribute('type', 'text')
    newOption.setAttribute('class', 'option')
    newOption.setAttribute('placeholder', 'Add new option')
    newOption.setAttribute('required', true)
    newItem.appendChild(newOption)

    const removeBtn = document.createElement('i')
    removeBtn.setAttribute('class', 'fas fa-regular fa-xmark')
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
    localStorage.setItem('options', JSON.stringify(voteOptions))
    localStorage.setItem('voters', JSON.stringify(0))
}

addBtn.addEventListener('click', addNewOptionItem)
form.addEventListener('submit', savePoll)
