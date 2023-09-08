export {}; // This is here to prevent `PageProps` at the bottom from being exposed

declare global {
  interface ManagerKrathong {
    id: number;
    name: string;
    wish: string;
    profile: string;
    krathong_type: number;
  }
}
