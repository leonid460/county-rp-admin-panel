import { Player, SearchStore } from 'AdminPanel/types';
import { getPlayersFilterBy } from 'AdminPanel/services';
import { handlerFetchError } from 'AdminPanel/utils/handlerFactory';


export const createPlayersSearchStore = (): SearchStore<Player> => ({
  searchResult: [],
  maxPage: 1,
  currentPage: 1,

  goToNextPage() {
    if (this.currentPage < this.maxPage) {
      this.currentPage++;
    }
  },

  goToPrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  },

  async search(playerName: string = '') {
    try {
      const response = await getPlayersFilterBy(this.currentPage, playerName);

      this.searchResult = response.items;
      this.maxPage = response.maxPage;
    } catch (error) {
      handlerFetchError(error);
    }
  }
});


export type TPlayerSearchStore = ReturnType<typeof createPlayersSearchStore>