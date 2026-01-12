function changeLink(link) {
  // window.location.replace(link)
  window.location.assign(link);
  //  window.location.href = "https://www.example.com";
  //   window.location.assign("https://www.example.com");
}

var reload = function () {
  window.location.reload();
};

var goForward = function () {
  window.history.forward();
};
var goBack = function () {
  window.history.back();
};

var moveGo=function(steps){
  window.history.go(steps);
}
// var window = {
//   location: {
//     href: "",
//     assign: function (url) {
//       this.href = url;
//     },
//   },
// };
