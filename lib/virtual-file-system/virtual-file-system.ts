import { IFile } from "../file";
import { IFolder } from "../folder";

export class VirtualFileSystem {
  private name: string;
  private content: Array<IFolder | IFile>;

  constructor(root: IFolder) {
    this.name = root.name;
    this.content = root.content;
  }

  getName() {
    return this.name;
  }

  getContent() {
    return this.content;
  }

  static CreateRoot() {
    return new VirtualFileSystem({
      name: "root",
      content: [],
    });
  }
}
