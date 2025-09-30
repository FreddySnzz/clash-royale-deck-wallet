interface LayoutContentProps {
  children?: React.ReactNode;
  className?: string;
}

export default function LayoutContent({ children, className }: LayoutContentProps) {
  return (
    <div className={`flex flex-col w-full h-full justify-center mt-28 ${className}`}>
      {children}
    </div>
  );
};