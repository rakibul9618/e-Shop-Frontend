import Image, { StaticImageData } from 'next/image';
import { RxCross2 } from 'react-icons/rx';

interface propsType {
  image: string | StaticImageData;
  onCloseClick: () => string;
  className?: string;
}

const ImageWithClose: React.FC<propsType> = ({
  image,
  onCloseClick,
  className = '',
}) => {
  return (
    <div className={`relative image_with_close ${className}`}>
      <Image src={image} alt="" />
      <div
        className="absolute flex-middle pointer delete"
        onClick={onCloseClick}
      >
        <RxCross2 />
      </div>
    </div>
  );
};

export default ImageWithClose;
