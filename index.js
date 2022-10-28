let arrayOfNames = []

const addButton = document.getElementById("add-btn")
addButton.addEventListener("click", () => {
  let nameInput = document.getElementById("name-input")
  const namesOnList = document.getElementById("list-names")
  let newName = document.createElement("li")
  newName.innerText = nameInput.value
  newName.className = "just-added"
  let lineBreak = document.createElement("div")
  lineBreak.className = "lineBreak"
  namesOnList.appendChild(newName)
  namesOnList.appendChild(lineBreak)
  nameInput.value = ""
  arrayOfNames.push(newName)
})

const plusBtn = document.getElementById("plus-btn")
plusBtn.addEventListener("click", () => {
  const enterNumber = document.getElementById("input-number")
  enterNumber.value++
  addCard()
})

const minusBtn = document.getElementById("minus-btn")
minusBtn.addEventListener("click", () => {
  const enterNumber = document.getElementById("input-number")
  if (enterNumber.value > 0) {
    enterNumber.value--
    removeCard()
  }
})

const addCard = () => {
  const inputNumber = document.getElementById("input-number")
  const teamMembers = document.querySelector("#rightSide")
  const newTeamCard = document.createElement("div")
  const h4 = document.createElement("h4")
  h4.innerText = `Team ${inputNumber.value}`
  const ul = document.createElement("ul")
  ul.setAttribute("id", "team-list")
  newTeamCard.className = "cards"
  newTeamCard.appendChild(h4)
  newTeamCard.appendChild(ul)
  teamMembers.appendChild(newTeamCard)
}

const removeCard = () => {
  const cards = document.getElementsByClassName("cards")
  console.log(cards)
  cards[cards.length - 1].remove()
}

const assignButton = document.querySelector(".assign")
assignButton.addEventListener("click", () => {
  for (let i = 0; i < arrayOfNames.length; i++) {
    const randomName = arrayOfNames[anyIndex].innerText
    const teamList = document.querySelectorAll("#team-list")

    for (let v = 0; v < teamListContainer.length; v++) {
      const assignedName = document.createElement("li")
      assignedName.innerText = randomName

      teamList[v].appendChild(assignedName)
    }
  }
})
