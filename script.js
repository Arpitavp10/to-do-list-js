var listContent=document.querySelector('#listContent')
var actionButton=document.querySelector('#actionButton')
var list=document.querySelector('#list')

actionButton.addEventListener('click',()=>{
    if(listContent.value===''){
        alert('Enter your task !!!')
        return
    }

    let newItem = document.createElement("li")

    let newIcon = document.createElement("i")
    let newPara = document.createElement("p")
    let newButton = document.createElement("button")

    // "fa-regular fa-circle"
    newIcon.classList.add("fa-solid")
    newIcon.classList.add("fa-circle")
    newIcon.setAttribute("title","Mark Done")

    newPara.innerHTML=listContent.value

    
    // fa-trash-can"fa-solid
    newButton.setAttribute("title","Remove From List")
    newButton.innerHTML="<i class='fa-solid fa-trash-can'></i>"
    newButton.style.color='#00f24dac'
    
    newItem.append(newIcon)
    newItem.append(newPara)
    newItem.append(newButton)

    newIcon.addEventListener('click',()=>{
        if(newIcon.classList.contains("fa-circle")){
            newIcon.classList.remove("fa-circle")
            newIcon.classList.add("fa-circle-check")
            newItem.classList.add('done') 
        }else{
            newIcon.classList.remove("fa-circle-check")
            newIcon.classList.add("fa-circle")
            newItem.classList.remove('done') 
        }
           
     })

     newButton.addEventListener('click',()=>{
        newItem.remove()
     })

    list.append(newItem)
    listContent.value=''
    
        
})