import {onBeforeUnmount, onMounted} from 'vue'
const useDetectOutsideClick = (component: any, callback: any) => {
  if (!component) return;
  const listener = (event: Event) => {
    if (
      event.target !== component?.value &&
      event.composedPath().includes(component?.value)
    ) {
      return;
    }
    if (typeof callback === "function") {
      callback(event);
    }
  };
  onMounted(() => {
    window.addEventListener("click", listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });

  return { listener };
};


export {
  useDetectOutsideClick
}