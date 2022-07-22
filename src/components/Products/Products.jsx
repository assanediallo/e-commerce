import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

/* const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "€5",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/96bb6586-fe27-44a5-b4d7-b13f500ea206/chaussure-de-running-sur-route-react-infinity-run-flyknit-3-pour-tDv24V.png",
  },
  {
    id: 2,
    name: "McBook",
    description: "Apple MacBook Pro.",
    price: "€10",
    image:
      "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__bsza6x4fldiq_small_2x.jpg",
  },
]; */

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
