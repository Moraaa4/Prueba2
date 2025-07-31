document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATOS DE LOS ARTÍCULOS ---
    const articulos = [
        { nombre: "producto 1", rating: 4.9 },
        { nombre: "producto 2", rating: 4.7 },
        { nombre: "producto 3", rating: 4.8 },
        { nombre: "producto 4", rating: 4.5 },
        { nombre: "producto 5", rating: 5.0 },
        { nombre: "producto 6", rating: 4.6 }
    ];

    // --- 2. ORDENAR LOS ARTÍCULOS POR RATING (DE MAYOR A MENOR) ---
    const articulosOrdenados = articulos.sort((a, b) => b.rating - a.rating);

    // --- 3. PREPARAR DATOS PARA CHART.JS ---
    // Chart.js necesita un array de etiquetas (labels) y un array de datos (data).
    const labels = articulosOrdenados.map(articulo => articulo.nombre);
    const data = articulosOrdenados.map(articulo => articulo.rating);

    // --- 4. CONFIGURAR Y CREAR LA GRÁFICA ---
    const ctx = document.getElementById('graficaResenas').getContext('2d');

    const miGrafica = new Chart(ctx, {
        // Tipo de gráfica
        type: 'bar', // Puede ser 'line', 'pie', 'doughnut', etc.

        // Los datos para el dataset
        data: {
            labels: labels, // Nombres de los productos en el eje X
            datasets: [{
                label: 'Puntuación (sobre 5)',
                data: data, // Puntuaciones para la altura de las barras
                // Colores de fondo para cada barra
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                // Colores del borde para cada barra
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },

        // Opciones de configuración de la gráfica
        options: {
            responsive: true, // Hace que la gráfica se ajuste al tamaño del contenedor
            maintainAspectRatio: false, // Permite que el CSS controle la proporción
            plugins: {
                legend: {
                    display: false // Ocultamos la leyenda porque el título es claro
                },
                title: {
                    display: true,
                    text: 'Ranking de Artículos por Reseña',
                    font: {
                        size: 18
                    }
                }
            },
            scales: {
                y: { // Configuración del eje Y (vertical)
                    beginAtZero: true, // El eje empieza en 0
                    max: 5, // El valor máximo del eje es 5
                    title: {
                        display: true,
                        text: 'Puntuación'
                    }
                },
                x: { // Configuración del eje X (horizontal)
                    title: {
                        display: true,
                        text: 'Artículo'
                    }
                }
            }
        }
    });
});