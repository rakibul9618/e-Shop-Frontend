

// icons
import { IoClose } from 'react-icons/io5';

import { ImArrowLeft2 } from 'react-icons/im';

const Drawer = ({ children, isActive }) => {
  return (
    <div className={`drawer ${isActive ? 'active' : ''}`}>
      <div className="relative height-100">
        <div className="back_slider"></div>
        {children}
      </div>
    </div>
  )
}

Drawer.Toggle = ({ ...rest }) => {
  return (
    <div className='drawer_toggle' {...rest}>
      <IoClose />
    </div>
  )
}

Drawer.Content = ({ children, Class }) => {
  return (
    <div className={`drawer_content ${Class}`}>
      {children}
    </div>
  )
}

Drawer.Inner = ({ children, Class = 'one', id, activeNumber, onArrowClick }) => {

  return (
    <div className={`inner_drawer ${Class} ${activeNumber === id ? "active" : ""}`}>
      <ImArrowLeft2 className='left_arrow' onClick={onArrowClick} />
      {children}
    </div>
  )
}

export default Drawer