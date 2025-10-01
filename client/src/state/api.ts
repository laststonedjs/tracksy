import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
    productId: string;
    name: string;
    price: number;
    rating?: number;
    stockQuantity: number;
}

export interface NewProduct {
    name: string;
    price: number;
    rating?: number;
    stockQuantity: number;
}

export interface SalesSummary {
    salesSummaryId: string;
    totalValue: number;
    changePercentage?: number;
    date: string;
}

export interface PurchaseSummary     {
    purchaseSummaryId: string;
    totalPurchase: number;
    changePercentage?: number;
    date: string;
}

export interface DashboardMetrics {
    popularProducts: Product[];
    salesSummary: SalesSummary[];
    purchaseSummary: PurchaseSummary[];
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    reducerPath: "api",
    tagTypes: ["DashboardMetrics", "Products"],
    endpoints: (build) => ({
        getDashboardMetrics: build.query<DashboardMetrics, void>({ // create a dashboard
            query: () => "/dashboard",
            providesTags: ["DashboardMetrics"]
        }),
        getProducts: build.query<Product[], string | void>({ // get all products
             query: (search) => ({
                url: "/products",
                params: search? {search} : {}
             }),
            providesTags: ["Products"]
        }),
        createProduct: build.mutation<Product, NewProduct>({ // creating product
            query: (NewProduct) => ({
                url: "/products",
                method: "POST",
                body: NewProduct
            }),
            invalidatesTags: ["Products"] // every time we create a product, need to update the list of Products
        }),
        deleteProduct: build.mutation<{ success: boolean; productId: string }, string>({ // deleting product
            query: (productId) => ({
                url: `/products/${productId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Products"] // refreshing the list
        }),
        updateProduct: build.mutation<Product, Partial<Product> & { productId: string }> ({
            query: ({ productId, ...rest }) => ({
                url: `/products/${productId}`,
                method: "PUT",
                body: rest,
            }),
            invalidatesTags: ["Products"]
        })
    }),
})

export const { 
    useGetDashboardMetricsQuery, 
    useGetProductsQuery, 
    useCreateProductMutation, 
    useDeleteProductMutation,
    useUpdateProductMutation 
} = api;