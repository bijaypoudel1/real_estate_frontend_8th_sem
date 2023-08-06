export function isGoogleMapIframe(value: string | undefined) {
  // Regular expression to match Google Maps iframe pattern
  const pattern =
    /<iframe[^>]+src="https:\/\/www\.google\.com\/maps\/embed\?[^"]+"[^>]*><\/iframe>/;

  // Check if the pattern matches in the input value
  return typeof value === "string" && pattern.test(value);
}

export function setIframeWidth(mapValue: any, width: any) {
  // Use regular expression to set width of the iframe
  const updatedMapValue = mapValue.replace(
    /(<iframe[^>]+)width="[^"]*"/,
    `$1width="${width}"`
  );
  return updatedMapValue;
}
