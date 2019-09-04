import React from "react";
import photo10 from "./imgs/photo10.jpg";
import photo3 from "./imgs/photo4.jpg";
import photo5 from "./imgs/photo5.jpg";
import logo from "./imgs/raaa_logoB.png";

const App = () => {
  return (
    <>
      <div style={{ background: "#ee002d" }}>
        <div class="row flex-nowrap justify-content-between align-items-center ml-2 mr-3 p-3">
          <div class="col-lg-2">
            <a class="text-muted" href="#" style={{ color: "#fff" }}>
              <img
                src={logo}
                alt=""
                style={{ width: "70px", marginTop: "-20px" }}
              />
            </a>
          </div>
          <div class="col-lg-8 text-center">
            <a class="blog-header-logo text-dark" href="#">
              <h2 style={{ color: "#fff" }}>
                Rutgers African-American Alumni Alliance (RAAA), Inc.
              </h2>
            </a>
          </div>
          <div class="col-lg-2 d-flex justify-content-end align-items-center">
            <a class="text-muted" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="mx-3"
                role="img"
                viewBox="0 0 24 24"
                focusable="false"
                style={{ color: "#fff" }}>
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </a>
            <a class="btn btn-sm btn-outline-light" href="#">
              Sign up
            </a>
          </div>
        </div>
        <div style={{ background: "#cc0033" }}>
          <div className="container">
            <div class="nav-scroller py-1">
              <nav class="nav d-flex justify-content-center">
                <a class="p-2 text-white" href="#">
                  About
                </a>
                <a class="p-2 text-white" href="#">
                  Donate
                </a>
                <a class="p-2 text-white" href="#">
                  Hall of Fame
                </a>
                <a class="p-2 text-white" href="#">
                  Gallery
                </a>
                <a class="p-2 text-white" href="#">
                  News & Events
                </a>
                <a class="p-2 text-white" href="#">
                  Get Involved
                </a>
                <a class="p-2 text-white" href="#">
                  Get connected
                </a>
                <a class="p-2 text-white" href="#">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="myCarousel" class="carousel slide mb-2" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active" style={{ height: "500px" }}>
            <img
              src={photo3}
              alt="Responsive image"
              className="img-fluid"
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                position: "center"
              }}
            />
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>Example headline.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#" role="button">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item" style={{ height: "500px" }}>
            <img
              src={photo10}
              alt=""
              class="img-responsive img-center"
              alt="Responsive image"
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                position: "center"
              }}
            />
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>Another example headline.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#" role="button">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item" style={{ height: "500px" }}>
            <img
              src={photo5}
              alt=""
              class="img-fluid"
              alt="Responsive image"
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                position: "center"
              }}
            />
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>One more for good measure.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#" role="button">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div className="container">
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">World</strong>
                <h3 class="mb-0">Featured post</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src={photo10}
                  alt=""
                  style={{ width: "200px", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">Design</strong>
                <h3 class="mb-0">Post title</h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src={photo5}
                  alt=""
                  style={{ width: "200px", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main role="main" class="container">
        <div class="row">
          <div class="col-md-8 blog-main">
            <h3 class="pb-4 mb-4 font-italic border-bottom" />
            From the Firehose
            <div class="blog-post">
              <h2 class="blog-post-title">Sample blog post</h2>
              <p class="blog-post-meta">
                January 1, 2014 by <a href="#">Mark</a>
              </p>

              <p>
                This blog post shows a few different types of content that’s
                supported and styled with Bootstrap. Basic typography, images,
                and code are all supported.
              </p>
              <hr />
              <p>
                Cum sociis natoque penatibus et magnis{" "}
                <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Sed posuere consectetur est at lobortis.
                Cras mattis consectetur purus sit amet fermentum.
              </p>
              <blockquote>
                <p>
                  Curabitur blandit tempus porttitor.{" "}
                  <strong>Nullam quis risus eget urna mollis</strong> ornare vel
                  eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </blockquote>
              <p>
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
              <h2>Heading</h2>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              <h3>Sub-heading</h3>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <pre>
                <code>Example code block</code>
              </pre>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
                malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa.
              </p>
              <h3>Sub-heading</h3>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
                consectetur. Etiam porta sem malesuada magna mollis euismod.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <ul>
                <li>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.
                </li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
                elit libero, a pharetra augue.
              </p>
              <ol>
                <li>Vestibulum id ligula porta felis euismod semper.</li>
                <li>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </li>
                <li>
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna.
                </li>
              </ol>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Sed posuere
                consectetur est at lobortis.
              </p>
            </div>
            <div class="blog-post">
              <h2 class="blog-post-title">Another blog post</h2>
              <p class="blog-post-meta">
                December 23, 2013 by <a href="#">Jacob</a>
              </p>

              <p>
                Cum sociis natoque penatibus et magnis{" "}
                <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Sed posuere consectetur est at lobortis.
                Cras mattis consectetur purus sit amet fermentum.
              </p>
              <blockquote>
                <p>
                  Curabitur blandit tempus porttitor.{" "}
                  <strong>Nullam quis risus eget urna mollis</strong> ornare vel
                  eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </blockquote>
              <p>
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
            </div>
            <div class="blog-post">
              <h2 class="blog-post-title">New feature</h2>
              <p class="blog-post-meta">
                December 14, 2013 by <a href="#">Chris</a>
              </p>

              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
                consectetur. Etiam porta sem malesuada magna mollis euismod.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <ul>
                <li>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.
                </li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              <p>
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
                elit libero, a pharetra augue.
              </p>
            </div>
            <nav class="blog-pagination">
              <a class="btn btn-outline-primary" href="#">
                Older
              </a>
              <a
                class="btn btn-outline-secondary disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true">
                Newer
              </a>
            </nav>
          </div>

          <aside class="col-md-4 blog-sidebar">
            <div class="p-4 mb-3 bg-light rounded">
              <form class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
                <label for="inputEmail" class="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  required
                  autofocus
                />
                <label for="inputPassword" class="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required
                />
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">
                  Sign in
                </button>
              </form>
            </div>

            <div class="p-4">
              <h4 class="font-italic">Archives</h4>
              <ol class="list-unstyled mb-0">
                <li>
                  <a href="#">March 2014</a>
                </li>
                <li>
                  <a href="#">February 2014</a>
                </li>
                <li>
                  <a href="#">January 2014</a>
                </li>
                <li>
                  <a href="#">December 2013</a>
                </li>
                <li>
                  <a href="#">November 2013</a>
                </li>
                <li>
                  <a href="#">October 2013</a>
                </li>
                <li>
                  <a href="#">September 2013</a>
                </li>
                <li>
                  <a href="#">August 2013</a>
                </li>
                <li>
                  <a href="#">July 2013</a>
                </li>
                <li>
                  <a href="#">June 2013</a>
                </li>
                <li>
                  <a href="#">May 2013</a>
                </li>
                <li>
                  <a href="#">April 2013</a>
                </li>
              </ol>
            </div>

            <div class="p-4">
              <h4 class="font-italic">Elsewhere</h4>
              <ol class="list-unstyled">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
};

export default App;
