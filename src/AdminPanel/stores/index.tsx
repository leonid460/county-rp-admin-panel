import React from 'react'
import { createPlayerInfoStore, TPlayerInfoStore } from './_MiniPlayerInfoStore';
import { createProfileStore, TProfileStore } from './_ProfileStore';
import { createGroupsSearchStore, TGroupsSearchStore } from './_GroupsSearchStore';
import { createPlayersSearchStore, TPlayerSearchStore } from './_PlayerSearchStore';
import { useLocalStore } from 'mobx-react';


const storeContext = React.createContext<{
  profileStore: TProfileStore,
  playerInfoStore: TPlayerInfoStore,
  groupsSearchStore: TGroupsSearchStore,
  playerSearchStore: TPlayerSearchStore
} | null>(null);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const playerInfoStore = useLocalStore(createPlayerInfoStore);
  const profileStore = useLocalStore(createProfileStore);
  const groupsSearchStore = useLocalStore(createGroupsSearchStore);
  const playerSearchStore = useLocalStore(createPlayersSearchStore);

  return (
    <storeContext.Provider value={{
      playerInfoStore,
      profileStore,
      groupsSearchStore,
      playerSearchStore
    }}>
      {children}
    </storeContext.Provider>
  )
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}