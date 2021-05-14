import './styles/index.scss';

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonsTone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonsTone: 42,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);
