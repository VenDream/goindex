/**
 * Typings
 * @author VenDream<yeshenxue@qq.com>
 * @since 2020-4-20
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
}

declare let globalConfig: GoIndex.Config;
declare function addEventListener(...args: any[]);
