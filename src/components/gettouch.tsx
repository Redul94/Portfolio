import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/Ai';
import { BsTelegram } from 'react-icons/Bs';
import { HiOutlineMail } from 'react-icons/Hi';
export default function Gettouch() {
  return (
    <div className='right-contact flex justify-center'>
      <form action='' className='contact-form'>
        <div className='input-control i-c-2'>
          <input type='text' required placeholder='YOUR NAME'></input>
          <input type='email' required placeholder='YOUR EMAIL'></input>
        </div>
        <div className='input-control'>
          <input type='text' required placeholder='ENTER SUBJECT'></input>
        </div>
        <div className='input-control'>
          <textarea
            name=''
            id=''
            cols={15}
            rows={8}
            placeholder='Message Here...'
          ></textarea>
        </div>
        <div className='submit-btn'>
          <a href='#' className='main-btn'>
            <span className='btn-text'>Download CV</span>
            <span className='btn-icon'>
              <i className='fas fa-download'></i>
            </span>
          </a>
        </div>
      </form>
    </div>
  );
}
