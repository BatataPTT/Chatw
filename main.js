function myFunc(event) {
        event.preventDefault();
        
        var user = document.getElementById("username").value;
        
        localStorage.setItem('Usuario', user);
        
        location.href="fórum (1).html";
    }
