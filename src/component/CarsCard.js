import Car from './car';

const cars = [
  {
    id: 0,
    name: 'Mazda',
    year: 2015,
    color: 'red',
  },
  {
    id: 1,
    name: 'Ford',
    year: 2015,
    color: 'white',
  },
  {
    id: 2,
    name: 'Golf',
    year: 2009,
    color: 'green',
  },
];

const CarsCard = () => {
  return cars.map((e) => {
    return <Car key={e.key} {...e} />;
  });
};

export default CarsCard;
