import { API_BASE_URL } from "../constants";

export class CloudflareService {
  private filename_api = "fishsBDD.json";

  fetchCachedFishList = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/${this.filename_api}`);

      if (!response.ok) throw new Error("Failed to fetch fish list");

      return await response.json();
    } catch (error) {
      console.error("Error fetching cached fish list:", error);
      return [];
    }
  };
}
