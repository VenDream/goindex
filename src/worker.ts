/**
 * CloudFlare worker script
 * @author VenDream<yeshenxue@qq.com>
 * @since 2020-4-24
 */

import { HTML } from 'constants/html';
import * as logger from 'utils/logger';
import GoogleDrive, { GDInstance } from './gd';

if (!globalConfig) {
  logger.log(
    'Please add goindex config.',
    'GLOBALCONFIG',
    logger.LOG_LEVEL.WARN
  );
}
const gds: GDInstance[] = [];

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request) {
  logger.log(request);
  // Init gd instatnces
  if (gds.length === 0) {
    const total = globalConfig.roots.length;
    for (let i = 0; i < total; i += 1) {
      const gd = new GoogleDrive();
      await gd.init();
      gds.push(gd);
    }
  }

  return new Response(HTML, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
