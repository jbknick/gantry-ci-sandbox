export function slugify(input: string, maxLength = 80): string {
  const lower = input.toLowerCase().trim();
  const words = lower.split(/[^a-z0-9]+/).filter((w) => w.length > 0);
  if (words.length === 0) {
    return "untitled";
  }
  return words.join("-").slice(0, maxLength);
}

export function titleCase(input: string): string {
  return input
    .split(" ")
    .map((w) => (w.length > 0 ? w[0]?.toUpperCase() + w.slice(1) : w))
    .join(" ");
}
