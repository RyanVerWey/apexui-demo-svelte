<script lang="ts">
import "@apexui/web-components/components/apex-accordion.js";
import "@apexui/web-components/components/apex-alert.js";
import "@apexui/web-components/components/apex-app-bar.js";
import "@apexui/web-components/components/apex-autocomplete.js";
import "@apexui/web-components/components/apex-avatar.js";
import "@apexui/web-components/components/apex-badge.js";
import "@apexui/web-components/components/apex-bottom-navigation.js";
import "@apexui/web-components/components/apex-breadcrumbs.js";
import "@apexui/web-components/components/apex-button.js";
import "@apexui/web-components/components/apex-button-group.js";
import "@apexui/web-components/components/apex-calendar.js";
import "@apexui/web-components/components/apex-card.js";
import "@apexui/web-components/components/apex-chart.js";
import "@apexui/web-components/components/apex-checkbox.js";
import "@apexui/web-components/components/apex-chip.js";
import "@apexui/web-components/components/apex-data-grid.js";
import "@apexui/web-components/components/apex-data-table.js";
import "@apexui/web-components/components/apex-date-picker.js";
import "@apexui/web-components/components/apex-divider.js";
import "@apexui/web-components/components/apex-empty-state.js";
import "@apexui/web-components/components/apex-file-upload.js";
import "@apexui/web-components/components/apex-icon.js";
import "@apexui/web-components/components/apex-link.js";
import "@apexui/web-components/components/apex-list.js";
import "@apexui/web-components/components/apex-number-field.js";
import "@apexui/web-components/components/apex-pagination.js";
import "@apexui/web-components/components/apex-paper.js";
import "@apexui/web-components/components/apex-progress.js";
import "@apexui/web-components/components/apex-radio-group.js";
import "@apexui/web-components/components/apex-rating.js";
import "@apexui/web-components/components/apex-search-form.js";
import "@apexui/web-components/components/apex-select.js";
import "@apexui/web-components/components/apex-sidebar.js";
import "@apexui/web-components/components/apex-skeleton.js";
import "@apexui/web-components/components/apex-slider.js";
import "@apexui/web-components/components/apex-snackbar.js";
import "@apexui/web-components/components/apex-stack.js";
import "@apexui/web-components/components/apex-stepper.js";
import "@apexui/web-components/components/apex-switch.js";
import "@apexui/web-components/components/apex-tabs.js";
import "@apexui/web-components/components/apex-text-field.js";
import "@apexui/web-components/components/apex-textarea.js";
import "@apexui/web-components/components/apex-timeline.js";
import "@apexui/web-components/components/apex-toggle-group.js";
import "@apexui/web-components/components/apex-toolbar.js";
import "@apexui/web-components/components/apex-tooltip.js";
import "@apexui/web-components/components/apex-transfer-list.js";
import "@apexui/web-components/components/apex-tree-view.js";
import "@apexui/web-components/components/apex-typography.js";
import "@apexui/web-components/components/apex-workflow-board.js";

let isDark = false;
$: theme = isDark ? "mint-dark" : "mint-light";
$: themeLabel = isDark ? "Mint dark" : "Mint light";

type ApexProps = Record<string, unknown>;

const apexProps = (node: HTMLElement, props: ApexProps) => {
  Object.assign(node, props);

  return {
    update(nextProps: ApexProps) {
      Object.assign(node, nextProps);
    }
  };
};

const setTheme = (event: CustomEvent<{ checked: boolean }>) => {
  isDark = event.detail.checked;
};

const navItems = [
  { id: "overview", label: "Overview", badge: "Live" },
  { id: "atomic", label: "Atomic system" },
  { id: "workflows", label: "Workflows", badge: "4" },
  { id: "forms", label: "Forms" },
  { id: "data", label: "Data" }
];

const breadcrumbs = [
  { label: "ApexUI" },
  { label: "Demos" },
  { label: "Svelte" }
];

const tabs = [
  { id: "atoms", label: "Atoms" },
  { id: "molecules", label: "Molecules" },
  { id: "organisms", label: "Organisms" },
  { id: "templates", label: "Templates" }
];

const bottomNav = [
  { id: "overview", label: "Overview" },
  { id: "atomic", label: "Atomic" },
  { id: "ship", label: "Ship" }
];

const componentHealth = [
  { label: "Atoms", value: 96 },
  { label: "Molecules", value: 88 },
  { label: "Organisms", value: 82 },
  { label: "Templates", value: 74 }
];

const adoptionRows = [
  { layer: "Atoms", element: "button, badge, switch", status: "Stable", owner: "Core" },
  { layer: "Molecules", element: "search, select, upload", status: "Stable", owner: "Forms" },
  { layer: "Organisms", element: "data table, workflow board", status: "Beta", owner: "Product" },
  { layer: "Templates", element: "dashboard, settings, review", status: "Ready", owner: "DX" }
];

const adoptionColumns = [
  { key: "layer", header: "Atomic layer" },
  { key: "element", header: "ApexUI elements" },
  { key: "status", header: "Status" },
  { key: "owner", header: "Owner" }
];

const releaseRows = [
  { track: "Mint theme", impact: "App shell", progress: "Complete", risk: "Low" },
  { track: "Svelte bindings", impact: "Custom elements", progress: "Direct imports", risk: "Medium" },
  { track: "Docs parity", impact: "Examples", progress: "Draft", risk: "Low" },
  { track: "QA pack", impact: "Responsive states", progress: "Queued", risk: "Medium" }
];

const releaseColumns = [
  { key: "track", header: "Track" },
  { key: "impact", header: "Impact" },
  { key: "progress", header: "Progress" },
  { key: "risk", header: "Risk" }
];

const workflowColumns = [
  {
    id: "intake",
    title: "Intake",
    items: [
      { id: "brief", title: "Map atomic layers", meta: "Spec" },
      { id: "tokens", title: "Lock mint tokens", meta: "Theme" }
    ]
  },
  {
    id: "build",
    title: "Build",
    items: [
      { id: "shell", title: "Compose app shell", meta: "Svelte" },
      { id: "forms", title: "Wire form states", meta: "ApexUI" }
    ]
  },
  {
    id: "verify",
    title: "Verify",
    items: [
      { id: "build", title: "Run Vite build", meta: "Local" },
      { id: "responsive", title: "Check breakpoints", meta: "Layout" }
    ]
  }
];

const treeItems = [
  {
    id: "atoms",
    label: "Atoms",
    children: [
      { id: "button", label: "Button" },
      { id: "badge", label: "Badge" },
      { id: "switch", label: "Switch" }
    ]
  },
  {
    id: "molecules",
    label: "Molecules",
    children: [
      { id: "search", label: "Search form" },
      { id: "select", label: "Select" },
      { id: "file-upload", label: "File upload" }
    ]
  },
  {
    id: "organisms",
    label: "Organisms",
    children: [
      { id: "table", label: "Data table" },
      { id: "board", label: "Workflow board" },
      { id: "calendar", label: "Calendar" }
    ]
  }
];

const calendarDays = [
  { id: "mon", label: "1", muted: true },
  { id: "tue", label: "2" },
  { id: "wed", label: "3", badge: "QA" },
  { id: "thu", label: "4", selected: true },
  { id: "fri", label: "5" },
  { id: "sat", label: "6", disabled: true },
  { id: "sun", label: "7" }
];

const timelineEvents = [
  { title: "Tokens loaded", description: "Mint light and dark themes available at app root." },
  { title: "Components registered", description: "Svelte imports each ApexUI custom element directly." },
  { title: "Composition complete", description: "Layout CSS owns shell, grid, spacing, and responsive behavior." }
];

const steps = [
  { label: "Import" },
  { label: "Compose" },
  { label: "Verify" }
];

const densityOptions = [
  { label: "Compact", value: "compact" },
  { label: "Balanced", value: "balanced" },
  { label: "Spacious", value: "spacious" }
];

const priorityOptions = [
  { label: "Stable", value: "stable" },
  { label: "Beta", value: "beta" },
  { label: "Experimental", value: "experimental" }
];

const componentOptions = [
  "apex-button",
  "apex-card",
  "apex-data-table",
  "apex-workflow-board",
  "apex-switch"
];

const transferSource = [
  { id: "atoms", label: "Atoms", selected: true },
  { id: "molecules", label: "Molecules" },
  { id: "templates", label: "Templates" }
];

const transferTarget = [
  { id: "organisms", label: "Organisms" },
  { id: "pages", label: "Pages", selected: true }
];

const uploadFiles = [{ name: "mint-theme-check.png", meta: "324 KB" }];
</script>

<svelte:head>
  <title>ApexUI Svelte Workbench</title>
  <meta
    name="description"
    content="A full Svelte app demo composed with ApexUI web components and mint themes."
  />
</svelte:head>

<main class="app-shell" data-apex-theme={theme}>
  <apex-app-bar heading="ApexUI Svelte Workbench">
    <apex-badge tone="success">SvelteKit</apex-badge>
    <apex-tooltip label={themeLabel}>
      <apex-switch
        label="Dark mode"
        description="Switch app token theme"
        checked={isDark}
        on:apexChange={setTheme}
      ></apex-switch>
    </apex-tooltip>
    <apex-button size="sm">Publish</apex-button>
  </apex-app-bar>

  <div class="app-layout">
    <aside class="app-sidebar">
      <apex-sidebar
        heading="Demo areas"
        label="ApexUI demo navigation"
        active-id="overview"
        use:apexProps={{ items: navItems }}
      ></apex-sidebar>
      <apex-alert tone="info" heading="Direct imports">
        Each ApexUI web component is registered from its component module, then used as a native tag.
      </apex-alert>
    </aside>

    <section class="app-main" aria-label="ApexUI Svelte demo">
      <apex-breadcrumbs label="Page trail" use:apexProps={{ items: breadcrumbs }}></apex-breadcrumbs>

      <section class="hero-grid" id="overview">
        <div class="hero-copy">
          <apex-stack gap="lg">
            <apex-badge tone="info">Mint token system</apex-badge>
            <apex-typography as="h1" variant="display">Atomic Svelte app, built from ApexUI custom elements</apex-typography>
            <apex-typography variant="body">
              This demo treats ApexUI as the design system source of truth: tokens at the root, custom elements for controls, and Svelte for state and composition.
            </apex-typography>
            <div class="app-actions">
              <apex-button>Start release review</apex-button>
              <apex-button variant="secondary">Open component map</apex-button>
              <apex-link href="#atomic" variant="standalone">Jump to Atomic stack</apex-link>
            </div>
          </apex-stack>
        </div>

        <apex-card eyebrow="System health" heading="Release readiness">
          <div class="metric-stack">
            <apex-progress label="Token coverage" value="96"></apex-progress>
            <apex-progress label="Component parity" value="88"></apex-progress>
            <apex-progress label="Responsive audit" value="82"></apex-progress>
          </div>
        </apex-card>
      </section>

      <section class="panel-grid">
        <apex-card eyebrow="App state" heading="Theme scope">
          <apex-stack gap="md">
            <apex-typography variant="body">Active root theme: {themeLabel}</apex-typography>
            <apex-switch label="Mint dark" checked={isDark} on:apexChange={setTheme}></apex-switch>
          </apex-stack>
        </apex-card>

        <apex-chart label="Atomic coverage" use:apexProps={{ data: componentHealth }}></apex-chart>

        <apex-card eyebrow="Status" heading="Ship window">
          <apex-stack gap="md">
            <apex-badge tone="success">Ready</apex-badge>
            <apex-rating label="Demo confidence" value="4" max="5"></apex-rating>
            <apex-snackbar tone="success" open>Build checks run locally before handoff.</apex-snackbar>
          </apex-stack>
        </apex-card>
      </section>

      <section class="section-stack" id="atomic">
        <div class="section-heading">
          <apex-typography as="h2" variant="title">Atomic design layers</apex-typography>
          <apex-tabs label="Atomic layer tabs" active-id="atoms" use:apexProps={{ items: tabs }}></apex-tabs>
        </div>

        <div class="atomic-grid">
          <apex-paper elevation="sm">
            <apex-stack gap="md">
              <apex-badge tone="neutral">Atoms</apex-badge>
              <apex-typography as="h3" variant="subtitle">Primitive controls</apex-typography>
              <div class="inline-cluster">
                <apex-button size="sm">Primary</apex-button>
                <apex-button size="sm" variant="secondary">Secondary</apex-button>
                <apex-button size="sm" variant="danger">Danger</apex-button>
              </div>
              <div class="inline-cluster">
                <apex-chip selected>Selected</apex-chip>
                <apex-badge tone="warning">Warning</apex-badge>
                <apex-icon name="sparkle" label="Sparkle"></apex-icon>
              </div>
            </apex-stack>
          </apex-paper>

          <apex-paper elevation="sm">
            <apex-stack gap="md">
              <apex-badge tone="info">Molecules</apex-badge>
              <apex-typography as="h3" variant="subtitle">Controls with context</apex-typography>
              <apex-search-form label="Search components" placeholder="Find ApexUI tags"></apex-search-form>
              <apex-select label="Status filter" value="stable" use:apexProps={{ options: priorityOptions }}></apex-select>
              <apex-toggle-group label="Density" value="balanced" use:apexProps={{ options: densityOptions }}></apex-toggle-group>
            </apex-stack>
          </apex-paper>

          <apex-paper elevation="sm">
            <apex-stack gap="md">
              <apex-badge tone="success">Organisms</apex-badge>
              <apex-typography as="h3" variant="subtitle">Structured product UI</apex-typography>
              <apex-tree-view label="Component tree" use:apexProps={{ items: treeItems }}></apex-tree-view>
              <apex-stepper active-index="1" use:apexProps={{ steps }}></apex-stepper>
            </apex-stack>
          </apex-paper>
        </div>
      </section>

      <section class="split-grid" id="workflows">
        <apex-card eyebrow="Delivery" heading="Workflow board">
          <apex-workflow-board use:apexProps={{ columns: workflowColumns }}></apex-workflow-board>
        </apex-card>

        <div class="section-stack">
          <apex-calendar label="Release calendar" month-label="June 2026" use:apexProps={{ days: calendarDays }}></apex-calendar>
          <apex-timeline use:apexProps={{ events: timelineEvents }}></apex-timeline>
        </div>
      </section>

      <section class="split-grid" id="forms">
        <apex-card eyebrow="Intake" heading="Component request">
          <div class="form-grid">
            <apex-text-field label="Feature name" placeholder="Analytics overview"></apex-text-field>
            <apex-autocomplete label="ApexUI tag" placeholder="Choose component" use:apexProps={{ options: componentOptions }}></apex-autocomplete>
            <apex-date-picker label="Target date" value="2026-06-20"></apex-date-picker>
            <apex-number-field label="Priority" min="1" max="5" value="3"></apex-number-field>
            <apex-slider label="Confidence" value="82" min="0" max="100"></apex-slider>
            <apex-radio-group label="Release lane" name="lane" value="beta" use:apexProps={{ options: priorityOptions }}></apex-radio-group>
            <apex-checkbox label="Include responsive proof" checked></apex-checkbox>
            <apex-textarea label="Acceptance notes" rows="5" value="Uses ApexUI internals unchanged."></apex-textarea>
            <apex-file-upload
              label="Reference assets"
              description="Attach screenshots, specs, or notes."
              use:apexProps={{ files: uploadFiles }}
            ></apex-file-upload>
          </div>
        </apex-card>

        <apex-card eyebrow="Scope" heading="Layer transfer">
          <apex-transfer-list
            source-title="Available layers"
            target-title="Release layers"
            use:apexProps={{ sourceItems: transferSource, targetItems: transferTarget }}
          ></apex-transfer-list>
        </apex-card>
      </section>

      <section class="section-stack" id="data">
        <div class="section-heading">
          <apex-typography as="h2" variant="title">Data surfaces</apex-typography>
          <apex-button-group label="Data actions">
            <apex-button size="sm" variant="secondary">Export</apex-button>
            <apex-button size="sm" variant="secondary">Refresh</apex-button>
          </apex-button-group>
        </div>

        <div class="split-grid">
          <apex-data-table
            caption="Atomic adoption matrix"
            use:apexProps={{ columns: adoptionColumns, rows: adoptionRows }}
          ></apex-data-table>
          <apex-data-grid
            caption="Release risk grid"
            use:apexProps={{ columns: releaseColumns, rows: releaseRows }}
          ></apex-data-grid>
        </div>
      </section>

      <section class="panel-grid">
        <apex-accordion heading="Implementation note">
          This app uses ApexUI custom elements directly in Svelte markup, with Svelte only handling data, state, and app composition.
        </apex-accordion>
        <apex-empty-state
          align="start"
          heading="No local overrides"
          description="CSS in this repo only places the app shell, grids, spacing, and responsive behavior."
        ></apex-empty-state>
        <apex-bottom-navigation
          label="Mobile app navigation"
          active-id="overview"
          use:apexProps={{ items: bottomNav }}
        ></apex-bottom-navigation>
      </section>
    </section>
  </div>
</main>
