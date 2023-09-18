import * as React from 'react';
import Typewriter from 'typewriter-effect';
export default function Typewrite() {
  return (
    <section>
      <div className='flex h-96 justify-center  align-middle text-3xl'>
        <div className='flex items-center justify-center justify-items-center  align-middle'>
          <Typewriter
            options={{
              strings: [
                'Welcome',
                "I'm Redul Hossen,a software Engineer",
                "I'm working with web and mobile application development",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </section>
  );
}
