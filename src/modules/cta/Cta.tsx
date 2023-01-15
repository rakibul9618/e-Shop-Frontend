import Container from '@/components/layouts/Container';
import Image from 'next/image';
import { imageType } from '@/types/shared';

// icons
import { MdEmail } from 'react-icons/md';
import { IoMailUnreadSharp } from 'react-icons/io5';

const Cta: React.FC<imageType> = ({ image }) => {
  return (
    <Container className="cta mb-6" py={false}>
      <div className="relative overflow-hidden cta_wrapper">
        <div className="absolute inset-0 image_holder">
          <Image className="img-cover-center" src={image} alt="title here" />
        </div>
        <div className="relative-up content">
          <div className="flex items-center gap-10 upper_title">
            <div className="radius-rounded flex-middle  icon">
              <MdEmail />
            </div>
            <span className="text-primary ">Newsletter</span>
          </div>
          <h4 className="md_title mt-2">Get weekly update</h4>
          <form action="" className="mt-4 flex flex-wrap gap-20">
            <div className="relative flex-1 input_area">
              <div className="absolute flex-middle icon">
                <IoMailUnreadSharp />
              </div>
              <input
                type="text"
                className="input_field mt-0 pl-5"
                placeholder="example@gmail.com"
              />
            </div>
            <button type="submit" className="flex-middle submit_btn_cta">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
