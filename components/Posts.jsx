import { Post } from '.';

const posts = [
  {
    id: '1',
    username: 'coffmanjrp',
    userImg:
      'https://res.cloudinary.com/coffmanjrp-dev/image/upload/v1635197000/coffmanjrp.io/paul_coffman_jr_e56ec322cd.png',
    img: 'https://res.cloudinary.com/coffmanjrp-dev/image/upload/v1638834664/coffmanjrp.io/js_a1493274be.png',
    caption: 'Hello World 1!',
  },
  {
    id: '2',
    username: 'coffmanjrp',
    userImg:
      'https://res.cloudinary.com/coffmanjrp-dev/image/upload/v1635197000/coffmanjrp.io/paul_coffman_jr_e56ec322cd.png',
    img: 'https://res.cloudinary.com/coffmanjrp-dev/image/upload/v1638834664/coffmanjrp.io/js_a1493274be.png',
    caption: 'Hello World 2!',
  },
  {
    id: '3',
    username: 'coffmanjrp',
    userImg:
      'https://res.cloudinary.com/coffmanjrp-dev/image/upload/v1635197000/coffmanjrp.io/paul_coffman_jr_e56ec322cd.png',
    img: 'https://res.cloudinary.com/coffmanjrp-dev/image/upload/v1638834664/coffmanjrp.io/js_a1493274be.png',
    caption: 'Hello World 3!',
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...{ ...post }} />
      ))}
    </div>
  );
};

export default Posts;
