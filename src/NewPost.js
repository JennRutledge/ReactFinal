// Where new posts are created.

const NewPost = ({
    handleSubmit,
    postTitle,
    setPostTitle,
    postBody,
    setPostBody
}
) => {
    return (
        <main className="NewPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor='postTitle'>Headline:</label>
                <input
                    id='postTitle'
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Thoughts:</label>
                <textarea
                    id='postBody'
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button type ='submit'>Share</button>
            </form>
        </main>
    )
}

export default NewPost;