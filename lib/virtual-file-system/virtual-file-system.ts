import { VirtualFile } from "../file";
import { VirtualFolder } from "../folder";

export class VirtualFileSystem {
  private name: string;
  private content: Array<VirtualFolder | VirtualFile>;

  private constructor() {
    this.name = "root";
    this.content = [];
  }

  getName() {
    return this.name;
  }

  getContent() {
    return this.content;
  }

  createFolder(item: VirtualFolder) {
    this.content.push(item);
  }

  createFile(item: VirtualFile) {
    this.content.push(item);
  }

  static CreateRoot() {
    return new VirtualFileSystem();
  }
}
