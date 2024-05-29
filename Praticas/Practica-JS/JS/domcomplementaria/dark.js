let respuestaDark = document.querySelector(".respuesta");


let darkMode = confirm("¿Querés aplicar dark mode en el sitio?");

if (darkMode) {
    
    document.body.backgroundColor = "#444"; 
    document.body.color = "#fff"; 
    respuestaDark.textContent = "Dark Mode activado";
} else {
    respuestaDark.textContent = "Ok. Lo activo en otro momento.";
}

