import React from 'react'

const OfferBadge = ({offer}) => {
  return (
    <div className="absolute offer_badge">{offer}% off</div>
  )
}

export default OfferBadge