import Link from "next/link";
import BlogCard from "./BlogCard";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  body_html: string;
  cover_image: string;
  published_timestamp: string;
  reading_time_minutes: number;
  tags: string[];
  type_of: string;
  social_image: string;
}

export default function MoreArticles({ posts }: { posts: BlogPost[] }) {
  const shuffledPosts = [...posts].sort(() => 0.5 - Math.random());

  return (
    <section className="w-full py-16 px-5 lg:px-0">
      <h2 className="text-center text-xl md:text-2xl font-semibold text-[#571244] mb-8">
        More articles
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {shuffledPosts.slice(0, 3).map((article, index) => (
          <BlogCard key={index} post={article} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          href={"/"}
          className="bg-[#571244] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#653ec2] transition-all duration-150"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
}
