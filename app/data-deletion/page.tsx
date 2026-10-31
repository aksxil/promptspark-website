import type { Metadata } from 'next';
import Link from 'next/link';

import { Callout, LegalLayout } from '@/components/ui';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Data deletion',
  description: 'How to delete your PromptSpark data: clear on-device data, uninstall, control Android backup, manage Google ad data, and send a deletion request.',
  path: '/data-deletion/',
});

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'device', label: 'Delete data on your device' },
  { id: 'backup', label: 'Android backup' },
  { id: 'ads', label: 'Advertising data' },
  { id: 'server', label: 'Data held by us' },
  { id: 'request', label: 'Send a deletion request' },
];

const deletionMail = `mailto:${SITE.supportEmail}?subject=${encodeURIComponent('PromptSpark data deletion request')}`;

export default function DataDeletionPage() {
  return (
    <LegalLayout
      eyebrow="Your data"
      title="Data deletion"
      intro="PromptSpark has no accounts, and almost everything it stores lives on your phone. Here’s how to delete it."
      updated={SITE.legalUpdated}
      toc={TOC}
    >
      <h2 id="overview" className="!mt-0">Overview</h2>
      <Callout>
        <strong className="text-ink">There is no PromptSpark account to delete.</strong> The app doesn’t ask for your name,
        email or phone number. Your favourites, collections and settings are stored only on your device.
      </Callout>

      <h2 id="device">Delete data on your device</h2>
      <h3>Option 1: Clear local data (keeps the app installed)</h3>
      <ul>
        <li>Open PromptSpark and go to <strong>Settings</strong>.</li>
        <li>Tap <strong>Clear local data</strong> and confirm.</li>
        <li>This removes your favourites, collections, settings and cached purchase-check results.</li>
        <li>
          The app’s random install identifier is kept, because it isn’t linked to you and would be needed to restore future
          purchases. Uninstalling removes it.
        </li>
      </ul>
      <h3>Option 2: Uninstall the app (removes everything)</h3>
      <ul>
        <li>
          Uninstall PromptSpark from your phone (for example, long-press the app icon › Uninstall, or Settings › Apps ›
          PromptSpark › Uninstall).
        </li>
        <li>This deletes all of the app’s data on the device, including the random install identifier.</li>
      </ul>

      <h2 id="backup">Android backup</h2>
      <p>
        If Android backup is on for your Google account, Android may include PromptSpark’s app data in your device backup and
        restore it when you reinstall. To stop that, turn off or manage backup in your phone’s settings (usually Settings ›
        Google › Backup, or Settings › System › Backup, depending on your device), or delete the backup from your Google
        account. Google manages these backups under its own policies.
      </p>

      <h2 id="ads">Advertising data</h2>
      <p>Ads in the free version are served by Google AdMob, which collects data directly under Google’s policies. You can:</p>
      <ul>
        <li>
          reset or delete your Android advertising ID (for example, Settings › Privacy › Ads, or Settings › Google › Ads,
          depending on your device);
        </li>
        <li>
          change your ad consent choice in PromptSpark under <strong>Settings › Ad privacy choices</strong>, where this is
          offered in your region;
        </li>
        <li>
          manage or delete ad-related data with Google at{' '}
          <a href="https://myadcenter.google.com/" rel="noopener noreferrer">My Ad Center</a> and{' '}
          <a href="https://myaccount.google.com/" rel="noopener noreferrer">your Google Account</a>.
        </li>
      </ul>

      <h2 id="server">Data held by us</h2>
      <p>
        Pro purchases aren’t available, so we hold <strong>no purchase records</strong> for the current app, and the current
        app doesn’t send us any personal data. If you’ve emailed us, we hold your email address and messages, and we’ll
        delete them on request.
      </p>
      <p>
        If purchases are introduced in future, this page will explain which purchase records we keep, for how long, and how
        to delete them.
      </p>

      <h2 id="request">Send a deletion request</h2>
      <p>
        To ask us to delete any data we hold about you, or if you have questions about this page, email{' '}
        <a href={deletionMail}>{SITE.supportEmail}</a> with the subject “PromptSpark data deletion request”. Tell us what you’d
        like deleted and, if it’s about an email conversation, the email address you used. We’ll never ask for your password.
        We aim to respond within 30 days and will confirm when deletion is complete.
      </p>
      <p>
        More detail is in our <Link href="/privacy/">Privacy Policy</Link>.
      </p>
    </LegalLayout>
  );
}
