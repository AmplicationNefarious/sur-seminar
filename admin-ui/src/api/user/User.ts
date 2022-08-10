export type User = {
  createdAt: Date;
  email: string;
  id: string;
  nameSurname: string | null;
  phoneNumber: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
