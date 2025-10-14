import { handleContextMenu } from "@/data/functions/preventeContextMenu";

interface RenderIconsProps {
  src: string,
  alt?: string,
  className?: string,
  type: 'icon' | 'badge',
}

export default function RenderIcons({ src, alt = 'iconImage', className, type }: RenderIconsProps) {
  if (type === 'icon') {
    return (
      <div className={`flex overflow-hidden max-w-5 max-h-5 ${className}`}>
        <img 
          src={src} 
          alt={alt} 
          className="min-w-full min-h-full" 
          draggable={false}
          onContextMenu={handleContextMenu}
        />
        {type}
      </div>
    ); 
  } else {
    return (
      <div className={`flex overflow-hidden max-w-8 max-h-8 ${className}`}>
        <img 
          src={src} 
          alt={alt} 
          className="min-w-full min-h-full scale-150" 
          draggable={false}
          onContextMenu={handleContextMenu}
        />
      </div>
    ); 
  }
};