import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        fetch('http://localhost:8000/blogs',{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then (() => {
            console.log('new blog added');
            // history.go(); agora é navigate();
            navigate('/');//history.push('/');
        })
        
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                
                type="text" 
                required 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}/>
                
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                
                ></textarea>
                <label>Blog Author:</label>
                <select value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}>
                    
                    <option value="Pedro">Pedro</option>
                    <option value="Clara">Clara</option>
                    <option value="Vincenzo">Vincenzo</option>
                </select>
                <button>Create</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;