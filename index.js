const addBtn = document.querySelector('#addBtn')
const saveBtn = document.querySelector('#savePollBtn')
const optionContainer = document.querySelector('#option-container')

function addNewOptionItem(e){
    e.preventDefault()
    const newItem = document.createElement('div')
    const newOption = document.createElement('input')

    newOption.setAttribute('type', 'text')
    newOption.setAttribute('class', 'option')
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
        voteOptions.push(options[i].value)
    }
    console.log(voteOptions)
}

addBtn.addEventListener('click', addNewOptionItem)
saveBtn.addEventListener('click', savePoll)
