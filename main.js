var menu_list_array=[
    "chicken tanduri pizza",
    "chese pizza",
    "deluxe vegie pizza",
    "veg pizza",
    "paneer ticka pizza",
];
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i="0";i<menu_list_array.length;i++){
       htmldata=htmldata+"<li>"+menu_list_array[i]+"</li>"
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("menu_list").innerHTML=menu_list_array;
};
function add_item(){
    var h41_code=document.getElementById("add_item").value;
    var h4_variable=h4_variable+"<h4></h4>";
    document.getElementById("display_addedmenu").innerHTML=h4_variable;
    document.getElementById("h41").innerText=h41_code;
}