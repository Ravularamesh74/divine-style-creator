export type CartItem = {
  productId: string;
  size: string;
  quantity: number;
};

export const CART_STORAGE_KEY = "style-daddy-cart";
export const WHATSAPP_NUMBER = "919640639926";

const cartUpdatedEvent = "style-daddy-cart-updated";

function notifyCartUpdated() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(cartUpdatedEvent));
  }
}

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is CartItem =>
        item != null &&
        typeof item === "object" &&
        typeof (item as CartItem).productId === "string" &&
        typeof (item as CartItem).size === "string" &&
        typeof (item as CartItem).quantity === "number" &&
        (item as CartItem).quantity > 0,
    );
  } catch {
    return [];
  }
}

export function writeCart(items: CartItem[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  notifyCartUpdated();
}

export function getCartCount(items: CartItem[] = readCart()) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export function addToCart(item: Omit<CartItem, "quantity"> & { quantity?: number }) {
  const quantity = item.quantity ?? 1;
  const items = readCart();
  const index = items.findIndex(
    (entry) => entry.productId === item.productId && entry.size === item.size,
  );

  if (index === -1) {
    writeCart([...items, { ...item, quantity }]);
    return;
  }

  const next = [...items];
  next[index] = {
    ...next[index],
    quantity: next[index].quantity + quantity,
  };
  writeCart(next);
}

export function updateCartQuantity(
  productId: string,
  size: string,
  quantity: number,
) {
  writeCart(
    readCart().map((item) =>
      item.productId === productId && item.size === size
        ? { ...item, quantity: Math.max(1, quantity) }
        : item,
    ),
  );
}

export function removeFromCart(productId: string, size: string) {
  writeCart(
    readCart().filter(
      (item) => !(item.productId === productId && item.size === size),
    ),
  );
}

export function clearCart() {
  writeCart([]);
}

export function subscribeToCart(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const handler = () => callback();
  window.addEventListener(cartUpdatedEvent, handler);
  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener(cartUpdatedEvent, handler);
    window.removeEventListener("storage", handler);
  };
}
