<script lang="ts">
import { apexProps } from "$lib/apex";

const packageColumns = [
  { key: "package", header: "Package" },
  { key: "usage", header: "Usage" },
  { key: "proof", header: "Proof" }
];

const packageRows = [
  { package: "@apexui/tokens", usage: "Global token CSS", proof: "Imported once in +layout.svelte" },
  { package: "@apexui/web-components", usage: "Custom elements", proof: "Registered in src/lib/apex.ts" },
  { package: "SvelteKit", usage: "File routing", proof: "Six route directories/pages" },
  { package: "adapter-static", usage: "Static deploy", proof: "Prerender enabled" }
];

const treeItems = [
  {
    id: "routes",
    label: "src/routes",
    children: [
      { id: "home", label: "+page.svelte" },
      { id: "dashboard", label: "dashboard/+page.svelte" },
      { id: "work-orders", label: "work-orders/+page.svelte" },
      { id: "customers", label: "customers/+page.svelte" },
      { id: "settings", label: "settings/+page.svelte" },
      { id: "about", label: "about/+page.svelte" }
    ]
  },
  {
    id: "shared",
    label: "shared shell",
    children: [
      { id: "layout", label: "+layout.svelte" },
      { id: "apex", label: "src/lib/apex.ts" },
      { id: "css", label: "src/styles.css" }
    ]
  }
];
</script>

<svelte:head>
  <title>Package Proof | Northstar Field Services</title>
</svelte:head>

<section class="page-header">
  <apex-stack gap="md">
    <apex-badge tone="success">Package proof</apex-badge>
    <apex-typography as="h1" variant="display">ApexUI in a routed SvelteKit app.</apex-typography>
    <apex-typography variant="body">
      This page records how the demo uses installed packages, token themes, custom elements, and file-based routing.
    </apex-typography>
  </apex-stack>
  <apex-button-group label="Proof actions">
    <apex-button size="sm" variant="secondary">Copy route list</apex-button>
    <apex-button size="sm">Run build</apex-button>
  </apex-button-group>
</section>

<section class="split-grid">
  <apex-data-table
    caption="Installed package usage"
    use:apexProps={{ columns: packageColumns, rows: packageRows }}
  ></apex-data-table>
  <apex-card eyebrow="Route structure" heading="Framework-native pages">
    <apex-tree-view label="SvelteKit route files" use:apexProps={{ items: treeItems }}></apex-tree-view>
  </apex-card>
</section>

<section class="content-grid three">
  <apex-card eyebrow="Tokens" heading="mint-light default">
    Root `data-apex-theme` starts at mint-light and can switch to mint-dark from the shared app bar.
  </apex-card>
  <apex-card eyebrow="Components" heading="Native custom elements">
    Pages use `apex-card`, `apex-data-table`, `apex-workflow-board`, fields, switches, tabs, and charts directly.
  </apex-card>
  <apex-card eyebrow="CSS scope" heading="Composition only">
    Local CSS controls shell layout, grids, spacing, and responsive behavior while components keep their package styling.
  </apex-card>
</section>

<section class="section-stack">
  <apex-accordion heading="Acceptance coverage" open>
    Marketing, dashboard, form, records, settings, and package proof are separate SvelteKit routes. Build verification is listed in the handoff.
  </apex-accordion>
  <apex-snackbar tone="success" open>Northstar demo uses ApexUI packages without local component restyling.</apex-snackbar>
</section>
