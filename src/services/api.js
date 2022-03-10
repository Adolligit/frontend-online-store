export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse;
}
