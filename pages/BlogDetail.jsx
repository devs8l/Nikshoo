import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetail.css'; // Reuse existing CSS

const BlogDetail = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await fetch('https://nikshoo-backend.vercel.app/blog');
                const data = await response.json();

                // Find the specific blog by ID
                const blogsData = data.blogs || {};
                const specificBlog = Object.keys(blogsData).find(id => id === blogId);

                if (specificBlog) {
                    setBlog({
                        id: specificBlog,
                        ...blogsData[specificBlog]
                    });
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog details:', error);
                setLoading(false);
            }
        };

        fetchBlogDetails();
    }, [blogId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!blog) {
        return <div>Blog not found</div>;
    }

    // Function to split text and highlight key sections
    const highlightKeyPoints = (text) => {
        // Split the text into paragraphs
        const paragraphs = text.split('\n');

        return paragraphs.map((paragraph, index) => {
            // Check if paragraph contains key points to highlight
            const keyPointPatterns = [
                /important/i,
                /key/i,
                /crucial/i,
                /essential/i
            ];

            const shouldHighlight = keyPointPatterns.some(pattern => pattern.test(paragraph));

            return (
                <p
                    key={index}
                    className={shouldHighlight ? 'highlighted-paragraph' : ''}
                >
                    {paragraph}
                </p>
            );
        });
    };

    return (
        <div className="blog-detail-container">
            <div className="blog-detail-image-con">
                <img src={blog.image} alt={blog.title} className="blog-detail-image" />
            </div>
            <div className="blog-detail-header">
                <div className="blog-detail-title">
                    <h1>{blog.title}</h1>
                    <h4>{blog.date}</h4>
                </div>
            </div>
            <div className="blog-detail-content">
                {highlightKeyPoints(blog.text)}
            </div>
        </div>
    );
};

export default BlogDetail;