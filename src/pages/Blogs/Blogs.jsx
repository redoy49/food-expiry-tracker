import React from "react";

const blogs = [
  {
    id: 1,
    title: "Mastering Food Storage: Extend Shelf Life",
    category: "Tips",
    date: "June 1, 2025",
    views: "3.5K views",
    image:
      "https://buildawellnessblog.com/wp-content/uploads/2023/01/food-bloggers-nutrition-3-1140x760.jpg", // jars with grains
  },
  {
    id: 2,
    title: "The Science Behind Food Expiry Dates",
    category: "Knowledge",
    date: "June 5, 2025",
    views: "4.1K views",
    image:
      "https://www.theblogstarter.com/wp-content/uploads/2016/05/how-to-start-a-food-blog.jpg", // pantry containers
  },
  {
    id: 3,
    title: "Top 5 Foods You're Storing Wrongly",
    category: "Mistakes",
    date: "June 10, 2025",
    views: "2.8K views",
    image:
      "https://masterblogging.com/wp-content/uploads/2019/11/Pinch-of-Yum-Blog.png", // hand holding containers
  },
  {
    id: 4,
    title: "DIY Food Preservation Techniques",
    category: "Recipes",
    date: "June 15, 2025",
    views: "3.9K views",
    image:
      "https://static.wixstatic.com/media/52ef8f_5c59ad9007b8462e921b754752844d86~mv2.jpg/v1/fill/w_980,h_804,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/52ef8f_5c59ad9007b8462e921b754752844d86~mv2.jpg", // colorful containers
  },
];

const BlogSection = () => (
  <section className="py-12 bg-base-100 text-base-content">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <header className="text-center mb-10 md:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight mb-4">
          Your Guide to a{" "}
          <span className="text-green-600">Smarter Kitchen</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore articles and expert advice to help you master food management,
          reduce waste, and save money with insights from our Food Expiry
          Tracker.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-base-200 rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <a href="#" aria-label={blog.title}>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/400x300/E5E7EB/6B7280?text=No+Image";
                }}
              />
            </a>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <a
                  href="#"
                  className="text-xs font-semibold uppercase text-green-600 hover:underline"
                >
                  {blog.category}
                </a>
                <h3 className="mt-2 text-lg font-semibold leading-snug">
                  {blog.title}
                </h3>
              </div>
              <div className="flex justify-between text-sm text-base-content/60 pt-4">
                <span>{blog.date}</span>
                <span>{blog.views}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
