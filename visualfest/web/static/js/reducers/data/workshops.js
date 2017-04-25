const initialState = {
  indexSelected: null,
  workshops: [
    {
      owner: 11,
      title: 'Pendiente',
      area: 'Web',
      date: 27,
      timestart: '11:00 hrs',
      timeend: '15:00 hrs',
      image: '/images/events/unknown.jpg',
      description: [
        'Pendiente',
      ],
    },
    {
      owner: 16,
      title: 'Mira mamá estoy animado',
      area: 'Animación e Ilustración',
      date: 27,
      timestart: '11:00 hrs',
      timeend: '15:00 hrs',
      image: '/images/events/unknown.jpg',
      description: [
        'Pendiente',
      ],
    },
    {
      owner: 16,
      title: 'Mira mamá estoy animado',
      area: 'Animación e Ilustración',
      date: 28,
      timestart: '11:00 hrs',
      timeend: '15:00 hrs',
      image: '/images/events/unknown.jpg',
      description: [
        'Pendiente',
      ],
    },
    {
      owner: 17,
      title: 'Tres de ilustración para llevar, por favor',
      area: 'Ilustración',
      date: 28,
      timestart: '11:00 hrs',
      timeend: '15:00 hrs',
      image: '/images/events/unknown.jpg',
      description: [
        'Pendiente',
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
