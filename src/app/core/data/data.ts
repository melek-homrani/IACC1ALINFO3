export const products = [
  { id: 1, title: 't-shirt 1', price: 50, quantity: 10, like: 0, description: "test" },
  { id: 2, title: 't-shirt 2', price: 30, quantity: 5, like: 0, description: "test" },
  { id: 3, title: 't-shirt 3', price: 20, quantity: 0, like: 5, description: "test" }
]

export const listResidences = [
  { id: 1, "name": "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg" },
  { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg" },
  { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg" },
  { id: 4, name: "El Anber", address: "Manzah 5", image: "../../assets/images/R4.jpg" }
];

export const listApartments = [
  { id: 1, "appartNum": 1, "floorNum": 0, "surface": 100, "terrace": "oui", "surfaceTerrace": 20, "category": "S+1", "description": "AppartementS+1", "residence": listResidences[0] },
  { id: 2, "appartNum": 2, "floorNum": 0, "surface": 130, "terrace": "non", "surfaceTerrace": 0, "category": "S+2", "description": "AppartementS+2", "residence": listResidences[0] },
  { id: 3, "appartNum": 3, "floorNum": 0, "surface": 150, "terrace": "oui", "surfaceTerrace": 30, "category": "S+3", "description": "AppartementS+3", "residence": listResidences[1] },
]
