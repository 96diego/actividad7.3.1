const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const terminos = document.getElementById("terminos");
const boton = document.getElementById("regBtn");

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

boton.addEventListener("click",()=>
{
    if(nombre.checkValidity()&& apellido.checkValidity() && email.checkValidity() && password1.checkValidity() && password2.checkValidity() && terminos.checkValidity() && password1.value===password2.value)
    {
            showAlertSuccess();
    }
    else{showAlertError()};
    console.log(password1,password2);
}
)





