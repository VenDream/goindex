/**
 * Typings
 * @author VenDream<yeshenxue@qq.com>
 * @since 2020-4-24
 */

declare namespace GoIndex {
  /** Global Config */
  interface Config {
    /** page title */
    title: string;
    /** version */
    version: string;
    /** @TODO theme */
    theme?: string;
    /** GD client_id */
    clientId: string;
    /** GD client_secret */
    clientSecret: string;
    /** GD refresh_token */
    refreshToken: string;
    /** root dirs to mount */
    roots: GoIndex.DirConfig[];
    /** GD auth */
    gdAuth?: GDAuth;
    /** show log output or not */
    logger?: boolean;
  }

  /** Dir config  */
  interface DirConfig {
    /** root dir id */
    id: string;
    /** display name */
    name: string;
    /** password, empty to disable */
    pass: string;
  }

  /** Google Drive auth data */
  interface GDAuth {
    /** expires */
    expires: number;
    /** accessToken */
    accessToken: string;
  }
}

declare let globalConfig: GoIndex.Config;
