import Image from "next/image";
import { Post } from "./types";


const posts: Post[] = [
  {
    id: 1,
    title: 'Post 1',
    content: 'marketing',
    creationDate: new Date(),
    user: {
      name: 'bo',
      surname: 'petroska',
      age: 37
    }
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'pr',
    creationDate: new Date(),
    user: {
      name: 'bo',
      surname: 'petroska',
      age: 37
    }
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'marketing',
    creationDate: new Date(),
    user: {
      name: 'bo',
      surname: 'petroska',
      age: 37
    }
  },
  {
    id: 4,
    title: 'Post 3',
    creationDate: new Date(),
    user: {
      name: 'bo',
      surname: 'petroska',
      age: 37
    }
  }
];

export default function Home() {
  return (
    <div>
      { 
        posts.map((post) => (
          <div key={post.id}>
          <span>
            {post.user.name} {post.user.surname} - {post.user.age} years.
          </span>
            {/* <p>Post: {post.id}</p> */}
            <div>Created at: {post.creationDate?.toLocaleString()}</div>
            <h2>Title: {post.title}</h2>
            <p>Content: {post.content ? post.content : 'No content'}</p>
          </div>
        ))
      }
    </div>
  );
}
