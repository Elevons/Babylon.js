import { useEffect, useRef } from "react";
import "@babylonjs/core/Loading/loadingScreen";
import "@babylonjs/loaders/glTF";
import * as BABYLON from "@babylonjs/core";
import * as GUI from "@babylonjs/gui";
import "./App.css";

// Import the GUI editor dynamically to avoid TypeScript declaration issues
const loadGUIEditor = async () => {
    const module = await import("@babylonjs/gui-editor/dist/babylon.guiEditor");
    return module.GUIEditor;
};

function App() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Initialize the GUI editor
        loadGUIEditor().then((GUIEditor) => {
            GUIEditor.Show({
                hostElement: containerRef.current,
            }).catch(console.error);
        });

        // The editor will clean itself up when the host element is removed
    }, []);

    return (
        <div ref={containerRef} style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#2a2a2a", color: "white" }}>
            <h1>BabylonJS GUI Editor</h1>
            <p>Loading...</p>
        </div>
    );
}

export default App;
