import { Link } from 'react-router-dom';
import { useBlog } from '../context/useBlog';

function BlogList() {
  const { state } = useBlog();
  return (
    <div>
      <h1>Blog Listing</h1>
      <Link to="/blog/new">
        <button className="button button-create">Create</button>
      </Link>
      <ul className="blog-list">
        {state.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;