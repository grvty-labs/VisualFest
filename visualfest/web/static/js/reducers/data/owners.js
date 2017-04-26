// import {
//   LOCATION_ANIMATE,
// } from '../../constants/actions';

const initialState = {
  indexSelected: null,
  owners: {
    1: {
      fullname: 'Jacobo Zanella',
      avatar: '/images/owners/jacobo_zanella.jpg',
      biography: [
        'Jacobo Zanella (Guanajuato, 1976) se ha dedicado al diseño gráfico los últimos veinte años, especializándose gradualmente en el diseño editorial y la fotografía. Ha editado, diseñado y publicado libros documentales y revistas culturales, entre los que se podrían destacar la memoria fotográfica Querétaro Zona de Monumentos y la publicación bimestral de cultura urbana del centro de México Sada y el Bombón. En 2016 finalizó la Maestría en Cultura Contemporánea en la Universidad Complutense de Madrid, donde se especializó en edición.',
      ],
      links: [
        'www.jacobozanella.com',
      ],
    },

    2: {
      fullname: 'José Emmanuel Villalobos Vargas (Pepe Villawolf)',
      avatar: '/images/owners/pepe_villawolf.jpg',
      biography: [
        'José Villalobos se desarrolla profesionalmente en Motion Designer Long Summer Days en las áreas Conceptualización, Visualización de Spots de Publicidad, Diseño, Motion graphics, Modelado, Texturizado 3D y Animación; Generando spots para: Ocesa, Cuervo, Weber Shandwick, Gerber (Nestle) y Banamex.',
      ],
      links: [
        'www.instagram.com/villawolfshots',
        'www.behance.net/villawolfmedia',
      ],
    },

    3: {
      fullname: 'Rozendo Mondragón Ambrosio',
      avatar: '/images/owners/rozendo_mondragon.png',
      biography: [
        'Formación profesional en Diseño Gráfico con estudios de posgrado en la Especialad en Diseño Web, ambos en la Universidad Autónoma de Querétaro.',
        'Su trabajo profesional incluye diseño y desarrollo de proyectos web y multimedia para empresas como Sika, Osel, el Tecnológico de Monterrey, centros de investigación como la UMEST y diferentes PyMES.',
        'Fue co-fundador y coordinador de proyectos web en la empresa REMO Diseño e Innovación siendo responsable del diseño de interfaces, prototipos, maquetación y programación de proyectos web, así como del diseño e implementación de procesos de desarrollo.',
        'Ha sido profesor en el Tec de Monterrey impartiendo la clase "Fundamentos de Diseño Interactivo" en la División de Ingeniería y Arquitectura.Actualmente es fundador y consultor de Planux y es Diseñador Web en Wingu Networks.'
      ],
      links: [
        'www.planux.com.mx/roz.php',
      ],
    },

    4: {
      fullname: 'Tehani Farr',
      avatar: '/images/owners/tehani_farr.jpg',
      biography: [
        'Tehani lleva 3 años de artista conceptual e ilustradora profesional, ha trabajado con marcas internacionales de todo el mundo, festivales de música como Hell and Heaven en exhibiciones, con blizzard portada para libro de world of warcraft, además de portadas y merchingdizing para bandas como kreator, ha tenido exibiciones en todo el mundo, uk, Japón, tokyo, suiza, parís, etc. su trabajo más reciente fue expuesto en el museo de giger en la ciudad de gruyeres.',
      ],
      links: [
        'https://www.facebook.com/artoftehanifarr/',
      ],
    },

    5: {
      fullname: 'Pendiente',
      avatar: '/images/owners/unknown.jpg',
      biography: [
        'Pendiente',
      ],
      links: [
        'http://grvty.digital/',
      ],
    },

    6: {
      fullname: 'Luis Alberto Gallegos Torres “Desman”',
      avatar: '/images/owners/alberto_gallegos.jpg',
      biography: [
        'Tengo 15 años de experiencia formal en el área de la animación 3D generalista. Por 7 años dirigí mi propio estudio de animación, llamado Crudeladies, como co-Director General, y Director del área de 3D y vfx.',
        'Ahora trabajo en una nueva etapa como artista independiente; explorando, aplicando y aprendiendo la forma más compleja de animación con la que me he encontrado. Sistemas procedurales.',
      ],
      links: [
        'https://www.behance.net/DesmanVFX',
      ],
    },

    7: {
      fullname: 'ESTÁ VIVO ESTUDIO',
      avatar: '/images/owners/unknown.jpg',
      biography: [
        'Pendiente',
      ],
      links: [
        'http://grvty.digital/',
      ],
    },

    8: {
      fullname: 'Roberto Soriano Esquivel "Robertoon"',
      avatar: '/images/owners/roberto_soriano.jpg',
      biography: [
        'Desde que tengo memoria el diseño y la ilustración han sido mi estilo de vida, comenzando con los obligados rayones en mis libretas y paredes de mi cuarto, hasta la entrega de mi primer proyecto profesional. Soy egresado de la Universidad Autónoma del estado de Hidalgo de la Lic. en Diseño Gráfico. He trabajado para diversas agencias de publicidad realizando artes para clientes como Michelin, Starbucks, Huevocartoon, entre otros. Actualmente soy Ilustrador y Cofundador del estudio MIDOMI en la Cd. De Querétaro ',
      ],
      links: [
        'www.behance.net/RobertoonIlustracion',
        'www.midomiestudio.com',
        'contacto@midomiestudio.com',
        'www.facebook.com/RobertoonIlustracion',
      ],
    },

    9: {
      fullname: 'Jesús Rodolfo Baquier “Mostacho”',
      // avatar: '/images/owners/unknown.jpg',
      avatar: '/images/owners/jesus_rodolfo.png',
      biography: [
        'Pendiente',
      ],
      links: [
        'https://www.facebook.com/MOSTASHO/',
        'https://www.behance.net/rodolfobaquier',
      ],
    },

    10: {
      fullname: 'Luis Almeida',
      avatar: '/images/owners/unknown.jpg',
      biography: [
        'Nacional Autónoma de México, con mención honorífica. Posteriormente realizó estudios de diseño industrial en la Universidad de Florencia, Italia, y de semiótica en la Sorbona, y además trabajó en Francia como diseñador gráfico de la Société Look. En México inició sus trabajos en la Imprenta Madero, donde colaboró con Vicente Rojo, y en 1985 ingresó a Redacta, taller donde desarrollaría el diseño editorial y corporativo. Entre los diversos reconocimientos a su obra destaca el Premio Nacional al Arte Editorial del año de 1987 por el catálogo Miguel Covarrubias, en 1993 por la revista El observador internacional, y por el libro Imágenes de un encuentro, y en 1995 por su obra De las estaciones. Asimismo, se le otorgó el premio de la Confederación Latinoamericana de Artes Gráficas por el catálogo Retablo de los dolores, y en 1996 la mención honorífica del Consejo de Diseñadores de México al boletín Biodiversitas. Además, ese mismo año, la UNESCO designó en París a la revista Saber Ver como la mejor publicación de carácter cultural de este tipo; en 1997 recibió el premio Quorum a la mejor gacetilla por el ya mencionado boletín, y en 1999 el mismo premio por el mejor catálogo de arte. Almeida es miembro fundador de Quorum, el Consejo de Diseñadores de México, y fue su presidente durante 1989.  En 1991 fue aceptado como miembro curricular y se le nombró perito en diseño por parte del Colegio de Diseñadores Industriales y Gráficos de México (CODIGRAM); fungió como delegado de dicho colegio ante la XVI Asamblea General de ICOGRADA, en Portugal, y en la XVII Asamblea celebrada en Uruguay, y en el año de 1998 fue invitado al Festival de Gráfica de Chaumont, Francia.',
      ],
      links: [
        'https://foroalfa.org/luis-almeida-herrera',
      ],
    },

    11: {
      fullname: 'Gerardo Morales',
      avatar: '/images/owners/unknown.jpg',
      biography: [
        'Diseñador Gráfico especializado en UI con más de 12 años de experiencia, comenzó en Ogilvy Interactive y por 8 años dirigió su propia agencia digital llamada Altiva Media, ha trabajado con grandes marcas como Nestle, Volvo, Amex, Reebook, Motorla, Johnson & Johnson y Cervecería Cuauhtemoc Moctezuma entre otros, entusiasta de la experiencia de usuario y del branding, desde hace un año es socio y fundador de Canalla Agency en la ciudad de Querétaro.',
      ],
      links: [
        'http://canalla.agency',
      ],
    },

    12: {
      fullname: 'Dr. Manuel Guerrero Salinas',
      avatar: '/images/owners/manuel_guerrero.jpg',
      biography: [
        'Diseñador Gráfico de nacionalidad Mexicana, egresado de la Universidad Autónoma de San Luis Potosí. Actualmente es catedrático de la Facultad del Hábitat de la UASLP y doctor en Arquitectura, Diseño y Urbanismo por la Universidad Autónoma de Morelos. Trabaja como freelanceen BlueTypo, estudio de diseño especializado en tipografía y comunicación interactiva. Es miembro de la Association Typographique International (ATypI), International Association of Designers(IAD)y colaborador en la fundidoratipográfica Cocijotype.',
        'En el año 2009 obtuvo el certificado de excelencia en diseño tipográfico, otorgado por el TypeDirectors Club NY, en el 2010 fue nominado a recibir el Prize of Prizes Design Award; la máxima distinción al diseño otorgada por el gobierno Alemán. De igual manera obtuvo el certificado de excelencia en diseño tipográfico en la Cuarta Bienal de Tipografía Tipos Latinos2010 y seleccionado en LaBienal del Cartel Bolivia BICeBé 2013, 2015 y recientemente premiado con el Silver A\' Design Award en Italia.',
        'Ha impartido conferencias y talleres de experimentación a nivel nacional e internacional en TEDx, Palermo, Bienal de Letras Latinas, La Letra Ilustra, ProDiseño, entre otros, su trabajo se ha dado a conocer en diferentes publicaciones, entre las que destaca el Font Feed de Font Shop, I love typography,Typography Served, Fubiz, Unos tipos duros, The Anual Typography 30, Typodarium 2010,2011 y 2012, la revista Digital Arts y Page Magazine, Tiypo, Communication Arts, entre otras.',
      ],
      links: [
        'http://bluetypo.com',
        'http://be.net/bluetypo',
      ],
    },

    13: {
      fullname: 'Diego Morali Romo',
      avatar: '/images/owners/diego_morali.jpg',
      biography: [
        'Comenzando en el ámbito de la publicidad, y la animación, me consolidé como ilustrador desde hace más de 10 años trabajando para empresas como Michelin, BFGoodrich, Netflix, Anima estudios, Mini Cooper, Harley Davidson, entre otras...',
      ],
      links: [
        'https://www.behance.net/dimorali',
        'https://www.facebook.com/rudimorali',
      ],
    },

    14: {
      fullname: 'Jorge del Buenn Unna',
      avatar: '/images/owners/unknown.jpg',
      biography: [
        'Caliente, una corporación internacional dedicada al entretenimiento con apuestas. Ha recibido varios reconocimientos internacionales por su trabajo en la televisión, así como en su desempeño como caricaturista, diseñador gráfico, diseñador editorial y director artístico. Ha impartido cursos y conferencias sobre tipografía, ortotipografía y diseño editorial en varias universidades e instituciones educativas de México, Argentina, Brasil, Chile, España, El Salvador, Canadá, Perú, Uruguay y los Estados Unidos. Entre sus obras destacan el Manual de diseño editorial (4.ª edición, Gijón: Trea, 2014), Introducción al estudio de la tipografía (Guadalajara: Editorial Universitaria, 2011, Gijón: Trea, 2011), Diseño, comunicación y neurociencias (Gijón: Trea, 2013) y Palabras Mayores. El libro (con Alberto Gómez Font, Antonio Martín y Xosé Castro Roig, Barcelona: Larousse, 2015). Es miembro de la Asociación Tipográfica Internacional (ATypI) y del colectivo Palabras Mayores. Desde el 2009 radica en la ciudad de Querétaro.',
      ],
      links: [
        'http://grvty.digital/',
      ],
    },

    15: {
      fullname: 'Oscar Rodríguez Amado',
      avatar: '/images/owners/oscar_rodriguez.png',
      biography: [
        'Diseñador y comunicador visual egresado de la Facultad de Artes y Diseño de la UNAM. Trabajó director editorial y editor gráfico de la Revista Picnic. Es director de Cósmica, un proyecto que se dedica a difundir y consolidar la gran producción de ilustración en México. Hace collage para exorcizar sus demonios y para contar su vida con imágenes.',
      ],
      links: [
        'https://www.behance.net/portamalmar',
      ],
    },

    16: {
      fullname: 'Sociedad Fantasma',
      avatar: '/images/owners/unknown.jpg',
      biography: [
        'Somos un estudio de ilustración y animación con sede en la Ciudad de México. Nos gusta contar historias por medio del uso del stotytelling. Hemos trabajado con marcas como son Google, Pepsi, Evian, Plaza de la Tecnología, Pause Festival entre otros.',
      ],
      links: [
        'http://www.sociedadfantasma.com',
      ],
    },

    17: {
      fullname: 'Javier Medellin "Jilipollo"',
      avatar: '/images/owners/unknown.jpg',
      biography: [
        'Ilustrador mexicano, oriundo de San Luis Potosí. Su trabajo a veces se ve en publicaciones, productos, libros, pósters, publicidad, muros, discos, etc. para clientes en el globo como: Coca Cola, Google Plus, ESPN, Lufthansa Airlines, Aeroméxico Airlines, Anoto Pens, QUO magazine, Expansión magazine, Afrín, BOOM! Cómics, Cruz roja.',
        'Algunas publicaciones y premios: Illustration now! vol. 4 (edit. Taschen) / Communication Arts Illustration / American Illustration 33 / Latin American Illustration 3 and 4 Winner Award / Society of Illustrators of L.A. 51, 52 and 53 (Silver Award) / Creative Pool Annual Winner 2015 / The 3×3 Illustration annual 11 and 13 Honorable Mention / Young Illustrators Award, Berlin / Juxtapoz Magazine',
      ],
      links: [
        'http://www.jilipollo.com',
      ],
    },
  },
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    // case LOCATION_ANIMATE:
    //   return {
    //     pathname: action.payload,
    //   };

    default:
      return {
        ...state,
      };
  }
};
