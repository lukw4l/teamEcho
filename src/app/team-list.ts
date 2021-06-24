export interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
}

export const members = [
  {
    id: 1,
    name: 'Arno',
    role: 'Product Owner',
    description: 'He wants things'
  },
  {
    id: 2,
    name: 'Carsten',
    price: 'Tester',
    description: 'He makes things break'
  },
  {
    id: 3,
    name: 'Lukas',
    price: 'Developer',
    description: 'He gets things done'
  },
  {
    id: 4,
    name: 'Sven',
    price: 'Developer',
    description: 'He learns fast'
  },
  {
    id: 5,
    name: 'Michael',
    price: 'Developer',
    description: 'He writes this'
  }
];
