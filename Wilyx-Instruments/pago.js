document.getElementById("formPago").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const metodoPago = document.getElementById("metodoPago").value;

    if (metodoPago === "tarjeta") {
        const numeroTarjeta = document.getElementById("numeroTarjeta").value;
        if (!numeroTarjeta || numeroTarjeta.length !== 16) {
            alert("Ingrese un número de tarjeta válido.");
            return;
        }
    }

    alert(`Gracias por tu compra, ${nombre}.`);// estaria bueno algo mejor que un alert, pero no se como!
    localStorage.clear();
    window.location.href = "index.html";
});

document.getElementById("metodoPago").addEventListener("change", (e) => {
    document.getElementById("detallesTarjeta").style.display = e.target.value === "tarjeta" ? "block" : "none";
});

document.getElementById("volverCarrito").addEventListener("click", () => {
    window.location.href = "index.html";
});
