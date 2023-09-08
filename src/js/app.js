import GameSavingLoader from './class/example';

GameSavingLoader.load()
  .then(
    (result) => ((result)),
    (error) => (error.name),
  );
