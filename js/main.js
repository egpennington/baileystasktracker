let todo = []
const inputEl = document.getElementById("input-el")
const btnAddEl = document.getElementById("btn-add-el")
const btnDelEl = document.getElementById("btn-del-el")
const choreList = document.getElementById("chore-list")
const todoFromLocalStorage = JSON.parse( localStorage.getItem("todo") )
const listEl = document.getElementById("list-el")

if (todoFromLocalStorage) {
    todo = todoFromLocalStorage
    render(todo)
} else {
    // No items in localStorage, display a message
    choreList.innerHTML = `
            <p>...no items yet...</p>
            `
}

btnAddEl.addEventListener("click", function() {    
    let inputValue = inputEl.value
    todo.push(inputValue)
    
    localStorage.setItem("todo", JSON.stringify(todo))

    render(todo)
    clearInput()
})

function render(list) {
    choreList.innerHTML = ""
    const listItem = document.createElement("li")

    if(list.length===0) {
        choreList.innerHTML = `
            <p>...no items yet...</p>
            `
    } else {
        for (let i = 0; i < list.length; i++) {

            const listItem = document.createElement("li")
    
            // Set a data-index attribute to store the index of the item in the array
            listItem.setAttribute("data-index", i)
    
            listItem.innerHTML = `${list[i]} <span class="delete-item">X</span>`
    
            const deleteSpan = listItem.querySelector('.delete-item')
    
            deleteSpan.addEventListener('click', function() {
                // Get the index from the data-index attribute of the parent li
                const index = parseInt(listItem.getAttribute("data-index"))
    
                // Remove the corresponding item from the array
                todo.splice(index, 1);
    
                // Update local storage with the modified array
                localStorage.setItem("todo", JSON.stringify(todo));
    
                // Re-render the list with the updated data
                render(todo);
            })
    
            choreList.appendChild(listItem)
        }
    }
}

btnDelEl.addEventListener("dblclick", function() {
    console.log("deleted item")
    localStorage.clear()
    todo = []
    // 
    render(todo)
})

function clearInput() {
    inputEl.value = ""
}