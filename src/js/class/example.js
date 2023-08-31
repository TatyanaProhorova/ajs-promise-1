import read from '../mock/reader.js';
import json from '../mock/parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(read()
        .then(json)
        .then((result) => {
          let gameSaving = new GameSaving();
          gameSaving = { ...JSON.parse(result) };
          return gameSaving;
        }));
    });
  }
}
