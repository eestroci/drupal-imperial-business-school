
document.addEventListener('DOMContentLoaded', function() {
const playLink = document.querySelector('.play-link-podcast');
console.log("**** Link found ****");
playLink.addEventListener('click', function () {
    // do something when the button is being clicked
    console.log("**** Clicked ****");
    window.open(this.href, "radiowindow", "scrollbars=1,resizable=1,width=420,height=620");
    return false;
  });
});