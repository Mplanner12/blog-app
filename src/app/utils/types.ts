export type BlogPost = {
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
};
