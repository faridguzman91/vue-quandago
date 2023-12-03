<script setup lang="ts">
import { ref, onBeforeMount, onBeforeUnmount, onMounted } from "vue";
import { themeChange } from "theme-change";
import useBDaFetch from "../includes/bdFetch";
import useProductsStore from "../stores/products";
import SearchInput from "../components/SearchInput.vue";
import { useSimpleBar } from "../composables/useSimpleScroll";
import ListItem from "../components/Product/ListItem.vue";
import Cart from "../components/Cart/Container.vue";

const productsStore = useProductsStore();
const productsList = ref();
const searchTxt = ref("");
const url = ref(
  `products/search?q=${searchTxt.value}&limit=${
    productsStore.products.limitPerPage
  }&skip=${
    productsStore.products.currentPageNum * productsStore.products.limitPerPage
  }`,
);

onMounted(() => {
  themeChange(false);
});

const { isFetching, execute } = useBDaFetch(
  url,
  { immediate: false },
  {
    afterFetch(ctx) {
      productsStore.productsReceived(ctx.data.products);
    },
  },
);

const searching = (txt: string) => {
  productsStore.resetProducts();
  searchTxt.value = txt;
  url.value = `products/search?q=${searchTxt.value}&limit=${
    productsStore.products.limitPerPage
  }&skip=${
    productsStore.products.currentPageNum * productsStore.products.limitPerPage
  }`;
  execute();
};

onBeforeMount(() => {
  if (productsStore.products.items.length === 0) execute();
});

onBeforeUnmount(() => {
  if (productsStore.products.items.length === 0) productsStore.resetProducts();
});

useSimpleBar({
  elementRef: productsList,
  callback: () => {
    if (isFetching.value || !productsStore.products.hasMore) return;

    url.value = `products/search?q=${searchTxt.value}&limit=${
      productsStore.products.limitPerPage
    }&skip=${
      productsStore.products.currentPageNum *
      productsStore.products.limitPerPage
    }`;
    execute();
  },
});
</script>

<template>
  <div
    class="relative mx-auto grid h-full w-full max-w-bd-md items-center overflow-auto px-6 py-2"
    ref="productsList"
  >
    <SearchInput
      class="dark:border-primary-dark bg-primary-bg dark:bg-primary-bg-dark w-full self-end rounded-xl border-2 border-primary p-2 text-sm text-secondary placeholder:text-secondary dark:text-white dark:placeholder:text-white"
      @searching="searching($event)"
    />
    <ul class="flex h-full w-full flex-col items-center justify-start">
      <ListItem
        v-for="product of productsStore.products.items"
        :key="product.id"
        :product="product"
      />
      <li v-if="isFetching && productsStore.products.hasMore">
        <div id="spinner-box" class="mt-4 overflow-hidden text-lg">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </li>
      <li
        class="font-ssp mt-4 text-xs font-bold text-secondary dark:text-white"
        v-else-if="!isFetching && productsStore.products.items.length === 0"
      >
        <h1 class="m-4 p-2 text-lg">Nothing found.. please try again</h1>
      </li>
    </ul>
    <Cart />
  </div>
</template>
