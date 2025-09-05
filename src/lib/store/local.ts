export enum LocalStorage {
  Theme = "theme",
  ProfileMode = "profileMode",
  ProfileTab = "profileTab"
}

export const THEMES: Theme[] = [
  { label: "2012", value: "2012" },
  { label: "2015", value: "2015"},
];

export const PROFILEMODE: ProfileMode[] = [
  { label: "Classic", value: "gramblue"},
  { label: "BlueSky", value: "bluesky"},
];

export const PROFILETAB: ProfileTab[] = [
  { label: "Media Grid", value: "media" },
  { label: "Post Feed", value: "#" },
];
