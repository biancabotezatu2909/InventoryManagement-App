import React, { ChangeEvent, FormEvent, useState } from 'react';
import {v4} from "uuid";
import Header from '../(components)/Header';


type ProductFormData ={
    name: string;
    price: number;
    stockQuantity: number;
    rating: number;
}

type CreateProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (formData: ProductFormData) => void;
}

const CreateProductModal = ({
    isOpen,
    onClose,
    onCreate
}: CreateProductModalProps) => {
    const [formData, setFormData] = useState({
        productId: v4(),
        name: "",
        price: 0,
        stockQuantity: 0,
        rating:0,
    });

    const handleChange = ( e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:
            name === "price" || name === "stockQuantity" || name === "rating"
            ? parseFloat(value)
            : value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreate(formData);
        onClose();
    }

    if(!isOpen)
         return null;

    const labelCssStyles = "block text-sm font-medium text-gray-700";
    const inputCssStyles = "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded bg-white">
            <Header name ="Create New Product"/>
            <hr/>
            <form onSubmit={handleSubmit} className="mt-5 ">
                {/* PRODUCT NAME */}
                <label htmlFor="productName" className={labelCssStyles}>
                    Product Name
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.name}
                    className={inputCssStyles}
                    required
                />
                {/* PRICE */}
                <label htmlFor="productPrice" className={labelCssStyles}>
                    Price
                </label>
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                    value={formData.price}
                    className={inputCssStyles}
                    required
                />
                {/* STOCK QUANTITY */}
                <label htmlFor="stockQuantity" className={labelCssStyles}>
                    Stock Quantity
                </label>
                <input
                    type="number"
                    name="stockQuantity"
                    placeholder="Stock Quantity"
                    onChange={handleChange}
                    value={formData.stockQuantity}
                    className={inputCssStyles}
                    required
                />
                {/* RATING */}
                <label htmlFor="rating" className={labelCssStyles}>
                    Rating
                </label>
                <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    onChange={handleChange}
                    value={formData.rating}
                    className={inputCssStyles}
                    required
                />

                {/*CREATE ACTIONS*/}
                <button
                    type="submit"
                    className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
                    >
                    Create
                </button>

                <button
                    onClick={onClose}
                    type="button"
                    className="ml-4 px-6 py-2 bg-gray-600 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
                >
                Cancel
            </button>

            </form>
        </div>
    </div>
  )
}

export default CreateProductModal