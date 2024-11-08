import React, { useState, useEffect } from 'react';
import "../pages/Blogs.css";
// import heroMain from "../assets/hero-main.png";
// import heroright from "../assets/blogs-hero.png";
// import submit from "../assets/submit.png";
// import bimg from "../assets/blog-img.png";



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [formData, setFormData] = useState({ email: '' });
    const [num, setNum] = useState(3); 

    const updateNum = () => {
        if (window.innerWidth <= 640) {
            setNum(1);  // Show 1 slide on mobile
        } else {
            setNum(3);  // Show 3 slides on larger screens
        }
    };

    // Fetch blog data from Firebase
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('https://nikshoo-backend.vercel.app/blog');
                const data = await response.json();

                // Access the "blogs" key
                const blogsData = data.blogs || {};
                const blogsArray = Object.keys(blogsData).map(id => ({
                    id,
                    ...blogsData[id],
                }));

                setBlogs(blogsArray);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };


        fetchBlogs();
        updateNum();

        window.addEventListener('resize', updateNum);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateNum);
        };
    }, []);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div>
            <div className="blogs-wrap">
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985102/hero-main_ajhuae.png" alt="" />
                <div className="blogs-hero">
                    <div className="hero-left">
                        <h1>Featured Blogs</h1>
                        <p>Enhance your spaces with the comfortable furniture crafted by us!</p>
                    </div>
                    <div className="hero-right">
                        <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985080/blogs-hero_xdkgak.png" alt="" />
                    </div>
                </div>

                {/* Render the first blog item without the 'small' class */}
                {blogs.length > 0 && (
                    <div className="blogs-middle">
                        <div className="bimg-div">
                            <img src={blogs[0].image} alt="" />
                        </div>
                        <div className="blog-middle-con">
                            <h1>{blogs[0].title}</h1>
                            <h4>{blogs[0].date}</h4>
                            <p>{blogs[0].text}</p>
                        </div>
                    </div>
                )}

                {/* Render the rest of the blog items with the 'small' class */}
                <div className="latest-blogs">
                    <h1>Latest Blogs</h1>
                    <p>Enhance your spaces with the comfortable furniture crafted by us</p>
                    <div className="blogs-container">
                        <Swiper
                            slidesPerView={num}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                            
                        >
                            {blogs.slice(1).map((blog) => (
                                <SwiperSlide key={blog.id} className="blogs-middle small">
                                    <div className="bimg-div smallimg">
                                        <img src={blog.image} alt="" />
                                    </div>
                                    <div className="blog-middle-con smallcon">
                                        <h2>{blog.title}</h2>
                                        <h4>{blog.date}</h4>
                                        <p>{blog.text}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="subscribe">
                    <div className="sub-left">
                        <h1>Subscribe Now!</h1>
                        <p>Get our latest blogs on your email address and never miss it</p>
                    </div>

                    <div className="sub-right">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                                required
                            />
                            <button>
                                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985141/submit_luvyqb.png" alt="" />
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
