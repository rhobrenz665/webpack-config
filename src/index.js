const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonsTone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonsTone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);
