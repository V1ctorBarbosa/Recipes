import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  DetailWrapper,
  Info,
  Button,
} from './RecipeStyles';


function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information/?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData)
  }

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line
  }, [params.name])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <div>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
        </div>
        <div>
          {activeTab === "ingredients" && (
            <ul>
              {details.extendedIngredients.map(({ id, original }) => (
                <li key={id}>{original}</li>
              ))}
            </ul>
          )}
          {activeTab === "instructions" && (
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          )}
        </div>
      </Info>
    </DetailWrapper>
  )
}

export default Recipe

