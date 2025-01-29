const sideColumn = document.getElementsByTagName("column-66");
console.log(sideColumn);

sideColumn.addEventListener("mouseover", function(e){
    if(sideColumn.style.display === 'none'){
        sideColumn.style.display = 'block';
    }
    else{
        sideColumn.style.display = "none";
    }




});