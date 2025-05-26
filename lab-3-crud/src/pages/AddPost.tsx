import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../context/useBlog';
import { v4 as uuidv4 } from 'uuid';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { dispatch } = useBlog();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_POST',
      payload: { id: uuidv4(), title, content, published: true }
    });
    navigate('/blog');
  };

  return (
    <div className="form-container">
      <h1>Add Post</h1>
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
          <button type="submit" className="button button-create">Add Post</button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;