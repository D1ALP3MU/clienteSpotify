export function pintarCanciones(canciones){
    let fila = document.getElementById("fila");
    fila.innerHTML = "";

    canciones.tracks.forEach(function(cancion){

        let columna = document.createElement("div");
        columna.classList.add("col");

        let imagen = document.createElement("img");
        imagen.classList.add("img-fluid", "w-100");
        imagen.src = cancion.album.images[0].url;

        let nombre = document.createElement("h4");
        nombre.classList.add("fw-bold", "text-dark", "text-center");
        nombre.textContent = cancion.name;

        let popularidad = document.createElement("h6");
        popularidad.classList.add("text-dark", "text-center");
        popularidad.textContent = cancion.popularity;

        let nombreAlbum = document.createElement("h5");
        nombreAlbum.classList.add("fw-bold", "text-dark", "text-center");
        nombreAlbum.textContent = cancion.album.name;

        let anioLanzamiento = document.createElement("h4");
        anioLanzamiento.classList.add("fw-bold", "text-center");
        anioLanzamiento.textContent = cancion.album.release_date;
    
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100", "shadow", "text-center");

        let audio = document.createElement("audio");
        audio.classList.add("w-100");
        audio.setAttribute("controls", "controls");
        audio.src = cancion.preview_url;

        //PADRES E HIJOS
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(audio);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(nombreAlbum);
        tarjeta.appendChild(anioLanzamiento);
        tarjeta.appendChild(popularidad);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);

    })

}