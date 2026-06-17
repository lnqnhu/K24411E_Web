var xmlDoc;

function loadXML() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            xmlDoc = this.responseXML;

            loadTitle();
        }
    };

    xhttp.open("GET", "dataset/employee.xml", true);

    xhttp.send();
}

function loadTitle() {

    var employees =
        xmlDoc.getElementsByTagName("employee");

    var ddl =
        document.getElementById("title");

    var titles = [];

    for (var i = 0; i < employees.length; i++) {

        var title =
            employees[i].getAttribute("title");

        if (titles.indexOf(title) == -1) {

            titles.push(title);

            var option =
                document.createElement("option");

            option.value = title;
            option.text = title;

            ddl.add(option);
        }
    }
}

function showEmployees() {

    var selectedTitle =
        document.getElementById("title").value;

    var employees =
        xmlDoc.getElementsByTagName("employee");

    var result = "";

    for (var i = 0; i < employees.length; i++) {

        if (
            employees[i].getAttribute("title")
            == selectedTitle
        ) {

            var id =
                employees[i].getAttribute("id");

            var name =
                employees[i]
                .getElementsByTagName("name")[0]
                .childNodes[0].nodeValue;

            var phone =
                employees[i]
                .getElementsByTagName("phone")[0]
                .childNodes[0].nodeValue;

            result += "<tr>";
            result += "<td>" + id + "</td>";
            result += "<td>" + name + "</td>";
            result += "<td>" + phone + "</td>";
            result += "</tr>";
        }
    }

    document.getElementById("tbody").innerHTML = result;
}