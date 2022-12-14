let artistas = [
    {
        foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/alan-walker1.jpg?alt=media&token=617cf3b1-44e4-4213-8909-965fa17c3c36", 
        historia: "Alan Walker es un productor y DJ nacido en Inglaterra y con nacionalidad noruega que se dio a conocer principalmente a raíz de su tema \"Faded\", en 2015, por el que recibió certificaciones de platino en diferentes países y que alcanzó los 1300 millones de reproducciones en Youtube. En la actualidad está considerado como uno de los artistas más relevantes del momento en el panorama de la música electrónica."
    },
    {
        foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/aventura.jpg?alt=media&token=91baff73-f578-413d-9fdd-9e192547d243", 
        historia: "Aventura es una agrupación Dominicana de bachata fundada por Anthony \"Romeo\" Santos, Lenny Santos, Max Agende Santos y Henry Santos en la República Dominicana. Son considerados como uno de los grupos latinos más influyentes de todos los tiempos. El grupo fue parte integral de la evolución de la música bachata y son los pioneros del sonido moderno de la bachata. Aventura lanzó cinco álbumes de estudio en una década, creando muchos éxitos como \"Cuando Volverás\", \"Un Beso\", \"Mi Corazoncito\", \"Los Infieles\", \"El Perdedor\", \"Por Un Segundo\", \"Dile Al Amor\", entre otros."
    },
    {
        foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/JBalvin.jpg?alt=media&token=b303de85-2e8c-41c6-b181-7725d14e0e7f", 
        historia: "José Álvaro Osorio Balvin, quien se conoce como J Balvin, es cantante de música urbana nacido en Colombia. Durante sus estudios secundarios en Medellín formó parte de bandas de rock. Viajó a Estados Unidos en un intercambio cultural. Allí aprendió inglés y conoció el hip hop, estilo que provocaría un giro rotundo en su manera de relacionarse con la música."
    },
    {
        foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/Ozuna.webp?alt=media&token=2aadc9a6-272f-4452-b11c-32b5b382d998", 
        historia: "Juan Carlos Ozuna Rosado es un cantante domínico-puertorriqueño de reggaetón y trap, conocido en el mundo musical por su nombre artístico Ozuna. Nació el 13 de marzo de 1992 en San Juan, Puerto Rico y es hijo de padres dominicanos. Mostró su interés por la música desde que tenía 12 años, cuando empezó a realizar composiciones de canciones, lo que lo motivó a prepararse para cumplir el sueño de ser cantante y ser reconocido en el mundo musical."
    },
    {
        foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/ryan_castro.jpg?alt=media&token=927b2fee-df5c-4a29-9b2b-ea826f30e96c", 
        historia: "Bryan Castro Sosa (14 de enero de 1994), más conocido como Ryan Castro, es un cantante y compositor colombiano del género urbano. En 2017 incursionó en la música con el sencillo Morena. Más tarde se dio a conocer apadrinado por Kevin Roldan. Entre sus canciones se destacan: Dime, 1994, Lejanía, Chupable y Medellín. En la actualidad, Castro es considerado una de las nuevas caras del llamado reggaetón de barrio."
    },
    {
        foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/dario_gomez.jpg?alt=media&token=9a3b823c-e8ae-47ff-bdf6-066126e6d4ef", 
        historia: "Darío de Jesús Gómez Zapata (6 de febrero de 1951 – 26 de julio de 2022) fue un cantante y compositor de música popular colombiana, conocido artísticamente por el apodo de El Rey del Despecho. Fue, junto con Galy Galiano, Luis Alberto Posada y El Charrito Negro, uno de lo grandes interpretes de la música popular colombiana. Inició su carrera en década de 1970, cuando creó el grupo llamado Los Legendarios. Su primer gran éxito fue “Ángel perdido”. En el año 1985, debutó en solitario con “Decídelo”. Cuatro después alcanzó la fama con “Nadie es eterno el mundo”,  tal vez el mayor éxito de su carrera artística. También compuso canciones como “La oveja negra”, “El hijo del amor”,  “Corazón resentido”,  “Sobreviviré”, “No puedo vivir sin ti” y “Entre comillas”."
    },
    {
        foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/marcAntony.jpg?alt=media&token=720fbf8e-c76e-4f4d-b8d8-46311bb3ceff", 
        historia: "Marco Antonio Muñiz Rivera (Nueva York; 16 de septiembre de 1968), más conocido por su nombre artístico Marc Anthony, es un cantautor y actor puertorriqueño-estadounidense, cuyas canciones van desde la salsa, pasando por el bolero, la balada y el pop. Empezó su trayectoria discográfica en los géneros del hip hop con el dúo Little Louie & Marc Anthony, llegando al N.º 1 de las listas estadounidenses en 1991. Ralph Mercado lo contrató para su sello RMM en esa fecha y lo lanzó cantando salsa, consiguiendo un gran éxito que duró años, desde su primer sencillo con la canción \"Hasta que te conocí\" de Juan Gabriel que fue N.º 1 en ventas."
    },
    {
        foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/Kraken.jpg?alt=media&token=8dc76a13-f0bf-4a8a-8683-7f01ebe0224e", 
        historia: "Agrupación colombiana fundada en 1984 de tendencia Hard Rock, Rock and Roll y Rock Progresivo. Ha grabado hasta el momento 9 álbumes y realizado giras en su país e internacionalmente grandes conciertos en Venezuela, Ecuador, Bolivia, Argentina, Mexico y Estados Unidos de América."
    },
    {
        foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/vicente-fernandez.jpg?alt=media&token=6b0821d6-437f-407e-b1b6-a7b2f12d850c", 
        historia: "Vicente Fernández, (17 de febrero de 1940 – 12 de diciembre de 2021) también conocido como “chente” es un cantante mexicano de música ranchera, quien después de la muerte de José Alfredo Jiménez se convirtió en un ídolo y referente indiscutible en ese género musical gracias a sus producciones musicales. También es reconocido por ser empresario, actor y productor de música."
    },
    {
        foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/silvestre.jpg?alt=media&token=aff87670-614e-4068-ad46-5d4eb3d58ab9", 
        historia: "Silvestre Francisco Dangond Corrales, cantante de música vallenata, nació en el municipio de Urumita, La Guajira, Colombia, el 12 de mayo de 1980. Es hijo del cantante William José \"El Palomo\" Dangond Baquero, quien a mediados de la década de los 70s, hiciese pareja musical con Andrés “El Turco” Gil, dejando en el recuerdo diez sencillos y un trabajo musical completo. Su madre, Dellys Corrales Rojas, también nació en el seno de una familia con vocación musical."
    }
]

artistas.forEach(function(artista){
    let nombreArtista = document.getElementById("nombreArtista");
    let historiaArtista = document.getElementById("historiaArtista");

    historiaArtista.textContent = artista.historia;

})