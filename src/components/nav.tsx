import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/Ai';
import { BsTelegram } from 'react-icons/Bs';
export default function NavBar() {
  return (
    <section>
      <div className='flex  h-12 flex-row items-center justify-between bg-black shadow-md'>
        <div className='flex items-center'>
          <h3 className=' align-middle m-5'>Redul Hossen</h3>
        </div>
        <div className='mr-3 flex items-center'>
          <a href='https://github.com/redul94' className='mr-2 text-3xl'>
            <AiFillGithub />
          </a>

          <a href='#' className='mr-2 text-3xl'>
            <AiFillLinkedin />
          </a>
          <a href='T.Me/redul94' className='mr-2 text-2xl'>
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
