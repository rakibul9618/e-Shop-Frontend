import { ReactNode, useEffect, useRef, useState } from 'react';

interface accordionType {
  title: ReactNode;
  children: ReactNode;
  isActive: boolean;
}

const Accordion: React.FC<accordionType> = ({
  title,
  isActive,
  children,
  ...rest
}) => {
  const [active, setActive] = useState(isActive);
  const [height, setHeight] = useState('0px');
  const content = useRef(null);

  useEffect(() => {
    const { current } = content;
    active ? setHeight(`${(current as any).scrollHeight}px`) : setHeight('0px');
  }, [active]);

  return (
    <div className="accordion" {...rest}>
      <div
        className={`accordion__title xs_title ${active ? 'active' : ''}`}
        onClick={(): void => setActive(!active)}
      >
        {title}
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
