import { clashRegularFont } from "@/fonts";

interface TittleProps {
  tittle: string;
  subtitle?: string;
  className?: string;
}

export default function Tittle(props: TittleProps) {
  return (
    <div className={`${clashRegularFont.className}`}>
      <h1 className={`text-2xl text-slate-200 text-shadow-md text-shadow-black ${props.className}`}>
        {props.tittle}
      </h1>
      { props.subtitle &&
        <h2 className={`text-sm text-slate-400 ${props.className}`}>
          {props.subtitle}
        </h2>
      }
    </div>
  );
};