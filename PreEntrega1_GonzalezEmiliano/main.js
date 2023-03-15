let carrito = 0

do {

    let name = prompt('Hola, ingresa tu nombre por favor: ')
    let choice = prompt('Bienvenido a nuestra tienda ' + name + '. Por favor selecciona un articulo: \n 1) Teclado USD140 \n 2) Mouse USD67  \n 3) Monitor USD415 \n 4) Tarjeta de video USD899 \n O presiona ESC para salir.')

    while (choice != '7') {
        
        switch (choice) {

            case '1':
                alert('Teclado anadido al carrito, USD 140')
                carrito = carrito + 140
                choice = prompt('Desea seguir comprando? \n 6) Si \n 7) No')
                break;

            case '2':
                alert('Mouse anadido al carrito, USD 67')
                carrito = carrito + 67
                choice = prompt('Desea seguir comprando? \n 6) Si \n 7) No')
                break;

            case '3':
                alert('Monitor anadido al carrito, USD 415')
                carrito = carrito + 415
                choice = prompt('Desea seguir comprando? \n 6) Si \n 7) No')

                break;

            case '4':
                alert('Tarjeta de video anadido al carrito, USD 899')
                carrito = carrito + 899
                choice = prompt('Desea seguir comprando? \n 6) Si \n 7) No')

                break;

            case '5':
                alert(carrito)

                break;

            case '6':
                prompt("Por favor selecciona un articulo: \n 1) Teclado USD140 \n 2) Mouse USD67  \n 3) Monitor USD415 \n 4) Tarjeta de video USD899 \n O presiona ESC para salir.")
                choice = prompt('Desea seguir comprando? \n 6) Si \n 7) No')

                break;

            default:
                break;
        }
        alert('Total USD: ' + carrito)

    }


} while (choice != "ESC")