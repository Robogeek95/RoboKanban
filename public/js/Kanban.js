adding = false;
order = 1

let addBtn = document.querySelector('.addBtn')
addBtn.addEventListener("click", () => {
    if (adding) {
        message = "error"
    } else {
        adding = true
        target = document.querySelector('#todoForm')
        target.appendChild(create_item());
    }
})

const create_item = () => {
    let div = document.createElement("div")
    let divClasses = ['d-flex', 'flex-row', 'align-items-between', 'my-2']
    div.classList.add(...divClasses)
    div.draggable = true;
    div.id = "div-" + order;

    div.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.id)
    });

    div.addEventListener('dragend', event => {
        event.dataTransfer.clearData()
    });

    let input = document.createElement('input')
    let inputClasses = ['form-control', 'bg-light', 'mr-2']
    input.classList.add(...inputClasses)
    div.append(input)

    let saveBtn = document.createElement("button")
    saveBtn.innerHTML = "Add"
    saveBtn.classList.add('btn', 'btn-outline-success')

    saveBtn.addEventListener('click', () => {
        if (input.value !== "") {
            order += 1
            div.innerHTML = input.value
            div.classList.add('list-group-item')
            adding = false;
        }
    })

    div.appendChild(saveBtn)
    return div;
}

document.querySelectorAll('.drop').forEach(element => {
    element.addEventListener('drop', event => {
      event.preventDefault();
  
      const id = event.dataTransfer.getData('text')
      event.target.appendChild(document.getElementById(id));
    })
  
    element.addEventListener('dragover', (event) =>{
      event.preventDefault()
    } )
  });