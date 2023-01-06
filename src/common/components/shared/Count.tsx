import React from 'react'
import { BiMinus } from 'react-icons/bi'
import { HiPlus } from 'react-icons/hi'

const Count = ({increment, count, decrement}) => {
    return (
        <p className='flex-middle gap-10 title_des select-none count'>
            <BiMinus onClick={decrement} className="pointer icon" />
            {count}
            <HiPlus onClick={increment} className="pointer icon" />
        </p>
    )
}

export default Count