// Writes public/app-ads.txt from the ADMOB_PUBLISHER_ID environment variable (runs before `next build`).
//
// The publisher ID is public (it appears in every AdMob ad request), but it isn't hard-coded so a
// wrong value can never be published by accident. Set it in Cloudflare Pages › Settings ›
// Environment variables as ADMOB_PUBLISHER_ID=pub-XXXXXXXXXXXXXXXX (16 digits, from AdMob ›
// Settings › Account information). If it's missing, no app-ads.txt is published and the build continues;
// set REQUIRE_APP_ADS=true to make a missing or invalid value fail the build instead.
import { existsSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const target = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'app-ads.txt');
const raw = (process.env.ADMOB_PUBLISHER_ID ?? '').trim();
const required = process.env.REQUIRE_APP_ADS === 'true';
// Google's sample publisher ID; never publish it.
const SAMPLE = 'pub-3940256099942544';

function skip(reason) {
  if (existsSync(target)) rmSync(target);
  const message = `[app-ads] ${reason} No app-ads.txt will be published.`;
  if (required) {
    console.error(message);
    process.exit(1);
  }
  console.warn(message);
}

if (!raw) {
  skip('ADMOB_PUBLISHER_ID is not set.');
} else if (!/^pub-\d{16}$/.test(raw)) {
  skip('ADMOB_PUBLISHER_ID must look like pub- followed by 16 digits.');
} else if (raw === SAMPLE) {
  skip("ADMOB_PUBLISHER_ID is Google's sample publisher ID.");
} else {
  // Format required by the IAB app-ads.txt spec and AdMob. f08c47fec0942fa0 is Google's certification ID.
  writeFileSync(target, `google.com, ${raw}, DIRECT, f08c47fec0942fa0\n`);
  console.log('[app-ads] Wrote public/app-ads.txt.');
}
