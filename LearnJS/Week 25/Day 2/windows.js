var openNewWindow = function () {
  var popup = window.open(
    "monk.html",
    "monk",
    "width=420,height=380,left=200,top=200"
  );
  if (popup === null) {
    alert("Please disable your popup blocker.");
  }
  //   var windowContent =
  //     "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brownrobes with large hoods covering their heads.</p>";
  //   monkeyWindow.document.write(windowContent);
};

function checkForPopBlocker() {
  //   var testPop = window.open("", "", "width=100,height=100");
  //   console.log("🚀 ~ checkForPopBlocker ~ testPop:", testPop);
  //   if (testPop === null) {
  //     alert("Please disable your popup blocker.");
  //   } else {
  //     alert("Popup blocker is disabled.");
  //   }
  //   testPop.close();
}
