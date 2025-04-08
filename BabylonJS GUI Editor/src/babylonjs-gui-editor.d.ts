declare module "@babylonjs/gui-editor" {
    export interface IGUIEditorOptions {
        hostElement?: HTMLElement;
        customLoad?: { label: string; action: (data: string) => Promise<string> };
        customSave?: { label: string; action: (data: string) => Promise<string> };
        currentSnippetToken?: string;
        embed?: boolean;
    }

    export class GUIEditor {
        static Show(options: IGUIEditorOptions, embed?: boolean): Promise<void>;
    }
}
