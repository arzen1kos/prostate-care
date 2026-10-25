// Imported by: components/layout/Header.astro, components/navigation/MainNav.astro, components/navigation/NavItem.astro
/**
 * Navigation data for the site
 * Centralizes all navigation-related content
 */

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  isDropdown?: boolean;
  isButtonGroup?: boolean;
  dropdownItems?: {value: string, label: string}[];
  buttonItems?: {value: string, label: string, ariaLabel: string}[];
}

export const mainNavItems: NavItem[] = [
  {
    label: "Font Size",
    href: "#",
    icon: "text-size",
    isButtonGroup: true,
    buttonItems: [
      { value: "small", label: "A", ariaLabel: "Small Font Size" },
      { value: "medium", label: "A", ariaLabel: "Medium Font Size" },
      { value: "large", label: "A", ariaLabel: "Large Font Size" }
    ]
  },
];