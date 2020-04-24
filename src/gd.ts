/**
 * Google Drive Class
 * @author VenDream<yeshenxue@qq.com>
 * @since 2020-4-24
 */

import * as logger from 'utils/logger';
import * as request from 'utils/request';

export default class GoogleDrive {
  async init() {
    await this.getAccessToken();
    logger.log(globalConfig.gdAuth);
  }

  // get accessToken
  async getAccessToken() {
    const { gdAuth } = globalConfig;
    if (!gdAuth || +gdAuth.expires < Date.now()) {
      const resp: Record<string, any> = await this.fetchAccessToken();
      const { expires_in, access_token } = resp;
      if (access_token && expires_in) {
        globalConfig.gdAuth = {
          accessToken: access_token,
          expires: Date.now() + expires_in * 1000,
        };
      }
    }
    return globalConfig?.gdAuth?.accessToken;
  }

  // fetch accessToke from GoogleDrive API
  async fetchAccessToken() {
    const gdApi = 'https://www.googleapis.com/oauth2/v4/token';
    const { clientId, clientSecret, refreshToken } = globalConfig;
    try {
      const resp = await request.post(gdApi, {
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      });
      return resp;
    } catch (err) {
      logger.log(err, 'FETCH_ACCESSTOKEN', logger.LOG_LEVEL.ERROR);
      return Promise.resolve(null);
    }
  }
}

export type GDInstance = InstanceType<typeof GoogleDrive>;
