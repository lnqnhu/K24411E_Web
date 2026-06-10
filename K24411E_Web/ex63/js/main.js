window.onload = function () {
    for (var i = 1; i <= 31; i++) {
        document.getElementById("day").options.add(
            new Option(i, i)
        );
    }
    for (var i = 1; i <= 12; i++) {
        document.getElementById("month").options.add(
            new Option(i, i)
        );
    }
    for (var i = 1970; i <= 2025; i++) {
        document.getElementById("year").options.add(
            new Option(i, i)
        );
    }
};
function validEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
function signUp() {
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    if (name.trim() == "") {
        alert("Name cannot be blank!");
        document.getElementById("Name").focus();
        return;
    }
    if (!validEmail(email)) {
        alert("Email is invalid!");
        document.getElementById("Email").focus();
        return;
    }
    var gender;
    if (document.getElementById("man")) {
        gender = "Man";
    } else {
        gender = "Woman";
    }
    var birthday =
        document.getElementById("day").value + "/" +
        document.getElementById("month").value + "/" +
        document.getElementById("year").value;
    var hobbies = "";
    var hobbyList =
        document.getElementsByClassName("hobby");
    for (var i = 0; i < hobbyList.length; i++) {
        if (hobbyList[i].checked) {
            if (hobbies != "") {
                hobbies += ", ";
            }
            hobbies += hobbyList[i].value;
        }
    }
    var colorList =
        document.getElementsByName("color");
    var color = "";
    for (var i = 0; i < colorList.length; i++) {
        if (colorList[i].checked) {
            color = colorList[i].value;
            break;
        }
    }
    var table =
        document.getElementById("memberTable");
    var row = table.insertRow(-1);
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = gender;
    row.insertCell(3).innerHTML = birthday;
    row.insertCell(4).innerHTML = hobbies;
    row.insertCell(5).innerHTML = color;
    row.onmouseover = function () {
        this.style.backgroundColor = "yellow";
    };
    row.onmouseout = function () {
        this.style.backgroundColor = "white";
    };
}
function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("day").selectedIndex = 0;
    document.getElementById("month").selectedIndex = 0;
    document.getElementById("year").selectedIndex = 0;
    var genderList = document.getElementsByName("gender");
    for(var i = 0; i < genderList.length; i++){
        genderList[i].checked = false;
    }
    var hobbyList = document.getElementsByClassName("hobby");

    for(var i = 0; i < hobbyList.length; i++){
        hobbyList[i].checked = false;
    }
    var colorList = document.getElementsByName("color");
    for(var i = 0; i < colorList.length; i++){
        colorList[i].checked = false;
    }
    document.getElementById("Name").focus();
}