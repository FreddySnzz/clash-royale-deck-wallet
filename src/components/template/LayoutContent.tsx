interface LayoutContentProps {
  children?: React.ReactNode;
  className?: string;
}

export default function LayoutContent({ children, className }: LayoutContentProps) {
  return (
    <div className={`flex flex-col mt-7 ${className}`}>
      {children}
    </div>
  );
};