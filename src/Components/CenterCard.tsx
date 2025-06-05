interface Props {
  center: {
    id: string;
    title: string;
    address: string;
    image: string;
    price: string;
  };
}

function CenterCard({ center }: Props) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-lg">
      <img src={center.image} alt={center.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{center.title}</h2>
        <p className="text-sm text-gray-600">{center.address}</p>
        <p className="mt-2 text-yellow-600 font-bold">₹{center.price}</p>
      </div>
    </div>
  );
}

export default CenterCard;