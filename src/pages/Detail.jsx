import { useScrollTrigger } from "@mui/material";
import axios from "axios";
import "./Detail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ingrImg = "https://www.themealdb.com/images/ingredients/";

const Deatil = () => {
  const params = useParams();
  const [tamak, setTamak] = useState(null);

  async function getMealByid(mealid) {
    const { data } = await axios(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealid
    );
    console.log(data);
    setTamak(data.meals[0]);
  }

  // const ingrs = [];
  // const ingr = tamak.strIngredient1;
  // console.log(ingr);

  // for (let i = 1; i < 20; i++) {
  //   ingrs.push(tamak.strIngredient+i);
  // }

  // console.log(ingrs);

  useEffect(() => {
    getMealByid(params.idMeal);
  }, [params.idMeal]);

  if (tamak === null) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <div className="detail">
        <div className="wrap">
          <h3>Ingredients</h3>
          <div className="block-detail">
            <div className="block-img">
              <img width={450} src={tamak.strMealThumb} alt="" />
            </div>
            <div className="block-ingredients">
              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient1}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient1}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient2}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient2}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient3}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient3}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient4}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient4}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient5}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient5}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient6}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient6}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient7}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient7}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient8}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient8}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient9}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient9}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient10}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient10}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient11}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient11}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient12}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient12}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient13}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient13}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient14}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient14}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient15}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient15}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient16}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient16}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient17}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient17}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient18}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient18}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient19}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient19}</h4>
              </div>

              <div>
                <img
                  width={150}
                  src={`${ingrImg + tamak.strIngredient20}-Small.png`}
                  alt=""
                />
                <h4>{tamak.strIngredient20}</h4>
              </div>
            </div>
          </div>
          <h2>Instructions</h2>
          <p>{tamak.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Deatil;
