import { slugify, titleCase } from "./text.js";

export interface Post {
  title: string;
  slug: string;
}

/** A post with a display title and a URL slug. */
export function makePost(title: string): Post {
  return { title: titleCase(title), slug: slugify(title) };
}
