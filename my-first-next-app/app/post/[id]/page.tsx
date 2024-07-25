import { Post } from './types/types'

const posts: Post[] = [
  {
    id: 1,
    title: 'Post 1',
    content: 'marketing'
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'pr'
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'marketing'
  },
  {
    id: 4,
    title: 'Post 3',
  }
];

export default function Post({ params }) {

    const id = parseInt(params.id);
    const post = posts.find((post) => post.id === id);

    return <>
    {
        post? (
            <>
            <p>Title: {post.title}</p>
            <p>Content: {post.content ? post.content : 'Not found!'}</p>
            </>
        ) :
        (
            <p>Not Found</p>
        )
    }
    </>
    // const router = useRouter();
    // const { slug } = router.query;
    // const post = posts[slug as string];
    // // const post = posts.find(post => post.id === slug as string)

    // return <div>
    //     <p>Title: {post?.title}</p>
    //     <p>Content: {post?.title}</p>
    // </div>
}



