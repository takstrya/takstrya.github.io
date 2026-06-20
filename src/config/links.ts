export type SocialLink = {
  id: string;
  label: string;
  title: string;
  href?: string;
  underConstruction?: boolean;
  icon: string;
};

export const SITE = {
  name: "takstrya",
  tagline: "somewhere on the internet",
};

export const MARQUEE_TEXT =
  "welcome to my world /// miku is god /// thank you music /// overcoming my everyday /// ";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "spotify",
    label: "spotify",
    title: "listen",
    href: "https://open.spotify.com/artist/0YoNxRBCQpYe4adHHG9B27?si=jNTS3fzoQ62M2mO5M2rmIw",
    icon: "♫",
  },
  {
    id: "youtube",
    label: "youtube",
    title: "watch",
    href: "https://www.youtube.com/@takumisf/videos",
    icon: "▶",
  },
  {
    id: "bandcamp",
    label: "bandcamp",
    title: "buy / stream",
    underConstruction: true,
    icon: "◎",
  },
  {
    id: "discord",
    label: "discord",
    title: "chat",
    underConstruction: true,
    icon: "◇",
  },
  {
    id: "website",
    label: "profile site",
    title: "home",
    underConstruction: true,
    icon: "□",
  },
];
