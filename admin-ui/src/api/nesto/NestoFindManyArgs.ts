import { NestoWhereInput } from "./NestoWhereInput";
import { NestoOrderByInput } from "./NestoOrderByInput";

export type NestoFindManyArgs = {
  where?: NestoWhereInput;
  orderBy?: Array<NestoOrderByInput>;
  skip?: number;
  take?: number;
};
