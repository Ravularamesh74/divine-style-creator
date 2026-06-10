import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { products } from "@/lib/products";

type SearchDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return products.slice(0, 8);

    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term),
    );
  }, [query]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const goToProduct = (productId: string) => {
    onOpenChange(false);
    void navigate({ to: "/product/$id", params: { id: productId } });
  };

  const goToShop = () => {
    const term = query.trim();
    onOpenChange(false);
    void navigate({ to: "/shop", search: { q: term || undefined } });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search drops, categories, fits..."
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            <CommandEmpty>No drops found.</CommandEmpty>
            <CommandGroup
              heading={query.trim() ? "Results" : "Popular drops"}
            >
              {results.slice(0, 8).map((product) => (
                <CommandItem
                  key={product.id}
                  value={product.id}
                  onSelect={() => goToProduct(product.id)}
                >
                  <img
                    src={product.image}
                    alt=""
                    className="h-10 w-10 shrink-0 rounded object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-bold">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {product.category}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-bold">
                    ₹{product.price}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
            {query.trim() && results.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem onSelect={goToShop}>
                    View all {results.length} results for &ldquo;{query.trim()}
                    &rdquo;
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
