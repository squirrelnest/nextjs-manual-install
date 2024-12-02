
export type Post = {
    title: string;
    id: string;
}

export type ExpandedPost = Post & {
    author: string;
    category: string;
}

export const Posts = async () => {
    let data = await fetch("https://api.vercel.app/blog"); 
    let posts = await data.json(); 
    console.log(posts);

    return (
        <>
            <h1>Vercel Blog Posts</h1>
            <h2>Simple Info</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

            <h2>Expanded Info</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        Title: {post.title}
                        <ul>
                            <li>Author: {post.author}</li>
                            <li>Category: {post.category}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}