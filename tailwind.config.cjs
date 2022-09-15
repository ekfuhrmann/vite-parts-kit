/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const { remPair, rem } = require("@viget/tailwindcss-plugins/utilities/fns");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    /** Override Core Styles **/
    screens: {
      sm: rem(550),
      md: rem(768),
      lg: rem(1024),
      xl: rem(1440),
      "sm-d": { max: rem(549.98) },
      "md-d": { max: rem(767.98) },
      "lg-d": { max: rem(1023.98) },
      "xl-d": { max: rem(1439.98) },
    },
    boxShadow: {
      button: "0px 1px 0px rgba(0, 0, 0, 0.05)",
      card: "0px 14px 6px rgba(0, 0, 0, 0.01), 0px 8px 5px rgba(0, 0, 0, 0.02), 0px 3px 3px rgba(0, 0, 0, 0.03), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 0px 0px rgba(0, 0, 0, 0.04)",
      sidenav:
        "0.5px 0px 0px rgba(49, 46, 129, 0.21), 7px 0px 0px rgba(0, 0, 0, 0.005), 9px 0px 0px rgba(0, 0, 0, 0.0075)",
      dropdown:
        "0px 7px 16px -6px rgba(0, 0, 0, 0.14), 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
      "button-toggle": "0px 1.26px 0px rgba(0, 0, 0, 0.05)",
    },
    spacing: {
      0: "0",
      ...remPair(1),
      ...remPair(2),
      ...remPair(3),
      ...remPair(4),
      ...remPair(6),
      ...remPair(8),
      ...remPair(10),
      ...remPair(12),
      ...remPair(14),
      ...remPair(16),
      ...remPair(18),
      ...remPair(20),
      ...remPair(22),
      ...remPair(24),
      ...remPair(28),
      ...remPair(30),
      ...remPair(32),
      ...remPair(34),
      ...remPair(36),
      ...remPair(40),
      ...remPair(44),
      ...remPair(48),
      ...remPair(56),
      ...remPair(64),
      ...remPair(72),
      ...remPair(80),
      ...remPair(88),
      ...remPair(96),
      ...remPair(100),
      ...remPair(128),
      ...remPair(136),
    },
    fontSize: {
      "2xs": [
        rem(10),
        {
          lineHeight: 1,
          letterSpacing: "0.02em",
        },
      ],
      xs: [
        rem(12),
        {
          lineHeight: 1.5,
          letterSpacing: "0.02em",
        },
      ],
      sm: [rem(14), 1.5],
      base: [rem(16), 1.5],
      lg: [rem(20), 1.5],
      xl: [rem(24), 1.5],
      "2xl": [
        rem(32),
        {
          lineHeight: 1.5,
          letterSpacing: "0.02em",
        },
      ],
    },

    /** Extended Styes **/
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.blue[500],
          hover: colors.blue[400],
          active: colors.blue[600],
          text: colors.gray[800],
        },
        secondary: {
          text: colors.gray[500],
        },
        status: {
          error: "#D3312B",
          warning: colors.amber[400],
          success: "#4AB752",
        },
        link: colors.blue[500],
      },
      borderColor: {
        DEFAULT: colors.gray[200],
        light: "rgb(0 0 0 / 0.08)",
      },
      ringColor: {
        border: colors.gray[200],
        "border-light": "rgb(0 0 0 / 0.08)",
      },
      ringOffsetColor: {
        border: "rgb(0 0 0 / 0.16)",
        "border-light": "rgb(0 0 0 / 0.08)",
      },
    },
  },

  /** Plugins **/
  plugins: [],
};
