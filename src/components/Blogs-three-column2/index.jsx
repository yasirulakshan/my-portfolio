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
            <a href="https://medium.com/@yasiru1999/understanding-the-in-typescript-80b8021b0456" target="_blank" rel="noopener noreferrer">
              <div
                  className="item list md-mb50 wow fadeInUp"
                  data-wow-delay=".5s"
              >
                <div className="img" style={{ height: "220px", overflow: "hidden" }}>
                  <img src="./explanation_mark_typescript.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="cont">
                  <div className="date custom-font">

                    <span>
                      <i>15</i> May 2025
                    </span>

                  </div>
                  <div className="info custom-font">
                    <div className="author">
                      <span>by / Yasiru</span>
                    </div>
                    <div className="tag">

                      <span>Medium</span>

                    </div>
                  </div>
                  <h6>
                    Create a Custom Date Range Picker using React Date Picker.
                  </h6>
                  <div className="btn-more custom-font">
                    <div className="simple-btn" target="_blank" rel="noopener noreferrer">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4">
            <a href="https://medium.com/@yasiru1999/create-a-custom-date-range-picker-using-react-date-picker-cc65cf0758bf" target="_blank" rel="noopener noreferrer">
              <div
                className="item list md-mb50 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="img" style={{ height: "220px", overflow: "hidden" }}>
                  <img src="./date-picker.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="cont">
                  <div className="date custom-font">

                    <span>
                      <i>25</i> June 2024
                    </span>

                  </div>
                  <div className="info custom-font">
                    <div className="author">
                      <span>by / Yasiru</span>
                    </div>
                    <div className="tag">

                      <span>Medium</span>

                    </div>
                  </div>
                  <h6>
                    Create a Custom Date Range Picker using React Date Picker.
                  </h6>
                  <div className="btn-more custom-font">
                    <div className="simple-btn" target="_blank" rel="noopener noreferrer">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4">
            <a href="https://medium.com/@yasiru1999/empowering-teams-a-modular-approach-to-routing-in-react-monorepos-1d7d61689e1a" target="_blank" rel="noopener noreferrer" >
              <div
                  className="item list md-mb50 wow fadeInUp"
                  data-wow-delay=".5s"
              >
                <div className="img" style={{ height: "220px", overflow: "hidden" }}>
                  <img src="./modular_approach_to_react_routing.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="cont">
                  <div className="date custom-font">

                    <span>
                      <i>29</i> Jan 2025
                    </span>

                  </div>
                  <div className="info custom-font">
                    <div className="author">
                      <span>by / Yasiru</span>
                    </div>
                    <div className="tag">

                      <span>Medium</span>

                    </div>
                  </div>
                  <h6>
                   A Modular Approach to Routing in React Monorepos
                  </h6>
                  <div className="btn-more custom-font">
                    <div className="simple-btn" target="_blank" rel="noopener noreferrer">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4">
            <a href="https://medium.com/@yasiru1999/why-tanstack-router-may-not-be-the-best-choice-for-monorepos-8773b7f99d9e" target="_blank" rel="noopener noreferrer" >
              <div
                  className="item list md-mb50 wow fadeInUp"
                  data-wow-delay=".5s"
              >
                <div className="img" style={{ height: "220px", overflow: "hidden" }}>
                  <img src="./why-tanstack-may-not.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="cont">
                  <div className="date custom-font">

                    <span>
                      <i>29</i> Jan 2025
                    </span>

                  </div>
                  <div className="info custom-font">
                    <div className="author">
                      <span>by / Yasiru</span>
                    </div>
                    <div className="tag">

                      <span>Medium</span>

                    </div>
                  </div>
                  <h6>
                    Why TanStack Router May Not Be the Best Choice for Monorepos
                  </h6>
                  <div className="btn-more custom-font">
                    <div className="simple-btn" target="_blank" rel="noopener noreferrer">
                      Read More
                    </div>
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
      </div >
    </section >
  );
};

export default BlogsThreeColumn2;
