import { Nesto as TNesto } from "../api/nesto/Nesto";

export const NESTO_TITLE_FIELD = "id";

export const NestoTitle = (record: TNesto): string => {
  return record.id || record.id;
};
