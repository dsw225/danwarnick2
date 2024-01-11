// TypewriterComponent.js
import React from 'react';
import Typewriter from 'typewriter-effect';

export default function TypewriterComponent() {
  return (
    <Typewriter
    onInit={(typewriter) => {
        typewriter
        .pauseFor(500) //Half second pause
        .typeString('DANWARNICK.IM')
        .pauseFor(1500) //Pause for 1.5 Seconds
        .deleteAll()
        .typeString("I'M DAN WARNICK")
        .callFunction(() => {
            console.log('String typed out!');
        })
        .start();
      }}
      options={{
        cursor: '_',
      }}
    />
  );
}
