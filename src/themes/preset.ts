const colors = {
  white: "#ffffff",
  gray: [
    "#f8f9fa", // 100
    "#e9ecef", // 200
    "#dee2e6", // 300
    "#ced4da", // 400
    "#adb5bd", // 500
    "#6c757d", // 600
    "#495057", // 700
    "#343a40", // 800
    "#212529", // 900
  ],
  black: "#000000",
  cyan: "#17a2b8",
  pink: "#E83E8C",
  nevada: "#616B6C",
  red: "#dc3545",
  orange: "#fd7e14",
  green: "#39b04a",
  steal: "#20c997",
  primary: "#17a2b8",
  warning: "#fcd921",
  headerBg: "#17a2b8",
};

let theme = {
  spaces: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  radii: '.25rem',
  colors: {
    white: "#ffffff",
    gray: [
      "#f8f9fa", // 100
      "#e9ecef", // 200
      "#dee2e6", // 300
      "#ced4da", // 400
      "#adb5bd", // 500
      "#6c757d", // 600
      "#495057", // 700
      "#343a40", // 800
      "#212529", // 900
    ],
    black: "#000000",
  },
  // Aliases for SDK
  text: {
    copy: {
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: 400,
    },
    header: {
      fontSize: '22px',
      lineHeight: '26px',
      fontWeight: 600,
    },
    link: {
      fontSize: '13px',
      fontWeight: 500,
    },
    button: {
      fontSize: '18px',
      fontWeight: 500,
    },
  },
  buttons: {
    primary: {
      bg: colors.gray[7],
      color: colors.white,
      borderRadius: '.25rem'
    },
    link: {
      bg: colors.white,
      color: colors.gray[8],
      borderRadius: 'none',
      px: 0
    }
  },
  ContributionCard: {
    default: {
      bg: colors.nevada
    }
  },
  ContributionTitle: {
    default: {
      bg: colors.gray[8],
      color: colors.white,
    }
  }
};

export default theme;
