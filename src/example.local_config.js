//###########################################################################
//   OpenCEX Frontend configuration file. More info
//   https://polygant.notion.site/Settings-3f9e0aae880e433a9d23e76f62a4a456
//###########################################################################

const localConfig = {
  wss_url: "wss://",
  two_fa: "${PROJECT_NAME}",
  project_title: "${PROJECT_NAME}",
  api: {
    baseURL: "https://${DOMAIN}/api/v1/",
    basePublicURL: "https://${DOMAIN}/api/public/v1/",
    host: "${DOMAIN}",
  },
  api_url: "https://${DOMAIN}",
  api_url_plane: "${DOMAIN}",
  recaptcha_site_key: "${RECAPTCHA}",
  vue_v: "prod",
  site_domain: "${DOMAIN}",
  host: "${DOMAIN}",
  help_widget: "${HELP_WIDGET}",
  logo: "${LOGO}",
  themes: [
    {
      main_color: "#333333", // Soft dark grey, less intense
      second_color: "#0056B3", // Softer blue, less bright
      cancel_color: "#D32F2F", // Soft red for less intensity
      login_background: "#424242", // Darker shade for less eye strain
      login_text: "white",
      main_background: "#E3E3E4", // Very soft light grey, not harsh on the eyes
      main_text: "#333333",
      input_color: "white",
      input_text: "#333333",
      block_color: "white",
      border_color: "#BDBDBD", // Lighter grey borders
    },
    {
      main_color: "#1E1E1E", // Consistent dark grey for primary elements
      second_color: "#007AFF", // Consistent bright blue for secondary elements
      cancel_color: "#FF3B30", // Consistent red for negative actions
      login_background: "#202020", // Slightly darker for alternative theme
      login_text: "white",
      main_background: "#121212", // Very dark grey for deep contrast mode
      main_text: "#CCCCCC", // Lighter grey text for visibility on dark backgrounds
      input_color: "#333333", // Dark inputs for a deep theme
      input_text: "#CCCCCC",
      block_color: "#333333",
      border_color: "#424242",
    },
  ],
  socials: {
    telegram: {
      link: "${TELEGRAM}",
      title: "sitechange",
    },
    telegramNews: {
      link: "${TG_NEWS}",
      title: "site_news",
    },
    mail: "${SUPPORT_EMAIL}",
    facebook: {
      link: "${FACEBOOK}",
      title: "Exchange",
    },
    twitter: {
      link: "${TWITTER}",
      title: "@",
    },
  },
};

export default localConfig;
