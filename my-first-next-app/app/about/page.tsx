// export a default JS function
// React: the first letter should be capital

const aboutMe = (): string => {
  return `hello from the other side`;
};

export default function About() {
  const about = `This is a software development company`;
  return (
    <div>
      <p>{about}</p>
      <p>{aboutMe()}</p>
    </div>
  );
}
