import React, { useEffect, useState } from 'react';
import Container from '../layouts/Container';

// icons
import { MdClose } from 'react-icons/md';
import { overlayPropsType } from '@/types/shared';

const Overlay: React.FC<overlayPropsType> = ({ children, getRef }) => {
  const [active, setActive] = useState(false);

  const handleClose = (): void => {
    setActive(false);
  };

  useEffect(() => {
    const { current } = getRef as any;
    function handleClick(): void {
      setActive(true);
    }

    if (getRef && current !== null) {
      (current as HTMLButtonElement).addEventListener(
        'click',
        handleClick,
        false
      );
    }
  }, [active, getRef]);
  return (
    <Container
      Class={`overlay fixed  ${active ? 'active' : ''}`}
      className="flex flex-center"
    >
      <div className="w-100  radius-1 overlay_content">
        <div className="flex flex-end header_top">
          <MdClose className="pointer icon" onClick={handleClose} />
        </div>
        <div className="overlay_body">{children}</div>
      </div>
    </Container>
  );
};

export default Overlay;
