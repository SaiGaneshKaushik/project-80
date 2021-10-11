var name_of_the_guest_arry = [];

function submit() {
    var gust_name = document.getElementById("Enter_name").value;
    name_of_the_guest_arry.push(gust_name);
    document.getElementById("Display_names").innerHTML = name_of_the_guest_arry;
    console.log(name_of_the_guest_arry);
    var length_of_the_arry = name_of_the_guest_arry.length;
    console.log(length_of_the_arry);
}

function Show_list() {
    var i = name_of_the_guest_arry.join("<br>");
console.log(name_of_the_guest_arry);
document.getElementById("show_names").innerHTML = i.toString();
}

function sorcting() {
    name_of_the_guest_arry.sort();
    var i = name_of_the_guest_arry.join("<br>");
    console.log(name_of_the_guest_arry);
    document.getElementById("Sorted_names").innerHTML = i.toString();
}

function Search() {
    var s = document.getElementById("Search_name").value;
var found = 0;
var j;
for(j=0; j<name_of_the_guest_arry.length; j++) {
    if(s==name_of_the_guest_arry[j]){
        found = found+1;
    }
}
document.getElementById("Serch_names").innerHTML = "Name Found "+found+" Time/s";
console.log("found Name "+found+" Time/s");
}