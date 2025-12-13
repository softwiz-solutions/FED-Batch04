function doubleParaSize() {
  //   const parent = document.getElementById("section1");
  //   //   div>p
  //   var paras = parent.getElementsByTagName("p");
  //   for (var i = 0; i < paras.length; i++) {
  //     paras[i].style.fontSize = "34px";
  //   }
}
function changeCellsColor(id, color = "pink") {
  const parent = document.getElementById(id);
  //   div>p
  var cells = parent.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = color;
  }
}

function stylingDivChilds() {
  const div = document.getElementById("section1");
  var paraCounter = 0;
  const childNodes = div.childNodes;
  console.log("🚀 ~ stylingDivChilds ~ childNodes:", childNodes);
  for (var i = 0; i < childNodes.length; i++) {
    if (childNodes[i].nodeType == 1) {
      paraCounter++;
    }
    if (paraCounter == 2) {
      childNodes[i].style.backgroundColor = "pink";
      break;
    }
  }
}

// const div = document.getElementById("section1");
// console.log("first childe",div.childNodes)
