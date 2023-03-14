let usr = prompt("Usuario")
let psw = prompt('Contrasena')

if(usr == 'emi' && psw == '1234'){
    alert("Bienvenido "+usr)
    
}else if(usr == 'emi' && psw != '1234') {
    alert(usr+" contrasena incorrecta brodi")
    
}else if(usr != 'emi' || psw == '1234') {
    alert("usuario incorrecto")
    
}
