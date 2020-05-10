import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import '../../App.css'

const CardWithAnimation = ({ item }) => {
  return (
    <Card className={'MuiEngagementCard--01'}>
      <CardActionArea>
        <CardMedia className={'MuiCardMedia-root'} image={item.image} title="Contemplative Reptile" />
        <CardContent className={'MuiCardContent-root'}>
          <Typography gutterBottom variant="h5" component="h2" className={'MuiTypography--heading'}>
            {item.subtitle}
          </Typography>
          <Typography className={'MuiTypography--subheading'} variant={'caption'}>
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

CardWithAnimation.getTheme = (muiBaseTheme) => ({
  MuiCard: {
    root: {
      '&.MuiEngagementCard--01': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        transition: '0.3s',
        maxWidth: 304,
        margin: 'auto',
        boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        '&:hover': {
          boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
        },
        '& .MuiCardMedia-root': {
          paddingTop: '56.25%',
        },
        '& .MuiCardContent-root': {
          textAlign: 'left',
          padding: muiBaseTheme.spacing.unit * 3,
        },
        '& .MuiDivider-root': {
          margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
        },
        '& .MuiTypography--heading': {
          fontWeight: 'bold',
        },
        '& .MuiTypography--subheading': {
          lineHeight: 1.8,
        },
        '& .MuiAvatar-root': {
          display: 'inline-block',
          border: '2px solid white',
          '&:not(:first-of-type)': {
            marginLeft: -muiBaseTheme.spacing.unit,
          },
        },
      },
    },
  },
})

export default CardWithAnimation
