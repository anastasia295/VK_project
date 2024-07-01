export interface IPublicUser {
  id: number | null;
  firstName: string;
  lastName: string;
  email: string;
  watchlist: [IWatchlist];
}

interface IWatchlist {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}
