const initialState = {
  indexSelected: null,
  conferences: [
    {
      owner: 1,
      title: 'Una revista cultural para el siglo XXI',
      date: 27,
      timestart: '10:00 hrs',
      timeend: '11:00 hrs',
      area: 'Edición de publicaciones y diseño editorial',
      image: '/images/events/jacobo_zanella.jpg',
      description: [
        'Se hará una ponencia sobre Lapham’s Quarterly, una revista de historia, arte y literatura que desarrolla un tema a través de la edición de textos y arte de los últimos cuatro mil años. Es editada por el periodista estadounidense Lewis Lapham desde 2007. Cada edición trimestral aborda un tema universal como guerra, religión o dinero. Se analizará desde la edición, el diseño gráfico y como enciclopedia de arte.'
      ],
    },
    {
      owner: 2,
      title: 'Ingredientes necesarios para preparar un delicioso guacamole',
      date: 27,
      timestart: '11:00 hrs',
      timeend: '12:00 hrs',
      area: 'Motion Design y 3D',
      image: '/images/events/pepe_villawolf.jpg',
      description: [
        'Hablar un poco sobre el proceso que debe seguir un estudiante para pasar del ámbito profesional y no perderse en el camino, hablar un poco de mi trayectoria, cómo un reflejo de estos pasos y de las habilidades básicas y caminos debes logar, todo esto haciendo alusión a un guacamole cómo un proceso final.',
      ],
    },
    {
      owner: 3,
      title: '¿Cuánto cobrar por el diseño?',
      date: 27,
      timestart: '12:00 hrs',
      timeend: '13:00 hrs',
      area: 'Diseño gráfico y web',
      image: '/images/events/rozendo_mondragon.jpg',
      description: [
        'Demuestra que el diseño puede ser negocio.',
      ],
    },
    {
      owner: 4,
      title: 'Orígenes del concepto artístico',
      date: 27,
      timestart: '14:00 hrs',
      timeend: '15:00 hrs',
      area: 'Ilustración y arte conceptual',
      image: '/images/events/tehani_farr.jpg',
      description: [
        'Plática sobre cómo fue creciendo y desarrollándose mi concepto artístico.',
      ],
    },
    {
      owner: 5,
      title: 'Pendiente',
      date: 27,
      timestart: '15:00 hrs',
      timeend: '16:00 hrs',
      area: 'Pendiente',
      image: '/images/events/unknown.jpg',
      description: [
        'Pendiente',
      ],
    },
    {
      owner: 6,
      title: 'Por qué los VFX son tan geniales.',
      date: 27,
      timestart: '16:00 hrs',
      timeend: '17:00 hrs',
      area: 'Diseño, 3D y VFX',
      image: '/images/events/alberto_gallegos.jpg',
      description: [
        'El mundo de los VFX es un mundo vasto para la exploración del diseño en todas sus formas. Es un gran lugar para aprender, expandirse y un mercado que se debe aprovechar en México.',
      ],
    },
    {
      owner: 7,
      title: 'Pendiente',
      date: 27,
      timestart: '17:00 hrs',
      timeend: '18:00 hrs',
      area: 'Pendiente',
      image: '/images/events/unknown.jpg',
      description: [
        'Pendiente',
      ],
    },
    {
      owner: 8,
      title: 'Guía práctica de Illustrator',
      date: 28,
      timestart: '10:00 hrs',
      timeend: '11:00 hrs',
      area: 'Ilustración',
      image: '/images/events/unknown.jpg',
      description: [
        'Partimos en mostrar como es el proceso de la ilustración, desde el boceto hasta la entrega final, como 2do punto importante, me enfocaré en la creación de un portafilio digital, personal, así como una serie de herramientas para darle mayor fuerza y alcance ',
      ],
    },
    {
      owner: 9,
      title: 'Pendiente',
      date: 28,
      timestart: '11:00 hrs',
      timeend: '12:00 hrs',
      area: 'Ilustración',
      image: '/images/events/unknown.jpg',
      description: [
        'Pendiente',
      ],
    },
    {
      owner: 10,
      title: 'Pendiente',
      date: 28,
      timestart: '12:00 hrs',
      timeend: '13:00 hrs',
      area: 'Pendiente',
      image: '/images/events/unknown.jpg',
      description: [
        'Pendiente',
      ],
    },
    {
      owner: 11,
      title: 'Pendiente',
      date: 28,
      timestart: '14:00 hrs',
      timeend: '15:00 hrs',
      area: 'Pendiente',
      image: '/images/events/unknown.jpg',
      description: [
        'Pendiente',
      ],
    },
    {
      owner: 12,
      title: 'Diseño paramétrico',
      date: 28,
      timestart: '15:00 hrs',
      timeend: '16:00 hrs',
      area: 'Tipografía',
      image: '/images/events/manuel_guerrero.jpg',
      description: [
        'En esta presentación se define el proceso de diseño paramétrico y sus aplicaciones en diversos campos, que van desde el diseño hasta la tipografía, además se muestran ejemplos aplicados al diseño de tipografía.',
      ],
    },
    {
      owner: 13,
      title: 'Emprendiendo el camino del ilustrador',
      date: 28,
      timestart: '16:00 hrs',
      timeend: '17:00 hrs',
      area: 'Ilustración',
      image: '/images/events/diego_morali.jpg',
      description: [
        'En esta conferencia se abordará el cómo emprender una carrera en la ilustración como una guía básica para la supervivencia en el medio.',
      ],
    },
    {
      owner: 14,
      title: 'Pendiente',
      date: 28,
      timestart: '17:00 hrs',
      timeend: '18:00 hrs',
      area: 'Pendiente',
      image: '/images/events/unknown.jpg',
      description: [
        'Pendiente',
      ],
    },
    {
      owner: 15,
      title: 'Diseño Editorial, como darle la vuelta a la tortilla sin quemarse las manos',
      date: 28,
      timestart: '18:00 hrs',
      timeend: '19:00 hrs',
      area: 'Editorial',
      image: '/images/events/oscar_rodriguez.jpg',
      description: [
        '¿El mundo de los impresos está en crisis? ¿Cuál es papel de los medios de comunicación en papel ante la obscena cantidad de información que consumimos por minuto en internet? Renovarse o morir en el intento, el reto de las revistas en México.',
      ],
    },
  ],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
}
