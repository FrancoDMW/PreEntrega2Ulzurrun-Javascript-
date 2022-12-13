var salida = 1;
var controlador = 0;
let cantidad = prompt("Ingrese la cantidad de mangas que quiere registrar: ")
const mangas = new Array (cantidad);
prompt("A continuacion agrege sus datos para crear su cuenta")
let nombreU = prompt("Nombre: ")
let dniU = prompt("DNI: ")
usuario = new Usuario (nombreU, dniU, 0)
prompt("¡Bienvenido " + usuario.nombre + "!")
do{
    var opcion1 = prompt("1 - Administrar mangas \n2 - Administrar cuenta \n3 - Comprar mangas \n4 - Salir")
    switch(opcion1){
        case '1':
            do{
                var opcion2 = prompt("1 - Agregar manga \n2 - Buscar manga \n3 - Ver mangas \n4 - Salir")
                switch(opcion2){
                    case '1':
                        if(controlador<cantidad){
                            let nombre = prompt("Nombre de manga:")
                            let genero = prompt("Genero de manga:")
                            let precio = prompt("Precio de manga:")
                            var posicion = controlador
                            mangas[controlador] = new Manga(nombre, genero, precio, posicion)
                            controlador++
                        }
                        if(controlador>=cantidad){
                            prompt("Ya no hay más lugar para agregar mangas")
                        }
                        break;
                    case '2':
                            let nombreBuscar = prompt("Ingrese el nombre del manga que busca: ")
                            var x = 0
                            for(i = 0; i<cantidad; i++){
                                if(mangas[i]!=null){
                                    if(nombreBuscar==mangas[i].nombre){
                                        prompt("Nombre:" + mangas[i].nombre + "\nGenero: " + mangas[i].genero + "\nPrecio: " + mangas[i].precio);
                                        x = 1
                                        break;
                                    }
                                }  
                            }
                            if(x==0){
                                prompt("Error: no se encontro ese nombre")
                            }
                            break;
                    case '3':
                        if(controlador!=0){
                            for(var i = 0; i<=posicion; i++){
                                prompt("Nombre:" + mangas[i].nombre + "\nGenero: " + mangas[i].genero + "\nPrecio: " + mangas[i].precio);
                            }
                            break;
                        }
                        else{
                            prompt("Error! no hay mangas cargados")
                        }
                        break;
                    case '4':
                        break;
                }
            }while(opcion2!=4)
            break;
        case '2':
            do{
                var opcion2 = prompt("1 - Agregar Saldo \n2 - Ver Datos \n3 - Salir")
                switch (opcion2){
                    case '1':
                            let saldoString = prompt("Ingrese su saldo a depositar: ")
                            let saldo = parseInt(saldoString)
                            usuario.dinero = usuario.dinero + saldo;
                            prompt("Cargado exitosamente! su saldo es de: " + usuario.dinero);
                        break;
                    case '2':
                            prompt("Nombre: " + usuario.nombre + "\nDNI: " + usuario.dni + "\nSaldo: " + usuario.dinero)
                        break;
                    case '3':
                        break;
                }

            }while (opcion2!=3)
            break;
        case '3':
            if (controlador != 0){
                for (i = 0; i<cantidad; i++){
                    for(i = 0; i<cantidad; i++){
                        if(mangas[i]!=null){
                            prompt("Nombre: " + mangas[i].nombre + "\nGenero: " + mangas[i].genero + "\nPrecio: " + mangas[i].precio)
                        }   
                    }
                let nombreManga = prompt("Ingrese el nombre del Manga que quiere comprar: ")
                    for (i = 0; i<cantidad; i++){
                        if(mangas[i]!=null){
                            if(mangas[i].nombre == nombreManga){
                                if(mangas[i].precio<usuario.dinero){
                                    usuario.dinero = usuario.dinero - mangas[i].precio;
                                    prompt("¡Usted ha comprado el manga satisfactoriamente!")
                                    break;
                                }
                                else{
                                    prompt("¡Error! no posee el dinero suficiente para esta compra")
                                    break;
                                }
                                
                            }
                            else{
                                prompt("¡Error! no existe un manga con ese nombre")
                            }
                        }  
                    }
                }
            }
            else{
                prompt("Error! no hay mangas cargados")
            }
            
            break;
        case '4':
            break;
    }

}while(opcion1!=4)


function Manga(nombre, genero, precio, id){
    this.nombre = nombre;
    this.genero = genero;
    this.precio = precio;
    this.id = id;
}

function Usuario(nombre, dni, dinero){
    this.nombre = nombre;
    this.dni = dni;
    this.dinero = dinero;
}

