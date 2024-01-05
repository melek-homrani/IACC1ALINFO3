import { Apartment } from "../models/apartment";
import { Item } from "../models/item";
import { Product } from "../models/product";
import { Residence } from "../models/residence";

export const PRODUCTS : Product[] = [
  { id: 1, title: 't-shirt 1', price: 50, quantity: 10, like: 0, description: "test" },
  { id: 2, title: 't-shirt 2', price: 30, quantity: 5, like: 0, description: "test" },
  { id: 3, title: 't-shirt 3', price: 20, quantity: 0, like: 5, description: "test" }
]

export const RESIDENCES: Residence[] = [
  { id: 1, "name": "El fel", address: "Borj Cedria", image: "src/assets/images/R1.jpeg" },
  { id: 2, name: "El yasmine", address: "Ezzahra", image: "src/assets/images/R2.jpg" },
  { id: 3, name: "El Arij", address: "Rades", image: "src/assets/images/R3.jpg" },
  { id: 4, name: "El Anber", address: "Manzah 5", image: "src/assets/images/R4.jpg" }
];

export const APARTMENTS: Apartment[] = [
  { id: 1, "appartNum": 1, floorNum: 0, surface: 100, terrace: "oui", surfaceTerrace: 20, category: "S+1", description: "Appartement S+1", residence: RESIDENCES[0] },
  { id: 2, "appartNum": 2, floorNum: 2, surface: 130, terrace: "non", surfaceTerrace: 0, category: "S+2", description: "Appartement S+2", residence: RESIDENCES[0] },
  { id: 3, "appartNum": 3, floorNum: 3, surface: 150, terrace: "oui", surfaceTerrace: 30, category: "S+3", description: "Appartement S+3", residence: RESIDENCES[1] },
]

export const ITEMS: Item[] = [
  { id: 11, name: 'bottle' },
  { id: 12, name: 'boombox' },
  { id: 13, name: 'chair' },
  { id: 14, name: 'fishbowl' },
  { id: 15, name: 'lamp' },
  { id: 16, name: 'tv' },
  { id: 17, name: 'mug' },
  { id: 18, name: 'paintbrush' },
  { id: 19, name: 'plant' },
  { id: 20, name: 'teapot' }
];

