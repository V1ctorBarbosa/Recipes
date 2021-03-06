import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom';
import {
  Wrapper,
  Gradient,
  Card,
} from './PopularStyles'


function Popular() {

  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {

      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
      const data = await api.json()
      setPopular(data.recipes)
      console.log(data.recipes)
  }

  return <div>
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide options={{
        perPage: 2,
        arrows: true,
        paginations: false,
        drag: "free",
        gap: "5rem",
      }}>
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={'/recipe/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Link>
              </Card>
              <Gradient />
            </SplideSlide>
          );
        })};
      </Splide>
    </Wrapper>
  </div>
}



export default Popular