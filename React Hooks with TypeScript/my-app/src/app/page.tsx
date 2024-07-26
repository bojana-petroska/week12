'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  // const [dark, setDark] = useState();
  const [color, setColor] = useState('pink');
  const [colorCode, setColorCode] = useState('#ff0012');

  useEffect(() => {
    let timer = setTimeout(() => {
      if (color === 'purple') {
        setColorCode('#f00900');
        console.log('color is updated and the useEffect will run');
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [color]);

  useEffect(() => {
    console.log('undefined sent to useEffect');
  });

  useEffect(() => {
    console.log('this one runs only the first time the page renders');
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {}, 5000);
    return;
  }, []);

  return (
    <main>
      <p>
        the color is {color} and it's code is {colorCode}
      </p>
      <button
        type="button"
        onClick={() => {
          setColor('purple');
        }}>
        change color
      </button>
    </main>
  );
}
