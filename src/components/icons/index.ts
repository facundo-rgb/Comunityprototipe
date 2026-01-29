/**
 * Community Icon System
 * 
 * Unified icon components extracted from Figma-generated SVGs.
 * These icons are optimized for the Learning Heroes community design.
 * 
 * @example
 * ```tsx
 * import { Icon } from "@/components/icons";
 * 
 * // In your component
 * <Icon name="home" size={24} />
 * <Icon name="favorite" className="text-community-accent-green" />
 * ```
 */

export { Icon, type IconProps } from "./Icon";
export { iconPaths, type IconName } from "./paths";

// Re-export icon names for convenience
export const ICON_NAMES = [
  // Navigation
  "home",
  "bookmark",
  "bookmarkLarge",
  "calendar",
  "community",
  "notifications",
  
  // Actions
  "search",
  "comment",
  "commentLarge",
  "favorite",
  "favoriteLarge",
  "repeat",
  "repeatLarge",
  "share",
  "shareLarge",
  "moreHoriz",
  
  // Arrows & Indicators
  "arrowForward",
  "arrowForwardLarge",
  "chevronDown",
  "check",
  
  // Media
  "photo",
  
  // Misc
  "trophy",
] as const;
