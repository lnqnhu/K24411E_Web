var all_students = [];
var studentbody_element = null;
var sort_ascending = true;
function loadStudents()
{
    studentbody_element = document.getElementById("studentbody");
    parser = new DOMParser();
    xmldoc = parser.parseFromString(xmlData,"text/xml");
    studentnodes = xmldoc.getElementsByTagName("student");
    all_students = [];
    for(var i=0;i<studentnodes.length;i++)
    {
        student =
        {
            id:
            studentnodes[i].getElementsByTagName("id")[0].innerHTML,
            name:
            studentnodes[i].getElementsByTagName("name")[0].innerHTML,
            birthday:
            studentnodes[i].getElementsByTagName("birthday")[0].innerHTML,
            gender:
            studentnodes[i].getElementsByTagName("gender")[0].innerHTML
        };
        all_students.push(student);
    }
    display_students();
}
function display_students()
{
    studentbody_element.innerHTML = "";
    for(var i=0;i<all_students.length;i++)
    {
        student = all_students[i];
        tr = document.createElement("tr");
        tr.setAttribute("onmouseover","this.style.backgroundColor='yellow'");
        tr.setAttribute("onmouseout","this.style.backgroundColor='white'");
        tr.setAttribute("onclick","show_detail('" + student.id + "')");
        td_id = document.createElement("td");
        td_name = document.createElement("td");
        td_birthday = document.createElement("td");
        td_gender = document.createElement("td");
        td_id.innerHTML = student.id;
        td_name.innerHTML = student.name;
        td_birthday.innerHTML = student.birthday;
        td_gender.innerHTML = student.gender;
        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_birthday);
        tr.appendChild(td_gender);
        studentbody_element.appendChild(tr);
    }
}
function sortTable(field)
{
    all_students.sort(function(a,b)
    {
        if(sort_ascending)
        {
            if(a[field] > b[field])
                return 1;
            else
                return -1;
        }
        else
        {
            if(a[field] < b[field])
                return 1;
            else
                return -1;
        }
    });
    sort_ascending = !sort_ascending;
    display_students();
}
function show_detail(studentID)
{
    var student = null;
    for(var i=0;i<all_students.length;i++)
    {
        if(all_students[i].id == studentID)
        {
            student = all_students[i];
            break;
        }
    }
    document.getElementById("detail_id").innerHTML = student.id;
    document.getElementById("detail_name").innerHTML = student.name;
    document.getElementById("detail_birthday").innerHTML = student.birthday;
    document.getElementById("detail_gender").innerHTML = student.gender;
}