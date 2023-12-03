import type { Ref } from 'vue'

export interface IUseSimpleBarOptions {
  elementRef: Ref<HTMLElement | null>;
  callback?: () => void;
}
