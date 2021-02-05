const ESTADO_INICIAL = {
    musica: [{}],
    playlist: [
      {
        id: 1,
        titulo: "Creep",
        cantor: "Radiohead",
        img:"https://lh4.ggpht.com/-goBXrv1R9Mo/U92o14JPa_I/AAAAAAABNk4/IBGQkMbc1_c/gifs-animados-musica-71%25255B12%25255D.gif?imgmax=800",
      },
      {
        id: 2,
        titulo: "Karma Police",
        cantor: "Radiohead",
        img:"https://lh4.ggpht.com/-goBXrv1R9Mo/U92o14JPa_I/AAAAAAABNk4/IBGQkMbc1_c/gifs-animados-musica-71%25255B12%25255D.gif?imgmax=800",
      },
      {
        id: 3,
        titulo: "No Surprises",
        cantor: "Radiohead",
        img:"https://lh4.ggpht.com/-goBXrv1R9Mo/U92o14JPa_I/AAAAAAABNk4/IBGQkMbc1_c/gifs-animados-musica-71%25255B12%25255D.gif?imgmax=800",
      },
      {
        id: 4,
        titulo: "Fake Plastic Three",
        cantor: "Radiohead",
        img:"https://lh4.ggpht.com/-goBXrv1R9Mo/U92o14JPa_I/AAAAAAABNk4/IBGQkMbc1_c/gifs-animados-musica-71%25255B12%25255D.gif?imgmax=800",
      },
    ],
  };
  
  export default function musicas(state = ESTADO_INICIAL, action) {
    if (action.type === "TOCAR_MUSICA") {
      return {
        ...state,
        musica: action.musicas,
      };
    }
    if (action.type === "PARAR_MUSICA") {
      return {
        ...state,
        musica: ESTADO_INICIAL,
      };
    }
    return state;
  }