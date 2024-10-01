import { ref } from 'vue';

export function useLoading() {
  const loading = ref<boolean>(false);

  function startLoading(): void {
    loading.value = true;
  }

  function stopLoading(): void {
    loading.value = false;
  }

  function isLoading(): boolean {
    return loading.value;
  }

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
}
