// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///home/whoami/Desktop/solana-projects/s8-cnft/node_modules/.pnpm/vite@5.3.5_@types+node@16.18.11_terser@5.31.3/node_modules/vite/dist/node/index.js";
import react from "file:///home/whoami/Desktop/solana-projects/s8-cnft/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_@swc+helpers@0.5.12_vite@5.3.5_@types+node@16.18.11_terser@5.31.3_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import vercel from "file:///home/whoami/Desktop/solana-projects/s8-cnft/node_modules/.pnpm/vite-plugin-vercel@5.0.5_vite@5.3.5_@types+node@16.18.11_terser@5.31.3_/node_modules/vite-plugin-vercel/dist/index.js";
import nodePolyfills from "file:///home/whoami/Desktop/solana-projects/s8-cnft/node_modules/.pnpm/vite-plugin-node-stdlib-browser@0.2.1_node-stdlib-browser@1.2.0_rollup@4.19.0_vite@5.3.5_@typ_x2jbp52sfom56rgsiy7h5b5teq/node_modules/vite-plugin-node-stdlib-browser/index.cjs";
import { TanStackRouterVite } from "file:///home/whoami/Desktop/solana-projects/s8-cnft/node_modules/.pnpm/@tanstack+router-vite-plugin@1.45.8_vite@5.3.5_@types+node@16.18.11_terser@5.31.3_/node_modules/@tanstack/router-vite-plugin/dist/esm/index.js";
var __vite_injected_original_import_meta_url = "file:///home/whoami/Desktop/solana-projects/s8-cnft/vite.config.ts";
var vite_config_default = defineConfig(({ command, mode }) => ({
  plugins: [nodePolyfills(), react(), TanStackRouterVite(), vercel()],
  esbuild: {
    loader: "tsx"
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", __vite_injected_original_import_meta_url))
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".ts": "tsx",
        ".js": "jsx"
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS93aG9hbWkvRGVza3RvcC9zb2xhbmEtcHJvamVjdHMvczgtY25mdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvd2hvYW1pL0Rlc2t0b3Avc29sYW5hLXByb2plY3RzL3M4LWNuZnQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvd2hvYW1pL0Rlc2t0b3Avc29sYW5hLXByb2plY3RzL3M4LWNuZnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHZlcmNlbCBmcm9tICd2aXRlLXBsdWdpbi12ZXJjZWwnO1xuaW1wb3J0IG5vZGVQb2x5ZmlsbHMgZnJvbSAndml0ZS1wbHVnaW4tbm9kZS1zdGRsaWItYnJvd3NlcidcbmltcG9ydCB7IFVzZXJDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgVGFuU3RhY2tSb3V0ZXJWaXRlIH0gZnJvbSBcIkB0YW5zdGFjay9yb3V0ZXItdml0ZS1wbHVnaW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSk6IFVzZXJDb25maWcgPT4gKHtcbiAgcGx1Z2luczogW25vZGVQb2x5ZmlsbHMoKSwgcmVhY3QoKSwgVGFuU3RhY2tSb3V0ZXJWaXRlKCksIHZlcmNlbCgpXSxcbiAgZXNidWlsZDoge1xuICAgIGxvYWRlcjogJ3RzeCcsXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vXCIsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgbG9hZGVyOiB7XG4gICAgICAgICcudHMnOiAndHN4JyxcbiAgICAgICAgJy5qcyc6ICdqc3gnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkpXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNULFNBQVMsZUFBZSxXQUFXO0FBQ3pWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxtQkFBbUI7QUFFMUIsU0FBUywwQkFBMEI7QUFONkosSUFBTSwyQ0FBMkM7QUFRalAsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssT0FBbUI7QUFBQSxFQUM5RCxTQUFTLENBQUMsY0FBYyxHQUFHLE1BQU0sR0FBRyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7QUFBQSxFQUNsRSxTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxNQUFNLHdDQUFlLENBQUM7QUFBQSxJQUNuRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
