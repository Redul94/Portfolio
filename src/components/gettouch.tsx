// import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai';
// import { BsTelegram } from 'react-icons/bs';
// import { HiOutlineMail } from 'react-icons/hi';
export default function Gettouch() {
  return (
    <div className='right-contact flex justify-center'>
      <form action='' className='contact-form'>
        <div className='input-control i-c-2 '>
          <input type='text' required placeholder='YOUR NAME'></input>
          <br />
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
            className='w-full rounded border p-2 text-gray-700 hover:border-gray-500 focus:border-blue-500 focus:outline-none'
          ></textarea>
        </div>
        <div className='submit-btn'>
          <a
            href='https://drive.google.com/uc?export=download&id=18j0jqozEyfQRg_K7vN4u3TnLMK2vyzy6'
            className='main-btn'
          >
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
