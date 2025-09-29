"use client"

import { useGetProductsQuery, useDeleteProductMutation } from "@/state/api"
import Header from "@/app/(components)/Header";
import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteButton from "../(components)/DeleteButton";

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();
  console.log("Products:", products);

  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id: string | number) => {
    try {
      await deleteProduct(String(id)).unwrap();
      console.log(`Product ${id} deleted successfully`);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  }

  const columns: GridColDef[] = [
    { field: "productId", headerName: "ID", width: 90},
    { field: "name", headerName: "Product Name", width: 200},
    { field: "price", 
      headerName: "Price", 
      width: 110, 
      type: "number", 
      valueGetter: (value, row) => `$${row.price}`
    },
    { field: "rating", 
      headerName: "Rating", 
      width: 110, 
      type: "number", 
      valueGetter: (value, row) => row.rating ? row.rating : "N/A"
    },
    { field: "stockQuantity", 
      headerName: "Stock Quantity", 
      width: 150, 
      type: "number"
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <DeleteButton 
          id={params.row.productId}
          onDelete={handleDelete}
          label="Remove"
        />
      )
    }
]

  if(isLoading) {
    return <div className="py-4">Loading...</div>
  }

  if(isError || !products) {
    return (
        <div className="text-center text-red-500 py-4">
            Failed to fetch products
        </div>
    )
  }

  return (
    <div className="flex flex-col">
        <Header name="Inventory" />
        <DataGrid 
            rows={products}
            columns={columns}
            getRowId={(row) => row.productId}
            checkboxSelection
            className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
        />
    </div>
  )
}

export default Inventory