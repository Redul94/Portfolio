import UnderlineLink from '@/components/links/UnderlineLink';
export default function Footer() {
  return (
    <section>
      <footer className=' bottom-2 bg-red-600 text-gray-700'>
        © {new Date().getFullYear()} By{' '}
        <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
          redul
        </UnderlineLink>
      </footer>
    </section>
  );
}
