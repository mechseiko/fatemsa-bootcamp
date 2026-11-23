// FILE: vite.config.js | Vite is the tool that runs and builds our React project. This plugin teaches it JSX.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({ plugins: [react()] });
