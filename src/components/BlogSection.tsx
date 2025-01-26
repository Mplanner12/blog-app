/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";
import { BlogPost } from "@/app/utils/types";

const BlogSection = () => {
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([]);
  const [loadMoreCount, setLoadMoreCount] = useState(6);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dev.to/api/articles")
      .then((response: { data: BlogPost[] }) => {
        setPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch((error: unknown) => console.error("Error fetching posts:", error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  useEffect(() => {
    setVisiblePosts(filteredPosts.slice(0, loadMoreCount));
  }, [filteredPosts, loadMoreCount]);

  const handleLoadMore = () => {
    setLoadMoreCount(loadMoreCount + 6);
  };

  return (
    <div className="w-full h-full px-4 md:px-16 pb-12 pt-8 md:pt-12 lg:pt-16 mt-[6rem] lg:mt-[1rem] md:[1.3rem]">
      <motion.h1
        className="text-center text-[1.785rem] px-1 tracking-tight md:tracking-normal md:px-0 md:text-4xl font-semibold text-[#571244] mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Stay Updated with the Latest Trends in Tobams Group
      </motion.h1>
      <div className="flex items-center justify-between space-y-4 md:space-y-0 space-x-4 md:space-x-8 px-3 lg:px-[10.5rem] mt-8 lg:mt-12">
        <div className="relative w-full mt-4 lg:mt-0">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md py-2 pr-10 pl-4 w-full text-[#571244]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-800" size={20} />
          </div>
        </div>

        <select className="border border-gray-300 rounded-md py-2 px-4 w-1/6 md:w-[30%]">
          <option value="" disabled hidden>
            Select category
          </option>
          <option value="All posts">All posts</option>
          <option value="IT Services">IT Services</option>
          <option value="Training and Development">
            Training and Development
          </option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center mt-8">
          <span className="loading loading-spinner loading-lg text-[#571244]"></span>
        </div>
      ) : visiblePosts.length === 0 ? ( // Check if there are no visible posts after loading
        <div className="mt-12 text-center text-gray-600">
          {" "}
          {/* Styles for the no results message */}
          <p className="text-lg">No articles found matching your search.</p>
          <FiSearch className="text-gray-400 mx-auto mt-4" size={40} />{" "}
          {/* Larger search icon */}
          <p className="mt-2 text-sm">
            Try refining your keywords or browsing all articles.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-20 mt-8 lg:mt-12 px-2">
          {visiblePosts.map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </div>
      )}

      {loadMoreCount < filteredPosts.length && (
        <div className="text-center mt-8">
          <button
            className="border-[1.5px] font-semibold border-[#571244] text-[#571244] hover:scale-90 transition-all duration-200 py-2 px-6 rounded-md"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogSection;
