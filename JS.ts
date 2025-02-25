
class TourDestino extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const nombre = this.getAttribute('nombre');
        const imagen = this.getAttribute('imagen');
        const descripcion = this.getAttribute('descripcion');

        shadow.innerHTML = `
            <style>
                .destino-card {
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    padding: 10px;
                    text-align: center;
                    background-color: #f9f9f9;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .destino-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                }
                .destino-card img {
                    max-width: 100%;
                    width: 100%; /* Ajusta el tamaño de la imagen */
                    height: auto;
                    border-radius: 10px;
                }
                .destino-card h3 {
                    margin: 10px 0;
                    font-size: 1.2em;
                    color: #056ec9; /* Color azul para el título */
                }
                .destino-card p {
                    font-size: 0.9em;
                    color: #555;
                }
            </style>
            <div class="destino-card">
                <img src="${imagen}" alt="${nombre}">
                <h3>${nombre}</h3>
                <p>${descripcion}</p>
            </div>
        `;
    }
}


customElements.define('tour-destino', TourDestino);


document.addEventListener('DOMContentLoaded', () => {
    const contactoBtn = document.getElementById('contactoBtn');
    if (contactoBtn) {
        contactoBtn.addEventListener('click', () => {
            alert('Gracias por contactarnos. Pronto nos comunicaremos contigo.');
        });
    }
});
