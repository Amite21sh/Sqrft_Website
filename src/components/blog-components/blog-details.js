import React, { Component } from "react";
import { Link } from "react-router-dom";
import Comments from "./comments";
import Sidebar from "./sidebar";
const BlogDetails = ({ blog }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  console.log("blog", blog);

  return (
    <div className="ltn__page-details-area ltn__blog-details-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="ltn__blog-details-wrap">
              <div className="ltn__page-details-inner ltn__blog-details-inner">
                <h2 className="ltn__blog-title">{blog.title}</h2>
                <div className="ltn__blog-meta">
                  <ul>
                    <li className="ltn__blog-author go-top">
                      <Link to="/team-details">
                        <img
                          src={publicUrl + "assets/img/blog/author.jpg"}
                          alt="#"
                        />
                        By: {blog.writtenBy}
                      </Link>
                    </li>
                    <li className="ltn__blog-date">
                      <i className="far fa-calendar-alt" />
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </li>
                  </ul>
                </div>
                <p>{blog.content}</p>

                <img
                  src={`https://sqrft-website-backend-ohqz.onrender.com${blog.image}`}
                  alt="Image"
                />
                <h2>Content</h2>
                <p>{blog.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
