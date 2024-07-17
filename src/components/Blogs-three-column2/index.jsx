/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";

const BlogsThreeColumn2 = ({ subBG }) => {
  return (
    <section className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Latest News
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              My Blogs.
            </h3>
          </Split>
          <span className="tbg">Blogs</span>
        </div>
        <div className="row">
          <div className="col-lg-4">
            {/* <div
              className="item list md-mb50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="img">
                <img src="/img/blog/1.jpg" alt="" />
              </div>
              <div className="cont">
                <Link href="/blog/blog-dark" className="date custom-font">

                  <span>
                    <i>06</i> August
                  </span>

                </Link>

                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark" className="tag">

                    <span>WordPress</span>

                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    The Start-Up Ultimate Guide to Make Your WordPress Journal.
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/blog-details-dark" className="simple-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-lg-4">
            <a href="https://medium.com/@yasiru1999/create-a-custom-date-range-picker-using-react-date-picker-cc65cf0758bf" target="_blank" rel="noopener noreferrer">
              <div
                className="item list md-mb50 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="img">
                  <img src="/date-picker.webp" alt="" />
                </div>
                <div className="cont">
                  <div className="date custom-font">

                    <span>
                      <i>25</i> June
                    </span>

                  </div>
                  <div className="info custom-font">
                    <div className="author">
                      <span>by / Admin</span>
                    </div>
                    <div className="tag">

                      <span>Medium</span>

                    </div>
                  </div>
                  <h6>
                    Create a Custom Date Range Picker using React Date Picker.
                  </h6>
                  <div className="btn-more custom-font">
                    <Link href="https://medium.com/@yasiru1999/create-a-custom-date-range-picker-using-react-date-picker-cc65cf0758bf" className="simple-btn" target="_blank" rel="noopener noreferrer">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* <div className="col-lg-4">
            <div className="item list wow fadeInUp" data-wow-delay=".8s">
              <div className="img">
                <img src="/img/blog/3.jpg" alt="" />
              </div>
              <div className="cont">
                <Link href="/blog/blog-dark" className="date custom-font">

                  <span>
                    <i>08</i> August
                  </span>

                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark" className="tag">

                    <span>WordPress</span>

                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    The Start-Up Ultimate Guide to Make Your WordPress Journal.
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/blog-details-dark" className="simple-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BlogsThreeColumn2;
