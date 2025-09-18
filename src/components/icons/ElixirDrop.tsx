import { clashRegularFont } from "@/fonts"

interface ElixirDropProps {
  cost: number,
  size?: 'sm' | 'lg' | 'xl'
};

export default function ElixirDrop({ cost, size = 'sm' }: ElixirDropProps) {
  let sizeScale;

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

  return (
    <div className={`relative w-24 h-24 ${sizeScale}`}>
      <p className={`absolute top-13/32 left-11/24 text-sm text-white text-shadow-md text-shadow-black z-10 ${clashRegularFont.className}`}>
        {cost}
      </p>
      <div className={`scale-130`}>
        <img 
          src={'https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9CVjU0cHJqTldKQ2NqZW1XUUg0Ry5wbmcifQ:supercell:-tQDKyplbmUYKqmqudgsN3v8FURk1KqarHhOjAplLfI?width=2400'} 
          alt="elixirImage" 
        />
      </div>
    </div>
  );
}