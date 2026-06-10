function addNode(){

    var content =
        document.getElementById("txtContent").value;

    var position =
        parseInt(document.getElementById("txtAddPos").value);

    if(content == ""){
        alert("Enter content!");
        return;
    }

    var ul = document.getElementById("nodeList");

    var newNode = document.createElement("li");
    var text = document.createTextNode(content);

    newNode.appendChild(text);

    if(isNaN(position) || position > ul.children.length){

        ul.appendChild(newNode);
    }
    else{

        ul.insertBefore(
            newNode,
            ul.children[position - 1]
        );
    }
}

function removeNode(){

    var position =
        parseInt(document.getElementById("txtRemovePos").value);

    var ul = document.getElementById("nodeList");

    if(
        isNaN(position) ||
        position < 1 ||
        position > ul.children.length
    ){
        alert("Invalid position!");
        return;
    }

    ul.removeChild(
        ul.children[position - 1]
    );
}

function modifyNode(){

    var newContent =
        document.getElementById("txtNewContent").value;

    var position =
        parseInt(document.getElementById("txtModifyPos").value);

    var ul = document.getElementById("nodeList");

    if(
        isNaN(position) ||
        position < 1 ||
        position > ul.children.length
    ){
        alert("Invalid position!");
        return;
    }

    var newNode = document.createElement("li");
    var text = document.createTextNode(newContent);

    newNode.appendChild(text);

    ul.replaceChild(
        newNode,
        ul.children[position - 1]
    );
}