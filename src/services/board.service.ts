export enum movebleType {
  street,
  transport,
  function,
}

export enum sitie {
  red,
  yellow,
  oreng,
  green,
  pink,
  blue,
  white,
  brown,
}

export interface placeMoveblesSrc {
  location: number;
  title: string;
  type: movebleType;
  color?: sitie;
  pirce?: number;
  functionOnStop?: Function;
  functionOnMove?: Function;
}

export const basicboard: placeMoveblesSrc[] = [
  {
    location: 20,
    title: "Free Parking",
    type: movebleType.function,
  },
  {
    location: 21,
    title: "strand",
    type: movebleType.street,
    color: sitie.red,
    pirce: 220,
  },
  {
    location: 22,
    title: "chance",
    type: movebleType.function,
  },
  {
    location: 23,
    title: "fleet street",
    type: movebleType.street,
    color: sitie.red,
    pirce: 220,
  },
  {
    location: 24,
    title: "trafalgar square",
    type: movebleType.street,
    color: sitie.red,
    pirce: 240,
  },
  {
    location: 25,
    title: "fenchurch st station",
    type: movebleType.transport,
  },
  {
    location: 26,
    title: "leicester square",
    type: movebleType.street,
    color: sitie.yellow,
    pirce: 260,
  },
  {
    location: 27,
    title: "coventry street",
    type: movebleType.street,
    color: sitie.yellow,
    pirce: 260,
  },
  {
    location: 28,
    title: "water works",
    type: movebleType.transport,
    pirce: 150,
  },
  {
    location: 29,
    title: "piccadilly",
    type: movebleType.street,
    color: sitie.yellow,
    pirce: 280,
  },
  {
    location: 30,
    title: "go to jail",
    type: movebleType.function,
  },
  {
    location: 19,
    title: "vine street",
    type: movebleType.street,
    color: sitie.oreng,
    pirce: 200,
  },
  {
    location: 31,
    title: "regent street",
    type: movebleType.street,
    color: sitie.green,
    pirce: 300,
  },
  {
    location: 18,
    title: "marlborough street",
    type: movebleType.street,
    color: sitie.oreng,
    pirce: 180,
  },
  {
    location: 32,
    title: "oxford street",
    type: movebleType.street,
    color: sitie.green,
    pirce: 300,
  },
  {
    location: 17,
    title: "community chest",
    type: movebleType.function,
  },
  {
    location: 33,
    title: "community chest",
    type: movebleType.function,
  },
  {
    location: 16,
    title: "bow street",
    type: movebleType.street,
    color: sitie.oreng,
    pirce: 180,
  },
  {
    location: 34,
    title: "bond street",
    type: movebleType.street,
    color: sitie.green,
    pirce: 320,
  },
  {
    location: 15,
    title: "marylebone station",
    type: movebleType.transport,
    pirce: 200,
  },
  {
    location: 35,
    title: "liverpool st. station",
    type: movebleType.transport,
    pirce: 200,
  },
  {
    location: 14,
    title: "northumrld avenue",
    type: movebleType.street,
    color: sitie.pink,
    pirce: 160,
  },
  {
    location: 36,
    title: "chance",
    type: movebleType.function,
  },
  {
    location: 13,
    title: "whitehall",
    type: movebleType.street,
    color: sitie.pink,
    pirce: 140,
  },
  {
    location: 37,
    title: "park lane",
    type: movebleType.street,
    color: sitie.blue,
    pirce: 350,
  },
  {
    location: 12,
    title: "electric compoany",
    type: movebleType.transport,
    pirce: 150,
  },
  {
    location: 38,
    title: "super tax",
    type: movebleType.function,
  },
  {
    location: 11,
    title: "pall mall",
    type: movebleType.street,
    color: sitie.pink,
    pirce: 140,
  },
  {
    location: 39,
    title: "mayfair",
    type: movebleType.street,
    color: sitie.blue,
    pirce: 400,
  },
  {
    location: 10,
    title: "in jail",
    type: movebleType.function,
  },
  {
    location: 9,
    title: "pentonville road",
    type: movebleType.street,
    color: sitie.white,
    pirce: 120,
  },
  {
    location: 8,
    title: "eston road",
    type: movebleType.street,
    color: sitie.white,
    pirce: 100,
  },
  {
    location: 7,
    title: "chance",
    type: movebleType.function,
  },
  {
    location: 6,
    title: "the angel, islington",
    type: movebleType.street,
    color: sitie.white,
    pirce: 100,
  },
  {
    location: 5,
    title: "kings cross station",
    type: movebleType.transport,
    pirce: 200,
  },
  {
    location: 4,
    title: "income tax",
    type: movebleType.function,
  },
  {
    location: 3,
    title: "whitechapel road",
    type: movebleType.street,
    color: sitie.brown,
    pirce: 60,
  },
  {
    location: 2,
    title: "community chest",
    type: movebleType.function,
  },
  {
    location: 1,
    title: "old kent road",
    type: movebleType.street,
    color: sitie.brown,
    pirce: 60,
  },
  {
    location: 0,
    title: "go",
    type: movebleType.function,
  },
];
