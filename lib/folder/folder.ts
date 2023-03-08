import { VirtualFile } from "../file";

export type IFolder = {
  name: string;
  content: Array<IFolder | VirtualFile>;
};
