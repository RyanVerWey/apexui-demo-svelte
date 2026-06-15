<script lang="ts">
import { apexProps } from "$lib/apex";

const customerColumns = [
  { key: "account", header: "Account" },
  { key: "owner", header: "Owner" },
  { key: "stage", header: "Stage" },
  { key: "value", header: "Value" },
  { key: "next", header: "Next step" }
];

const customerRows = [
  { account: "Harris Medical", owner: "Mina", stage: "Renewal", value: "$128K", next: "Scope north campus" },
  { account: "Arbor Ridge HOA", owner: "Cole", stage: "Expansion", value: "$74K", next: "Review irrigation SLA" },
  { account: "Forge Foods", owner: "Drew", stage: "Pilot", value: "$46K", next: "Safety walkthrough" },
  { account: "Cedarline Bank", owner: "Mina", stage: "Steady", value: "$92K", next: "Quarterly proof pack" }
];

const pipelineColumns = [
  {
    id: "new",
    title: "New",
    items: [
      { id: "lead-1", title: "Municipal water district", meta: "$58K" },
      { id: "lead-2", title: "Retail freezer network", meta: "$41K" }
    ]
  },
  {
    id: "active",
    title: "Active",
    items: [
      { id: "active-1", title: "Forge Foods pilot", meta: "Site visit" },
      { id: "active-2", title: "Arbor Ridge expansion", meta: "SLA review" }
    ]
  },
  {
    id: "won",
    title: "Won",
    items: [
      { id: "won-1", title: "Harris Medical renewal", meta: "Legal review" },
      { id: "won-2", title: "Cedarline proof pack", meta: "Quarterly" }
    ]
  }
];
</script>

<svelte:head>
  <title>Customers | Northstar Field Services</title>
</svelte:head>

<section class="page-header">
  <apex-stack gap="md">
    <apex-badge tone="info">Customer records</apex-badge>
    <apex-typography as="h1" variant="display">Pipeline and account memory.</apex-typography>
    <apex-typography variant="body">
      Sales, service, and account teams can inspect commitments without leaving the operating workspace.
    </apex-typography>
  </apex-stack>
  <apex-search-form label="Search customers" placeholder="Account, owner, region" submit-label="Search"></apex-search-form>
</section>

<section class="split-grid">
  <apex-card eyebrow="Pipeline" heading="Regional opportunities">
    <apex-workflow-board use:apexProps={{ columns: pipelineColumns }}></apex-workflow-board>
  </apex-card>
  <apex-card eyebrow="Selected account" heading="Harris Medical">
    <apex-stack gap="md">
      <div class="identity-row">
        <apex-avatar initials="HM" alt="Harris Medical"></apex-avatar>
        <div>
          <apex-typography as="h2" variant="subtitle">North campus contract</apex-typography>
          <apex-typography variant="caption">Renewal due July 2026</apex-typography>
        </div>
      </div>
      <apex-progress label="Proof package readiness" value="86"></apex-progress>
      <apex-rating label="Relationship strength" value="4" max="5"></apex-rating>
      <apex-alert tone="success" heading="Next best action">
        Bring first-visit close rate and after-hours coverage data into renewal review.
      </apex-alert>
    </apex-stack>
  </apex-card>
</section>

<section class="section-stack">
  <div class="section-heading">
    <apex-typography as="h2" variant="title">Customer records</apex-typography>
    <apex-pagination label="Customer pages" count="8" page="1"></apex-pagination>
  </div>
  <apex-data-grid
    caption="Customer pipeline records"
    use:apexProps={{ columns: customerColumns, rows: customerRows }}
  ></apex-data-grid>
</section>
