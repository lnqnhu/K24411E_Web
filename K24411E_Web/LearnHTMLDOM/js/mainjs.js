var current_page = 1;
var products_per_page = 50;
var all_products = [];
var productbody_element = null;

function load_products(products, productbody)
{
    all_products = products;
    productbody_element = productbody;
    current_page = 1;
    display_page(current_page);
}

function display_page(page_number)
{
    //Clear current table body
    productbody_element.innerHTML = "";
    
    //Calculate start and end index
    var start_index = (page_number - 1) * products_per_page;
    var end_index = start_index + products_per_page;
    
    //Get products for current page
    var page_products = all_products.slice(start_index, end_index);
    
    //Display products
    for(var i = 0; i < page_products.length; i++)
    {
        product = page_products[i];
        productID = product.id;
        productName = product.name;
        //create tr element
        tr = document.createElement("tr");
        //create 3 td
        td_id = document.createElement("td");
        td_name = document.createElement("td");
        td_image = document.createElement("td");
        //create img
        img = document.createElement("img");
        img.setAttribute("src", "images/ic_remove.png");
        img.setAttribute("onclick", "delete_product(this)");
        //assign value to td
        td_id.innerHTML = productID;
        td_name.innerHTML = productName;
        td_image.appendChild(img);
        //append td into tr:
        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_image);
        //append tr into productbody
        productbody_element.appendChild(tr);
    }
    
    //Update pagination info
    update_pagination_info();
}

function update_pagination_info()
{
    var total_pages = Math.ceil(all_products.length / products_per_page);
    var info_element = document.getElementById("pagination-info");
    if(info_element)
    {
        info_element.innerHTML = "Trang " + current_page + " / " + total_pages;
    }
    
    //Enable/Disable buttons
    var prev_btn = document.getElementById("prev-btn");
    var next_btn = document.getElementById("next-btn");
    
    if(prev_btn)
    {
        prev_btn.disabled = (current_page === 1);
    }
    
    if(next_btn)
    {
        next_btn.disabled = (current_page === total_pages);
    }
}

function next_page()
{
    var total_pages = Math.ceil(all_products.length / products_per_page);
    if(current_page < total_pages)
    {
        current_page++;
        display_page(current_page);
    }
}

function previous_page()
{
    if(current_page > 1)
    {
        current_page--;
        display_page(current_page);
    }
}

function delete_product(img_element)
{
    if(confirm("Are you sure to delete this product?"))
    {
        img_element.parentElement.parentElement.remove();
    }
}