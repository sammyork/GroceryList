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
function move(num) {
    let idx = parseInt(numbox.value);
    let n2 = idx - num;
    if(n2 > -1){
        if(n2 < list.length){
            list.splice(n2, 0, list.splice(idx, 1)[0]);
            numbox.value = n2;
        }
    }
    display();
}
function indexOf(array, itm){
    for(var i = 0; i < array.length; i++) {
        if(itm == array[i]) {
            return i;
        }
    }
    return -1
}

