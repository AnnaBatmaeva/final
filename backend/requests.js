import axios from "axios";

export async function getProduct(productID) {
  const response = await axios.get(`http://localhost:5100/products/${productID}`);
  return response.data; 
}

export async function getRecommendedProducts({
  brand,
  gender,
  excludeId,
  limit = 5,
}) {
  const response = await axios.get(
    'http://localhost:5100/products/recommended',
    {
      params: { brand, gender, excludeId, limit },
    }
  );

  return response.data;
}

export async function getNewProducts({ limit = 10}) {
  const response = await axios.get(
    'http://localhost:5100/products/new',
    {
      params: { limit },
    }
  );

  return response.data;
}