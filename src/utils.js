export function searchProducts(products, query) {
  const sanitizedQuery = query.toLowerCase().trim();
  if (!sanitizedQuery) {
    return products;
  }
  return products.filter((product) => {
    const title = product.title.toLowerCase();
    const description = product.description.toLowerCase();
    return (
      title.includes(sanitizedQuery) || description.includes(sanitizedQuery)
    );
  });
}
