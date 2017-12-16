import { keys } from 'lodash';

export const sortData = players => {
  return keys(players).sort((a, b) => {
    if (players[a] < players[b]) {
      return 1;
    } else {
      return -1;
    }
  });
};
