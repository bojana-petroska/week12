'use client';
import { useContext, useEffect, useState, createContext } from 'react';

const DarkMode = createContext(false);

export default function Home() {
  // const [dark, setDark] = useState();
  const [color, setColor] = useState('pink');
  const [colorCode, setColorCode] = useState('#ff0012');
  const [dark, setDark] = useState(false);

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
    <DarkMode.Provider value={dark}>
    <main className={dark ? 'bg-black' : ''}>
      <p className={dark ? 'text-white' : ''}>
        the color is {color} and its code is {colorCode}
      </p>
      <button
        type="button"
        onClick={() => {
          setColor('purple');
        }}
        className={dark ? 'text-white' : ''}>
        change color
      </button>
      <br />
      <button
        type="button"
        onClick={() => {
          setDark(!dark);
        }}
        className={dark ? 'text-white' : ''}>
        dark/light
      </button>

      {/* <ChildOne dark={dark}/> */}
      <ChildOne />
    </main>
    </DarkMode.Provider>
  );
}

function ChildOne() {
  const dark = useContext(DarkMode);
  return (
      <>
        <p className={dark ? 'text-white' : ''}>Child one</p>
        <ChildTwo dark={dark} />
      </>
  );
}

function ChildTwo() {
  const dark = useContext(DarkMode);
  return <p className={dark ? 'text-white' : ''}>Child two</p>;
}
