// api.js
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  return useQuery("products", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}
