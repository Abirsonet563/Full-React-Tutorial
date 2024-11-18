import {useState, useEffect} from 'react';
import BlogList from './blogList';
const Home = () => {
const [blogs, setBlogs] = useState([
{title: 'My new web', body: 'lorem ipsum...', author: 'abir', id:1},
{title: 'Welcome Party!', body: 'lorem ipsum...', author: 'hasan', id:2},
{title: 'Web dev top topic', body: 'lorem ipsum...', author: 'yoshi', id:3},
{title: 'Earn Money', body: 'lorem ipsum...', author: 'mario', id:4}
]);
const handleDelete = (id) => {
   const newBlogs = blogs.filter(blog=> blog.id !== id )
   setBlogs(newBlogs);
}
useEffect(()=>{
    console.log('This effect runs in every render');
    console.log(blogs);
})
return(
    <div className="home">
 <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
 <BlogList blogs={blogs.filter((blog)=>blog.author === "abir")} title="Abir Blogs"/> 
    </div>
)
}
export default Home;