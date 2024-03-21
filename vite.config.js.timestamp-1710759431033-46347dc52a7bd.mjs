// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///F:/Front-end%20learning/vue/Vue-chat/vuechat/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/Front-end%20learning/vue/Vue-chat/vuechat/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { createSvgIconsPlugin } from "file:///F:/Front-end%20learning/vue/Vue-chat/vuechat/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///F:/Front-end%20learning/vue/Vue-chat/vuechat/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    //svg
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/source/svg")],
      //svg图片存放的目录
      symbolId: "icon-[name]",
      // symbol的id
      inject: "body-last",
      // 插入的位置
      customDomId: "__svg__icons__dom__"
      // svg的id
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxGcm9udC1lbmQgbGVhcm5pbmdcXFxcdnVlXFxcXFZ1ZS1jaGF0XFxcXHZ1ZWNoYXRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEZyb250LWVuZCBsZWFybmluZ1xcXFx2dWVcXFxcVnVlLWNoYXRcXFxcdnVlY2hhdFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovRnJvbnQtZW5kJTIwbGVhcm5pbmcvdnVlL1Z1ZS1jaGF0L3Z1ZWNoYXQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuLy9zdmdcbi8vXHU1RjE1XHU1MTY1cGF0aFx1NzUyOFx1NEU4RVx1NTE5OVx1NTIyQlx1NTQwRFx1OTE0RFx1N0Y2RSxcdTgxRUFcdTVFMjZcdTY1RTBcdTk4N0JcdTVCODlcdTg4QzVcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG4vL1x1NEY3Rlx1NzUyOHN2Zy1pY29uc1x1NjNEMlx1NEVGNlxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG5cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICAvL3N2Z1xuICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIFwic3JjL2Fzc2V0cy9zb3VyY2Uvc3ZnXCIpXSwgLy9zdmdcdTU2RkVcdTcyNDdcdTVCNThcdTY1M0VcdTc2ODRcdTc2RUVcdTVGNTVcbiAgICAgIHN5bWJvbElkOiBcImljb24tW25hbWVdXCIsIC8vIHN5bWJvbFx1NzY4NGlkXG4gICAgICBpbmplY3Q6IFwiYm9keS1sYXN0XCIsIC8vIFx1NjNEMlx1NTE2NVx1NzY4NFx1NEY0RFx1N0Y2RVxuICAgICAgY3VzdG9tRG9tSWQ6IFwiX19zdmdfX2ljb25zX19kb21fX1wiIC8vIHN2Z1x1NzY4NGlkXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsU0FBUyxlQUFlLFdBQVc7QUFFL1YsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBR2hCLE9BQU8sVUFBVTtBQUVqQixTQUFTLDRCQUE0QjtBQVJnSyxJQUFNLDJDQUEyQztBQVl0UCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUE7QUFBQSxJQUVKLHFCQUFxQjtBQUFBLE1BQ25CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsdUJBQXVCLENBQUM7QUFBQTtBQUFBLE1BQy9ELFVBQVU7QUFBQTtBQUFBLE1BQ1YsUUFBUTtBQUFBO0FBQUEsTUFDUixhQUFhO0FBQUE7QUFBQSxJQUNmLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
