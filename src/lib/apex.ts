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
import "@apexui/web-components/components/apex-tooltip.js";
import "@apexui/web-components/components/apex-transfer-list.js";
import "@apexui/web-components/components/apex-tree-view.js";
import "@apexui/web-components/components/apex-typography.js";
import "@apexui/web-components/components/apex-workflow-board.js";

export type ApexProps = Record<string, unknown>;

export const apexProps = (node: HTMLElement, props: ApexProps) => {
  Object.assign(node, props);

  return {
    update(nextProps: ApexProps) {
      Object.assign(node, nextProps);
    }
  };
};
