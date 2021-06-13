import React from 'react';
import styles from '../styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ProductPage from "./productPage.js";

const useStyles = makeStyles({
  root: {
    maxWidth: 270,
  },
  margin: '0 auto',
});
function Product(props) {
  const classes = useStyles();
  return (
    <Card className={`${classes.root} col-lg-4 mb-5 px-0 mx-3`}>
      <CardActionArea className="px-3 py-3">
        <CardMedia
          component="img"
          alt="iPhone"
          height="180"
          image={props.src}
          title={props.title}
        />
        <CardContent>
          <Typography variant="h5" component="h2" className="my-1 fw-bold">
            {props.title.length > 11
              ? props.title.substring(0, 11) + '.....'
              : props.title.substring(0, 11)}
          </Typography>
          <Typography
            variant="subtitle1"
            className="my-1 text-primary cardSubtitle"
          >
            {props.category}
          </Typography>
          <div className="cardPrice fs-6"> Now {props.price} </div>
          <a href="/productPage" className="btn btn-secondary fw-bold text-white">
            Details
          </a>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Product;
