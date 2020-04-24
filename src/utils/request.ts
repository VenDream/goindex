/**
 * Common request function
 * @author VenDream<yeshenxue@qq.com>
 * @since 2020-4-24
 */

import qs from 'qs';
import deepExtend from 'deep-extend';

import * as logger from 'utils/logger';

// default request options
const defaults: Partial<RequestInit> = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

/**
 * Get auth header patch
 *
 * @export
 * @param {Record<string, any>} data request data
 */
export function getAuthPatch(data: Record<string, any>) {
  const { accessToken } = data;
  const authPatch: RequestInit = {};
  if (accessToken) {
    authPatch.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    // eslint-disable-next-line no-param-reassign
    delete data.accessToken;
  }
  return authPatch;
}

/**
 * Request data using GET
 *
 * @export
 * @param {string} url url
 * @param {Record<string, any>} params params
 * @param {RequestInit} [option] option
 */
export async function get(
  url: string,
  params: Record<string, any>,
  option?: RequestInit
) {
  const authPatch = getAuthPatch(params);
  const query = qs.stringify(params);
  const fetchUrl = `${url}?${query}`;
  const fetchOpt: RequestInit = deepExtend({}, defaults, option, authPatch, {
    method: 'GET',
  });
  logger.log(fetchUrl, 'FETCH_URL');
  logger.log(JSON.stringify(fetchOpt), 'FETCH_OPT');
  const resp = await fetch(fetchUrl, fetchOpt);
  const jsonResp = await resp.json();
  logger.log(JSON.stringify(jsonResp), 'FETCH_RES');
  return jsonResp;
}

/**
 * Request data using POST
 *
 * @export
 * @param {string} url url
 * @param {Record<string, any>} data data
 * @param {RequestInit} [option] option
 */
export async function post(
  url: string,
  data: Record<string, any>,
  option?: RequestInit
) {
  const authPatch = getAuthPatch(data);
  const body = qs.stringify(data, { encode: false });
  const fetchUrl = url;
  const fetchOpt: RequestInit = deepExtend({}, defaults, option, authPatch, {
    body,
    method: 'POST',
  });
  logger.log(fetchUrl, 'FETCH_URL');
  logger.log(JSON.stringify(fetchOpt), 'FETCH_OPT');
  const resp = await fetch(fetchUrl, fetchOpt);
  const jsonResp = await resp.json();
  logger.log(JSON.stringify(jsonResp), 'FETCH_RES');
  return jsonResp;
}
