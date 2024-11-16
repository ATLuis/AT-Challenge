import { AppDataSource } from "../config/database";

export const statusResolver = {
  Query: {
    async getStatus() {
      try {
        const isConnected = AppDataSource.isInitialized;

        return isConnected ? "running" : "failed";
      } catch (error) {
        return String(error);
      }
    },
  },
};
