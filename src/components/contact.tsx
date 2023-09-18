import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/Ai';
import { BsTelegram } from 'react-icons/Bs';
import { HiOutlineMail } from 'react-icons/Hi';
export default function Contact() {
  return (
    <section>
      <div className='flex justify-center text-center mt-6'>
        <div className='flex-row'>
          <h2 className='mb-3 text-3xl'>Contact me</h2>
          <div className='flex text-xl mb-3'>
            <button className='mr-2'>
              <HiOutlineMail />
            </button>
            <p>
              <a href='redul15-3193@diu.edu.bd'>redul15-3193@diu.edu.bd</a>
            </p>
          </div>
          <div  className='text-3xl mb-6'>
            <h3>Socials</h3>
            <div className='mt-5'>
            <button className='pr-4'>
            <AiFillGithub />
          </button>
          <button  className='pr-4'>
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
