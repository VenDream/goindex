/**
 * CloudFlare worker script
 * @author VenDream<yeshenxue@qq.com>
 * @since 2020-4-20
 */

import GoogleDrive, { GDInstance } from './gd';

if (!globalConfig) {
  console.error('Please add goindex config.');
}
const gds: GDInstance[] = [];

addEventListener('fetch', (event: any) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: any) {
  console.log(request);
  // Init gd instatnces
  if (gds.length === 0) {
    const total = globalConfig.roots.length;
    for (let i = 0; i < total; i += 1) {
      const gd = new GoogleDrive();
      await gd.init();
      gds.push(gd);
    }
  }
}
