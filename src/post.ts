import { slugify, titleCase } from "./text.js";

export interface Post {
  title: string;
  slug: string;
}

export function makePost(title: string): Post {
  return { title: titleCase(title), slug: slugify(title) };
}
