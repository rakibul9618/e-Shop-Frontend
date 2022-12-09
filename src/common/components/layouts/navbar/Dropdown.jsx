import Link from 'next/link'

const Dropdown = ({title, items}) => {
  return (
    <div className='dropdown'>
      <button>{title}</button>
      <ul className="dropdown_items">
        {items.map((item, ind) => (
          <li key={ind}><Link className='dropdown_link'>{item}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown