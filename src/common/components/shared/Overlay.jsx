import React, { useEffect, useState } from 'react'
import Container from '../layouts/Container'

// icons
import { MdClose } from 'react-icons/md';

const Overlay = ({ children, getRef }) => {
    const [active, setActive] = useState(false);

    const handleClose = () => {
        setActive(false)
    }

    useEffect(() => {
        function handleClick() {
            setActive(true)
        }

        if (getRef && getRef.current) {
            getRef.current.addEventListener("click", handleClick, false);
        }
    }, [active, getRef]);
    return (

        <Container  Class={`overlay fixed  ${active ? "active" : ""}`} className="flex flex-center">
            <div className="w-100  radius-1 overlay_content">
                <div className="flex flex-end header_top">
                    <MdClose className='pointer icon' onClick={handleClose} />
                </div>
                <div className="overlay_body">
                    {children}
                </div>
            </div>
        </Container>
    )
}

export default Overlay