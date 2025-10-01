import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import Header from '@/app/(components)/Header';

type ProductFormData = {
  productId: string;
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type UpdateProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    product: ProductFormData | null;
    onUpdate: (formData: ProductFormData) => void;
}

const UpdateProductModal = ({ isOpen, onClose, product, onUpdate }: UpdateProductModalProps) => {
  const [formData, setFormData] = useState<ProductFormData>(
    product ?? { productId: '', name: '', price: 0, stockQuantity: 0, rating: 0 }
  );

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  if (!isOpen || !formData) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "stockQuantity" || name === "rating" 
        ? parseFloat(value) 
        : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate(formData);
    onClose();
  };

  const labelCssStyles = "block text-sm font-medium text-gray-700";
  const inputCssStyles = "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

  return (
    <div className="fixed inset-0 bg-amber-100 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <Header name="Update Product" />
        <form onSubmit={handleSubmit} className="mt-5">
          <label className={labelCssStyles}>Product Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className={inputCssStyles} 
            required 
          />

          <label className={labelCssStyles}>Price</label>
          <input 
            type="number" 
            name="price" 
            value={formData.price} 
            onChange={handleChange} 
            className={inputCssStyles} 
            required 
          />

          <label className={labelCssStyles}>Stock Quantity</label>
          <input 
            type="number" 
            name="stockQuantity" 
            value={formData.stockQuantity} 
            onChange={handleChange} 
            className={inputCssStyles} 
            required 
          />

          <label className={labelCssStyles}>Rating</label>
          <input 
            type="number" 
            name="rating" 
            value={formData.rating} 
            onChange={handleChange} 
            className={inputCssStyles} 
            required 
          />

          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Update
          </button>
          <button 
            type="button" 
            onClick={onClose} 
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProductModal