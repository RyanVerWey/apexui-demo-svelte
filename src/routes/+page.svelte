<script lang="ts">
import { base } from "$app/paths";
import { apexProps } from "$lib/apex";

const proofPoints = [
  { label: "Same-day dispatch", value: 91 },
  { label: "First-visit close", value: 84 },
  { label: "Invoice accuracy", value: 97 }
];

const customerRows = [
  { region: "Blue Ridge", crews: 28, promise: "4 hour response", status: "Expanding" },
  { region: "Piedmont", crews: 16, promise: "Next shift", status: "Stable" },
  { region: "Cape Fear", crews: 22, promise: "Same day", status: "Pilot" }
];

const customerColumns = [
  { key: "region", header: "Region" },
  { key: "crews", header: "Crews" },
  { key: "promise", header: "Service promise" },
  { key: "status", header: "Status" }
];
</script>

<svelte:head>
  <title>Northstar Field Services</title>
</svelte:head>

<section class="hero-band">
  <div class="hero-copy">
    <apex-stack gap="lg">
      <apex-badge tone="success">Regional field operations</apex-badge>
      <apex-typography as="h1" variant="display">
        Premium service teams, routed with fewer handoffs.
      </apex-typography>
      <apex-typography variant="body">
        Northstar Field Services coordinates maintenance visits, warranty work, and account follow-up for operators that need a tighter daily cadence.
      </apex-typography>
      <div class="action-row">
        <apex-button>Schedule operations review</apex-button>
        <apex-button variant="secondary">View proof pack</apex-button>
        <apex-link href={`${base}/dashboard`} variant="standalone">Open live metrics</apex-link>
      </div>
    </apex-stack>
  </div>

  <apex-paper elevation="sm">
    <div class="operations-snapshot">
      <div class="snapshot-header">
        <apex-badge tone="info">Today</apex-badge>
        <apex-typography as="h2" variant="title">Charlotte dispatch board</apex-typography>
      </div>
      <apex-progress label="Route capacity booked" value="78"></apex-progress>
      <apex-progress label="Parts matched before roll-out" value="88"></apex-progress>
      <apex-progress label="Customer ETA confirmations" value="93"></apex-progress>
      <apex-alert tone="success" heading="Crew 14 recovered">
        Warranty visit moved ahead after parts scan matched truck stock.
      </apex-alert>
    </div>
  </apex-paper>
</section>

<section class="content-grid three">
  <apex-card eyebrow="Offer" heading="Managed field cadence">
    Route planning, customer commitments, crew readiness, and billing proof share one operational record.
  </apex-card>
  <apex-card eyebrow="Operators" heading="Built for regional scale">
    Dispatch leads, account managers, and field supervisors see the same status without spreadsheet relays.
  </apex-card>
  <apex-card eyebrow="Outcome" heading="Cleaner handoffs">
    Each job carries service promise, site notes, safety checks, and completion evidence into the next step.
  </apex-card>
</section>

<section class="split-grid">
  <apex-chart label="Customer proof" use:apexProps={{ data: proofPoints }}></apex-chart>
  <apex-data-table
    caption="Regional proof accounts"
    use:apexProps={{ columns: customerColumns, rows: customerRows }}
  ></apex-data-table>
</section>

<section class="section-stack">
  <div class="section-heading">
    <apex-typography as="h2" variant="title">What Northstar sells</apex-typography>
    <apex-badge tone="neutral">Website plus app demo</apex-badge>
  </div>
  <div class="content-grid two">
    <apex-paper elevation="sm">
      <apex-stack gap="md">
        <apex-typography as="h3" variant="subtitle">Marketing surface</apex-typography>
        <apex-typography variant="body">
          Home page presents a concrete business story instead of a component catalog.
        </apex-typography>
      </apex-stack>
    </apex-paper>
    <apex-paper elevation="sm">
      <apex-stack gap="md">
        <apex-typography as="h3" variant="subtitle">Application surface</apex-typography>
        <apex-typography variant="body">
          Routed pages show dashboard, records, forms, settings, and integration proof as real workflows.
        </apex-typography>
      </apex-stack>
    </apex-paper>
  </div>
</section>
