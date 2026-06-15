<script lang="ts">
import { apexProps } from "$lib/apex";

const serviceTypes = [
  { label: "Preventive maintenance", value: "maintenance" },
  { label: "Warranty repair", value: "warranty" },
  { label: "Emergency response", value: "emergency" }
];

const priorityOptions = [
  { label: "Standard", value: "standard", description: "Schedule inside account promise." },
  { label: "Urgent", value: "urgent", description: "Dispatch lead review required." },
  { label: "Critical", value: "critical", description: "Escalate account owner and operations." }
];

const technicianOptions = ["Crew 3", "Crew 8", "Crew 14", "Crew 21"];
const uploadFiles = [{ name: "site-access-photo.jpg", meta: "1.2 MB" }];
</script>

<svelte:head>
  <title>Work Order Form | Northstar Field Services</title>
</svelte:head>

<section class="page-header">
  <apex-stack gap="md">
    <apex-badge tone="success">Work order intake</apex-badge>
    <apex-typography as="h1" variant="display">Create a service-ready visit.</apex-typography>
    <apex-typography variant="body">
      Required account, timing, safety, and attachment fields make the form feel like daily operations, not sample controls.
    </apex-typography>
  </apex-stack>
  <apex-stepper
    active-index="1"
    use:apexProps={{ steps: [
      { id: "account", label: "Account" },
      { id: "scope", label: "Scope" },
      { id: "dispatch", label: "Dispatch" }
    ] }}
  ></apex-stepper>
</section>

<section class="split-grid">
  <apex-card eyebrow="New request" heading="Service details">
    <form class="form-grid" aria-label="New work order">
      <apex-text-field label="Customer account" name="customer" value="Harris Medical Group"></apex-text-field>
      <apex-text-field label="Site contact" name="contact" placeholder="Name and phone"></apex-text-field>
      <apex-select
        label="Service type"
        name="serviceType"
        value="warranty"
        use:apexProps={{ options: serviceTypes }}
      ></apex-select>
      <apex-autocomplete
        label="Preferred crew"
        placeholder="Search crews"
        value="Crew 14"
        use:apexProps={{ options: technicianOptions }}
      ></apex-autocomplete>
      <apex-date-picker label="Requested date" name="requestedDate" value="2026-06-18"></apex-date-picker>
      <apex-number-field label="Estimated labor hours" name="hours" min="1" max="12" value="3"></apex-number-field>
      <apex-slider label="Schedule confidence" min="0" max="100" value="82"></apex-slider>
      <apex-radio-group
        label="Priority"
        name="priority"
        value="urgent"
        use:apexProps={{ options: priorityOptions }}
      ></apex-radio-group>
      <apex-checkbox
        label="Customer approved after-hours access"
        description="Required for work outside primary reception hours."
        checked
      ></apex-checkbox>
      <apex-textarea
        label="Problem statement"
        name="problem"
        rows="5"
        value="North rooftop unit failing under afternoon load. Customer reports repeated reset."
      ></apex-textarea>
      <apex-file-upload
        label="Site photos and documents"
        description="Attach access photos, warranty documents, or compliance forms."
        action-label="Upload files"
        use:apexProps={{ files: uploadFiles }}
      ></apex-file-upload>
      <div class="action-row form-actions">
        <apex-button type="submit">Create work order</apex-button>
        <apex-button type="reset" variant="secondary">Save draft</apex-button>
      </div>
    </form>
  </apex-card>

  <div class="section-stack">
    <apex-alert tone="info" heading="Validation smoke">
      ApexUI fields carry labels, help copy, values, and error-ready props while SvelteKit owns page routing.
    </apex-alert>
    <apex-card eyebrow="Dispatch help" heading="What good looks like">
      Include the failure mode, site access, preferred arrival window, safety notes, parts guess, and who can approve added work.
    </apex-card>
    <apex-empty-state
      align="start"
      heading="No duplicate ticket found"
      description="Search matched the account but found no open request for this asset."
    ></apex-empty-state>
  </div>
</section>
