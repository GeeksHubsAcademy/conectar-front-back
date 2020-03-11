const peliculasContainer=document.querySelector('main.peliculas');
document.getElementById('apiButton').addEventListener('click', event => {

    axios.get('http://localhost:3000/')
        .then(res => {
            document.querySelector('.respuestaExpress').innerText=res.data
        })


    fetch('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query=' + 'pokémon')
        .then(res => res.json())
        .then(res => {
            const peliculas = res.results;
            peliculasContainer.innerHTML = '';
            const baseImgUrl = 'https://image.tmdb.org/t/p/w185';
            peliculas.forEach(pelicula => {
                const imagen = pelicula.poster_path ? `
                <img src="${baseImgUrl}${pelicula.poster_path}" alt="">` : ''
                peliculasContainer.innerHTML += `
                <div class="pelicula">
                    <h3 class="title">${pelicula.title}
                </h3>
                ${imagen}
            </div>`
            })
        })

})