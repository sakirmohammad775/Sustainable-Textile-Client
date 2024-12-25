import React from 'react';
import './Blog.css'

const BlogPage = () => {
    return (
        <>
           <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>IRIDIUM</h1>
          <p>Template by TEMPLATED</p>
          <nav className="hero-nav">
            <button>Homepage</button>
            <button>Left Sidebar</button>
            <button>Right Sidebar</button>
            <button>No Sidebar</button>
          </nav>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome">
        <div className="container">
          <h2>Welcome to Iridium!</h2>
          <p>Integer sit amet pede vel arcu aliquet pretium</p>
          <div className="welcome-content">
            <img
              src="https://i.ibb.co/6Nhd5g9/IMG-Biodegradable-Textile.webp"
              alt="Welcome"
              className="welcome-image"
            />
            <div className="welcome-text">
              <p>
                This is <strong>Iridium</strong>, a responsive HTML5 site template
                freebie by TEMPLATED. Released for free under the Creative Commons
                Attribution license, so use it for any purpose. Enjoy!
              </p>
              <p>
                Aenean elementum facilisis lacus. Aenean nec lorem. In porttitor. Donec
                laoreet nisl vitae dolor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <div className="container">
          <h2>Featured Sections</h2>
          <div className="featured-grid">
            <div className="featured-item">
              <img
                src="https://i.ibb.co/6Nhd5g9/IMG-Biodegradable-Textile.webp"
                alt="Featured 1"
              />
              <h3>Aenean Elementum Facilisis</h3>
              <p>
                Integer sit amet pede vel arcu aliquet pretium. Aenean elementum
                facilisis lacus. Aenean nec lorem.
              </p>
            </div>
            <div className="featured-item">
              <img
                src="https://i.ibb.co/6Nhd5g9/IMG-Biodegradable-Textile.webp"
                alt="Featured 2"
              />
              <h3>Fusce Ultrices Fringilla</h3>
              <p>
                Integer sit amet pede vel arcu aliquet pretium. Aenean elementum
                facilisis lacus. Aenean nec lorem.
              </p>
            </div>
            <div className="featured-item">
              <img
                src="https://i.ibb.co/6Nhd5g9/IMG-Biodegradable-Textile.webp"
                alt="Featured 3"
              />
              <h3>Etiam Rhoncus Volutpat Erat</h3>
              <p>
                Integer sit amet pede vel arcu aliquet pretium. Aenean elementum
                facilisis lacus. Aenean nec lorem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
        </>
  );
};
export default BlogPage;