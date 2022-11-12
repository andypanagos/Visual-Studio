function myFunction() {
    let text;
    let person = prompt("Who Will Win the World Cup?:", "");
    if (person == null || person == "") {
        text = "";
    } else {
        text = " LETS GO!! " + person + " will win the World Cup!!";
    }
    document.getElementById("demo").innerHTML = text;
}