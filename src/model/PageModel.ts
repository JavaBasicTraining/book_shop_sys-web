export interface PageModel<T> {
  content: T[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
}
