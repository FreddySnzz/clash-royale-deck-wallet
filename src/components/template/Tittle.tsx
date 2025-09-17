interface TittleProps {
  tittle: string;
  subtitle: string;
}

export default function Tittle(props: TittleProps) {
  return (
    <div className={``}>
      <h1 className={`font-black text-3xl text-gray-100`}>
        {props.tittle}
      </h1>
      <h2 className={`font-light text-sm text-gray-400`}>
        {props.subtitle}
      </h2>
    </div>
  );
};