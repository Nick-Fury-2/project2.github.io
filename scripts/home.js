function xpand() {
    document.getElementById('menu').style.width= '280px';
    setTimeout(myFunction, 200);
}

function collaps(){
    for(var i=0;i<6;i++){
        document.getElementsByClassName('txt')[i].style.display = 'none';
    }
    document.getElementById('menu').style.width= '90px';
}

function myFunction(){
    for(var i=0;i<6;i++){
        document.getElementsByClassName('txt')[i].style.display = 'inline';
    }
}
function addTask(){
    const t = document.getElementById('title').value;
    const d = document.getElementById('description').value;
    const card = "<div class=\"card text-white bg-success mb-3\" style=\"max-width: 18rem!important; width:300px;height: 200px;margin-right: 40px;\">\n" +
        "  <div class=\"card-header\">Task</div>\n" +
        "  <div class=\"card-body\">\n" +
        "    <h5 class=\"card-title\" id=\"ttl\"></h5>\n" +
        "    <p class=\"card-text\" id=\"des\"></p>\n" +
        "  </div>\n" +
        "</div>";
    document.getElementById('addedCards').innerHTML+=card;
    document.getElementById('ttl').innerHTML=t;
    document.getElementById('des').innerHTML=d;
    return;
}