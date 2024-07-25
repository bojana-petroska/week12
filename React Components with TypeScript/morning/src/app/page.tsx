'use client';
import Image from 'next/image';
import React, { Component } from 'react';

type hello = {
  name: string;
  age?: number;
  run?(): void;
};

function run(): void {
  console.log('I am also running with you!');
}

function Hello({ name, age, run }: hello) {
  // const {age, name} = props; // one way of destructuring
  if (run) {
    run();
  }
  return (
    <div>
      <p>Hello {name}</p>
      {age ? <p>Age: {age}</p> : ''}
    </div>
  );
}

interface IHelloClass {
  name: string;
}

class HelloClass extends Component<IHelloClass> {
  constructor(props: IHelloClass) {
    super(props);
  }
  render() {
    return <div>hiiii from {this.props.name} </div>;
  }
}

const HelloFunction = (props: IHelloClass) => {
  return <div>hiiii from {props.name} </div>;
}

export default function Home() {
  return (
    <main>
      <Hello name="bo" age={37} run={run} />
      <strong>
        <Hello
          name="pariska"
          run={() => {
            console.log('I am running!');
          }}
        />
      </strong>
      <p>-bo-</p>
      <strong>
        <HelloClass name="John" />
      </strong>
    </main>
  );
}
