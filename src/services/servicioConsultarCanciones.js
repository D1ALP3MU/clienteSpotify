//1.Si yo quiero consumir un API debo saber para donde ir y a qué sevicio
//DEBO CONFIGURAR LA URI
let URI = "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN/top-tracks?market=US";

let buscar = document.getElementById("buscar") 
buscar.addEventListener("click", function(evento){
   
    evento.preventDefault();
    let artista = document.getElementById("artista").value;
    console.log(artista);
    URI = `https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`;

    //2. Configuro datos especiales o de CONTROL en el servidor
    const TOKEN = "Bearer BQAgnM-ykJrxljZU0UfMCiMHN1dv1HkJJvp3unbXbXll2rCLAuIqtlPEp-WZO76irp3kzIkt1_bo0ldcYyssP-YQ_XQXI9Xp6YmbxW4QZ2jYb8yXFfudGtxvqK6MLE-8WsiwJPXzb7cN_L21rZ6Z5JIOmcimYoC65oJTu3PpHCUGavKVcxQl53odWiv3US3tvqo";

    //3. Configuro la petición 
    //NOTA: SOLO POST Y PUT CONFIGURAN BODY 
    //PARA JS LA PETICIÓN ES UN OBJETO 
    const PETICION = {
        method: "GET",
        headers: {Authorization: TOKEN}
    }

    fetch(URI, PETICION)
    .then(function (respuesta){
        return respuesta.json(); //Garantizo formato JSON
    })
    .then(function(respuesta){
        console.log(respuesta); // Hago lo que quiera con respuesta
        console.log(respuesta.tracks); // Accedo  a un atributo de la respuesta
        
        //Recorrer el arreglo
        let fila = document.getElementById("fila");
        fila.innerHTML = "";
        respuesta.tracks.forEach(function(cancion){
            /*console.log(cancion)
            console.log(cancion.name)
            console.log(cancion.preview_url)
            console.log(cancion.album.images[0].url)
            console.log(cancion.popularity)
            console.log(cancion.album.name)
            console.log(cancion.album.release_date)*/

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

    })
    .catch(function(respuestaError){
        console.log(respuestaError);
    })
    

})


//RECETA PARA CONSUMIR APIS CON JS PURO


//4. ARRANQUE PUES PA
//CONSUMA EL API
