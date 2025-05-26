import { useParams, useNavigate } from 'react-router-dom';
import { useBlog } from '../context/useBlog';
import toast from 'react-hot-toast';

function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useBlog();
  const post = state.find(p => p.id === id);
  const navigate = useNavigate();

  if (!post) return <p>Post not found</p>;

  const handleDelete = () => {
    dispatch({ type: 'DELETE_POST', payload: id! });
    toast.success('Post deleted');
    navigate('/blog');
  };

  return (
    <div className="blog-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div className="actions">
        <button className="button button-edit" onClick={() => navigate(`/blog/edit/${id}`)}>Edit</button>
        <button className="button button-delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default BlogDetail;