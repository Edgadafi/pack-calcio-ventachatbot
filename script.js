// script.js - Funcionalidad del formulario para WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm'); // Asegúrate de que tu form tenga este ID

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue

            // Obtén los valores del formulario (AJUSTA LOS IDs SEGÚN TU HTML)
            const nombre = document.getElementById('nombre').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const ciudad = document.getElementById('ciudad').value;

            // Número de Twilio - ¡REMPLAZA ESTO CON TU NÚMERO REAL!
            const numeroTwilio = '5215559607277'; // EJEMPLO: cambia por tu número de Twilio

            // Mensaje predefinido (SEÑAL CLAVE para tu Chatbot)
            const mensaje = `🚀 *NUEVA RESERVA desde Landing Page* 🚀
Nombre: ${nombre}
WhatsApp: ${whatsapp}
Ciudad: ${ciudad}
Producto: Pack de 3 Huesos de Jibia (300g)
--------------------------
¿Confirmas esta reserva?`;

            // Codifica el mensaje para URL y abre WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroTwilio}?text=${encodeURIComponent(mensaje)}`;
            window.open(urlWhatsApp, '_blank');

            // Mensaje de confirmación en la página (opcional)
            alert('¡Perfecto! Se abrirá WhatsApp para que envíes tu reserva. Solo dale "Enviar".');
        });
    } else {
        console.error("No se encontró el formulario con id 'reservationForm'");
    }
});
