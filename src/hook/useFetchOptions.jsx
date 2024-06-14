import { useState, useEffect } from "react";

const useFetchOptions = (brandUrl, categoryUrl) => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrandsAndCategories = async () => {
      try {
        const [brandResponse, categoryResponse] = await Promise.all([
          fetch(brandUrl),
          fetch(categoryUrl),
        ]);
        if (!brandResponse.ok || !categoryResponse.ok) {
          throw new Error('Failed to fetch data');
        }
        const brandsData = await brandResponse.json();
        const categoriesData = await categoryResponse.json();
        setBrands(brandsData);
        setCategories(categoriesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandsAndCategories();
  }, [brandUrl, categoryUrl]);

  return { brands, categories, loading, error };
};

export default useFetchOptions;
