// import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
// import UnstyledLink from '@/components/links/UnstyledLink';
export default function MyProject() {
  return (
    <section className='flex justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <h2>Things I have worked with</h2>
        <p>Please click a project to view more details.</p>
        <div className='mb-4 mt-5 flex flex-col space-y-4 border-2 p-3'>
          <UnderlineLink href='https://github.com/redul94/estore'>
            E-commerce site
          </UnderlineLink>
          <br />
          <UnderlineLink href='https://github.com/redul94/exit-forgetting'>
            To do list app
          </UnderlineLink>
          <UnderlineLink href='https://github.com/Redul94/PervasiveProject'>
            Basic Android App
          </UnderlineLink>
          <UnderlineLink href='https://github.com/Redul94/ToDo'>
            To do for web
          </UnderlineLink>
          <UnderlineLink href='https://github.com/Redul94/rock-paper-game'>
            To do for web
          </UnderlineLink>
        </div>
      </div>
    </section>
  );
}
