<script lang="ts">
import { apexProps } from "$lib/apex";

const tabs = [
  { id: "profile", label: "Profile" },
  { id: "notifications", label: "Notifications" },
  { id: "localization", label: "Locale" }
];

const densityOptions = [
  { label: "Compact", value: "compact" },
  { label: "Comfortable", value: "comfortable" },
  { label: "Spacious", value: "spacious" }
];

const localeOptions = [
  { label: "English, United States", value: "en-US" },
  { label: "English, Canada", value: "en-CA" },
  { label: "Spanish, United States", value: "es-US" }
];

const timezoneOptions = [
  { label: "America/New York", value: "America/New_York" },
  { label: "America/Chicago", value: "America/Chicago" },
  { label: "America/Denver", value: "America/Denver" }
];
</script>

<svelte:head>
  <title>Settings | Northstar Field Services</title>
</svelte:head>

<section class="page-header">
  <apex-stack gap="md">
    <apex-badge tone="neutral">Account settings</apex-badge>
    <apex-typography as="h1" variant="display">Preferences for dispatch work.</apex-typography>
    <apex-typography variant="body">
      Settings cover identity, notification rules, locale, density, and theme-adjacent preferences.
    </apex-typography>
  </apex-stack>
  <apex-tabs label="Settings sections" active-id="profile" use:apexProps={{ items: tabs }}></apex-tabs>
</section>

<section class="split-grid">
  <apex-card eyebrow="Profile" heading="Account owner">
    <div class="form-grid">
      <apex-text-field label="Name" value="Mina Patel"></apex-text-field>
      <apex-text-field label="Role" value="Regional operations lead"></apex-text-field>
      <apex-text-field label="Email" type="email" value="mina@northstar.example"></apex-text-field>
      <apex-select label="Locale" value="en-US" use:apexProps={{ options: localeOptions }}></apex-select>
      <apex-select label="Timezone" value="America/New_York" use:apexProps={{ options: timezoneOptions }}></apex-select>
      <apex-toggle-group label="Workspace density" value="comfortable" use:apexProps={{ options: densityOptions }}></apex-toggle-group>
    </div>
  </apex-card>

  <div class="section-stack">
    <apex-card eyebrow="Theme" heading="Mint token family">
      <apex-stack gap="md">
        <apex-typography variant="body">
          Global light/dark toggle lives in the app bar and switches the root data-apex-theme between mint-light and mint-dark.
        </apex-typography>
        <apex-progress label="Contrast smoke coverage" value="82"></apex-progress>
      </apex-stack>
    </apex-card>
    <apex-alert tone="info" heading="Framework-native state">
      Preferences are laid out as a SvelteKit route while individual controls remain ApexUI custom elements.
    </apex-alert>
  </div>
</section>

<section class="content-grid three">
  <apex-card eyebrow="Dispatch" heading="Route exceptions">
    <apex-switch label="Notify when a route falls below promise confidence" checked></apex-switch>
  </apex-card>
  <apex-card eyebrow="Accounts" heading="Renewal proof">
    <apex-switch label="Send weekly customer proof digest" checked></apex-switch>
  </apex-card>
  <apex-card eyebrow="Billing" heading="Closeout gaps">
    <apex-switch label="Alert when invoice evidence is incomplete"></apex-switch>
  </apex-card>
</section>
