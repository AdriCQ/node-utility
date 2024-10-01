import { onBeforeMount, ref } from 'vue';

/**
 * usePagination
 */
export function usePagination<T = unknown>({
  paginate,
  request,
  filterParams,
}: IPagination<T>) {
  const nextPage = ref<number>(1);
  const paginationData = ref<T[]>([]);

  /**
   * runRequestPaginated
   */
  async function runRequestPaginated(): Promise<IPaginatedData<T>> {
    const response = await request({
      paginate,
      page: nextPage.value,
      ...filterParams,
    });

    if (response.data.length) {
      // @ts-ignore
      paginationData.value.push(...response.data);
      nextPage.value = Number(response.meta.current_page) + 1;
    }

    return response;
  }

  /**
   * initData
   */
  function initData() {
    paginationData.value = [];
    nextPage.value = 1;
  }

  onBeforeMount(runRequestPaginated);

  return {
    paginationData,
    nextPage,
    initData,
    runRequestPaginated,
  };
}

interface IPagination<T> {
  request: IPaginationRequest<T>;
  paginate?: number;
  filterParams?: Map<string, string | number | boolean>;
}

export type IPaginationRequest<T> = (
  params?: any,
) => Promise<IPaginatedData<T>>;

/**
 * @interface IPaginatedData
 */
interface IPaginatedData<T> {
  data: T[];
  links: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
  };
  meta: {
    current_page?: number;
    from?: number;
    path?: string;
    per_page?: number;
    to?: number;
  };
}

/**
 * @interface IPaginationParams
 */
interface IPaginationParams {
  page?: number;
  paginate?: number;
}
