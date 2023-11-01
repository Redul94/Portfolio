import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
export default function NavBar() {
  return (
    <section>
      <div className='flex  h-12 flex-row items-center justify-between bg-black shadow-md'>
        <div className='flex items-center'>
          <h3 className=' m-5 align-middle'>Redul Hossen</h3>
        </div>
        <div className='mr-3 flex items-center'>
          <a href='https://github.com/redul94' className='mr-2 text-3xl'>
            <AiFillGithub />
          </a>

          <a href='#' className='mr-2 text-3xl'>
            <AiFillLinkedin />
          </a>
          <a href='https://t.me/redul94' className='mr-2 text-2xl'>
            <BsTelegram />
          </a>
          <button className=' mr-2 text-2xl'>
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </section>
  );
}
