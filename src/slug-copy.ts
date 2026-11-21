export function makeSlug(input: string, maxLength = 80): string {
  const lower = input.toLowerCase().trim();
  const words = lower.split(/[^a-z0-9]+/).filter((w) => w.length > 0);
  if (words.length === 0) {
    return "untitled";
  }
  return words.join("-").slice(0, maxLength);
}
