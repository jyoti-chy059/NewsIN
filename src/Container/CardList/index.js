import React from 'react'
import '../../App.css'
import CardComponent from '../Card'
import { newsList } from '../../mocks'

const CardList = () => {
  return (
    <div className="cardContainer">
      {newsList.map((news) => (
        <CardComponent item={news} />
      ))}
    </div>
  )
}

export default CardList
