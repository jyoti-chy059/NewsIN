import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import '../../App.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
  },
  media: {
    height: 375,
  },
})

const CardComponent = ({ item }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={item.image} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.subtitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" href={item.refrenceLink} target="_blank">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardComponent
