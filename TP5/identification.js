function login(){
    var login = document.getElementById("t1").value;
    var password = document.getElementById("h1").value;
    if (login == "admin" && password == "admin")
    { 
    window.location.href="oui.html";
    document.write("So long Gay Bowser");
    document.body.style.backgroundColor="green";
     }
     else {
    alert("identifiants non reconnus");
    window.location.href="non.html";
    document.write("vous etes gay");
    document.body.style.backgroundColor="red";
    
     }
     }
    
     function retour(){
    window.location.href="mission.html";
     }