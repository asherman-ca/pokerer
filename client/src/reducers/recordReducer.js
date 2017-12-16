const defaultState = {
  1: {
    take: {
      Alex_Sherman: 50,
      Kelly_Chung: 150,
      Raymond_Hu: -100,
      David_Hu: 100,
      Matthew_Kerchner: 20,
      Daniel_Chang: -200
    },
    location: "Kelly's Spot"
  },
  2: {
    take: {
      Alex_Sherman: 200,
      Kelly_Chung: -50,
      Raymond_Hu: -100,
      David_Hu: 150,
      Matthew_Kerchner: 150,
      Daniel_Chang: 20
    },
    location: "Kelly's Spot"
  },
  3: {
    take: {
      Alex_Sherman: -100,
      Kelly_Chung: 200,
      Raymond_Hu: 150,
      David_Hu: 50,
      Matthew_Kerchner: -20,
      Daniel_Chang: 100
    },
    location: "Kelly's Spot"
  },
  4: {
    take: {
      Alex_Sherman: -50,
      Kelly_Chung: 200,
      Raymond_Hu: -75,
      David_Hu: 250,
      Matthew_Kerchner: 20,
      Daniel_Chang: -50
    },
    location: "Kelly's Spot"
  },
  5: {
    take: {
      Alex_Sherman: 125,
      Kelly_Chung: -75,
      Raymond_Hu: -100,
      David_Hu: 50,
      Matthew_Kerchner: 200,
      Daniel_Chang: 150
    },
    location: "Kelly's Spot"
  }
};

export default function(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
