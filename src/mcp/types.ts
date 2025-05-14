export const SERVER_FEATURES = [
  "firestore",
  "storage",
  "dataconnect",
  "auth",
  "crashlytics",
  "messaging",
] as const;
export type ServerFeature = (typeof SERVER_FEATURES)[number];
