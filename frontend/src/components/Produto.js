import React from "react";
import { Link } from "react-router-dom";
import { CardActionArea, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import Rating from "./Rating";

function Produto({ product: produto }) {
  return (
    <Paper sx={{ maxWidth: 345, margin: "5px" }}>
      <CardActionArea component={Link} to={`/product/${produto._id}`}>
        <CardMedia
          component="img"
          sx={{ objectFit: "contain", maxHeight: 140 }}
          image={produto.image}
          alt={produto.name}
        />
        <CardContent style={{textAlign:"center" }}>
          <Typography gutterBottom variant="h6" component="div">
            {produto.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:'flex',flexDirection:"column", alignItems:'center' }} component="div">
            <Rating 
              value={produto.rating}
              text={`${produto.numReviews} Avaliações`}
              color="#f8e825"
            />
          </Typography>
          <Typography variant="h6" component="div">
            R${produto.estoque}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Paper>
  );
}

export default Produto;