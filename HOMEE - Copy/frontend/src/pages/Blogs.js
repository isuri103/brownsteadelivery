import React, { useState } from 'react';
import './Blogs.css';
import oip1 from '../components/images/OIP.jpg';
import oip2 from '../components/images/OIP (1).jpg';
import oip3 from '../components/images/OIP (2).jpg';
import oip4 from '../components/images/OIP (3).jpg';
import oip5 from '../components/images/OIP (4).jpg';
import oip6 from '../components/images/OIP (5).jpg';

const Blogs = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Tea Brewing: Tips for the Perfect Cup",
      author: "Sarah Chen",
      date: "January 15, 2026",
      category: "Tea Culture",
      image: oip1,
      excerpt: "Discover the secrets to brewing the perfect cup of tea. From water temperature to steeping time, we'll guide you through every step.",
      content: "Tea brewing is both an art and a science. The perfect cup depends on several factors: the quality of the tea leaves, water temperature, steeping time, and the ratio of tea to water. For black teas, use boiling water (212°F) and steep for 3-5 minutes. Green teas prefer cooler water (160-180°F) and shorter steeping times of 1-3 minutes. Oolong teas fall in between at 195-205°F. Always use fresh, filtered water for the best taste. Remember, over-steeping can make your tea bitter, so timing is crucial!"
    },
    {
      id: 2,
      title: "Exploring Ceylon Tea: History and Heritage",
      author: "David Kumar",
      date: "January 12, 2026",
      category: "Tea History",
      image: oip2,
      excerpt: "Learn about the rich history of Ceylon tea production and what makes it one of the world's finest teas.",
      content: "Ceylon tea, also known as Sri Lankan tea, has a fascinating history dating back to the 19th century. When coffee plantations in Sri Lanka were devastated by disease, tea became the crop of choice. Today, Ceylon tea is renowned for its bright color, bold flavor, and distinctive characteristics. The tea grows at various altitudes on the island, with high-grown teas offering more complex flavors. Ceylon tea is known for its brisk, lively character and is perfect for breakfast or afternoon tea. The island's tea industry employs hundreds of thousands of people and remains a cornerstone of Sri Lanka's economy."
    },
    {
      id: 3,
      title: "Health Benefits of Green Tea: Science-Backed Facts",
      author: "Dr. Emily Roberts",
      date: "January 8, 2026",
      category: "Health & Wellness",
      image: oip3,
      excerpt: "Uncover the scientifically proven health benefits of drinking green tea regularly.",
      content: "Green tea has been consumed for centuries in Asia, and modern science is confirming what ancient cultures have long known. Green tea is rich in antioxidants, particularly catechins, which help protect cells from damage. Regular consumption has been linked to improved brain function, better weight management, and reduced risk of certain diseases. Studies show that the L-theanine in green tea promotes relaxation without drowsiness, while caffeine provides a gentle energy boost. A cup of green tea daily can contribute to overall wellness and longevity."
    },
    {
      id: 4,
      title: "Tea Pairing Guide: Enhance Your Culinary Experience",
      author: "Chef Michael Wong",
      date: "January 5, 2026",
      category: "Culinary",
      image: oip4,
      excerpt: "Discover how to pair different types of tea with food for an enhanced dining experience.",
      content: "Tea pairing with food is an elegant art that can elevate your meals. Black teas pair wonderfully with hearty dishes like roasted meats and rich pastries. Green teas complement lighter fare such as seafood and delicate desserts. Oolong teas, with their complex profiles, work well with Asian cuisine. Herbal teas can cleanse the palate between courses. When pairing, consider the intensity of both the tea and the food - they should complement rather than overpower each other. Start experimenting with these combinations to discover your perfect pairings."
    },
    {
      id: 5,
      title: "Sustainable Tea Farming: Our Commitment to the Planet",
      author: "Maria Santos",
      date: "January 1, 2026",
      category: "Sustainability",
      image: oip5,
      excerpt: "Learn about sustainable practices in tea cultivation and how Browns Tea is committed to environmental responsibility.",
      content: "Sustainable tea farming is essential for the future of our industry and planet. At Browns Tea, we are committed to practices that minimize environmental impact while ensuring fair wages for our farmers. Our plantations use organic fertilizers, practice water conservation, and maintain biodiversity through shade-grown tea. We invest in renewable energy and work to reduce our carbon footprint. Additionally, we support local communities through education and healthcare initiatives. By choosing sustainably produced tea, you're supporting practices that benefit both people and the planet."
    },
    {
      id: 6,
      title: "Tea Ceremony: A Journey into Mindfulness",
      author: "Yuki Tanaka",
      date: "December 28, 2025",
      category: "Tea Culture",
      image: oip6,
      excerpt: "Explore the meditative practice of tea ceremony and how it promotes mindfulness and peace.",
      content: "The tea ceremony, known as Chanoyu in Japanese culture, is much more than just preparing and drinking tea. It is a choreographed ritual that emphasizes harmony, respect, purity, and tranquility. Every movement is deliberate and purposeful, from whisking the matcha to the precise placement of utensils. Practicing tea ceremony can help you slow down, appreciate the present moment, and find inner peace. The ceremony teaches valuable lessons about simplicity, gratitude, and the beauty found in everyday rituals. Whether you're a tea enthusiast or seeking mindfulness practices, tea ceremony offers profound benefits."
    }
  ];

  const toggleBlog = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <h1>Browns Tea Blog</h1>
        <p className="blogs-subtitle">Stories, tips, and insights about tea culture, health, and sustainability</p>
      </div>

      <div className="blogs-grid">
        {blogPosts.map((blog) => (
          <article key={blog.id} className="blog-card">
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
              <span className="blog-category">{blog.category}</span>
            </div>

            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>

              <div className="blog-meta">
                <span className="blog-author">By {blog.author}</span>
                <span className="blog-date">{blog.date}</span>
              </div>

              <p className="blog-excerpt">{blog.excerpt}</p>

              <button
                className="read-more-btn"
                onClick={() => toggleBlog(blog.id)}
              >
                {expandedBlog === blog.id ? 'Read Less' : 'Read More'}
              </button>

              {expandedBlog === blog.id && (
                <div className="blog-full-content">
                  <p>{blog.content}</p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;