import axios from "axios";
import "./Home.css";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";

const Home = () => {
  const [titleMeals, setTitleMeals] = useState(null);

  async function getMeals() {
    const { data } = await axios.get(url);
    console.log(data);
    setTitleMeals(data.meals.slice(0, 8));
  }
  useEffect(() => {
    getMeals();
  }, []);
  if (titleMeals === null) {
    return <h2>Loading...</h2>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <div className="home">
        <div className="wrap">
          <hr />
          <p>Latest Meals</p>
          <div className="block-home">
            {titleMeals.map((el) => (
              <Card key={el.idMeal} sx={{ maxWidth: 305 }}>
                <CardMedia
                  component="img"
                  alt="meal"
                  height="250"
                  image={el.strMealThumb}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.strMeal.length > 20
                      ? `${el.strMeal.slice(0, 20)}...`
                      : el.strMeal}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="btn-link" size="small">
                    <NavLink className="btn-link" to={`/detail/${el.idMeal}`}>Learn More</NavLink>
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
