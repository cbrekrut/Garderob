// app/context/WardrobeContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

export interface WardrobeItem {
  imageUri: string;
  brand: string;
  category: string;
}

interface WardrobeContextType {
  items: WardrobeItem[];
  addItem: (item: WardrobeItem) => void;
}

export const WardrobeContext = createContext<WardrobeContextType>({
  items: [],
  addItem: () => {},
});

export function WardrobeProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WardrobeItem[]>([]);

  const addItem = (item: WardrobeItem) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <WardrobeContext.Provider value={{ items, addItem }}>
      {children}
    </WardrobeContext.Provider>
  );
}
