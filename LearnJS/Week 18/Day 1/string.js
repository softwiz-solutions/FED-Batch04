// var userName = prompt("Enter your name");
// // console.log("length",userName.slice(0,userName.length-2))

// var firstChar = userName.slice(0, 1);
// console.log("🚀 ~ firstChar:", firstChar);
// var otherChars = userName.slice(1);
// console.log("🚀 ~ otherChars:", otherChars);

// userName = firstChar.toUpperCase() + otherChars.toLowerCase();
// console.log("🚀 ~ userName:", userName);

// var sentence =
//   "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to World War II poetry  World War II and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them World War II to grasp their minds and motives in ways that they cannot grasp his. ";

// for (var i = 0; i < sentence.length; i++) {
//   if (sentence.slice(i, i + 12) == "World War II") {
//     sentence =
//       sentence.slice(0, i) + "Second world war" + sentence.slice(i + 12);
//   }
// }

// console.log("🚀 ~ sentence:", sentence);

// var text='Hwllo world world'

// console.log("text",text.indexOf("world"))

var sentence =
  "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them  to grasp their minds and motives in ways that they cannot grasp his.";

var indexNumber = sentence.indexOf("World War II");
if (indexNumber != -1) {
  sentence =
    sentence.slice(0, indexNumber) +
    "Second world war" +
    sentence.slice(indexNumber + 12);
  console.log("🚀 ~ sentence:", sentence);
}
