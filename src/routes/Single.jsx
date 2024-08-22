import React from 'react';
import { useParams } from 'react-router-dom';
import { useFitch } from '../hooks/useFitch';
import { Link } from 'react-router-dom';

const Single = () => {
    const { id } = useParams();
    const data = useFitch(`https://dummyjson.com/products/${id}`);

    if (!data) {
        return <p className="text-center text-gray-600">Not found.</p>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-6">
            <div className="w-full max-w-2xl shadow-lg p-4 bg-white rounded-lg">
                <div className="flex flex-col md:flex-row items-start gap-8 md:items-center">
                    <div className="flex-shrink-0">
                        <img
                            src={data.thumbnail}
                            alt={data.title}
                            className="w-[300px] h-[360px] object-cover"
                        />
                    </div>
                    <div className="flex-grow">
                        <p className="mb-2 font-bold text-2xl">{data.title}</p>
                        <div className="w-[260px] h-[0.5px] bg-gray-300 mt-4"></div>
                        <p className="mb-2 text-lg font-semibold mt-6">Category: {data.category}</p>
                        <p className="mb-2 text-lg font-semibold">Brand: {data.brand}</p>
                        <p className="mb-4 text-lg font-semibold text-red-600">Stock: {data.stock}</p>
                        <p className="mb-4 text-lg font-semibold text-red-600">Rating: {data.rating}</p>
                        <p className="mb-4 text-lg font-semibold text-green-600">Price: ${data.price}</p>
                        <p className="mb-4 text-lg">{data.description}</p>
                        <div className="w-[260px] h-[0.5px] bg-gray-300 mt-4"></div>
                        <div className="w-[230px] mt-4">
                           <Link to='/Login'>  <button className="w-full h-10 px-4 py-2 bg-[#0053A0] text-white rounded-lg hover:bg-blue-600">Buy Now</button> </Link>
                            <button className="w-full h-10 px-4 py-2 bg-[#3498CA] text-white rounded-lg mt-2 hover:bg-blue-600">Add to Cart</button>
                            <button className="w-full h-10 px-4 py-2 bg-white text-[#0053A0] border border-[#0053A0] rounded-lg mt-2 hover:bg-[#0053A0] hover:text-white">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;
