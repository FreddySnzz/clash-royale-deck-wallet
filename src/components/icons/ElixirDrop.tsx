import { clashRegularFont } from "@/fonts"

interface ElixirDropProps {
  cost: number,
  size?: 'sm' | 'lg' | 'xl'
};

export default function ElixirDrop({ cost, size = 'sm' }: ElixirDropProps) {
  let sizeScale;
  let position;

  switch (size) {
    case 'lg':
      sizeScale = 'scale-150';
      break;
    case 'xl':
      sizeScale = 'scale-200';
      break;
    default:
      sizeScale = 'scale-100';
  };

  switch (cost) {
    case 1:
      position = 'top-[39] left-[45]';
      break;
    case 4:
      position = 'top-[39] left-[43]';
      break;
    case 6:
      position = 'top-[39] left-[43]';
      break;
    default:
      position = 'top-[39] left-[44]';
  };

  return (
    <div className={`relative w-24 h-24 overflow-hidden ${sizeScale}`}>
      <p className={`absolute ${position} text-sm object-cover text-white text-shadow-md text-shadow-black z-10 overflow-hidden ${clashRegularFont.className}`}>
        {cost}
      </p>
      <div className={`scale-130 overflow-hidden`}>
        <img 
          src={'https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9CVjU0cHJqTldKQ2NqZW1XUUg0Ry5wbmcifQ:supercell:-tQDKyplbmUYKqmqudgsN3v8FURk1KqarHhOjAplLfI?width=2400'} 
          alt="elixirImage" 
          className="overflow-hidden"
        />
      </div>
    </div>
  );
}