import axios from "axios";
import { PlayerProfilesListDto } from "./PlayerProfilesListDto";
import { PlayerProfileDto } from "./PlayerProfileDto";

export type UserProfilesRestApiConfig = {
  readonly baseUrl: string;
};

const defaultConfig: UserProfilesRestApiConfig = {
  baseUrl: "http://localhost:5000/rest-api",
};

export const UserProfileRestApi = (
  config?: Partial<UserProfilesRestApiConfig>
) => {
  const currentConfig = {
    ...defaultConfig,
    config,
    baseUrl:
      process.env.REACT_APP_REST_API_BASE_URL ??
      config?.baseUrl ??
      defaultConfig.baseUrl,
  };
  return {
    getPlayersProfiles(): Promise<PlayerProfilesListDto> {
      return axios
        .get<PlayerProfilesListDto>(`${currentConfig.baseUrl}/players-profiles`)
        .then((response) => response.data);
    },
    async addPlayersProfile(playerProfile: PlayerProfileDto): Promise<void> {
      await axios.post<PlayerProfileDto>(
        `${currentConfig.baseUrl}/players-profiles`,
        playerProfile
      );
    },
  };
};
