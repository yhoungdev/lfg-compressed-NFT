import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vercel from 'vite-plugin-vercel';
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import { UserConfig } from 'vite'
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

export default defineConfig(({ command, mode }): UserConfig => ({
  plugins: [nodePolyfills(), react(), TanStackRouterVite(), vercel()],
  esbuild: {
    loader: 'tsx',
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url))
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.ts': 'tsx',
        '.js': 'jsx',
      },
    },
  },
}))
