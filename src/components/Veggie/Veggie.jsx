import React from 'react'
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom';
import {
  Wrapper,
  Card,
  Gradient,
} from './VeggieStyles'


function Veggie() {

  const [veggie, setVeggie] = useState([])

  useEffect(() => {
    getVeggie()
  }, [])

  const getVeggie = async () => {

      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=10`);
      const data = await api.json()
      setVeggie(data.recipes)
      console.log(data.recipes)
  }

  return <div>
    <Wrapper>
      <h3>Our Veggie Options</h3>
      <Splide options={{
        perPage: 2,
        arrows: true,
        paginations: false,
        drag: "free",
        gap: "5rem",
      }}>
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={'/recipe/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })};
      </Splide>
    </Wrapper>
  </div>
}

export default Veggie