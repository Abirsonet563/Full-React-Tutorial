import {useState, useEffect} from 'react';
import BlogList from './blogList';
const Home = () => {
const [blogs, setBlogs] = useState(null);
const [isPending, setIsPending] = useState(true);
const [name, setName] = useState('Abir');

useEffect(()=>{
  setTimeout(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
     return res.json();
    })
    .then(data =>{
      setBlogs(data);
      setIsPending(false);
    });
  }, 1000);
}, [])
return(
    <div className="home">
  {isPending && <div>Loading....</div>}      
 {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
 {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author === "abir")} title="Abir Blogs"/> }
  <button onClick={()=>setName('Abir Hasan')}>Abir Click</button>  
  <h1>{name}</h1>
    </div>
)
}
export default Home;