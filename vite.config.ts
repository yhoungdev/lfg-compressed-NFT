import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vercel from 'vite-plugin-vercel';
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import { UserConfig } from 'vite'
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import daisyui from "daisyui"

export default defineConfig(({ command, mode }): UserConfig => ({
  plugins: [nodePolyfills(), react(), TanStackRouterVite(), vercel(), daisyui],
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
