const winnerElement = document.querySelector('.winner')
const stat = document.querySelector('.stat')

const options = JSON.parse(localStorage.getItem('options'))
const voters = JSON.parse(localStorage.getItem('voters'))

options.sort((a, b) => b.votes - a.votes)
winnerElement.textContent = options[0].votes == options[1].votes ? "It's a Draw" : options[0].votes

for (let i = 0; i < options.length; i++) {
    const contestant = document.createElement('div')
    contestant.setAttribute('class', 'contestants')
    const name = document.createElement('h5')
    name.setAttribute('class', 'candidate-name')
    name.textContent = options[i].value
    contestant.appendChild(name)
    const extraStat = document.createElement('span')
    const percentage = document.createElement('p')
    percentage.setAttribute('class', 'percentage')
    percentage.textContent = `${(((options[i].votes/voters)*100).toFixed(1))}%`
    extraStat.appendChild(percentage)
    const voteNum = document.createElement('p')
    voteNum.setAttribute('class', 'no-of-votes')
    voteNum.textContent = `${options[i].votes} votes`
    extraStat.appendChild(voteNum)
    contestant.appendChild(extraStat)
    stat.appendChild(contestant)
}
