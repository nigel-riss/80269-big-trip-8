import {getRandomArrayItem, getRandomSubarray, getRandomInt} from './utils';

const typeMap = {
  'taxi': {
    icon: `🚕`,
    title: `Taxi to`,
  },
  'bus': {
    icon: `🚌`,
    title: `Bus to`,
  },
  'train': {
    icon: `🚂`,
    title: `Train to`,
  },
  'ship': {
    icon: `🛳️`,
    title: `Ship to`,
  },
  'transport': {
    icon: `🚊`,
    title: `Transport to`,
  },
  'drive': {
    icon: `🚗`,
    title: `Drive to`,
  },
  'flight': {
    icon: `✈️`,
    title: `Flight to`,
  },
  'check-in': {
    icon: `🏨`,
    title: `Check into a`,
  },
  'sightseeing': {
    icon: `🏛️`,
    title: `Sightseeing`,
  },
  'restaurant': {
    icon: `🍴`,
    title: `Eat at`,
  },
};


/**
 * Return trip object
 * @return {Object}
 */
const getTripPoint = () => ({
  type: getRandomArrayItem([
    `taxi`,
    `bus`,
    `train`,
    `ship`,
    `transport`,
    `drive`,
    `flight`,
    `check-in`,
    `sightseeing`,
    `restaurant`,
  ]),
  destination: getRandomArrayItem([
    `Airport`,
    `Geneva`,
    `Chamonix`,
    `Paris`,
    `Hotel`
  ]),
  photo: `http://picsum.photos/300/150?r=${Math.random()}`,
  offers: new Set(getRandomSubarray([
    `Add luggage`,
    `Switch to comfort class`,
    `Add meal`,
    `Choose seats`,
  ], 0, 2)),
  description: getRandomSubarray([
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ], 1, 3).join(` `),
  price: getRandomInt(20, 100),
  timeStart: getRandomInt(10, 16),
  timeEnd: getRandomInt(17, 23),
});

export {
  typeMap,
};

export default getTripPoint;
