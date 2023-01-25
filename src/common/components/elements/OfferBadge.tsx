import { offerPropsType } from '@/types/shared';
import React from 'react';

const OfferBadge: React.FC<offerPropsType> = ({ offer }) => {
  return <div className="absolute offer_badge">{offer}% off</div>;
};

export default OfferBadge;
