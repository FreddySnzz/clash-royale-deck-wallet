interface RenderIconsProps {
  src: string,
  alt?: string
}

export default function RenderIcons({ src, alt }: RenderIconsProps) {
  return (
    <div className="flex overflow-hidden max-w-8 max-h-8">
      <img src={src} alt={alt} className="min-w-full min-h-full scale-150" />
    </div>
  );
};