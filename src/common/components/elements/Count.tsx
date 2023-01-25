import { countPropsType } from '@/types/shared';
import React from 'react';
import { BiMinus } from 'react-icons/bi';
import { HiPlus } from 'react-icons/hi';

const Count: React.FC<countPropsType> = ({ increment, count, decrement }) => {
  return (
    <p className="flex-middle gap-10 title_des select-none count">
      <BiMinus onClick={decrement} className="pointer icon" />
      {count}
      <HiPlus onClick={increment} className="pointer icon" />
    </p>
  );
};

export default Count;
