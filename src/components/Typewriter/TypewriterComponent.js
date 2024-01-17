// TypewriterComponent.js
import React from 'react';
import Typewriter from 'typewriter-effect';

export default function TypewriterComponent() {
  return (
    <Typewriter
    onInit={(typewriter) => {
        typewriter
        .pauseFor(500) //Half second pause
        .typeString('DanWarnick.Im')
        .pauseFor(1500) //Pause for 1.5 Seconds
        .deleteAll()
        .typeString("I'm Dan Warnick")
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
