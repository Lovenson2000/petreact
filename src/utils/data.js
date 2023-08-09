import dog1 from './dog1.png';
import dog2 from './dog2.png';
import dog3 from './dog3.png';
import dog4 from './dog4.png';

import cat1 from './cat1.png';
import cat2 from './cat2.png';
import cat3 from './cat3.png';
import cat4 from './cat4.png';

import pig1 from './pig1.png';
import pig2 from './pig2.png';
import pig3 from './pig3.png';
import pig4 from './pig4.png';



export const dogs = [
    
    { 
        id: 1,
        source: dog1,
        name: 'Brungy', 
        category: 'dog',
        sign: "Corgi",
        gender: "Male",
        weight: "6 Kg",
        age: "4 Months",
        
    },
    { 
        id: 2,
        source: dog2,
        name: 'Alina', 
        category: 'dog',
        sign: "Scorpion",
        gender: "Female",
        weight: "4 Kg",
        age: "6 Months",
    },
    { 
        id: 3,
        source: dog3,
        name: 'Sharma', 
        category: 'dog',
        sign: "Scorpion",
        gender: "Female",
        weight: "3 Kg",
        age: "3 Months",
    },
    { 
        id: 4,
        source: dog4,
        name: 'Brett', 
        category: 'dog',
        sign: "Scorpion",
        gender: "Female",
        weight: "7 Kg",
        age: "4 Months",
    },
];

export const cats = [
    
    { 
        id: 5,
        source: cat1,
        name: 'Brungy', 
        category: 'dog',
        sign: "Scorpion",
        gender: "Male",
        weight: "5 Kg",
        age: "2 Months",
    },
    { 
        id: 6,
        source: cat2,
        name: 'Alina', 
        category: 'dog',
        sign: "Scorpion",
        gender: "Male",
        weight: "5 Kg",
        age: "5 Months",
    },
    { 
        id: 7,
        source: cat3,
        name: 'Sharma', 
        category: 'dog',
        sign: "Scorpion",
        gender: "Male",
        weight: "5 Kg",
        age: "9 Months",
    },
    { 
        id: 8,
        source: cat4,
        name: 'Bett', 
        category: 'dog',
        sign: "Scorpion",
        weight: "5 Kg",
        age: "8 Months",
    },
];

export const pigs = [
    
    { 
        id: 9,
        source: pig1,
        name: 'Brungy', 
        category: 'dog',
        sign: "Scorpion",
        gender: "Male",
        weight: "8 Kg",
        age: "1 Year",
    },
    { 
        id: 10,
        source: pig2,
        name: 'Alina', 
        category: 'dog',
        sign: "Scorpion",
        gender: "Male",
        weight: "5 Kg",
        age: "6 Months",
    },
    { 
        id: 11,
        source: pig3,
        name: 'Sharma', 
        category: 'dog',
        sign: "Scorpion",
        gender: "Male",
        weight: "5 Kg",
        age: "5 Months",
    },
    { 
        id: 12,
        source: pig4,
        name: 'Bett', 
        category: 'dog',
        sign: "Scorpion",
        gender: "Male",
        weight: "5 Kg",
        age: "1 Month",
    },
];

export const all = [...dogs, ...cats, ...pigs];
