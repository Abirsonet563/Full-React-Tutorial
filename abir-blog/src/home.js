import {useState} from 'react';
const Home = () => {
const [blogs, setBlogs] = useState([
{title: 'My new web', body: 'lorem ipsum...', author: 'abir', id:1},
{title: 'Welcome Party!', body: 'lorem ipsum...', author: 'hasan', id:2},
{title: 'Web dev top topic', body: 'lorem ipsum...', author: 'yoshi', id:3},
{title: 'Earn Money', body: 'lorem ipsum...', author: 'mario', id:4}
]);


return(
    <div className="Home">
   <h2>Home Page</h2>
   {blogs.map((blog) => (
    <div className='blog-preview' key={blog.id}>
    <h2>Blog Title{blog.title}</h2>    
    <p>Written by {blog.author}</p>
    
    </div>
   ))}
    </div>
)
}
export default Home;