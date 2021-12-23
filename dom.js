// console.log(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title = "123"
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent = "Hi Aditya"
// console.log(document.forms)
// console.log(document.links)

//Five Selective Method

//document.getElementById();
//document.getElementsByClass()
//document.querySelect.or("")
//document.querySelectorAll()
//document.getElementsByTagName()

//GET ELEMENT BY ID
// let headerTitle = document.getElementById("header-title").textContent
// console.log(headerTitle)
// console.log(document.getElementById("main-header"))
// document.getElementById("main-header").textContent = "Hello"
// document.getElementById("main-header").innerText = "Hi"
// document.getElementById("main-header").innerHTML = "<h1 style='color:red'>Welcome to JS World</h1>"
// document.getElementById("main-header").style.border = "solid 4px red"

//GET ELEMENTS BY CLASS NAME
let items = document.getElementsByClassName("list-group-item")
// console.log(typeof items)
// console.log(items)
// for(let i=0;i<items.length;i++)
// console.log(items[i])
// Array.from(items).forEach(function(x){
//     console.log(x)
// })

// items[0].style.fontWeight="bold"
// items[0].style.backgroundColor= "red"
// items.style.backgroundColor="red"

// for(let i=0;i<items.length;i++){
//     if(i%2==0)
//     items[i].style.backgroundColor="red"
//     else
//     items[i].style.backgroundColor="yellow"
// }

//GET ELEMENTs BY TAG NAME
// let li = document.getElementsByTagName("li")
// console.log(li)
// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor= "red"
// }

//QuerySelector
// let header = document.querySelector("#main-header")
// console.log(header)
// header.style.borderBottom = "solid 4px red"

// let submit = document.querySelector("input[type='submit']")
// console.log(submit)
// submit.value = "CLICK"

// let searchItem = document.querySelector("input[type='text']")
// console.log(searchItem)
// let item = document.querySelector(".list-group-item:nth-child(2)")
// console.log(item)

//QuerySelectorAll
// let titles = document.querySelectorAll("li")
// // console.log(titles)
// let odd = document.querySelectorAll("li:nth-child(odd)")
// let even = document.querySelectorAll("li:nth-child(even)")

// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = "red"
//     even[i].style.backgroundColor = "yellow"
// }


function clickHandler(x){
    // console.log(x.clientX)
    document.body.style.backgroundColor = "rgb(255,0,0)";
 
}

document.getElementById("btn").addEventListener("click",clickHandler)

// document.getElementById("main").addEventListener("mouseenter",function(){
//     document.getElementById("main").style.backgroundColor = "blue"
// })
// document.getElementById("main").addEventListener("mouseleave",function(){
//     document.getElementById("main").style.backgroundColor = "yellow"
// })

document.getElementById("main").addEventListener("mousemove",function(e){
    console.log(e.offsetY,e.offsetX)
    document.body.style.backgroundColor = `rgb(255,${e.offsetX},${e.offsetY})`;
    document.getElementById("main").style.backgroundColor = `rgb(255,${e.offsetX},${e.offsetY})`;
})