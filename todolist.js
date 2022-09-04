let addButton = document.getElementById("add")
let input = document.getElementById("addToDo")
let container = document.querySelector(".container")


input.addEventListener("input",(e)=>{
    if(!input.value){
        addButton.disabled= true
    }
    else{
        addButton.disabled= false
    }
})

document.addEventListener("click",(event)=>{
    addButton.disabled = true
    if(event.target.id === "add"){
       if(input.value){
        let div = document.createElement('div')
            let todo = document.createElement('li')
            let image = document.createElement('img')
            image.setAttribute('src',"https://cdn2.iconfinder.com/data/icons/bills-to-pay/78/Bills_to_pay_icons-16-512.png")
            todo.innerText = input.value
            div.className = 'div'
            div.append(todo,image)
            container.append(div)
            input.value =" "
        }
   }
})


container.addEventListener("click",(event) =>{
    if(event.target.hasAttribute('src')){
        event.target.parentElement.remove( )
       
    }
    event.target.classList.toggle('done')
})



