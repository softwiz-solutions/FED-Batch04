// function getChildOfDiv() {
//   var parent = document.getElementById("para-div");
//   console.log("🚀 ~ getChildOfDiv ~ parent:", parent.childNodes);
//   var firstChild=parent.childNodes[0]
//   var firstChild=parent.firstChild
//   var lastChild=parent.lastChild
//   console.log("🚀 ~ lastChild:", lastChild)
//   console.log("🚀 ~ firstChild:", firstChild)
// }

// var kidNode = document.getElementById("div2");
// // var pNode=kidNode.parentNode
// var firstChild = kidNode.firstChild;
// var nextSibling = firstChild.nextSibling;
// var thirdSibling = nextSibling.nextSibling;
// console.log("🚀 ~ firstChild:", firstChild)
// console.log("🚀 ~ firstChild name:", firstChild.nodeValue);
// console.log("🚀 ~ nextSibling:", nextSibling);
// console.log("🚀 ~ thirdSibling:", thirdSibling.previousSibling)
// console.log("🚀 ~ pNode:", pNode)

// var parentNode = document.getElementById("div2");
// console.log("🚀 ~ parentNode:", parentNode)
// var divChildNodes = parentNode.childNodes;
// for (var i = 0; i < divChildNodes.length; i++) {
//   //   console.log("childs", divChildNodes[i]);
//   //   console.log("child nodenames", divChildNodes[i].nodeName);

//   if (divChildNodes[i].nodeName.toLowerCase() == "img") {
//     // .src="jfkdjflksdjf"
//     divChildNodes[i].src =
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjDkGmihQuiJ1iZHzQpwJ9JPBO6BnViVmU7Q&s";
//   }
// }

function addDataInList() {
  var listElements = document.getElementsByTagName("li");
  console.log("🚀 ~ addDataInList ~ listElements:", listElements);
  var listEementLength = listElements.length;

  for (var i = 0; i < listEementLength; i++) {
    if (listElements[i].innerHTML == "") {
      listElements[i].innerHTML = "Comming Soon";
    }
  }
}

// addDataInList()

var para = document.getElementById("para");
// console.log("🚀 ~ para:", para.attributes[0]);
// var hasClassName=para.hasAttribute('class')
// console.log("🚀 ~ hasClassName:", hasClassName)
// var paraClassValue=para.getAttribute('class')
// console.log("🚀 ~ paraClassValue:", paraClassValue)
// para.setAttribute('class','bg-red') // class="bg-red"

if (para.hasAttribute("class")) {
  console.log("class value", para.getAttribute("class"));
} else {
  para.setAttribute("class", "bg-red");
}
