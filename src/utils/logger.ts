/**
 * Global logger
 * @author VenDream<yeshenxue@qq.com>
 * @since 2020-4-24
 */

type LoggerMsg = string | number | Record<string, any>;

export const enum LOG_LEVEL {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

const LOG_COLOR: Record<LOG_LEVEL, string> = {
  [LOG_LEVEL.DEBUG]: 'black',
  [LOG_LEVEL.INFO]: 'blue',
  [LOG_LEVEL.WARN]: 'yellow',
  [LOG_LEVEL.ERROR]: 'red',
};

/**
 * Global logger
 *
 * @export
 * @param {LoggerMsg} msg log msg
 * @param {string} [prefix=''] log prefix
 * @param {LOG_LEVEL} [level=LOG_LEVEL.INFO] log level
 */
export function log(
  msg: LoggerMsg,
  prefix = '',
  level: LOG_LEVEL = LOG_LEVEL.INFO
) {
  if (!globalConfig.logger) return;
  const color = LOG_COLOR[level];
  const now = new Date().toISOString().slice(0, -5).replace('T', ' ');
  const prefixer = prefix ? `[${prefix}]` : '';
  console.log(`%c [${level}][${now}]${prefixer}`, `color:${color};`, msg);
}
