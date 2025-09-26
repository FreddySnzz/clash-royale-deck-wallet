interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={props.className}>
      <div className={`flex h-full justify-center`}>
        <div className={`flex flex-col w-full`}>
          <div className={`flex flex-col mt-28`}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};