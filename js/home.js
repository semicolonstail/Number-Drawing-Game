if (localStorage.this !== undefined) {
thisObject = JSON.parse(localStorage.this);

var nextPage = thisObject.nextWebside;
document.getElementById("page").href = nextPage;
}
