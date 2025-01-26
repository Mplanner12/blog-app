/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import MoreArticles from "@/components/MoreArticles";
import { BlogPost } from "@/app/utils/types";

async function getPostData(id: string): Promise<BlogPost> {
  const response = await axios.get(`https://dev.to/api/articles/${id}`);

  if (!response.data) {
    // Handling case when the article is not found.
    return Promise.reject("Article not found");
  }

  return response.data;
}

async function getMoreArticles(): Promise<BlogPost[]> {
  const response = await axios.get(`https://dev.to/api/articles/`);

  if (!response.data) {
    // Handling case when the article is not found.
    return Promise.reject("Article not found");
  }

  return response.data;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const { id } = await params;
    const post = await getPostData(id);

    return {
      title: post.title,
      description: post.description,
    };
  } catch (error: unknown) {
    return {
      title: "Article Not Found",
      description: `The requested article could not be found.,
      "Error fetching post data:", ${error}`,
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const post = await getPostData(id);
    const moreArticles = await getMoreArticles();

    // Ensuring body_html is safe for rendering (sanitize if needed)
    const sanitizedBodyHTML = post.body_html;

    const date = new Date(post.published_timestamp);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return (
      <article className="p-6 md:px-16 py-12 prose lg:prose-lg max-w-7xl mx-auto">
        <div className="w-full justify-start items-center">
          <p className="w-fit bg-[#15151533] bg-opacity-20 px-3 py-2 rounded-lg text-[#571244] mb-6 text-md md:text-lg capitalize">
            {post.type_of}
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#151515] mb-4">
          {post.title}
        </h1>
        <p className="text-gray-500 mb-6 text-md md:text-lg capitalize">
          {day} {month}, {year}
        </p>
        {post.cover_image && (
          <img
            alt={post.title}
            className="w-full mb-8 rounded-lg object-cover"
            src={post.cover_image}
          />
        )}
        {/* Render the article content */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: sanitizedBodyHTML }}
        />
        <MoreArticles posts={moreArticles} />
      </article>
    );
  } catch (error: unknown) {
    console.error("Error fetching post data:", error);
    notFound();
  }
}
