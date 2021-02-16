let addOpenQuestion = document.querySelectorAll('.question').forEach(openQuestion);

function openQuestion(item) {
    item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle("showedAnswer")
        item.children[1].classList.toggle("openedArrow")
        item.classList.toggle("activeQuestion")
        console.log(item)
    })
}

