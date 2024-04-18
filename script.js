const titleInp = document.querySelector('#title')
const descArea = document.querySelector('#desc')
const addBtn = document.querySelector('#add')
const listDiv = document.querySelector('.list')

const createAndAddTodo = (title, desc) => {
    // 0 '' null undefined NaN false
    //"efdsfgsd" "0.000001" не важно, {}, [], ()=> true
    if (title && desc) {
        const div = document.createElement('div')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        const btn = document.createElement('button')

        div.className = 'todo'
        div.style.marginTop = "20px"

        h4.className = "todo_title"
        h4.innerText = title

        p.className = "todo_deck"
        p.innerText = desc

        btn.innerText = "x"
        btn.addEventListener('click', () => {
            listDiv.removeChild(div)
        })

        div.append(h4, p, btn)
        listDiv.append(div)

        titleInp.value = ''
        descArea.value = ''


    }   
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    createAndAddTodo(titleInp.value, descArea.value)


})