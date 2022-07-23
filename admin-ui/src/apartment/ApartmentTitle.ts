import { Apartment as TApartment } from "../api/apartment/Apartment";

export const APARTMENT_TITLE_FIELD = "name";

export const ApartmentTitle = (record: TApartment): string => {
  return record.name || record.id;
};
