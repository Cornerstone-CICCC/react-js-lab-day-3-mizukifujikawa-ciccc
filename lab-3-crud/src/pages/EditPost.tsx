import { useState, useEffect, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBlog } from '../context/useBlog';

function EditPost() {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useBlog();
  const post = state.find(p => p.id === id);
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const navigate = useNavigate();

  useEffect(() => {
    if (!post) navigate('/blog');
  }, [post]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_POST', payload: { id: id!, title, content, published: true } });
    navigate(`/blog/${id}`);
  };

  return (
    <div className="form-container">
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input className="input" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="textarea" value={content} onChange={e => setContent(e.target.value)} />
        </div>
        <div className="form-actions">
          <button type="submit" className="button button-edit">Update Post</button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;
