import  { useEffect, useState } from 'react';
import styledComponents from 'styled-components';

function Popular() {

  const[popular, setPopular] = useState([]);

  useEffect(()=>{
    getPopular();
  },[]);

  const getPopular = async()=>{
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes)
  }


  return (
    <div>
      {popular.map((rescipe)=>{
        return(
          <div key ={rescipe.id}>
            <p>{rescipe.title}</p>
          </div>
        )
      })}
    </div>
  )
}

const Wraper = styledComponents.div`
  margin : 4rem 0rem;
`;

export default Popular