import { onMounted, onBeforeUnmount } from "vue";
import type { IUseSimpleBarOptions } from "./types";

export function useSimpleBar({
  elementRef,
  callback = null,
}: IUseSimpleBarOptions): any {
  let scrollerObj: any | null = null;
  const onScrollEvent = (e: Event) => {
    const target = e.target as HTMLElement;
    if (
      Math.floor(target.scrollTop) + Math.floor(target.clientHeight) + 150 >
      Math.floor(target.scrollHeight)
    ) {
      if (callback) {
        callback();
      }
    }
  };

  onMounted(() => {
    if (elementRef.value) {
      // @ts-nocheck
      scrollerObj = new SimpleBar(elementRef.value);

      if (callback) {
        const scrollElement = scrollerObj.getScrollElement();
        scrollElement.addEventListener("scroll", onScrollEvent);
      }
    }
  });

  onBeforeUnmount(() => {
    scrollerObj.unMount();

    if (callback) {
      scrollerObj
        .getScrollElement()
        .removeEventListener("scroll", onScrollEvent);
    }
  });

  return null;
}
