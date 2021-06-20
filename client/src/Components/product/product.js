import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import ProductPage from './productPage';

import styles from '../../stylesheets/styles.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 270,
  },
  margin: '0 auto',
});
function Product(props) {
  const classes = useStyles();
  const { product } = props;
  return (
    <Card className={`${classes.root}`}>
      <CardActionArea className="px-3 py-3">
        <CardMedia
          component="img"
          alt="iPhone"
          height="180"
          image={product.images[0].url}
          title={product.name}
        />
        <CardContent>
          <Typography variant="h5" component="h2" className="my-1 fw-bold">
            {product.name.length > 9
              ? product.name.substring(0, 8) + '.....'
              : product.name.substring(0, 9)}
          </Typography>
          <Typography variant="subtitle1" className="my-1 text-primary">
            {product.category}
          </Typography>
          <div className="fs-6 text-center"> Now ₹{product.discountPrice} </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Product;
