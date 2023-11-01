// import { HiOutlineMail } from 'react-icons/hi';
export default function Resume() {
  return (
    <section className=' mb-8 mt-3 flex flex-col items-center justify-center '>
      <h3 className='mb-3 text-gray-400'>Name: Redul Hossen</h3>
      <h3 className='mb-3 text-gray-400'>From:Savar,Dhaka Bangladesh</h3>
      <a href='https://drive.google.com/uc?export=download&id=18j0jqozEyfQRg_K7vN4u3TnLMK2vyzy6'>
        <button className='rounded-3xl bg-green-400 p-4'>
          Download Resume
        </button>
      </a>
    </section>
  );
}
