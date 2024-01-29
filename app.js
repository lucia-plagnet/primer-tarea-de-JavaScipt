//Instrucciones: Escribe una función que genere nombres de bandas aleatorios
//y únicos cada vez que se llama. Puedes combinar palabras inusuales,
//colores extravagantes y animales exóticos para hacerlos sonar realmente
//interesantes.


var numeros = ['Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete'];

var animales = ['Perrxs', 'Gatxs', 'Culebras', 'Sapos', 'Cucarachas', 'Perezosxs'];

var caracteristicas = ['Ruidosxs', 'Cumbierxs', 'Apestosxs', 'Bonaerenses'];



function seleccionAleatoria(array) {

    var indice = Math.floor(Math.random() * array.length);

    return array[indice];

}


var nombreGenerado = `${seleccionAleatoria(numeros)} ${seleccionAleatoria(animales)} ${seleccionAleatoria(caracteristicas)}`;

console.log(nombreGenerado);


//Conversor de Emociones a Emoji:
// Instrucciones: Crea una función que tome una cadena de texto que exprese
// emociones (como "feliz", "triste", "sorprendido") y la convierta en un emoji
// correspondiente. ¡Añade una dosis de humor a tus emociones!

var emocionNombre = ['feliz', 'triste', 'enojado', 'sorprendido', 'ansioso', 'confundido', 'enamorado'];
var emocion = `${seleccionAleatoria(emocionNombre)}`;

function emojiEmocion(emocion) {

    switch (emocion) {

        case "feliz": emocion = "😄";
            return emocion;
            breack;

        case "triste": emocion = "😪";
            return emocion;
            breack;

        case "enojado": emocion = "😡";
            return emocion;
            breack;

        case "sorprendido": emocion = "😱";
            return emocion;
            breack;

        case "ansioso": emocion = "😖";
            return emocion;
            breack;

        case "confundido": emocion = "🤔";
            return emocion;
            breack;

        case "enamorado": emocion = "🥰";
            return emocion;
            breack;

        default: emocion = 'Desconozco esa emoción'
            return emocion;


    }

}

console.log(`la emocion ${emocion} se representa con el emoji ${emojiEmocion(emocion)}`)





// Generador de Historias Absurdas:
// ● Instrucciones: Desarrolla una función que genere historias absurdas
// combinando elementos inesperados, como pingüinos que hablan francés,
// robots enamorados de plantas y astronautas perdidos en el espacio con una
// mascota alienígena.

var introduccion = ['Erase una vez, un perro del tamaño de una un pueblo entero', 'Erase una vez, un auto parlanchin abanodado', 'Habia una vez, un robot estudiante de ingenieria', 'habia una vez, un pintor de creencias'];

var desarrollo = ['que solo soñaba con reencontrar su tan amado hogar:', 'que anelaba descubrir los oscuros secretos de', 'que junto a su hermano, el sapo, se embarcaban en una aventura en busca del culpable de su eterna maldiición:', 'que vivió la vida huyendo de su mayor miedo:'];

var final = ['la luna.', 'un templo en las afueras, donde habitan las comadrejas.', 'una telaraña.', 'Brad Pitt.'];


var historiaFinal = `${seleccionAleatoria(introduccion)} ${seleccionAleatoria(desarrollo)} ${seleccionAleatoria(final)}`;

console.log(historiaFinal)



// Simulador de Viaje en el Tiempo Musical:
// ● Instrucciones: Escribe una función que, dado un año, devuelva una
// recomendación de canciones populares de esa época. Puedes mezclar
// diferentes géneros y hacer recomendaciones basadas en eventos históricos
// de ese año.

var recomendacion = [{
    anho: 1900,
    canciones: '\n "The Grand Old Rag" - George M. Cohan (Música Patriótica/Marcha)\n Meet Me in St. Louis, Louis" - Billy Murray\n Maple Leaf Rag" - Scott Joplin',
    evento: 'la Exposición Universal de París en 1900. Este evento marcó la presentación de avances tecnológicos y culturales, y en el contexto musical, fue un momento en el que se destacaron diversas formas de música, incluyendo composiciones patrióticas, marchas y otras expresiones artísticas.'
},

{
    anho: 1910,
    canciones: '\n "Over There" - George M. Cohan (Música de Guerra/Popular)\n "Alexanders Ragtime Band" - Irving Berlin (Ragtime)\n "Danny Boy" - Frederic Weatherly (Canción Popular)',
    evento: 'En el ámbito musical, la tragedia del Titanic inspiró composiciones que reflejaban la conmoción y la pérdida. La canción "Nearer, My God, to Thee" fue una de las piezas musicales asociadas con el hundimiento del Titanic y se tocó durante la tragedia.'
},

{
    anho: 1920,
    canciones: '\n "Rhapsody in Blue" - George Gershwin (Jazz/Clásico)\n "Sweet Georgia Brown" - Ben Bernie (Jazz)\n "Aint Misbehavin" - Fats Waller (Jazz/Swing)',
    evento: 'La Prohibición en Estados Unidos (1920-1933) marcó el auge de los speakeasies y la música jazz.'
},
{
    anho: 1930,
    canciones: '\n "Brother, Can You Spare a Dime?" - Bing Crosby (Swing/Big Band)\n "Strange Fruit" - Billie Holiday (Jazz)\n "In the Mood" - Glenn Miller (Swing)',
    evento: 'La Gran Depresión (1929-1939) influyó en la música con temas de esperanza y desafíos.'
},
{
    anho: 1940,
    canciones: '\n "Boogie Woogie Bugle Boy" - The Andrews Sisters (Swing/Jazz)\n "White Christmas" - Bing Crosby (Canción Navideña)\n "Take the a Train" - Duke Ellington (Jazz)',
    evento: 'Fin de la Segunda Guerra Mundial en 1945, inspirando canciones de esperanza y alegría.'
},
{
    anho: 1950,
    canciones: '\n "Rock Around the Clock" - Bill Haley & His Comets (Rock and Roll)\n "Blue Suede Shoes" - Elvis Presley (Rockabilly)\n "Whatd I Say" - Ray Charles (R&B)',
    evento: 'La llegada del rock and roll y el surgimiento de la cultura juvenil.'
},

{
    anho: 1960,
    canciones: '\n "A Change Is Gonna Come" - Sam Cooke (Soul/R&B)\n "Like a Rolling Stone" - Bob Dylan (Rock/Folk)\n "I Want to Hold Your Hand" - The Beatles (Pop/Rock)',
    evento: ' Movimiento por los Derechos Civiles y la llegada de los Beatles a Estados Unidos.'
},

{
    anho: 1970,
    canciones: '\n "Whats Going On" - Marvin Gaye (Funk/Disco)\n "Stairway to Heaven" - Led Zeppelin (Rock Progresivo)\n "Superstition" - Stevie Wonder (Funk/Soul)',
    evento: 'Crisis del petróleo y auge de la música disco.'
},

{
    anho: 1980,
    canciones: '\n "Imagine" - John Lennon (Pop/Rock)\n "Billie Jean" - Michael Jackson (Pop/R&B)\n "Sweet Child of Mine" - Guns and Roses (Hard Rock)',
    evento: 'Caída del Muro de Berlín en 1989 y el auge de la música pop y el rock.'
},

{
    anho: 1990,
    canciones: '\n "Smells Like Teen Spirit" - Nirvana (Grunge/Rock Alternativo)\n "Vogue" - Madonna (Pop/Dance)\n  "No Scrubs" - TLC (R&B/Hip Hop)',
    evento: 'Fin de la Guerra Fría y auge del hip hop y la música alternativa.'
},

{
    anho: 2000,
    canciones: '\n "Hey Ya!" - OutKast (Hip Hop/Funk)\n "Beautiful Day" - U2 (Rock Alternativo)\n "Hips Dont Lie" - Shakira ft. Wyclef Jean (Pop/Latin)',
    evento: 'Ataques del 11 de septiembre de 2001 y sus consecuencias. Estos eventos impactaron significativamente en todo el mundo, dando forma a la cultura y la música de la década. La música en este período reflejó una mezcla de emociones, desde la solidaridad hasta la expresión de preocupaciones y desafíos globales.'
},

];



function recomendacionMusica(anho) {

    let decada = Math.floor(anho / 10) * 10;

    switch (decada){
    
        case(decada = 1900):  
        return recomendacion[0];
        break;

        case(decada = 1910):  
        return recomendacion[1];
        break;

        case(decada = 1920 ):  
        return recomendacion[2];
        break;

        case(decada = 1930):  
        return recomendacion[3];
        break;

        case(decada = 1940):  
        return recomendacion[4];
        break;

        case(decada = 1950):  
        return recomendacion[5];
        break;

        case(decada = 1960):  
        return recomendacion[6];
        break;

        case(decada = 1970):  
        return recomendacion[7];
        break;

        case(decada = 1980):  
        return recomendacion[8];
        break;

        case(decada = 1990):  
        return recomendacion[9];
        break;

        case(decada = 2000):  
        console.log(`año ${anho}`)
        return recomendacion[10];
        break;

 
 break;

        default: 'No tengo sugerencias para esa época'

    }
}



var anhoElegido = 1985;
var recomendacionAnho = recomendacionMusica(anhoElegido);



console.log(`Año:${recomendacionAnho.anho}\nCanciones de la época:${recomendacionAnho.canciones}\nHito Historio:${recomendacionAnho.evento} `);




// Creador de Recetas Culinarias del Futuro:
// ● Instrucciones: Escribe una función que genere recetas culinarias futuristas
// combinando ingredientes inusuales y técnicas de cocina avanzadas. ¡Haz
// que la comida del futuro sea emocionante y deliciosa!

var ingredientes = ['Utiliza el polvo de estrellas trituradas como base para una masa única y agrega algas espaciales de colores para un toque vibrante. Ideal para hacer panes o empanadas cósmicas.', 'Combina gambas interestelares con queso lunar rallado para preparar exquisitas albóndigas o un risotto fuera de este mundo. Asegúrate de cocinarlas en una sartén de gravedad ajustable para obtener la textura perfecta.', 'Crea una salsa celestial usando tomates cultivados en microgravedad y agrega trozos de meteoritos comestibles para una textura crujiente. Ideal para acompañar pasta o como salsa para pizza intergaláctica.', 'Prepara una deliciosa ensalada mezclando algas intergalácticas con fideos de arroz de una luna lejana. Añade aderezo de ácido balsámico de asteroides para potenciar los sabores.', 'Convierte la harina cuántica y el azúcar estelar en una masa para galletas que desafiará las leyes de la física. Hornea en un horno de microondas cuántico para obtener galletas futuristas.', 'Crea una versión futurista de lasaña utilizando fideos de arroz de una luna lejana en capas intercaladas con queso lunar rallado. Cocina en gravedad cero para una experiencia de degustación única.', 'Prepara una tortilla espacial incorporando algas espaciales de colores y huevos temporales. Cocina en una sartén de gravedad ajustable para obtener una textura esponjosa y única.'];

var preparacion = ['Cocina tus ingredientes en un entorno de gravedad cero para lograr una distribución uniforme de sabores y texturas. Ideal para platos flotantes y experiencias gastronómicas fuera de este mundo.', 'Utiliza un horno de microondas cuántico para hornear tus creaciones a nivel molecular. Este método de cocción avanzado asegura una cocción rápida y precisa, resaltando los sabores de manera única.', 'Cocina en una sartén donde puedes ajustar la gravedad según tus preferencias. Controla la intensidad de la gravedad para lograr texturas y caramelizaciones personalizadas en tus platos.', 'Reemplaza el agua convencional con agua de lluvia recolectada de la atmósfera de Marte. Este líquido celestial aportará notas únicas a tus preparaciones, creando una experiencia culinaria verdaderamente alienígena.', 'Cocina tus alimentos utilizando rayos fotónicos concentrados para lograr una cocción precisa y eficiente a nivel atómico. Perfecto para platos que requieran cocción instantánea sin pérdida de nutrientes.', 'Realiza la fermentación de tus productos en un entorno espacial para obtener sabores y aromas únicos. La falta de gravedad permite que los sabores se desarrollen de manera diferente, creando alimentos fermentados futuristas.', 'Descongela tus ingredientes utilizando técnicas cuánticas que preservan la textura y el sabor originales. Este método permite mantener la frescura de los alimentos congelados sin comprometer su calidad.,Cocina a temperaturas extremas, ya sea muy altas o muy bajas, para obtener resultados sorprendentes en la textura y el sabor de tus platos. Utiliza tecnologías avanzadas de control térmico para lograr la perfección en cada bocado.'];

var finalizar = ['Espolvorea polvo de estrellas sobre tus platillos y crea nebulosas de salsas coloridas alrededor para un efecto cósmico. Usa salsas vibrantes y de colores para representar las maravillas del espacio.', 'Decora tus platillos con cristales comestibles que reflejen la luz de manera única. Puedes obtener estos cristales a partir de ingredientes como azúcares especiales y extractos de plantas exóticas.', 'Utiliza algas espaciales de colores para esculpir formas artísticas y geométricas que adornen el plato. Estas esculturas pueden representar planetas, constelaciones o formas abstractas.', 'Crea una escarcha de meteoritos comestibles para espolvorear sobre postres o platos dulces. Esta decoración aportará un toque crujiente y un sabor único a cada bocado.', 'Utiliza aderezos de ácido balsámico de asteroides para crear estelas y patrones artísticos en el plato. Juega con la viscosidad y la consistencia del aderezo para obtener efectos visuales interesantes.', 'Decora con perlas comestibles que representen agujeros de gusano. Estas perlas pueden ser esferas de gelificación que estallen con sabor al ser consumidas.', 'Utiliza cristales de hielo lunar para enfriar y decorar bebidas. Estos cristales pueden contener sabores concentrados que se liberan lentamente mientras se derriten.', 'Agrega burbujas de aromas espaciales a través de técnicas de encapsulación. Al romperse, liberarán aromas complementarios que envuelven el plato en una experiencia sensorial única.'];

var recetaFinal = `Receta que no te podes perder: \n Ingredientes: ${seleccionAleatoria(ingredientes)} \n Preparación: ${seleccionAleatoria(preparacion)} \n Dale el toque final: ${seleccionAleatoria(finalizar)} \n A disfrutar!!`;

console.log(recetaFinal)


// Generador de Planetas Fantásticos:
// ● Instrucciones: Escribe una función que genere nombres y características
// únicas para planetas imaginarios. Combina elementos como colores,
// elementos químicos y fenómenos cósmicos para crear mundos asombrosos.

var nombresPlanetas = ['Zyronis', 'Nebuloria', 'Crystallara', ' Solarionis', ' Quasarion', ' Astralara', ' Celestora', ' Ecliptara', 'Lunaris Prime', ' Orionis IX', ' Mythosia', ' Stardustara', ' Galaxara', ' Novaheim', '  Prismara', '  Lunafyre', '  Zenithara', '  Solstice Prime', '  Vortexis', '  Phantasmara'];
var caracteristicas = ['Superficie formada por cristales iridiscentes que cambian de color según la luz estelar,con enormes tormentas de polvo de diamante que danzan en la atmósfera.', 'Mares de líquido bioluminiscente que crean patrones ondulantes de colores brillantes, cielos arremolinados con auroras que serpentean como serpientes de luz.', 'Atmósfera compuesta mayormente por helio, generando un tono azul celeste constante,montañas que contienen depósitos de helio líquido, creando cascadas flotantes.', 'Campos magnéticos que danzan en la atmósfera, creando patrones de luz y sombra, bosques de árboles que generan cargas eléctricas cuando el viento sopla entre sus hojas metálicas.', 'Superficie cubierta por una fina capa de polvo estelar dorado, dándole un brillo dorado, existen fenómenos de auroras que se asemejan a fogatas centelleantes.', 'Un planeta donde la luz es absorbida y reflejada de manera selectiva, creando zonas de luz y oscuridad, rodeado de campos de flores luminiscentes que florecen en la oscuridad.', 'Un planeta prismático con prismas gigantes que refractan la luz en espectros de colores, existen en el rocas cristalinas que emiten tonos musicales cuando se tocan.', 'Superficie hecha de partículas cuánticas en constante cambio de estado, creando patrones fractales y ríos de líquido iridiscente que fluyen en direcciones opuestas al mismo tiempo.', 'Atmósfera compuesta por oxígeno y gases combustibles, generando llamas de colores brillantes. En el montañas que exhalan fuegos pirotécnicos de forma natural.', 'Un planeta con un vórtice atmosférico que distorsiona la luz, creando ilusiones ópticas. Cielos que cambian de color según la posición del sol en relación con el vórtice.'];
var planetas = `Se descubre nuevo planeta!!!\n Lo han nombrado ${seleccionAleatoria(nombresPlanetas)}:\n Es investigado por sus inusuales caracteristicas, los cientificos han observado y detallado: ${seleccionAleatoria(caracteristicas)}  \n Esperamos prontamente tener nuevas noticias respecto a este  asombroso descubrimiento.`;

console.log(planetas)