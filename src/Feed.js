// This component is used in the Home component
// defines how the posts should be selected/identified.
import Post from './Post';

const Feed = ({ posts }) => {
    return (
        <>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
};

export default Feed;