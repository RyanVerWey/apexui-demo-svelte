<script lang="ts">
import { apexProps } from "$lib/apex";

const routeHealth = [
  { label: "On-time arrivals", value: 92 },
  { label: "Jobs closed", value: 76 },
  { label: "At-risk promises", value: 14 },
  { label: "Parts ready", value: 87 }
];

const workOrderColumns = [
  { key: "id", header: "Order" },
  { key: "customer", header: "Customer" },
  { key: "crew", header: "Crew" },
  { key: "window", header: "Window" },
  { key: "status", header: "Status" }
];

const workOrderRows = [
  { id: "WO-1842", customer: "Harris Medical", crew: "Crew 14", window: "08:00-10:00", status: "En route" },
  { id: "WO-1843", customer: "Arbor Ridge HOA", crew: "Crew 8", window: "10:00-12:00", status: "Parts hold" },
  { id: "WO-1844", customer: "Forge Foods", crew: "Crew 21", window: "13:00-15:00", status: "Confirmed" },
  { id: "WO-1845", customer: "Cedarline Bank", crew: "Crew 3", window: "15:00-17:00", status: "Needs ETA" }
];

const workflowColumns = [
  {
    id: "intake",
    title: "Intake",
    items: [
      { id: "new-1", title: "Two HVAC warranty calls", meta: "High value" },
      { id: "new-2", title: "Elevator access notes missing", meta: "Account team" }
    ]
  },
  {
    id: "dispatch",
    title: "Dispatch",
    items: [
      { id: "disp-1", title: "Crew 14 to Harris Medical", meta: "Route locked" },
      { id: "disp-2", title: "Crew 8 waits on compressor", meta: "Parts hold" }
    ]
  },
  {
    id: "closeout",
    title: "Closeout",
    items: [
      { id: "done-1", title: "Bank alarm reset", meta: "Photos attached" },
      { id: "done-2", title: "HOA irrigation repair", meta: "Invoice ready" }
    ]
  }
];

const timelineEvents = [
  { id: "a", label: "06:42", description: "Overnight calls triaged into service promises.", meta: "Ops" },
  { id: "b", label: "07:15", description: "Truck stock scan completed for first wave.", meta: "Warehouse" },
  { id: "c", label: "08:05", description: "Dispatch lead approved route swaps.", meta: "Dispatch" }
];
</script>

<svelte:head>
  <title>Metrics Dashboard | Northstar Field Services</title>
</svelte:head>

<section class="page-header">
  <apex-stack gap="md">
    <apex-badge tone="info">Operations dashboard</apex-badge>
    <apex-typography as="h1" variant="display">Morning service control</apex-typography>
    <apex-typography variant="body">
      Dispatch, account promises, and closeout readiness stay visible before the field day drifts.
    </apex-typography>
  </apex-stack>
  <apex-button-group label="Dashboard actions">
    <apex-button size="sm" variant="secondary">Export</apex-button>
    <apex-button size="sm">Refresh</apex-button>
  </apex-button-group>
</section>

<section class="content-grid three">
  <apex-card eyebrow="Booked route time" heading="78%">
    <apex-progress label="Target 82%" value="78"></apex-progress>
  </apex-card>
  <apex-card eyebrow="Open risks" heading="11">
    <apex-progress label="Risk cleared" value="64"></apex-progress>
  </apex-card>
  <apex-card eyebrow="Invoice ready" heading="$42.8K">
    <apex-progress label="Closeout package complete" value="71"></apex-progress>
  </apex-card>
</section>

<section class="split-grid">
  <apex-chart label="Route health" use:apexProps={{ data: routeHealth }}></apex-chart>
  <apex-card eyebrow="Workflow" heading="Today by stage">
    <apex-workflow-board use:apexProps={{ columns: workflowColumns }}></apex-workflow-board>
  </apex-card>
</section>

<section class="split-grid">
  <apex-data-table
    caption="Active work orders"
    use:apexProps={{ columns: workOrderColumns, rows: workOrderRows }}
  ></apex-data-table>
  <div class="section-stack">
    <apex-timeline use:apexProps={{ events: timelineEvents }}></apex-timeline>
    <apex-alert tone="warning" heading="Capacity watch">
      Piedmont route has one crew open after 14:30. Keep urgent warranty calls there.
    </apex-alert>
  </div>
</section>
