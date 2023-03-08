import { VirtualFile } from "../file";
import { IFolder } from "../folder";

export class VirtualFileSystem {
  private name: string;
  private content: Array<IFolder | VirtualFile>;

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

  createFolder(item: IFolder) {
    this.content.push(item);
  }

  createFile(item: VirtualFile) {
    this.content.push(item);
  }

  static CreateRoot() {
    return new VirtualFileSystem({
      name: "root",
      content: [],
    });
  }
}
