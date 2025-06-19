import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import { use } from "react";
import axios from "axios";
import { useState, useEffect } from "react";


const BlogList = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  const handleClick = (data) => {

	console.log("datai", data);
	navigate("/blog-details", { state: { data } });
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://sqrft-website-backend-ohqz.onrender.com/api/blogs"
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log("blogging", blogs);

  return (
    <div className="ltn__blog-area mb-120">
      <div>
        <div style={{ marginRight: "20px", marginLeft: "60px" }}>
          <div className="col-lg-11">
            <div className="ltn__blog-list-wrap">
              {blogs.map((blog, index) => (
                <div className="ltn__blog-item ltn__blog-item-5 go-top" key={index}>
                  <div className="ltn__blog-img" style={{ height:"300px", width:"100%", overflow:"hidden" }}>
                      <img
                        src={`https://sqrft-website-backend-ohqz.onrender.com${blog.image}`} 
                        alt="Image"
                      />
                  </div>
                  <div className="ltn__blog-brief">
                    <h3 className="ltn__blog-title">
                        {blog.title}
                    </h3>
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt" />
                          {new Date(blog.createdAt).toLocaleDateString("en-US",
							{
							  year: "numeric",
							  month: "long",
							  day: "numeric",
							}
						  )}
                        </li>
                      </ul>
                    </div>
                    <p>
                      {blog.description}
                    </p>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-author">
                              <img
                                src={`https://sqrft-website-backend-ohqz.onrender.com${blog.image}`} 
                                alt="#"
                              />
                              By: {blog.writtenBy}
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
						  <i className="fas fa-arrow-right" />
                          <button onClick={() => handleClick(blog)}>Read More</button>
						  
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__pagination-area text-center">
                  <div className="ltn__pagination">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fas fa-angle-double-left" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">1</Link>
                      </li>
                      <li className="active">
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">3</Link>
                      </li>
                      <li>
                        <Link to="#">...</Link>
                      </li>
                      <li>
                        <Link to="#">10</Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fas fa-angle-double-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Sidebar/> */}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
