

//Add Work
let btn = document.getElementById("btn")
let itemList = document.getElementById("items")
let searchBar = document.getElementById("filter")
console.log(searchBar)
// console.log(searchBar)
// console.log(itemList)
function addItem(){
    let item = document.getElementById("item").value
    let li = document.createElement("li")//<li></li>
    let node = document.createTextNode(item)
    // console.log(typeof item)
    li.className="list-group-item"
    let btn = document.createElement("button")
    btn.appendChild(document.createTextNode("X"))
    btn.className = "btn btn-danger btn-sm float-right delete2"
    li.appendChild(node)//<li>XYZ</li>
    li.appendChild(btn)
    itemList.appendChild(li)//<ul><li></li></ul>
    document.getElementById("item").value=""
    // console.log(li).
    
    
}

function removeItem(e){
if(e.target.classList.contains("delete2")){
    // console.log(confirm("Are you sure want to delete this"))
if(confirm("Are YOu sure you want to delete this item ")){
    let li = e.target.parentElement;
    // console.log(li)
    itemList.removeChild(li)
}else{
   alert("Bhai kuch kaam bhi krle phaltu time") 
}
}else{
    alert("kyu maze le rahe hoon")
}

}

function filterItem(e){
    let text = e.target.value.toLowerCase()
    let items = document.getElementsByTagName("li")
    let itemsArray = Array.from(items)
    itemsArray.forEach(function(el){
        // console.log(el.firstChild.textContent.toLowerCase())
        let itemName = el.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text) !=-1){
            el.style.display="block"
        }else{
            el.style.display="none"
        }
    })
}


btn.addEventListener("click",addItem)
itemList.addEventListener("click",removeItem)
searchBar.addEventListener("keyup",filterItem)