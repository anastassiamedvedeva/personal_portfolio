import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Use tailwind merge to pass a list of classNames instead of a string
export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}