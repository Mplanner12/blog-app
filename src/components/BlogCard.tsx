/* eslint-disable @next/next/no-img-element */
import { BlogPost } from "@/app/utils/types";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }: { post: BlogPost }) => {
  const date = new Date(post.published_timestamp);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return (
    <div
      key={post.id}
      className="rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
    >
      <div className="relative">
        <img
          src={post.cover_image || "/placeholder.jpg"}
          alt={post.title}
          className="w-full h-[15rem] object-cover rounded-lg"
        />
        <span className="absolute top-4 left-4 bg-[#DDD0DA] bg-opacity-85 bg-blend-color-burn text-[#571244] text-sm font-semibold px-3 py-1 rounded-sm capitalize">
          {post.type_of}
        </span>
      </div>

      <div className="p-1 pt-2">
        <h2 className="text-lg font-semibold text-[#151515] mt-2 text-ellipsis h-[3.35rem] mb-[1.25rem]">
          {post.title}
        </h2>
        <p className="text-[#696969] mt-2 text-ellipsis h-[3.35rem]">
          {post.description}
        </p>
        <div className="mt-4 flex justify-between items-start text-sm text-gray-500">
          <div className="flex justify-evenly items-start gap-x-2">
            <span>
              <span>
                {day} {month}, {year}
              </span>
            </span>
            <span className="pl-2 border-l-2 border-gray-500">
              {post.reading_time_minutes} mins read
            </span>
          </div>
          <div className="flex justify-center items-start">
            <Link
              href={`/article/${post.id}`}
              className="text-[#571244] underline underline-offset-4 hover:text-[#653ec2] hover:underline hover:underline-offset-4 active:text-[#653ec2] decoration-[#571244] hover:decoration-[#653ec2] active:decoration-[#653ec2] font-semibold inline-block"
            >
              View Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
