import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        const { drinks } = await data;
        const {
          strDrink: name,
          strCategory: category,
          strAlcoholic: info,
          strGlass: glass,
          strInstructions: intructions,
          strDrinkThumb: image,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        } = drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        ];
        const newCocktail = {
          name,
          category,
          info,
          glass,
          intructions,
          image,
          ingredients
        };
        setCocktail(newCocktail);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }
  const {
    name,
    category,
    info,
    glass,
    intructions,
    image,
    ingredients
  } = cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn-primary margin-top">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>name : {name}</p>
          <p> category : {category}</p>
          <p>info : {info}</p>
          <p>glass : {glass}</p>
          <p>intructions : {intructions}</p>
          <p>
            ingredients :{" "}
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
