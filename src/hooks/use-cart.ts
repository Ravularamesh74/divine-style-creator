import { useCallback, useEffect, useState } from "react";

import {
  addToCart,
  clearCart,
  getCartCount,
  readCart,
  removeFromCart,
  subscribeToCart,
  updateCartQuantity,
  type CartItem,
} from "@/lib/cart";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const refresh = useCallback(() => {
    setItems(readCart());
  }, []);

  useEffect(() => {
    refresh();
    return subscribeToCart(refresh);
  }, [refresh]);

  return {
    items,
    count: getCartCount(items),
    addToCart,
    updateQuantity: updateCartQuantity,
    removeItem: removeFromCart,
    clearCart,
  };
}

export type { CartItem };
