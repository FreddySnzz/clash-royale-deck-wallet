import { clashRegularFont } from "@/fonts"

interface ElixirDropProps {
  cost: number
};

export default function ElixirDrop({ cost }: ElixirDropProps) {
  return (
    <div className={`relative w-24 h-24`}>
      <p className={`absolute top-13/32 left-11/24 text-sm text-white text-shadow-md text-shadow-black z-10 ${clashRegularFont.className}`}>{cost}</p>
      <div className={`scale-130`}>
        <img src={'https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9CVjU0cHJqTldKQ2NqZW1XUUg0Ry5wbmcifQ:supercell:-tQDKyplbmUYKqmqudgsN3v8FURk1KqarHhOjAplLfI?width=2400'} alt="elixirImage" />
      </div>
    </div>
  )
}