let saludo = alert("Bienvenido a mi web")
let name = parseInt(prompt("Ingresa tu nombre: "))
let edad = parseInt(prompt("Ingresa tu edad(tenes que ser mayor): "))

if(edad >=18 ){
    prompt('Muy bien! ' + "Sos mayor bienvenido! Saluda!")
    const result = 2;
    do{
        cuentaUser = prompt("Decime cuanto es 2 + 2 - 2 + 2")
    }while(cuentaUser!= result)
    alert("Bien ahi!!")
}
else if(edad < 18){
    alert("perdon pero debes tener al menos 18 años para ingresar")
}