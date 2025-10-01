import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async(req: Request, res: Response): Promise<void> => {
    try {
        const search = req.query.search?.toString();
        const products = await prisma.products.findMany({
            where: search ? {
                name: {
                    contains: search
                }
            } : {}
        })
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving products" });
    }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { productId, name, price, rating, stockQuantity } = req.body;
        const product = await prisma.products.create({
            data: {
                productId,
                name,
                price,
                rating,
                stockQuantity
            },
        })

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error creating product" });
    }
}

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    console.log("DELETE product id:", req.params.id);

    if (!id) {
      res.status(400).json({ message: "Missing product id" });
      return;
    }

    const product = await prisma.products.findUnique({
      where: { productId: id }
    });

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    await prisma.products.delete({
      where: { productId: String(id) }
    });

    res.json({ success: true, productId: id });
  } catch (error) {
    // console.error("Delete product error:", error);
    res.status(500).json({ message: "Error deleting product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, rating, stockQuantity } = req.body;

    const updatedProduct = await prisma.products.update({
      where: { productId: String(id) },
      data: { name, price, rating, stockQuantity },
    });

    res.json(updatedProduct);
  } catch (error) {
    console.error("Update product error:", error);
    res.status(500).json({ error: "Failed to update product" });
  }
};