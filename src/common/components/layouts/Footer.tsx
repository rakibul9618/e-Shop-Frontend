import Container from './Container';

const Footer: React.FC = () => {
  return (
    <Container
      Class="footer"
      py={false}
      className="pt-6 pb-6 flex flex-center flex-md-between flex-wrap text-center text-md-start gap-30 "
    >
      <div className="copyright">
        <p className="text-gray">
          © 2022 All rights reserved <br />
          Designed & Developed by{' '}
          <span className="text-white text-700">RnDev</span>
        </p>
      </div>
      <div className="flex flex-center flex-wrap gap-30 contact">
        <p className="text-gray">
          <span className="text-white">Phone :</span>
          <br /> (+88) XXX - XXX - XXX
        </p>
        <p className="text-gray">
          <span className="text-white">Email : </span>
          <br /> info@example.com
        </p>
      </div>
    </Container>
  );
};

export default Footer;
