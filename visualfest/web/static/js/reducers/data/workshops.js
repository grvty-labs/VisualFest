const initialState = {
  indexSelected: null,
  workshops: [
    {
      owner: 11,
      title: 'Descubriendo Sketch',
      area: 'Web',
      date: 27,
      timestart: '11:00 hrs',
      timeend: '15:00 hrs',
      image: '/images/events/gerardo_morales.jpg',
      description: [
        'Curso básico de la herramienta más utilizada hoy en día para diseño de interfaz',
      ],
    },
    {
      owner: 16,
      title: 'Mira mamá estoy animado',
      area: 'Animación e Ilustración',
      date: 27,
      timestart: '11:00 hrs',
      timeend: '15:00 hrs',
      image: '/images/events/sociedad_fantasma.jpg',
      description: [
        'Animación de un clip animado en photoshop, mezclando técnicas de ilustración con footage grabado',
      ],
    },
    {
      owner: 16,
      title: 'Mira mamá estoy animado',
      area: 'Animación e Ilustración',
      date: 28,
      timestart: '11:00 hrs',
      timeend: '15:00 hrs',
      image: '/images/events/sociedad_fantasma.jpg',
      description: [
        'Animación de un clip animado en photoshop, mezclando técnicas de ilustración con footage grabado',
      ],
    },
    {
      owner: 17,
      title: 'Tres de ilustración para llevar, por favor',
      area: 'Ilustración',
      date: 28,
      timestart: '11:00 hrs',
      timeend: '15:00 hrs',
      image: '/images/events/jilipollo.jpg',
      description: [
        'A todos los aspirantes nos gusta dibujar. Pero, ¿cómo crear una ilustración que nos deslumbre, y además que nos paguen por ella? Bienvenidos a este curso. En él trabajaremos juntos para adentrarnos en la ilustración como empresa, en trabajar sus habilidades en la idea y desarrollo de la misma teniendo como objetivo elaborar una ilustración profesional de principio a fin.',
      ],
    },
    {
      owner: 2,
      title: 'Las curvas son tus amigas, no tus enemigas',
      area: 'Motion Graphics',
      date: 28,
      timestart: '11:00 hrs',
      timeend: '15:00 hrs',
      image: '/images/events/pepe_villawolf.jpg',
      description: [
        'Pendiente',
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
