export interface ServiceViewModel {
  id: string;
  name: string;
  url: string;
  port: number;
  state: boolean | null;
  createdAt: string;
  lastCheckedAt: string | null;
}
