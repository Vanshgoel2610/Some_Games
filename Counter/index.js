let count = 0
let string = document.getElementById("string")
function increament() {
    count++
    document.getElementById("count").textContent = count
}
function save() {
    let s = "";
    if(string.textContent == "Previous entries: ") s = count
    else s += " - "+count
    // string.innerText += s             // There is difference between innerText and textContent
    string.textContent += s
    count = 0
    document.getElementById("count").textContent = count
}