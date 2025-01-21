export const getCartItems = (products) => {
    const cartData = localStorage.getItem('cart');
    const items = cartData ? JSON.parse(cartData) : [];
  
    return items.flatMap(item => {
      const product = products.find(p => p._id === item.productId);
      const sizes = item.sizes ? Object.entries(item.sizes) : [];
  
      return sizes.map(([size, quantity]) => ({
        name: product ? product.name : item.name,
        id: product ? product._id : item.productId,
        color: item.color,
        size: size,
        price: product ? product.price : item.price,
        quantity: quantity,
        imageUrl: product?.images?.[0] || 'https://via.placeholder.com/150?text=No+Image'
      }));
    });
  };
  