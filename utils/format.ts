export function formatList(items: string[]) {
  return new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction"
  }).format(items);
}

export function absoluteUrl(path: string, baseUrl: string) {
  return new URL(path, baseUrl).toString();
}
