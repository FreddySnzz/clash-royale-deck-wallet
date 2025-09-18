import LayoutContent from "./LayoutContent";

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Layout( props: LayoutProps ) {
  return (
    <div className={props.className}>
      <div className={`flex h-full justify-center`}>
        <div className={`flex flex-col w-full`}>
          <LayoutContent>
            {props.children}
          </LayoutContent>
        </div>
      </div>
    </div>
  );
};