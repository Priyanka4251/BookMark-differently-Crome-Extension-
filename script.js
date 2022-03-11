
var myLeads = [];

let inputText = document.querySelector(".text");
let inputBtn = document.querySelector("button");
// const head = document.querySelector("h1");
let ulEl = document.querySelector("#ul-el");
let dltBtn= document.querySelector(".dlt");
// const searchText = document.querySelector("searchText")




LeadsFromLocalStorage = JSON.parse (localStorage.getItem("myLeads"))
// console.log(LeadsFromLocalStorage)

if (LeadsFromLocalStorage){
    myLeads= LeadsFromLocalStorage
    list()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputText.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    list();
    // console.log(myLeads)
    localStorage.getItem("myLeads")
})


//delete action making
dltBtn.addEventListener("dblclick", function(){
    console.log("double clicked")
    localStorage.clear()
    myLeads= []
    list()
})
 
function list(){
    let listItem = ""
    for (let i = 0 ; i < myLeads.length ; i++ ) {
        
        listItem += `
        <li>
        <a target= '_blank' href='${myLeads[i]}'> 
            ${myLeads[i]}
        </a>
        </li>`

        }   
        return ulEl.innerHTML = listItem
}

 

