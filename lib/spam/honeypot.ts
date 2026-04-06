export function isSpam(honeypotValue: unknown): boolean {
  return typeof honeypotValue === "string" && honeypotValue.length > 0;
}
