import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

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

type CartItemWithPrice = CartItem & {
  price?: number;
};

export function useCart() {
  const [items, setItems] =
    useState<CartItemWithPrice[]>([]);

  const [loading, setLoading] =
    useState(true);

  const refresh = useCallback(() => {
    try {
      setItems(readCart() as CartItemWithPrice[]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();

    return subscribeToCart(
      refresh
    );
  }, [refresh]);

  const count = useMemo(
    () => getCartCount(items),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum +
          (item.price ?? 0) * item.quantity,
        0
      ),
    [items]
  );

  const shipping = useMemo(
    () =>
      subtotal >= 999 ? 0 : 99,
    [subtotal]
  );

  const tax = useMemo(
    () =>
      Number(
        (subtotal * 0.18).toFixed(2)
      ),
    [subtotal]
  );

  const total = useMemo(
    () =>
      Number(
        (
          subtotal +
          shipping +
          tax
        ).toFixed(2)
      ),
    [subtotal, shipping, tax]
  );

  const hasItems =
    items.length > 0;

  const isInCart = useCallback(
    (productId: string) =>
      items.some(
        (item) =>
          item.productId ===
          productId
      ),
    [items]
  );

  const getItemQuantity =
    useCallback(
      (productId: string) =>
        items.find(
          (item) =>
            item.productId ===
            productId
        )?.quantity ?? 0,
      [items]
    );

  const updateQuantity =
    useCallback(
      (
        productId: string,
        quantity: number
      ) => {
        const item =
          items.find(
            (i) =>
              i.productId ===
              productId
          ) as CartItemWithPrice | undefined;

        updateCartQuantity(
          productId,
          quantity.toString(),
          item?.price ?? 0
        );
      },
      [items]
    );

  const increment =
    useCallback(
      (
        productId: string
      ) => {
        const item =
          items.find(
            (i) =>
              i.productId ===
              productId
          );

        if (!item) return;

        updateQuantity(
          productId,
          item.quantity + 1
        );
      },
      [items, updateQuantity]
    );

  const removeItem =
    useCallback(
      (productId: string) => {
        const item =
          items.find(
            (i) =>
              i.productId ===
              productId
          );

        if (!item) return;

        removeFromCart(
          productId,
          item.quantity.toString()
        );
      },
      [items]
    );

  const decrement =
    useCallback(
      (
        productId: string
      ) => {
        const item =
          items.find(
            (i) =>
              i.productId ===
              productId
          );

        if (!item) return;

        if (
          item.quantity <= 1
        ) {
          removeItem(productId);
          return;
        }

        updateQuantity(
          productId,
          item.quantity - 1
        );
      },
      [items, removeItem, updateQuantity]
    );

  return {
    items,

    loading,

    count,

    subtotal,
    shipping,
    tax,
    total,

    hasItems,

    addToCart,
    clearCart,

    removeItem,

    updateQuantity,

    increment,
    decrement,

    isInCart,
    getItemQuantity,
  };
}

export type { CartItem };