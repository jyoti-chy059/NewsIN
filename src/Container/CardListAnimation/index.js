import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { createGenerateClassName } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import '../../App.css'
import { newsList } from '../../mocks'
import CardWithAnimation from '../CardAnimation'

const muiBaseTheme = createMuiTheme()

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
})

const CardListWithAnimation = () => {
  return (
    <JssProvider generateClassName={generateClassName}>
      <MuiThemeProvider
        theme={createMuiTheme({
          typography: {
            useNextVariants: true,
          },
          overrides: CardWithAnimation.getTheme(muiBaseTheme),
        })}
      >
        <div className="cardContainer">
          {newsList.map((news) => (
            <CardWithAnimation item={news} />
          ))}
        </div>
      </MuiThemeProvider>
    </JssProvider>
  )
}

export default CardListWithAnimation
