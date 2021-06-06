import React from "react";
import styles from "../styles.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
function Product(props){
  const classes = useStyles();
  return (
    <div class="col-lg-3 productStyle">
      <Paper elevation={10}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="iPhone"
              height="140"
              image= {props.src}
              title={props.title}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.info}
              </Typography>
              <div class="row">
                <div class="col"> {props.price} </div>
                <div class="col"> {props.discount} </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </div>
  );
}

export default Product;
