import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/Store";
import { fetchCenters } from "../Redux/CentersSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import place1 from "../Assets/place1.png";


interface Center {
  id: string;
  name: string;
  address: string;
  images: string[];
  day_pass_price: number;
  day_pass_discounts_percentage: number;
  bulk_pass_price: number;
  bulk_pass_duration: number;
  distance_kms: number;
}

const CentersGrid: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: centers, status } = useSelector((state: RootState) => state.centers);

  useEffect(() => {
    dispatch(fetchCenters());
  }, [dispatch]);


const CenterCard: React.FC<{ center: Center }> = ({ center }) => {
  console.log("center------",center);

 const image = "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/" + center.images[0]

  
  // Compute the highest discount from the object
  const discounts = center.day_pass_discounts_percentage as any;
  const maxDiscount = discounts
    ? Math.max(...Object.values(discounts).map((d: any) => d.value))
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto">
      <div className="p-4 flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-800 leading-snug">{center.name}</h2>
          <p className="text-sm text-gray-500">{center.address}</p>
        </div>
        <div className="flex flex-col items-center text-xs text-gray-600">
          <div className="bg-gray-100 p-2 rounded-lg">
            <FontAwesomeIcon icon={faLocationArrow} className="text-black" />
          </div>
          <span className="mt-1">6 Kms</span>
        </div>
      </div>

       <img
        src= {image}
        alt={center.name}
        className="w-full h-48 object-cover"
      />
      <div className="flex justify-between items-stretch p-4 space-x-2">
        <div className="bg-gray-100 p-3 rounded-xl flex-1">
          <p className="text-sm text-gray-500">Day Pass</p>
          <div className="flex items-baseline justify-between">
            <p className="text-lg font-bold text-gray-800">₹ {center.day_pass_price}</p>
            <span className="text-xs text-gray-600">/ Day</span>
          </div>
        </div>

        <div className="bg-yellow-400 p-3 rounded-xl flex-1 relative">
          {maxDiscount > 0 && (
            <span className="absolute -top-2 left-2 bg-gray-900 text-white text-xs px-2 py-0.5 rounded shadow">
              {maxDiscount}% Discount
            </span>
          )}
          <p className="text-sm font-semibold text-gray-800">Bulk Pass</p>
          <div className="flex items-baseline justify-between">
            <p className="text-lg font-bold text-gray-900">₹ {center.bulk_pass_price}</p>
            <span className="text-xs text-gray-700">/ {center.bulk_pass_duration} Days</span>
          </div>
        </div>
      </div>
    </div>
  );
};


  if (status === "loading") return <p className="text-center py-10">Loading…</p>;
  if (status === "failed") return <p className="text-center py-10 text-red-500">Failed to load centers.</p>;

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Our Space Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {centers.map((center) => (
          <CenterCard key={center.id} center={center} />
        ))}
      </div>
    </div>
  );
};

export default CentersGrid;
