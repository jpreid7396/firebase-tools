export const SERVER_FEATURES = ["firestore", "storage", "dataconnect", "auth", "crashlytics"] as const;
export type ServerFeature = (typeof SERVER_FEATURES)[number];
