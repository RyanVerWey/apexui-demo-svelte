<script lang="ts">
import { page } from "$app/stores";
import { base } from "$app/paths";
import { onMount } from "svelte";
import "@apexui/tokens/css";
import "../styles.css";
import { apexProps } from "$lib/apex";

let isDark = false;

const navItems = [
  { id: "home", label: "Home", href: `${base}/`, route: "/" },
  { id: "dashboard", label: "Metrics", href: `${base}/dashboard`, route: "/dashboard", badge: "Live" },
  { id: "work-orders", label: "Work orders", href: `${base}/work-orders`, route: "/work-orders" },
  { id: "customers", label: "Customers", href: `${base}/customers`, route: "/customers" },
  { id: "settings", label: "Settings", href: `${base}/settings`, route: "/settings" },
  { id: "about", label: "Package proof", href: `${base}/about`, route: "/about" }
];

const bottomNavItems = [
  { id: "home", label: "Home" },
  { id: "dashboard", label: "Metrics" },
  { id: "work-orders", label: "Orders" },
  { id: "customers", label: "Customers" },
  { id: "settings", label: "Settings" }
];

$: theme = isDark ? "mint-dark" : "mint-light";
$: themeLabel = isDark ? "Mint dark" : "Mint light";
$: activeId = navItems.find((item) => item.route === $page.route.id)?.id ?? "home";
$: breadcrumbs = [
  { label: "Northstar", href: `${base}/` },
  { label: navItems.find((item) => item.id === activeId)?.label ?? "Home", current: true }
];

onMount(() => {
  isDark = localStorage.getItem("northstar-theme") === "mint-dark";
});

const setTheme = (event: CustomEvent<{ checked: boolean }>) => {
  isDark = event.detail.checked;
  localStorage.setItem("northstar-theme", isDark ? "mint-dark" : "mint-light");
};
</script>

<svelte:head>
  <meta
    name="description"
    content="Northstar Field Services demo built with SvelteKit routing and ApexUI web components."
  />
</svelte:head>

<main class="site-shell" data-apex-theme={theme}>
  <apex-app-bar heading="Northstar Field Services">
    <nav class="top-nav" aria-label="Primary">
      {#each navItems as item}
        <apex-link href={item.href} variant="standalone">{item.label}</apex-link>
      {/each}
    </nav>
    <apex-tooltip label={themeLabel}>
      <apex-switch
        label="Dark"
        description="Toggle token theme"
        checked={isDark}
        on:apexChange={setTheme}
      ></apex-switch>
    </apex-tooltip>
  </apex-app-bar>

  <div class="site-layout">
    <aside class="site-sidebar">
      <apex-sidebar
        heading="Workspace"
        label="Northstar navigation"
        active-id={activeId}
        use:apexProps={{ items: navItems }}
      ></apex-sidebar>
      <apex-alert tone="info" heading="Mint theme">
        Demo defaults to mint-light and keeps ApexUI tokens as visual source of truth.
      </apex-alert>
    </aside>

    <section class="site-main" aria-label="Northstar page content">
      <apex-breadcrumbs label="Page trail" use:apexProps={{ items: breadcrumbs }}></apex-breadcrumbs>
      <slot />
    </section>
  </div>

  <div class="mobile-nav">
    <apex-bottom-navigation
      label="Mobile navigation"
      active-id={activeId}
      use:apexProps={{ items: bottomNavItems }}
    ></apex-bottom-navigation>
  </div>
</main>
