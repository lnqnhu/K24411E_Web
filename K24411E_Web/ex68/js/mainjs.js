function loadCDs()
    {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if(xhr.readyState == 4 && xhr.status == 200)
            {
                showData(this);
            }
        };
        xhr.open("GET", "cd_catalog.xml", true);
        xhr.send();
    }
function showData(xml)
    {
        var xmlDoc = xml.responseXML;
        var cds = xmlDoc.getElementsByTagName("CD");
        var table =
            "<tr>" +
            "<th>Artist</th>" +
            "<th>Title</th>" +
            "</tr>";
        for(var i=0;i<cds.length;i++)
        {
            var artist =
                cds[i]
                .getElementsByTagName("ARTIST")[0]
                .childNodes[0]
                .nodeValue;
            var title =
                cds[i]
                .getElementsByTagName("TITLE")[0]
                .childNodes[0]
                .nodeValue;
            table +=
                "<tr>" +
                "<td>" + artist + "</td>" +
                "<td>" + title + "</td>" +
                "</tr>";
        }
        document.getElementById("demo").innerHTML = table;
    }