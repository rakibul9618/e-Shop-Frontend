import { useRef, useState } from 'react';

interface accordionType {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<accordionType> = ({ title, children, ...rest }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const content = useRef(null);

  function toggleAccordion(): void {
    const { current } = content;
    setActive(!active);
    if (current !== null)
      setHeight(
        active ? '0px' : `${(current as HTMLDivElement).scrollHeight}px`
      );
  }

  return (
    <div className="accordion" {...rest}>
      <div
        className={`accordion__title ${active ? 'active' : ''}`}
        onClick={toggleAccordion}
      >
        {title}
        <span className="accordion__icon">+</span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
