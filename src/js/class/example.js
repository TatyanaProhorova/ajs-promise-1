import read from '../mock/reader';
import json from '../mock/parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(read()
        .then(json)
        .then((result) => {
          const argList = Object.values(JSON.parse(result));
          const testObject = new GameSaving(...argList);
          return testObject;
        }));
    });
  }
}
