import { ref } from "vue";
import { defineStore } from "pinia";
import type { IProductItem, IProductsState } from "./types";

export default defineStore("products", () => {
  const products = ref<IProductsState>({
    items: [],
    currentPageNum: 0,
    limitPerPage: 30,
    hasMore: true,
  });

  const productsReceived = (items: IProductItem[]) => {
    if (items.length === 0) return (products.value.hasMore = false);

    products.value.items = [...products.value.items, ...items];
    products.value.currentPageNum += 1;
  };

  const resetProducts = () => {
    products.value = {
      items: [],
      currentPageNum: 0,
      limitPerPage: 30,
      hasMore: true,
    };
  };

  return {
    products,
    productsReceived,
    resetProducts,
  };
});
