import { produce } from "immer";
import { pipe } from "lodash/fp";

// example 1
////////////
let input = { tag: "JAVASCRIPT" };
const pickTag = (obj) => obj.tag;
const toLowerCase = (str) => str.toLowerCase();
const wrap = (str) => `(${str})`;
const transform = pipe(pickTag, toLowerCase, wrap);
console.log(transform(input));

// example 2
////////////
let recipe = { name: "Spaghetti Bolognese", ingredients: ["egg", "salt"] };

// add new ingredient cream
const addCream = produce(recipe, (draftRecipe) => {
  draftRecipe.ingredients.push("cream");
});
console.log(addCream);

// replace egg with eggwhite
const replaceEgg = {
  ...recipe, 
  ingredients: recipe.ingredients.map((i) => {
    if (i === "egg") {
      return "egg white"; 
    } else {
      return i; 
    }
  })
}
console.log(replaceEgg);

// remove an ingredient egg
const removeEgg = {
  ...recipe, 
  ingredients: recipe.ingredients.filter((i) => i !== "egg")
}
console.log(removeEgg);
