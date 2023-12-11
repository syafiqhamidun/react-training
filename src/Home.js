/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [name , setName] = useState('mario');

    // use as delete button
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=> {
      console.log('use effect ran');
    }, []);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} titlele="This is my book" handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')} >change name</button>
            <p>{name}</p>
            {/* <BlogList blogs={blogs.filter((itik) => itik.author === "mario")}  titlele="mario's book" /> */}
        </div>
     );
}
 
export default Home;