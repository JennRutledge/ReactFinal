//How the posts are seen in their view. 50 
// the number of characters viewed then over 
// that amount the title must be clicked to 
// view the remainder of the post.

import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <article className='post'>
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className='postDate'>{post.datetime}</p>
            </Link>
            <p className='postBody'>{
                (post.body).length <= 50
                ? post.body
                : `${(post.body).slice(0, 50)}...`
            }</p>
        </article>    
    )
};

export default Post;