import { iconPaths, IconName } from "./paths";
import { cn } from "@/app/components/ui/utils";

export interface IconProps {
  /** Name of the icon to render */
  name: IconName;
  /** Size in pixels (applied to both width and height) */
  size?: number;
  /** CSS class name */
  className?: string;
  /** Fill color - defaults to currentColor */
  color?: string;
  /** Stroke color for stroke-based icons */
  strokeColor?: string;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Icon Component
 * 
 * A unified icon component that renders SVG icons from the community design system.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Icon name="home" />
 * 
 * // With size
 * <Icon name="favorite" size={24} />
 * 
 * // With custom color
 * <Icon name="bookmark" color="#7ee2b8" />
 * 
 * // With Tailwind class
 * <Icon name="search" className="text-community-text-muted" />
 * ```
 */
export function Icon({
  name,
  size = 20,
  className,
  color,
  strokeColor,
  onClick,
}: IconProps) {
  const iconData = iconPaths[name];
  
  if (!iconData) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const isStrokeIcon = "stroke" in iconData && iconData.stroke;

  return (
    <div
      className={cn(
        "relative shrink-0",
        onClick && "cursor-pointer hover:opacity-80 transition-opacity",
        className
      )}
      style={{ width: size, height: size }}
      onClick={onClick}
      data-name={name}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox={iconData.viewBox}
      >
        {isStrokeIcon ? (
          <path
            d={iconData.path}
            stroke={strokeColor || color || "currentColor"}
            strokeWidth={1}
          />
        ) : (
          <path
            d={iconData.path}
            fill={color || "currentColor"}
          />
        )}
      </svg>
    </div>
  );
}

export default Icon;
