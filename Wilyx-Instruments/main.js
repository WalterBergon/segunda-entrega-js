document.getElementById("carritoIcon").addEventListener("click", () => {
    document.getElementById("carrito").classList.toggle("active");
});

document.getElementById("cerrarCarrito").addEventListener("click", () => {
    document.getElementById("carrito").classList.remove("active");
});

let Carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productosLibreria = [
    { id: 1, nombre: "Guitarra Electrica EpiPhone Sg Standard", categoria: "Eléctricas", img: "assets/Guitarras electricad/Guitarra Electrica EpiPhone Sg Standard Heritage Cherry.jpg", precio: 1800 },
    { id: 2, nombre: "Guitarra Electrica EpiPhone Uptown Kat Blue", categosria: "Eléctricas", img: "assets/Guitarras electricad/Guitarra Electrica EpiPhone Uptown Kat Es Archtop Blue Azul.jpg", precio: 2800 },
    { id: 3, nombre: "Guitarra Electrica Esp Ltd F50 Ext Black Cherry", categoria: "Eléctricas", img: "assets/Guitarras electricad/Guitarra Electrica Esp Ltd F50 Ext Black Cherry.jpg", precio: 2750 },
    { id: 4, nombre: "Guitarra Electrica Gibson Les Paul Tribute Satin", categoria: "Eléctricas", img: "assets/Guitarras electricad/Guitarra Electrica Gibson Les Paul Tribute Satin Iced Tea.jpg", precio: 3100 },
    { id: 5, nombre: "Guitarra Electrica Ibanez Grx40ca Serie Gio", categoria: "Eléctricas", img: "assets/Guitarras electricad/Guitarra Electrica Ibanez Grx40ca Serie Gio Candy Apple.jpg", precio: 1700 },
    { id: 6, nombre: "GuiGuitarra Eléctrica Ibanez Jem Jr Wh  Steve", categoria: "Eléctricas", img: "assets/Guitarras electricad/Guitarra Eléctrica Ibanez Jem Jr Wh Modelo Signature Steve.jpg", precio: 2200 },
    { id: 7, nombre: "Guitarra Electrica Ibanez Rg470dxsfm 24 ", categoria: "Eléctricas", img: "assets/Guitarras electricad/Guitarra Electrica Ibanez Rg470dxsfm 24 Trastes Con Palanca.jpg", precio: 1600 },
    { id: 8, nombre: "Guitarra Fender 014-9912 Stratocaster Vintera", categoria: "Eléctricas", img: "assets/Guitarras electricad/Guitarra Fender 014-9912-372 Stratocaster Vintera Series 50.jpg", precio: 2850 },
    { id: 9, nombre: "Cort Ad880-ns Guitarra Acustica Dreadnought", categoria: "Acústicas", img: "assets/Guitarras acusticas/Cort Ad880-ns Guitarra Acustica Dreadnought.jpg", precio: 1200 },
    { id: 10, nombre: "Guitarra Acustica EpiPhone Starling", categoria: "Acústicas", img: "assets/Guitarras acusticas/Guitarra Acustica EpiPhone Starling Color Bordo.jpg", precio: 1900 },
    { id: 11, nombre: "Guitarra Electroacustica EpiPhone Pr-5e", categoria: "Acústicas", img: "assets/Guitarras acusticas/Guitarra Electroacustica EpiPhone Pr-5e Natural.jpg", precio: 1750 },
    { id: 12, nombre: "Guitarra Electrocústica Yamaha Fsx800c", categoria: "Acústicas", img: "assets/Guitarras acusticas/Guitarra Electrocústica Yamaha Fsx800c-sb Sand Burst.jpg", precio: 1830 },
    { id: 13, nombre: "Amplificador De Guitarra Pre Valvular Laney", categoria: "Aplificadores", img: "assets/Amplificadores/Amplificador De Guitarra Pre Valvular Laney Lv300 120w 1x12.jpg", precio: 800 },
    { id: 14, nombre: "GAmplificador Marshall Dsl40c Valvular 40w", categoria: "Aplificadores", img: "assets/Amplificadores/Amplificador Marshall Dsl40c Valvular 40w.jpg", precio: 1350 },
    { id: 15, nombre: "Amplificador Valvular Vox 15w Con Celestion Greenback Ac15", categoria: "Aplificadores", img: "assets/Amplificadores/Amplificador Valvular Vox 15w Con Celestion Greenback Ac15c1.jpg", precio: 1200 },
    { id: 16, nombre: "Cabezal Totalmente Valvular Orange Th30 30 Watts", categoria: "Aplificadores", img: "assets/Amplificadores/Cabezal Totalmente Valvular Orange Th30 30 Watts.jpg", precio: 2000 },
    { id: 17, nombre: "Pedal Boss Ds1x Guitarra Electrica Roland Ds-1x", categoria: "Pedales", img: "assets/Pedales/Pedal Boss Ds1x Guitarra Electrica Roland Ds-1x Distorsion.jpg", precio: 600 },
    { id: 18, nombre: "Pedal De Reverb Boss Rv-6 8 Modos", categoria: "Pedales", img: "assets/Pedales/Pedal De Reverb Boss Rv-6 8 Modos De Efecto.jpg", precio: 750 },
    { id: 19, nombre: "Pedal Jim Dunlop Sw95 Slash Signature Cry Baby Wah", categoria: "Pedales", img: "assets/Pedales/Pedal Jim Dunlop Sw95 Slash Signature Cry Baby Wah.jpg", precio: 800 },
    { id: 20, nombre: "GPedal Keeley Seafoam Plus Chorus -chorus", categoria: "Pedales", img: "assets/Pedales/Pedal Keeley Seafoam Plus Chorus -chorus, Double Chorus, Adt.jpg", precio: 960 },
    { id: 21, nombre: "Afinador Korg Ga-2 De Guitarra", categoria: "Otros", img: "assets/correas-cables-otros/Afinador Korg Ga-2 De Guitarra y bajo.jpg", precio: 500 },
    { id: 22, nombre: "Capotraste G7th 6st Performance 3 Art Gold Guitarra", categoria: "Otros", img: "assets/correas-cables-otros/Capotraste G7th 6st Performance 3 Art Gold Guitarra.jpg", precio: 480 },
    { id: 23, nombre: "Dimarzio Llave Ep1104 Llave De 5 Posiciones", categoria: "Otros", img: "assets/correas-cables-otros/Dimarzio Llave Ep1104 Llave De 5 Posiciones  Stratocaster.jpg", precio: 230 },
    { id: 24, nombre: "Puas X12 Jim Dunlop Jh-pt02m Hendrix Med- Bold As Love", categoria: "Otros", img: "assets/correas-cables-otros/Puas X12 Jim Dunlop Jh-pt02m Hendrix Med- Bold As Love.jpg", precio: 350 },
];

const productos = document.getElementById("productos");
const productosCarrito = document.getElementById("productosCarrito");
const total = document.getElementById("total");
const carritoIcon = document.getElementById("carritoIcon");
const botonQueLimpia = document.getElementById("botonQueLimpia");

function botonesComprar() {
    const botones = document.getElementsByClassName("botonesCompra");
    const arrayBotones = Array.from(botones);

    arrayBotones.forEach(el => {
        el.addEventListener("click", (evento) => {
            const nombre = evento.target.parentElement.children[0].innerText;
            const precio = Number(evento.target.parentElement.children[2].children[0].innerText);

            const productoABuscar = Carrito.find(el => el.nombre === nombre);

            if (productoABuscar) {
                productoABuscar.cantidad++;
            } else {
                Carrito.push({ nombre, precio, cantidad: 1 });
            }

            actualizadoraCarrito();
        });
    });
}

function actualizadoraCarrito() {
    productosCarrito.innerHTML = "";
    Carrito.forEach((el, index) => {

        const producto = productosLibreria.find(p => p.nombre === el.nombre);

        productosCarrito.innerHTML += `
            <div class="producto">
                ${producto ? `<img src="${producto.img}" alt="${producto.nombre}" class="miniatura">` : ""}
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio}</p>
                <p>Cantidad: ${el.cantidad}</p>
                <button class="aumentarCantidad" data-index="${index}">+</button>
                <button class="disminuirCantidad" data-index="${index}">-</button>
            </div>
        `;
    });

    total.innerText = `Total: $${Carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)}`;
    carritoIcon.children[0].innerText = Carrito.reduce((acc, el) => acc + el.cantidad, 0);

    localStorage.setItem("carrito", JSON.stringify(Carrito));

    agregarEventosCantidad();
}


function agregarEventosCantidad() {
    const botonesAumentar = document.getElementsByClassName("aumentarCantidad");
    const botonesDisminuir = document.getElementsByClassName("disminuirCantidad");

    Array.from(botonesAumentar).forEach(boton => {
        boton.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            Carrito[index].cantidad++;
            actualizadoraCarrito();
        });
    });

    Array.from(botonesDisminuir).forEach(boton => {
        boton.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            if (Carrito[index].cantidad > 1) {
                Carrito[index].cantidad--;
            } else {
                Carrito.splice(index, 1);
            }
            actualizadoraCarrito();
        });
    });
}

document.getElementById("botonQueLimpia").addEventListener("click", () => {
    Carrito = [];
    localStorage.clear();
    actualizadoraCarrito();
});

document.getElementById("botonPagar").addEventListener("click", () => {
    if (Carrito.length > 0) {
        window.location.href = "pago.html";
    } else {
        alert("El carrito está vacío.");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    productosLibreria.forEach(el => {
        productos.innerHTML += `
            <div id="${el.id}" class="producto">
                <h3>${el.nombre}</h3>
                <div class="img"><img src="${el.img}" alt=""></div>
                <p>Precio: $<span>${el.precio}</span></p>
                <p>Categoría: ${el.categoria}</p>
                <button class="botonesCompra">Comprar</button>
            </div>
        `;
    });
    botonesComprar();
    actualizadoraCarrito();
});