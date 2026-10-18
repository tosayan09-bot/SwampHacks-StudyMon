import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export type Pet = {
  name: string; course: string; level: number; xp: number;
  gold: number; items: string[]; health: number; attack: number; defense: number;
};