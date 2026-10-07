// Centralized, production-safe ES imports for all project image assets
import fintechDashboardImg from './project_fintech_dashboard_1791356733788.jpg';
import ecommerceShopifyImg from './project_ecommerce_shopify_1791356747561.jpg';
import mobileHealthImg from './project_mobile_health_1791356758562.jpg';
import horizonMobilityImg from './project_horizon_mobility_1791357796886.jpg';
import taskflowMernImg from './taskflow_mern_mockup_1791362064954.jpg';
import wordpressGrowthImg from './wordpress_growth_mockup_1791362086772.jpg';
import figmaUiuxImg from './figma_uiux_mockup_1791362110374.jpg';
import servicesHeroMockupImg from './services_hero_mockup_1791360900873.jpg';

export {
  fintechDashboardImg,
  ecommerceShopifyImg,
  mobileHealthImg,
  horizonMobilityImg,
  taskflowMernImg,
  wordpressGrowthImg,
  figmaUiuxImg,
  servicesHeroMockupImg,
};

// Clean non-duplicated exported aliases for About page components
export const whoWeAreOfficeImg = wordpressGrowthImg;
export const missionVisionWorldImg = fintechDashboardImg;
export const whatWeDoEngineerImg = figmaUiuxImg;
export const aboutHeroImg = servicesHeroMockupImg;

// Safe image lookup map
export const projectImageMap: Record<string, string> = {
  'fintech-apex': fintechDashboardImg,
  'shopify-vellum': ecommerceShopifyImg,
  'health-synapse': mobileHealthImg,
  'horizon-mobility': horizonMobilityImg,
  'taskflow-mern': taskflowMernImg,
  'business-growth-wp': wordpressGrowthImg,
  'urbanfit-shopify': ecommerceShopifyImg,
  'fintech-figma-uiux': figmaUiuxImg,
};

/**
 * Standard Vite dynamic asset helper using new URL(..., import.meta.url).
 * Ensures assets are recognized by Vite's asset graph in production builds.
 */
export const getViteAssetUrl = (fileName: string): string => {
  try {
    return new URL(`./${fileName}`, import.meta.url).href;
  } catch (err) {
    console.warn(`[ViteAsset] Failed to resolve URL for: ${fileName}`, err);
    return '';
  }
};

/**
 * High-contrast, lightweight SVG placeholder data URI for fallback handling.
 */
export const FALLBACK_IMAGE_PLACEHOLDER =
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Crect%20fill%3D%22%230F172A%22%20width%3D%22800%22%20height%3D%22500%22%2F%3E%3Cpath%20d%3D%22M360%20220h80v60h-80z%22%20fill%3D%22%231E293B%22%20rx%3D%228%22%2F%3E%3Ctext%20fill%3D%22%2364748B%22%20font-family%3D%22sans-serif%22%20font-size%3D%2214%22%20text-anchor%3D%22middle%22%20x%3D%22400%22%20y%3D%22310%22%3EImage%20Preview%20Unavailable%3C%2Ftext%3E%3C%2Fsvg%3E';
