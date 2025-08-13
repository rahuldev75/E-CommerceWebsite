import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";

const categoryList = [
    {
        name: 'fashion'
    },
    {
        name: 'shirt'
    },
    {
        name: 'jacket'
    },
    {
        name: 'mobile'
    },
    {
        name: 'laptop'
    },
    {
        name: 'shoes'
    },
    {
        name: 'home'
    },
    {
        name: 'books'
    }
]

const AddProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // product state
    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity: 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    // Add Product Function
    const addProductFunction = async () => {
        if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
            return toast.error("All fields are required")
        }

        setLoading(true);
        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, product)
            toast.success("Product added successfully");
            navigate('/admin-dashboard')
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
            toast.error("Failed to add product");
        }
    }

    // Back to Dashboard Function
    const backToDashboard = () => {
        navigate('/admin-dashboard');
    }

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
                
                {/* Add Product Form  */}
                <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
                    
                    {/* Top Heading with Back Button */}
                    <div className="mb-5 flex items-center justify-between">
                        <button
                            onClick={backToDashboard}
                            className="text-pink-500 hover:text-pink-700 flex items-center gap-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-left"
                            >
                                <path d="m12 19-7-7 7-7" />
                                <path d="M19 12H5" />
                            </svg>
                            Back
                        </button>
                        
                        <h2 className='text-center text-2xl font-bold text-pink-500 flex-1'>
                            Add Product
                        </h2>
                        
                        <div className="w-16"></div> {/* Spacer for centering */}
                    </div>

                    {/* Product Title Input */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    title: e.target.value
                                })
                            }}
                            placeholder='Product Title'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>

                    {/* Product Price Input */}
                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    price: e.target.value
                                })
                            }}
                            placeholder='Product Price'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>

                    {/* Product Image URL Input */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            value={product.productImageUrl}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    productImageUrl: e.target.value
                                })
                            }}
                            placeholder='Product Image URL'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>

                    {/* Category Select Dropdown */}
                    <div className="mb-3">
                        <select
                            value={product.category}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    category: e.target.value
                                })
                            }}
                            className="w-full px-2 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none">
                            <option value="" disabled>Select Product Category</option>
                            {categoryList.map((value, index) => {
                                const { name } = value
                                return (
                                    <option className="first-letter:uppercase" key={index} value={name}>
                                        {name.charAt(0).toUpperCase() + name.slice(1)}
                                    </option>
                                )
                            })}
                        </select>
                    </div>

                    {/* Product Quantity Input */}
                    <div className="mb-3">
                        <input
                            type="number"
                            name="quantity"
                            value={product.quantity}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    quantity: parseInt(e.target.value) || 1
                                })
                            }}
                            placeholder='Product Quantity'
                            min="1"
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>

                    {/* Product Description Textarea */}
                    <div className="mb-3">
                        <textarea
                            value={product.description}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    description: e.target.value
                                })
                            }}
                            name="description"
                            placeholder="Product Description"
                            rows="5"
                            className="w-full px-2 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300">
                        </textarea>
                    </div>

                    {/* Action Buttons */}
                    <div className="mb-3 flex gap-3">
                        {/* Add Product Button */}
                        <button
                            onClick={addProductFunction}
                            type='button'
                            className='bg-pink-500 hover:bg-pink-600 flex-1 text-white text-center py-2 font-bold rounded-md transition duration-200'
                        >
                            Add Product
                        </button>
                        
                        {/* Cancel Button */}
                        <button
                            onClick={backToDashboard}
                            type='button'
                            className='bg-gray-500 hover:bg-gray-600 flex-1 text-white text-center py-2 font-bold rounded-md transition duration-200'
                        >
                            Cancel
                        </button>
                    </div>

                    {/* Image Preview (if URL is provided) */}
                    {product.productImageUrl && (
                        <div className="mb-3">
                            <p className="text-pink-500 font-medium mb-2">Image Preview:</p>
                            <div className="flex justify-center">
                                <img
                                    src={product.productImageUrl}
                                    alt="Product Preview"
                                    className="max-w-32 max-h-32 object-cover rounded-md border border-pink-200"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddProductPage;