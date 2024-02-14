function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function buttonEvent(){
    let button = document.getElementById("butt")
    button.onclick = function(){
        let dimensions = prompt("Enter new dimensions for the grid:")
        let container2 = document.getElementsByClassName('container')
        removeAllChildNodes(container2[0])
        for(let j = 0; j < (dimensions * dimensions); j++){
            let div = document.createElement('div')
            div.setAttribute('class','square')
            let newDimension = 400/dimensions - 2
            div.style.width = newDimension + 'px'
            div.style.height = newDimension + 'px'
            div.addEventListener("mouseover", (event)=> {event.target.style.backgroundColor = "red";});
            container2[0].appendChild(div)
        }
    }
}
buttonEvent()
function divCreation(){
    let container = document.getElementsByClassName('container')
    let div = document.createElement('div')
    div.setAttribute('class','square')
    div.addEventListener("mouseover", (event)=> {event.target.style.backgroundColor = "red";});
    container[0].appendChild(div)
}
for(let i = 0; i < (16 * 16); i++){
    divCreation()
}
