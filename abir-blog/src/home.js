import {useState, useEffect} from 'react';
import BlogList from './blogList';
const Home = () => {
const [blogs, setBlogs] = useState(null);

const [name, setName] = useState('Abir');

useEffect(()=>{
   fetch('http://localhost:8000/blogs')
   .then(res => {
    return res.json();
   })
   .then(data =>{
     setBlogs(data);
   });
}, [])
return(
    <div className="home">
 {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
 {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author === "abir")} title="Abir Blogs"/> }
  <button onClick={()=>setName('Abir Hasan')}>Abir Click</button>  
  <h1>{name}</h1>
    </div>
)
}
export default Home;