import { ParseDeckLink } from "./parseDeckLink";

export function ValidateDeckLink(deckLink: string): boolean {
  const parsedData = ParseDeckLink(deckLink);
  return parsedData !== null;
};