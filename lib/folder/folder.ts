import { IFile } from "../file";

export type IFolder = {
  name: string;
  content: Array<IFolder | IFile>;
};
