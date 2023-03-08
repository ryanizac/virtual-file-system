import { VirtualFile } from "../file";

export class VirtualFolder {
  private static ExtensionMatcher = /\.([0-9a-z]+)(?:[\?#]|$)/i;

  name: string;
  extension: string | null;
  content: Array<VirtualFile | VirtualFolder>;

  constructor(args: VirtualFolder.Args) {
    const [name, extension] = this.extractName(args.name);

    this.name = name;
    this.extension = extension;
    this.content = args.content;
  }

  private extractExtension(filename: string): string | null {
    const matchResult = filename.match(VirtualFolder.ExtensionMatcher);
    const firstMatchResult = matchResult && matchResult[0];
    const extension = firstMatchResult || null;
    return extension;
  }

  private extractName(filename: string): [string, string | null] {
    const extension = this.extractExtension(filename);
    const name = filename.replace(extension || "", "");

    return [name, extension];
  }
}

export namespace VirtualFolder {
  export type Args = {
    name: string;
    content: Array<VirtualFile | VirtualFile>;
  };
}
