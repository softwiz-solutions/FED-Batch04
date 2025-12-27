var paraNode=document.createElement('p') // <p></p>
paraNode.setAttribute("id","my-js-para") // <p id='my-js-para'></p>

var textNode=document.createTextNode("Hello how are") 
paraNode.appendChild(textNode)// <p>hello how are </p>

var parentDiv=document.getElementById("js-div") // <div></div>
var child=parentDiv.childNodes[2]
console.log("🚀 ~ firstChild:", child)
parentDiv.removeChild(child)
// parentDiv.appendChild(paraNode)     // <div><p>hello how are </p></div>