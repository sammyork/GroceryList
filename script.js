function initialize(){
    outBox = document.getElementById("outbox");
    foodbox= document.getElementById("foodsel");
    numbox = document.getElementById("numsel");
    list = ["cookie", "macaron", "eclair", "brownie"];
    display();
}
function display(){
    outBox.innerHTML = "0: " + list[0];
    for (var i = 1; i < list.length; i++) {
        outBox.innerHTML += "<br />" + i + ": " + list[i];
    }
}
function addFood(){
    var food = foodbox.value;
    var bing = indexOf(list, food);
    if (bing == -1) {
        list.push(food);
    }
    display();
}
function deleteFood() {
    var food = foodbox.value;
    var place = indexOf(list, food);
    if (place >= 0) {
        list.splice(place,1);
    }
    display();
}
function moveUp() {
    var n = numbox.value;
}
function moveDown() {
    var n = numbox.value;
}
function indexOf(array, itm){
    for(var i = 0; i < array.length; i++) {
        if(itm == array[i]) {
            return i;
        }
    }
    return -1
}
