export function searchProducts(products, query) {
  const searchedQuery = query.toLowerCase().trim();
  if (!searchedQuery) {
    return products;
  }
  return products.filter((product) => {
    const title = product.title.toLowerCase();
    const description = product.description.toLowerCase();
    return (
      title.includes(searchedQuery) || description.includes(searchedQuery)
    );
  });
}
