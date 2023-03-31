do {

    let name = prompt('Hola, ingresa tu nombre por favor: ')
    let saludo = 'Bienvenido a nuestra tienda ' + name + '. \nPor favor selecciona un articulo: \n 1) Teclado USD140 \n 2) Mouse USD67  \n 3) Monitor USD415 \n 4) Tarjeta de video USD899 \n O presiona ESC para salir.'
    let choice = ''
    let carrito = 0

    while (choice !== '6' && choice !== 'ESC') {

        choice = prompt(saludo)

        switch (choice) {

            case '1':
                alert('Teclado anadido al carrito, USD 140')
                carrito = carrito + 140
                choice = prompt('Desea seguir comprando? \n5)Si \n6)No')
                break;

            case '2':
                alert('Mouse anadido al carrito, USD 67')
                carrito = carrito + 67
                choice = prompt('Desea seguir comprando? \n5)Si \n6)No')
                break;

            case '3':
                alert('Monitor anadido al carrito, USD 415')
                carrito = carrito + 415
                choice = prompt('Desea seguir comprando? \n5)Si \n6)No')
                break;

            case '4':
                alert('Tarjeta de video anadido al carrito, USD 899')
                carrito = carrito + 899
                choice = prompt('Desea seguir comprando? \n5)Si \n6)No')
                break;

        }

    }
    if (choice == '6') {
        alert('Gracias por tu compra ' + name + '!\n' + "Total USD " + carrito + '.' + '\n ' + 'En breves te llegará un email confirmando tu compra.')

    } else {
        alert('Compra cancelada :(')

    }

} while (choice != "ESC")
