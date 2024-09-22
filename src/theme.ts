const BREAKPOINT = 768;

export const theme = {
  color: {
    white: "white",
    light: "#eee",
    dark: "#111",
    black: "black",
    positive: "#B1FFC7",
    negative: "#FFBFB1",
    slate: {
      "0": "black",
      "10": "#1B2135",
      "20": "#343A4E",
      "30": "#585D71",
      "80": "#F0F1F7",
      "90": "#F6F6F9",
      "100": "white",
    },
    gray: {
      "70": "#C3C5CF",
      "80": "#D3D3DC",
      "90": "#F0F1F7",
    },
  },
  spacing: {
    "0": 0,
    "4xs": "2px",
    "3xs": "4px",
    "2xs": "8px",
    xs: "12px",
    s: "16px",
    m: "20px",
    l: "24px",
    xl: "32px",
    "2xl": "48px",
  },
  font: {
    family: "Inter, sans-serif",
    size: {
      regular: "14px",
      small: "12px",
    },
    height: 1.5,
  },
  media: {
    mobileOnly: `(max-width: ${BREAKPOINT - 1}px)`,
    desktopOnly: `(min-width: ${BREAKPOINT}px)`,
  },
};
