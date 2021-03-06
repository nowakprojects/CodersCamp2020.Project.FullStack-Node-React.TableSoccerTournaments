import axios from "axios";
import { PlayerProfilesListDto } from "./PlayerProfilesListDto";
import { PlayerProfileDto } from "./PlayerProfileDto";
import { PATH_BASE_URL } from "../../components/atoms/constants/apiPaths";

export type UserProfilesRestApiConfig = {
  readonly baseUrl: string;
};

const defaultConfig: UserProfilesRestApiConfig = {
  baseUrl: PATH_BASE_URL,
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

    getPlayerProfile(playerId: string): Promise<PlayerProfileDto> {
      return axios
        .get<PlayerProfileDto>(
          `${currentConfig.baseUrl}/players-profiles/${playerId}`
        )
        .then((response) => response.data);
    },

    async postPlayersProfile(playerProfile: PlayerProfileDto): Promise<void> {
      await axios.post<PlayerProfileDto>(
        `${currentConfig.baseUrl}/players-profiles`,
        playerProfile
      );
    },
  };
};
