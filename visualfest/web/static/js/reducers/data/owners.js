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
      fullname: 'Studio Vive',
      avatar: '/images/owners/unknown.jpg',
      biography: [
        'Pendiente',
      ],
      links: [
        'http://grvty.digital/',
      ],
    },

    8: {
      fullname: ' Roberto  Soriano  Esquivel  "Robertoon"',
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
        'Pendiente',
      ],
      links: [
        'http://grvty.digital/',
      ],
    },

    11: {
      fullname: 'Canalla Estudio',
      avatar: '/images/owners/unknown.jpg',
      biography: [
        'Pendiente',
      ],
      links: [
        'http://grvty.digital/',
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
        'Pendiente',
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
      fullname: 'Sociedad Fantmas',
      avatar: '/images/owners/unknown.jpg',
      biography: [
        'Pendiente',
      ],
      links: [
        'http://grvty.digital/',
      ],
    },

    17: {
      fullname: 'Javier Medellin "Jilipollo"',
      avatar: '/images/owners/unknown.jpg',
      biography: [
        'Pendiente',
      ],
      links: [
        'http://grvty.digital/',
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
