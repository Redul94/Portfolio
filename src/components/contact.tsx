import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
export default function Contact() {
  return (
    <section>
      <div className='mt-6 flex justify-center text-center'>
        <div className='flex-row'>
          <h2 className='mb-3 text-3xl'>Contact me</h2>
          <div className='mb-3 flex text-xl'>
            <button className='mr-2'>
              <HiOutlineMail />
            </button>
            <p>
              <a href='redul15-3193@diu.edu.bd'>redul15-3193@diu.edu.bd</a>
            </p>
          </div>
          <div className='mb-6 text-3xl'>
            <h3>Socials</h3>
            <div className='mt-5'>
              <button className='pr-4'>
                <AiFillGithub />
              </button>
              <button className='pr-4'>
                <AiFillLinkedin />
              </button>
              <button>
                <BsTelegram />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
