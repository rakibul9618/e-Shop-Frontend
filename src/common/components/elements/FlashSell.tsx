import Image from 'next/image';
import Container from '../layouts/Container';
import Link from 'next/link';

const countDown = [
  {
    id: 1,
    title: 'Day',
    time: '0',
  },
  {
    id: 2,
    title: 'Hrs',
    time: '00',
  },
  {
    id: 3,
    title: 'Min',
    time: '00',
  },
  {
    id: 4,
    title: 'Sec',
    time: '00',
  },
];

const FlashSell: React.FC = () => {
  return (
    <Container>
      <div className="radius-1 grid col-lg-2 gap-50 flash_cart ">
        <div className="flex flex-col items-center items-lg-start flash_content">
          <p className="font-700 text-pink">Don’t Miss!!</p>
          <h2 className="lg_title mt-2">Decorate Your House</h2>
          <div className="flex gap-10 mt-4 countdown">
            {countDown.map(({ id, title, time }) => (
              <div
                className="flex-middle rounded text-center countdown_section"
                key={id}
              >
                <div>
                  <div className="text-500 countdown_number">{time}</div>
                  <div className="countdown_unit">{title}</div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/" className="primary-btn mt-6 inline_block check_out">
            Check it Out!
          </Link>
        </div>
        <div className="poster_countdown_thumbnail">
          <Image
            src="/images/flash_sell.png"
            alt="Poster Product"
            className=""
            width={661}
            height={502}
          />
        </div>
      </div>
    </Container>
  );
};

export default FlashSell;
