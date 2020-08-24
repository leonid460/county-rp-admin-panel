export interface SearchStore<T> {
  searchResult: T[];
  maxPage: number;
  currentPage: number;
  goToNextPage(): void;
  goToPrevPage(): void;
  search(): Promise<void>;
}