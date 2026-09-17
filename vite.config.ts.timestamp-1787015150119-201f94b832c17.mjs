// vite.config.ts
import path4 from "node:path";
import process4 from "node:process";
import Uni from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/@uni-helper+plugin-uni@0.1._fe03c02a1160deabfb3d9f02af170b74/node_modules/@uni-helper/plugin-uni/src/index.js";
import { isMpWeixin } from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/@uni-helper+uni-env@0.1.8/node_modules/@uni-helper/uni-env/dist/index.mjs";
import UniComponents from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/@uni-helper+vite-plugin-uni-components@0.2.3_rollup@4.50.0/node_modules/@uni-helper/vite-plugin-uni-components/dist/index.mjs";
import UniLayouts from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/@uni-helper+vite-plugin-uni-layouts@0.1.11_rollup@4.50.0/node_modules/@uni-helper/vite-plugin-uni-layouts/dist/index.mjs";
import UniManifest from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/@uni-helper+vite-plugin-uni_b7102077f951b1fa858da63d5b249eff/node_modules/@uni-helper/vite-plugin-uni-manifest/dist/index.mjs";
import UniPages from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/@uni-helper+vite-plugin-uni_cd9ba3e492c24fc35093810ecb91b5e8/node_modules/@uni-helper/vite-plugin-uni-pages/dist/index.mjs";
import UniPlatform from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/@uni-helper+vite-plugin-uni-platform@0.0.5/node_modules/@uni-helper/vite-plugin-uni-platform/dist/index.mjs";
import UniOptimization from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/@uni-ku+bundle-optimizer@1._29287b8402e2986acd9ba4043cc3e4ff/node_modules/@uni-ku/bundle-optimizer/dist/index.mjs";
import UniKuRoot from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/@uni-ku+root@1.4.1_vite@5.2_c98d1e71c3e60fdb9cb7ea5871768afd/node_modules/@uni-ku/root/dist/index.mjs";
import dayjs from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js";
import { visualizer } from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/rollup-plugin-visualizer@6.0.3_rollup@4.50.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import UnoCSS from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/unocss@66.0.0_postcss@8.5.6_af9bf1e4400dcfd6fd9128b4178fe385/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/unplugin-auto-import@20.1.0/node_modules/unplugin-auto-import/dist/vite.js";
import { defineConfig, loadEnv } from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/vite@5.2.8_@types+node@20.1_bef83caec11c45248f87cbd2a57274e5/node_modules/vite/dist/node/index.js";
import ViteRestart from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/vite-plugin-restart@1.0.0_v_83e9d72230742d2bf7be141d7e414c62/node_modules/vite-plugin-restart/dist/index.js";

// scripts/open-dev-tools.js
import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
function _openDevTools(env = "dev", options = {}) {
  const { wechatDevtoolsCliPath } = options;
  const platform = process.platform;
  const { UNI_PLATFORM } = process.env;
  const uniPlatformText = UNI_PLATFORM === "mp-weixin" ? "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F" : UNI_PLATFORM === "mp-alipay" ? "\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F" : UNI_PLATFORM === "mp-lark" ? "\u6296\u97F3\u5C0F\u7A0B\u5E8F" : "\u5C0F\u7A0B\u5E8F";
  const outputDir = env === "build" ? `dist/build/${UNI_PLATFORM}` : `dist/dev/${UNI_PLATFORM}`;
  const projectPath = path.resolve(process.cwd(), outputDir);
  if (!fs.existsSync(projectPath)) {
    console.log(`\u274C ${uniPlatformText}\u6784\u5EFA\u76EE\u5F55\u4E0D\u5B58\u5728:`, projectPath);
    return;
  }
  console.log(`\u{1F680} \u6B63\u5728\u6253\u5F00${uniPlatformText}\u5F00\u53D1\u8005\u5DE5\u5177...`);
  let command = "";
  if (platform === "darwin") {
    if (UNI_PLATFORM === "mp-weixin") {
      const cliPath = wechatDevtoolsCliPath || "/Applications/wechatwebdevtools.app/Contents/MacOS/cli";
      command = `"${cliPath}" -o "${projectPath}"`;
    } else if (UNI_PLATFORM === "mp-alipay") {
      command = `/Applications/\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u5DE5\u5177.app/Contents/MacOS/\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u5DE5\u5177 --p "${projectPath}"`;
    } else if (UNI_PLATFORM === "mp-lark") {
      command = `/Applications/\u6296\u97F3\u5F00\u53D1\u8005\u5DE5\u5177.app/Contents/MacOS/\u6296\u97F3\u5F00\u53D1\u8005\u5DE5\u5177 --p "${projectPath}"`;
    }
  } else if (platform === "win32" || platform === "win64") {
    if (UNI_PLATFORM === "mp-weixin") {
      const cliPath = wechatDevtoolsCliPath || "C:\\Program Files (x86)\\Tencent\\\u5FAE\u4FE1web\u5F00\u53D1\u8005\u5DE5\u5177\\cli.bat";
      command = `"${cliPath}" -o "${projectPath}"`;
    }
  } else {
    console.log("\u274C \u5F53\u524D\u7CFB\u7EDF\u4E0D\u652F\u6301\u81EA\u52A8\u6253\u5F00\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177");
    return;
  }
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`\u274C \u6253\u5F00${uniPlatformText}\u5F00\u53D1\u8005\u5DE5\u5177\u5931\u8D25:`, error.message);
      if (UNI_PLATFORM === "mp-weixin") {
        console.log("\u{1F4A1} \u5F53\u524D\u4F7F\u7528\u7684\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177 CLI \u547D\u4EE4:", command);
        console.log("\u{1F4A1} \u5982\u679C\u5B89\u88C5\u4F4D\u7F6E\u4E0D\u540C\uFF0C\u53EF\u4EE5\u5728 env/.env \u914D\u7F6E WECHAT_DEVTOOLS_CLI_PATH \u4E3A\u672C\u673A\u5B9E\u9645 CLI \u8DEF\u5F84");
      }
      console.log(`\u{1F4A1} \u8BF7\u786E\u4FDD${uniPlatformText}\u5F00\u53D1\u8005\u5DE5\u5177\u670D\u52A1\u7AEF\u53E3\u5DF2\u542F\u7528`);
      console.log(`\u{1F4A1} \u53EF\u4EE5\u624B\u52A8\u6253\u5F00${uniPlatformText}\u5F00\u53D1\u8005\u5DE5\u5177\u5E76\u5BFC\u5165\u9879\u76EE:`, projectPath);
      return;
    }
    if (stderr) {
      console.log("\u26A0\uFE0F \u8B66\u544A:", stderr);
    }
    console.log(`\u2705 ${uniPlatformText}\u5F00\u53D1\u8005\u5DE5\u5177\u5DF2\u6253\u5F00`);
    if (stdout) {
      console.log(stdout);
    }
  });
}
function openDevTools(options = {}) {
  const { mode = "development", wechatDevtoolsCliPath } = options;
  const env = mode === "production" ? "build" : "dev";
  let isFirstBuild = true;
  return {
    name: "uni-devtools",
    writeBundle() {
      if (isFirstBuild && process.env.UNI_PLATFORM?.includes("mp")) {
        isFirstBuild = false;
        _openDevTools(env, { wechatDevtoolsCliPath });
      }
    }
  };
}

// scripts/vite-plugin-eruda.js
function vitePluginEruda(options = {}) {
  const { open = true, erudaOptions = {}, erudaUrl = "https://cdn.jsdelivr.net/npm/eruda" } = options;
  return {
    name: "vite-plugin-eruda",
    transformIndexHtml(html) {
      const tags = [
        {
          tag: "script",
          attrs: {
            src: erudaUrl
          },
          injectTo: "head"
        },
        {
          tag: "script",
          children: `eruda.init(${JSON.stringify(erudaOptions)});`,
          injectTo: "head"
        }
      ];
      if (!open) {
        return html;
      }
      return { html, tags };
    }
  };
}

// vite-plugins/copy-native-resources.ts
import path2 from "node:path";
import process2 from "node:process";
import fs2 from "file:///D:/ALL/code/VsCode/ETP/node_modules/.pnpm/fs-extra@7.0.1/node_modules/fs-extra/lib/index.js";
var DEFAULT_OPTIONS = {
  enable: true,
  sourceDir: "nativeplugins",
  targetDirName: "nativeplugins",
  verbose: true,
  logPrefix: "[copy-native-resources]"
};
function copyNativeResources(options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  if (!config.enable) {
    return {
      name: "copy-native-resources-disabled",
      apply: "build",
      writeBundle() {
      }
    };
  }
  return {
    name: "copy-native-resources",
    apply: "build",
    // 只在构建时应用
    enforce: "post",
    // 在其他插件执行完毕后执行
    async writeBundle() {
      const { sourceDir, targetDirName, verbose, logPrefix } = config;
      try {
        const projectRoot = process2.cwd();
        const sourcePath = path2.resolve(projectRoot, sourceDir);
        const buildMode = process2.env.NODE_ENV === "production" ? "build" : "dev";
        const platform = process2.env.UNI_PLATFORM || "app";
        const targetPath = path2.resolve(
          projectRoot,
          "dist",
          buildMode,
          platform,
          targetDirName
        );
        const sourceExists = await fs2.pathExists(sourcePath);
        if (!sourceExists) {
          if (verbose) {
            console.warn(`${logPrefix} \u6E90\u76EE\u5F55\u4E0D\u5B58\u5728\uFF0C\u8DF3\u8FC7\u590D\u5236\u64CD\u4F5C`);
            console.warn(`${logPrefix} \u6E90\u76EE\u5F55\u8DEF\u5F84: ${sourcePath}`);
            console.warn(`${logPrefix} \u5982\u9700\u4F7F\u7528\u672C\u5730\u539F\u751F\u63D2\u4EF6\uFF0C\u8BF7\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA nativeplugins \u76EE\u5F55`);
            console.warn(`${logPrefix} \u5E76\u6309\u7167\u5B98\u65B9\u6587\u6863\u653E\u5165\u539F\u751F\u63D2\u4EF6\u6587\u4EF6`);
            console.warn(`${logPrefix} \u53C2\u8003: https://uniapp.dcloud.net.cn/plugin/native-plugin.html`);
          }
          return;
        }
        const sourceFiles = await fs2.readdir(sourcePath);
        if (sourceFiles.length === 0) {
          if (verbose) {
            console.warn(`${logPrefix} \u6E90\u76EE\u5F55\u4E3A\u7A7A\uFF0C\u8DF3\u8FC7\u590D\u5236\u64CD\u4F5C`);
            console.warn(`${logPrefix} \u6E90\u76EE\u5F55\u8DEF\u5F84: ${sourcePath}`);
            console.warn(`${logPrefix} \u8BF7\u5728 nativeplugins \u76EE\u5F55\u4E2D\u653E\u5165\u539F\u751F\u63D2\u4EF6\u6587\u4EF6`);
          }
          return;
        }
        await fs2.ensureDir(targetPath);
        if (verbose) {
          console.log(`${logPrefix} \u5F00\u59CB\u590D\u5236 UniApp \u672C\u5730\u539F\u751F\u63D2\u4EF6...`);
          console.log(`${logPrefix} \u6E90\u76EE\u5F55: ${sourcePath}`);
          console.log(`${logPrefix} \u76EE\u6807\u76EE\u5F55: ${targetPath}`);
          console.log(`${logPrefix} \u6784\u5EFA\u6A21\u5F0F: ${buildMode}`);
          console.log(`${logPrefix} \u76EE\u6807\u5E73\u53F0: ${platform}`);
          console.log(`${logPrefix} \u53D1\u73B0 ${sourceFiles.length} \u4E2A\u539F\u751F\u63D2\u4EF6\u6587\u4EF6/\u76EE\u5F55`);
        }
        await fs2.copy(sourcePath, targetPath, {
          overwrite: true,
          // 覆盖已存在的文件，确保使用最新版本
          errorOnExist: false,
          // 如果目标文件存在不报错
          preserveTimestamps: true
          // 保持文件的时间戳
        });
        console.log(`${logPrefix} \u2705 UniApp \u672C\u5730\u539F\u751F\u63D2\u4EF6\u590D\u5236\u5B8C\u6210: ${sourcePath} -> ${targetPath}`);
        console.log(`${logPrefix} \u5DF2\u6210\u529F\u590D\u5236 ${sourceFiles.length} \u4E2A\u6587\u4EF6/\u76EE\u5F55\u5230\u6784\u5EFA\u76EE\u5F55`);
      } catch (error) {
        console.error(`${config.logPrefix} \u274C \u590D\u5236 UniApp \u672C\u5730\u539F\u751F\u63D2\u4EF6\u5931\u8D25:`, error);
        console.error(`${config.logPrefix} \u9519\u8BEF\u8BE6\u60C5:`, error instanceof Error ? error.message : String(error));
        console.error(`${config.logPrefix} \u8BF7\u68C0\u67E5\u6E90\u76EE\u5F55\u6743\u9650\u548C\u78C1\u76D8\u7A7A\u95F4`);
      }
    }
  };
}
function createCopyNativeResourcesPlugin(enable = true, options = {}) {
  return copyNativeResources({ enable, ...options });
}

// vite-plugins/sync-manifest-plugins.ts
import fs3 from "node:fs";
import path3 from "node:path";
import process3 from "node:process";
function syncManifestPlugin() {
  return {
    name: "sync-manifest",
    apply: "build",
    enforce: "post",
    writeBundle: {
      order: "post",
      handler() {
        const srcManifestPath = path3.resolve(process3.cwd(), "./src/manifest.json");
        const distAppPath = path3.resolve(process3.cwd(), "./dist/dev/app/manifest.json");
        try {
          const srcManifest = JSON.parse(fs3.readFileSync(srcManifestPath, "utf8"));
          const distAppDir = path3.dirname(distAppPath);
          if (!fs3.existsSync(distAppDir)) {
            fs3.mkdirSync(distAppDir, { recursive: true });
          }
          let distManifest = {};
          if (fs3.existsSync(distAppPath)) {
            distManifest = JSON.parse(fs3.readFileSync(distAppPath, "utf8"));
          }
          if (srcManifest["app-plus"]?.distribute?.plugins) {
            if (!distManifest.plus)
              distManifest.plus = {};
            if (!distManifest.plus.distribute)
              distManifest.plus.distribute = {};
            distManifest.plus.distribute.plugins = srcManifest["app-plus"].distribute.plugins;
            fs3.writeFileSync(distAppPath, JSON.stringify(distManifest, null, 2));
            console.log("\u2705 Manifest plugins \u540C\u6B65\u6210\u529F");
          }
        } catch (error) {
          console.error("\u274C \u540C\u6B65 manifest plugins \u5931\u8D25:", error);
        }
      }
    }
  };
}

// vite.config.ts
var vite_config_default = defineConfig(({ command, mode }) => {
  console.log("command, mode -> ", command, mode);
  const { UNI_PLATFORM, SKIP_OPEN_DEVTOOLS } = process4.env;
  console.log("UNI_PLATFORM -> ", UNI_PLATFORM);
  const envDir = path4.resolve(process4.cwd(), "env");
  const env = loadEnv(mode, envDir);
  const localEnv = loadEnv(mode, envDir, "");
  const {
    VITE_APP_PORT,
    VITE_SERVER_BASEURL,
    VITE_APP_TITLE,
    VITE_DELETE_CONSOLE,
    VITE_APP_PUBLIC_BASE,
    VITE_APP_PROXY_ENABLE,
    VITE_APP_PROXY_PREFIX,
    VITE_COPY_NATIVE_RES_ENABLE
  } = env;
  const { WECHAT_DEVTOOLS_CLI_PATH } = localEnv;
  console.log("\u73AF\u5883\u53D8\u91CF env -> ", env);
  return defineConfig({
    envDir: "./env",
    // 自定义env目录
    base: VITE_APP_PUBLIC_BASE,
    plugins: [
      // UniXXX 需要在 Uni 之前引入
      UniLayouts(),
      UniPlatform(),
      UniManifest(),
      UniComponents({
        extensions: ["vue"],
        deep: true,
        // 是否递归扫描子目录，
        directoryAsNamespace: false,
        // 是否把目录名作为命名空间前缀，true 时组件名为 目录名+组件名，
        dts: "src/types/components.d.ts"
        // 自动生成的组件类型声明文件路径（用于 TypeScript 支持）
      }),
      UniPages({
        exclude: ["**/components/**/**.*", "**/sections/**/**.*"],
        // pages 目录为 src/pages，分包目录不能配置在pages目录下！！
        // 是个数组，可以配置多个，但是不能为pages里面的目录！！
        // "src/pages-demo" 是unibest demo 预留的，方便后续插入demo示例
        subPackages: ["src/pages-demo"],
        dts: "src/types/uni-pages.d.ts"
      }),
      // UniOptimization 插件需要 page.json 文件，故应在 UniPages 插件之后执行
      UniOptimization({
        enable: isMpWeixin,
        dts: {
          base: "src/types"
        },
        logger: false
      }),
      // 若存在改变 pages.json 的插件，请将 UniKuRoot 放置其后
      UniKuRoot({
        excludePages: ["**/components/**/**.*", "**/sections/**/**.*"]
      }),
      Uni(),
      {
        // 临时解决 dcloudio 官方的 @dcloudio/uni-mp-compiler 出现的编译 BUG
        // 参考 github issue: https://github.com/dcloudio/uni-app/issues/4952
        // 自定义插件禁用 vite:vue 插件的 devToolsEnabled，强制编译 vue 模板时 inline 为 true
        name: "fix-vite-plugin-vue",
        configResolved(config) {
          const plugin = config.plugins.find((p) => p.name === "vite:vue");
          if (plugin && plugin.api && plugin.api.options) {
            plugin.api.options.devToolsEnabled = false;
          }
        }
      },
      UnoCSS(),
      AutoImport({
        imports: ["vue", "uni-app"],
        dts: "src/types/auto-import.d.ts",
        dirs: ["src/hooks"],
        // 自动导入 hooks
        vueTemplate: true
        // default false
      }),
      ViteRestart({
        // 通过这个插件，在修改vite.config.js文件则不需要重新运行也生效配置
        restart: ["vite.config.js"]
      }),
      // h5环境增加 BUILD_TIME 和 BUILD_BRANCH
      UNI_PLATFORM === "h5" && {
        name: "html-transform",
        transformIndexHtml(html) {
          return html.replace("%BUILD_TIME%", dayjs().format("YYYY-MM-DD HH:mm:ss")).replace("%VITE_APP_TITLE%", VITE_APP_TITLE);
        }
      },
      // 打包分析插件，h5 + 生产环境才弹出
      UNI_PLATFORM === "h5" && mode === "production" && visualizer({
        filename: "./node_modules/.cache/visualizer/stats.html",
        open: true,
        gzipSize: true,
        brotliSize: true
      }),
      // 原生插件资源复制插件 - 仅在 app 平台且启用时生效
      createCopyNativeResourcesPlugin(
        UNI_PLATFORM === "app" && VITE_COPY_NATIVE_RES_ENABLE === "true",
        {
          verbose: mode === "development"
          // 开发模式显示详细日志
        }
      ),
      syncManifestPlugin(),
      vitePluginEruda({
        open: UNI_PLATFORM === "h5" && mode === "development"
      }),
      // 自动打开开发者工具插件 (必须修改 .env 文件中的 VITE_WX_APPID)
      // 上传时通过 SKIP_OPEN_DEVTOOLS=true 跳过
      SKIP_OPEN_DEVTOOLS !== "true" && openDevTools({
        mode,
        wechatDevtoolsCliPath: WECHAT_DEVTOOLS_CLI_PATH
      })
    ],
    define: {
      __VITE_APP_PROXY__: JSON.stringify(VITE_APP_PROXY_ENABLE)
    },
    css: {
      postcss: {
        plugins: [
          // autoprefixer({
          //   // 指定目标浏览器
          //   overrideBrowserslist: ['> 1%', 'last 2 versions'],
          // }),
        ]
      }
    },
    resolve: {
      alias: {
        "@": path4.join(process4.cwd(), "./src"),
        "@img": path4.join(process4.cwd(), "./src/static/images")
      }
    },
    server: {
      host: "0.0.0.0",
      hmr: true,
      port: Number.parseInt(VITE_APP_PORT, 10),
      // 仅 H5 端生效，其他端不生效（其他端走build，不走devServer)
      proxy: JSON.parse(VITE_APP_PROXY_ENABLE) ? {
        [VITE_APP_PROXY_PREFIX]: {
          target: VITE_SERVER_BASEURL,
          changeOrigin: true,
          // 后端有/api前缀则不做处理，没有则需要去掉
          rewrite: (path5) => path5.replace(new RegExp(`^${VITE_APP_PROXY_PREFIX}`), "")
        }
      } : void 0
    },
    esbuild: {
      drop: VITE_DELETE_CONSOLE === "true" ? ["console", "debugger"] : []
    },
    build: {
      sourcemap: false,
      // 方便非h5端调试
      // sourcemap: VITE_SHOW_SOURCEMAP === 'true', // 默认是false
      target: "es6",
      // 开发环境不用压缩
      minify: mode === "development" ? false : "esbuild"
    }
  });
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy9vcGVuLWRldi10b29scy5qcyIsICJzY3JpcHRzL3ZpdGUtcGx1Z2luLWVydWRhLmpzIiwgInZpdGUtcGx1Z2lucy9jb3B5LW5hdGl2ZS1yZXNvdXJjZXMudHMiLCAidml0ZS1wbHVnaW5zL3N5bmMtbWFuaWZlc3QtcGx1Z2lucy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXEFMTFxcXFxjb2RlXFxcXFZzQ29kZVxcXFxFVFBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEFMTFxcXFxjb2RlXFxcXFZzQ29kZVxcXFxFVFBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0FMTC9jb2RlL1ZzQ29kZS9FVFAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2VzcydcclxuaW1wb3J0IFVuaSBmcm9tICdAdW5pLWhlbHBlci9wbHVnaW4tdW5pJ1xyXG5pbXBvcnQgeyBpc01wV2VpeGluIH0gZnJvbSAnQHVuaS1oZWxwZXIvdW5pLWVudidcclxuaW1wb3J0IFVuaUNvbXBvbmVudHMgZnJvbSAnQHVuaS1oZWxwZXIvdml0ZS1wbHVnaW4tdW5pLWNvbXBvbmVudHMnXHJcbi8vIEBzZWUgaHR0cHM6Ly91bmktaGVscGVyLmpzLm9yZy92aXRlLXBsdWdpbi11bmktbGF5b3V0c1xyXG5pbXBvcnQgVW5pTGF5b3V0cyBmcm9tICdAdW5pLWhlbHBlci92aXRlLXBsdWdpbi11bmktbGF5b3V0cydcclxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdW5pLWhlbHBlci92aXRlLXBsdWdpbi11bmktbWFuaWZlc3RcclxuaW1wb3J0IFVuaU1hbmlmZXN0IGZyb20gJ0B1bmktaGVscGVyL3ZpdGUtcGx1Z2luLXVuaS1tYW5pZmVzdCdcclxuLy8gQHNlZSBodHRwczovL3VuaS1oZWxwZXIuanMub3JnL3ZpdGUtcGx1Z2luLXVuaS1wYWdlc1xyXG5pbXBvcnQgVW5pUGFnZXMgZnJvbSAnQHVuaS1oZWxwZXIvdml0ZS1wbHVnaW4tdW5pLXBhZ2VzJ1xyXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91bmktaGVscGVyL3ZpdGUtcGx1Z2luLXVuaS1wbGF0Zm9ybVxyXG4vLyBcdTk3MDBcdTg5ODFcdTRFMEUgQHVuaS1oZWxwZXIvdml0ZS1wbHVnaW4tdW5pLXBhZ2VzIFx1NjNEMlx1NEVGNlx1NEUwMFx1OEQ3N1x1NEY3Rlx1NzUyOFxyXG5pbXBvcnQgVW5pUGxhdGZvcm0gZnJvbSAnQHVuaS1oZWxwZXIvdml0ZS1wbHVnaW4tdW5pLXBsYXRmb3JtJ1xyXG5cclxuLyoqXHJcbiAqIFx1NTIwNlx1NTMwNVx1NEYxOFx1NTMxNlx1MzAwMVx1NkEyMVx1NTc1N1x1NUYwMlx1NkI2NVx1OERFOFx1NTMwNVx1OEMwM1x1NzUyOFx1MzAwMVx1N0VDNFx1NEVGNlx1NUYwMlx1NkI2NVx1OERFOFx1NTMwNVx1NUYxNVx1NzUyOFxyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91bmkta3UvYnVuZGxlLW9wdGltaXplclxyXG4gKi9cclxuaW1wb3J0IFVuaU9wdGltaXphdGlvbiBmcm9tICdAdW5pLWt1L2J1bmRsZS1vcHRpbWl6ZXInXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bmkta3Uvcm9vdFxyXG5pbXBvcnQgVW5pS3VSb290IGZyb20gJ0B1bmkta3Uvcm9vdCdcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xyXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgVml0ZVJlc3RhcnQgZnJvbSAndml0ZS1wbHVnaW4tcmVzdGFydCdcclxuaW1wb3J0IG9wZW5EZXZUb29scyBmcm9tICcuL3NjcmlwdHMvb3Blbi1kZXYtdG9vbHMnXHJcbmltcG9ydCB2aXRlUGx1Z2luRXJ1ZGEgZnJvbSAnLi9zY3JpcHRzL3ZpdGUtcGx1Z2luLWVydWRhJ1xyXG5pbXBvcnQgeyBjcmVhdGVDb3B5TmF0aXZlUmVzb3VyY2VzUGx1Z2luIH0gZnJvbSAnLi92aXRlLXBsdWdpbnMvY29weS1uYXRpdmUtcmVzb3VyY2VzJ1xyXG5pbXBvcnQgc3luY01hbmlmZXN0UGx1Z2luIGZyb20gJy4vdml0ZS1wbHVnaW5zL3N5bmMtbWFuaWZlc3QtcGx1Z2lucydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcclxuICAvLyBAc2VlIGh0dHBzOi8vdW5vY3NzLmRldi9cclxuICAvLyBjb25zdCBVbm9DU1MgPSAoYXdhaXQgaW1wb3J0KCd1bm9jc3Mvdml0ZScpKS5kZWZhdWx0XHJcbiAgLy8gY29uc29sZS5sb2cobW9kZSA9PT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIC8vIHRydWVcclxuXHJcbiAgLy8gbW9kZTogXHU1MzNBXHU1MjA2XHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU4RkQ4XHU2NjJGXHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHJcbiAgY29uc29sZS5sb2coJ2NvbW1hbmQsIG1vZGUgLT4gJywgY29tbWFuZCwgbW9kZSlcclxuICAvLyBwbnBtIGRldjpoNSBcdTY1RjZcdTVGOTdcdTUyMzAgPT4gc2VydmUgZGV2ZWxvcG1lbnRcclxuICAvLyBwbnBtIGJ1aWxkOmg1IFx1NjVGNlx1NUY5N1x1NTIzMCA9PiBidWlsZCBwcm9kdWN0aW9uXHJcbiAgLy8gcG5wbSBkZXY6bXAtd2VpeGluIFx1NjVGNlx1NUY5N1x1NTIzMCA9PiBidWlsZCBkZXZlbG9wbWVudCAoXHU2Q0U4XHU2MTBGXHU1MzNBXHU1MjJCXHVGRjBDY29tbWFuZFx1NEUzQWJ1aWxkKVxyXG4gIC8vIHBucG0gYnVpbGQ6bXAtd2VpeGluIFx1NjVGNlx1NUY5N1x1NTIzMCA9PiBidWlsZCBwcm9kdWN0aW9uXHJcbiAgLy8gcG5wbSBkZXY6YXBwIFx1NjVGNlx1NUY5N1x1NTIzMCA9PiBidWlsZCBkZXZlbG9wbWVudCAoXHU2Q0U4XHU2MTBGXHU1MzNBXHU1MjJCXHVGRjBDY29tbWFuZFx1NEUzQWJ1aWxkKVxyXG4gIC8vIHBucG0gYnVpbGQ6YXBwIFx1NjVGNlx1NUY5N1x1NTIzMCA9PiBidWlsZCBwcm9kdWN0aW9uXHJcbiAgLy8gZGV2IFx1NTQ4QyBidWlsZCBcdTU0N0RcdTRFRTRcdTUzRUZcdTRFRTVcdTUyMDZcdTUyMkJcdTRGN0ZcdTc1MjggLmVudi5kZXZlbG9wbWVudCBcdTU0OEMgLmVudi5wcm9kdWN0aW9uIFx1NzY4NFx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlxyXG4gIC8vIFx1OTc1RSBINSBcdTdBRUYgZGV2IFx1NEU1Rlx1NjYyRiBidWlsZCBjb21tYW5kXHVGRjBDXHU2NzAwXHU3RUM4XHU1MkEwXHU4RjdEXHU1NEVBXHU0RTJBIGVudiBcdTY1ODdcdTRFRjZcdTRFRTVcdTVCOUVcdTk2NDUgbW9kZSBcdTRFM0FcdTUxQzZcdTMwMDJcclxuXHJcbiAgY29uc3QgeyBVTklfUExBVEZPUk0sIFNLSVBfT1BFTl9ERVZUT09MUyB9ID0gcHJvY2Vzcy5lbnZcclxuICBjb25zb2xlLmxvZygnVU5JX1BMQVRGT1JNIC0+ICcsIFVOSV9QTEFURk9STSkgLy8gXHU1Rjk3XHU1MjMwIG1wLXdlaXhpbiwgaDUsIGFwcCBcdTdCNDlcclxuXHJcbiAgY29uc3QgZW52RGlyID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdlbnYnKVxyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgZW52RGlyKVxyXG4gIGNvbnN0IGxvY2FsRW52ID0gbG9hZEVudihtb2RlLCBlbnZEaXIsICcnKVxyXG4gIGNvbnN0IHtcclxuICAgIFZJVEVfQVBQX1BPUlQsXHJcbiAgICBWSVRFX1NFUlZFUl9CQVNFVVJMLFxyXG4gICAgVklURV9BUFBfVElUTEUsXHJcbiAgICBWSVRFX0RFTEVURV9DT05TT0xFLFxyXG4gICAgVklURV9BUFBfUFVCTElDX0JBU0UsXHJcbiAgICBWSVRFX0FQUF9QUk9YWV9FTkFCTEUsXHJcbiAgICBWSVRFX0FQUF9QUk9YWV9QUkVGSVgsXHJcbiAgICBWSVRFX0NPUFlfTkFUSVZFX1JFU19FTkFCTEUsXHJcbiAgfSA9IGVudlxyXG4gIGNvbnN0IHsgV0VDSEFUX0RFVlRPT0xTX0NMSV9QQVRIIH0gPSBsb2NhbEVudlxyXG4gIGNvbnNvbGUubG9nKCdcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0YgZW52IC0+ICcsIGVudilcclxuXHJcbiAgcmV0dXJuIGRlZmluZUNvbmZpZyh7XHJcbiAgICBlbnZEaXI6ICcuL2VudicsIC8vIFx1ODFFQVx1NUI5QVx1NEU0OWVudlx1NzZFRVx1NUY1NVxyXG4gICAgYmFzZTogVklURV9BUFBfUFVCTElDX0JBU0UsXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIC8vIFVuaVhYWCBcdTk3MDBcdTg5ODFcdTU3MjggVW5pIFx1NEU0Qlx1NTI0RFx1NUYxNVx1NTE2NVxyXG4gICAgICBVbmlMYXlvdXRzKCksXHJcbiAgICAgIFVuaVBsYXRmb3JtKCksXHJcbiAgICAgIFVuaU1hbmlmZXN0KCksXHJcbiAgICAgIFVuaUNvbXBvbmVudHMoe1xyXG4gICAgICAgIGV4dGVuc2lvbnM6IFsndnVlJ10sXHJcbiAgICAgICAgZGVlcDogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU5MDEyXHU1RjUyXHU2MjZCXHU2M0NGXHU1QjUwXHU3NkVFXHU1RjU1XHVGRjBDXHJcbiAgICAgICAgZGlyZWN0b3J5QXNOYW1lc3BhY2U6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTYyOEFcdTc2RUVcdTVGNTVcdTU0MERcdTRGNUNcdTRFM0FcdTU0N0RcdTU0MERcdTdBN0FcdTk1RjRcdTUyNERcdTdGMDBcdUZGMEN0cnVlIFx1NjVGNlx1N0VDNFx1NEVGNlx1NTQwRFx1NEUzQSBcdTc2RUVcdTVGNTVcdTU0MEQrXHU3RUM0XHU0RUY2XHU1NDBEXHVGRjBDXHJcbiAgICAgICAgZHRzOiAnc3JjL3R5cGVzL2NvbXBvbmVudHMuZC50cycsIC8vIFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1NzY4NFx1N0VDNFx1NEVGNlx1N0M3Qlx1NTc4Qlx1NThGMFx1NjYwRVx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFx1RkYwOFx1NzUyOFx1NEU4RSBUeXBlU2NyaXB0IFx1NjUyRlx1NjMwMVx1RkYwOVxyXG4gICAgICB9KSxcclxuICAgICAgVW5pUGFnZXMoe1xyXG4gICAgICAgIGV4Y2x1ZGU6IFsnKiovY29tcG9uZW50cy8qKi8qKi4qJywgJyoqL3NlY3Rpb25zLyoqLyoqLionXSxcclxuICAgICAgICAvLyBwYWdlcyBcdTc2RUVcdTVGNTVcdTRFM0Egc3JjL3BhZ2VzXHVGRjBDXHU1MjA2XHU1MzA1XHU3NkVFXHU1RjU1XHU0RTBEXHU4MEZEXHU5MTREXHU3RjZFXHU1NzI4cGFnZXNcdTc2RUVcdTVGNTVcdTRFMEJcdUZGMDFcdUZGMDFcclxuICAgICAgICAvLyBcdTY2MkZcdTRFMkFcdTY1NzBcdTdFQzRcdUZGMENcdTUzRUZcdTRFRTVcdTkxNERcdTdGNkVcdTU5MUFcdTRFMkFcdUZGMENcdTRGNDZcdTY2MkZcdTRFMERcdTgwRkRcdTRFM0FwYWdlc1x1OTFDQ1x1OTc2Mlx1NzY4NFx1NzZFRVx1NUY1NVx1RkYwMVx1RkYwMVxyXG4gICAgICAgIC8vIFwic3JjL3BhZ2VzLWRlbW9cIiBcdTY2MkZ1bmliZXN0IGRlbW8gXHU5ODg0XHU3NTU5XHU3Njg0XHVGRjBDXHU2NUI5XHU0RkJGXHU1NDBFXHU3RUVEXHU2M0QyXHU1MTY1ZGVtb1x1NzkzQVx1NEY4QlxyXG4gICAgICAgIHN1YlBhY2thZ2VzOiBbJ3NyYy9wYWdlcy1kZW1vJ10sXHJcbiAgICAgICAgZHRzOiAnc3JjL3R5cGVzL3VuaS1wYWdlcy5kLnRzJyxcclxuICAgICAgfSksXHJcbiAgICAgIC8vIFVuaU9wdGltaXphdGlvbiBcdTYzRDJcdTRFRjZcdTk3MDBcdTg5ODEgcGFnZS5qc29uIFx1NjU4N1x1NEVGNlx1RkYwQ1x1NjU0NVx1NUU5NFx1NTcyOCBVbmlQYWdlcyBcdTYzRDJcdTRFRjZcdTRFNEJcdTU0MEVcdTYyNjdcdTg4NENcclxuICAgICAgVW5pT3B0aW1pemF0aW9uKHtcclxuICAgICAgICBlbmFibGU6IGlzTXBXZWl4aW4sXHJcbiAgICAgICAgZHRzOiB7XHJcbiAgICAgICAgICBiYXNlOiAnc3JjL3R5cGVzJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2dlcjogZmFsc2UsXHJcbiAgICAgIH0pLFxyXG4gICAgICAvLyBcdTgyRTVcdTVCNThcdTU3MjhcdTY1MzlcdTUzRDggcGFnZXMuanNvbiBcdTc2ODRcdTYzRDJcdTRFRjZcdUZGMENcdThCRjdcdTVDMDYgVW5pS3VSb290IFx1NjUzRVx1N0Y2RVx1NTE3Nlx1NTQwRVxyXG4gICAgICBVbmlLdVJvb3Qoe1xyXG4gICAgICAgIGV4Y2x1ZGVQYWdlczogWycqKi9jb21wb25lbnRzLyoqLyoqLionLCAnKiovc2VjdGlvbnMvKiovKiouKiddLFxyXG4gICAgICB9KSxcclxuICAgICAgVW5pKCksXHJcbiAgICAgIHtcclxuICAgICAgICAvLyBcdTRFMzRcdTY1RjZcdTg5RTNcdTUxQjMgZGNsb3VkaW8gXHU1Qjk4XHU2NUI5XHU3Njg0IEBkY2xvdWRpby91bmktbXAtY29tcGlsZXIgXHU1MUZBXHU3M0IwXHU3Njg0XHU3RjE2XHU4QkQxIEJVR1xyXG4gICAgICAgIC8vIFx1NTNDMlx1ODAwMyBnaXRodWIgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kY2xvdWRpby91bmktYXBwL2lzc3Vlcy80OTUyXHJcbiAgICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2M0QyXHU0RUY2XHU3OTgxXHU3NTI4IHZpdGU6dnVlIFx1NjNEMlx1NEVGNlx1NzY4NCBkZXZUb29sc0VuYWJsZWRcdUZGMENcdTVGM0FcdTUyMzZcdTdGMTZcdThCRDEgdnVlIFx1NkEyMVx1Njc3Rlx1NjVGNiBpbmxpbmUgXHU0RTNBIHRydWVcclxuICAgICAgICBuYW1lOiAnZml4LXZpdGUtcGx1Z2luLXZ1ZScsXHJcbiAgICAgICAgY29uZmlnUmVzb2x2ZWQoY29uZmlnKSB7XHJcbiAgICAgICAgICBjb25zdCBwbHVnaW4gPSBjb25maWcucGx1Z2lucy5maW5kKHAgPT4gcC5uYW1lID09PSAndml0ZTp2dWUnKVxyXG4gICAgICAgICAgaWYgKHBsdWdpbiAmJiBwbHVnaW4uYXBpICYmIHBsdWdpbi5hcGkub3B0aW9ucykge1xyXG4gICAgICAgICAgICBwbHVnaW4uYXBpLm9wdGlvbnMuZGV2VG9vbHNFbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBVbm9DU1MoKSxcclxuICAgICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgICAgaW1wb3J0czogWyd2dWUnLCAndW5pLWFwcCddLFxyXG4gICAgICAgIGR0czogJ3NyYy90eXBlcy9hdXRvLWltcG9ydC5kLnRzJyxcclxuICAgICAgICBkaXJzOiBbJ3NyYy9ob29rcyddLCAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgaG9va3NcclxuICAgICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSwgLy8gZGVmYXVsdCBmYWxzZVxyXG4gICAgICB9KSxcclxuICAgICAgVml0ZVJlc3RhcnQoe1xyXG4gICAgICAgIC8vIFx1OTAxQVx1OEZDN1x1OEZEOVx1NEUyQVx1NjNEMlx1NEVGNlx1RkYwQ1x1NTcyOFx1NEZFRVx1NjUzOXZpdGUuY29uZmlnLmpzXHU2NTg3XHU0RUY2XHU1MjE5XHU0RTBEXHU5NzAwXHU4OTgxXHU5MUNEXHU2NUIwXHU4RkQwXHU4ODRDXHU0RTVGXHU3NTFGXHU2NTQ4XHU5MTREXHU3RjZFXHJcbiAgICAgICAgcmVzdGFydDogWyd2aXRlLmNvbmZpZy5qcyddLFxyXG4gICAgICB9KSxcclxuICAgICAgLy8gaDVcdTczQUZcdTU4ODNcdTU4OUVcdTUyQTAgQlVJTERfVElNRSBcdTU0OEMgQlVJTERfQlJBTkNIXHJcbiAgICAgIFVOSV9QTEFURk9STSA9PT0gJ2g1JyAmJiB7XHJcbiAgICAgICAgbmFtZTogJ2h0bWwtdHJhbnNmb3JtJyxcclxuICAgICAgICB0cmFuc2Zvcm1JbmRleEh0bWwoaHRtbCkge1xyXG4gICAgICAgICAgcmV0dXJuIGh0bWxcclxuICAgICAgICAgICAgLnJlcGxhY2UoJyVCVUlMRF9USU1FJScsIGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJykpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCclVklURV9BUFBfVElUTEUlJywgVklURV9BUFBfVElUTEUpXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgLy8gXHU2MjUzXHU1MzA1XHU1MjA2XHU2NzkwXHU2M0QyXHU0RUY2XHVGRjBDaDUgKyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTYyNERcdTVGMzlcdTUxRkFcclxuICAgICAgVU5JX1BMQVRGT1JNID09PSAnaDUnXHJcbiAgICAgICYmIG1vZGUgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICAmJiB2aXN1YWxpemVyKHtcclxuICAgICAgICBmaWxlbmFtZTogJy4vbm9kZV9tb2R1bGVzLy5jYWNoZS92aXN1YWxpemVyL3N0YXRzLmh0bWwnLFxyXG4gICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgZ3ppcFNpemU6IHRydWUsXHJcbiAgICAgICAgYnJvdGxpU2l6ZTogdHJ1ZSxcclxuICAgICAgfSksXHJcbiAgICAgIC8vIFx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1OEQ0NFx1NkU5MFx1NTkwRFx1NTIzNlx1NjNEMlx1NEVGNiAtIFx1NEVDNVx1NTcyOCBhcHAgXHU1RTczXHU1M0YwXHU0RTE0XHU1NDJGXHU3NTI4XHU2NUY2XHU3NTFGXHU2NTQ4XHJcbiAgICAgIGNyZWF0ZUNvcHlOYXRpdmVSZXNvdXJjZXNQbHVnaW4oXHJcbiAgICAgICAgVU5JX1BMQVRGT1JNID09PSAnYXBwJyAmJiBWSVRFX0NPUFlfTkFUSVZFX1JFU19FTkFCTEUgPT09ICd0cnVlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2ZXJib3NlOiBtb2RlID09PSAnZGV2ZWxvcG1lbnQnLCAvLyBcdTVGMDBcdTUzRDFcdTZBMjFcdTVGMEZcdTY2M0VcdTc5M0FcdThCRTZcdTdFQzZcdTY1RTVcdTVGRDdcclxuICAgICAgICB9LFxyXG4gICAgICApLFxyXG4gICAgICBzeW5jTWFuaWZlc3RQbHVnaW4oKSxcclxuICAgICAgdml0ZVBsdWdpbkVydWRhKHtcclxuICAgICAgICBvcGVuOiBVTklfUExBVEZPUk0gPT09ICdoNScgJiYgbW9kZSA9PT0gJ2RldmVsb3BtZW50JyxcclxuICAgICAgfSksXHJcbiAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1NUYwMFx1NTNEMVx1ODAwNVx1NURFNVx1NTE3N1x1NjNEMlx1NEVGNiAoXHU1RkM1XHU5ODdCXHU0RkVFXHU2NTM5IC5lbnYgXHU2NTg3XHU0RUY2XHU0RTJEXHU3Njg0IFZJVEVfV1hfQVBQSUQpXHJcbiAgICAgIC8vIFx1NEUwQVx1NEYyMFx1NjVGNlx1OTAxQVx1OEZDNyBTS0lQX09QRU5fREVWVE9PTFM9dHJ1ZSBcdThERjNcdThGQzdcclxuICAgICAgU0tJUF9PUEVOX0RFVlRPT0xTICE9PSAndHJ1ZScgJiYgb3BlbkRldlRvb2xzKHtcclxuICAgICAgICBtb2RlLFxyXG4gICAgICAgIHdlY2hhdERldnRvb2xzQ2xpUGF0aDogV0VDSEFUX0RFVlRPT0xTX0NMSV9QQVRILFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgICBkZWZpbmU6IHtcclxuICAgICAgX19WSVRFX0FQUF9QUk9YWV9fOiBKU09OLnN0cmluZ2lmeShWSVRFX0FQUF9QUk9YWV9FTkFCTEUpLFxyXG4gICAgfSxcclxuICAgIGNzczoge1xyXG4gICAgICBwb3N0Y3NzOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgLy8gYXV0b3ByZWZpeGVyKHtcclxuICAgICAgICAgIC8vICAgLy8gXHU2MzA3XHU1QjlBXHU3NkVFXHU2ODA3XHU2RDRGXHU4OUM4XHU1NjY4XHJcbiAgICAgICAgICAvLyAgIG92ZXJyaWRlQnJvd3NlcnNsaXN0OiBbJz4gMSUnLCAnbGFzdCAyIHZlcnNpb25zJ10sXHJcbiAgICAgICAgICAvLyB9KSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0AnOiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy4vc3JjJyksXHJcbiAgICAgICAgJ0BpbWcnOiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy4vc3JjL3N0YXRpYy9pbWFnZXMnKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgICBobXI6IHRydWUsXHJcbiAgICAgIHBvcnQ6IE51bWJlci5wYXJzZUludChWSVRFX0FQUF9QT1JULCAxMCksXHJcbiAgICAgIC8vIFx1NEVDNSBINSBcdTdBRUZcdTc1MUZcdTY1NDhcdUZGMENcdTUxNzZcdTRFRDZcdTdBRUZcdTRFMERcdTc1MUZcdTY1NDhcdUZGMDhcdTUxNzZcdTRFRDZcdTdBRUZcdThENzBidWlsZFx1RkYwQ1x1NEUwRFx1OEQ3MGRldlNlcnZlcilcclxuICAgICAgcHJveHk6IEpTT04ucGFyc2UoVklURV9BUFBfUFJPWFlfRU5BQkxFKVxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBbVklURV9BUFBfUFJPWFlfUFJFRklYXToge1xyXG4gICAgICAgICAgICAgIHRhcmdldDogVklURV9TRVJWRVJfQkFTRVVSTCxcclxuICAgICAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gXHU1NDBFXHU3QUVGXHU2NzA5L2FwaVx1NTI0RFx1N0YwMFx1NTIxOVx1NEUwRFx1NTA1QVx1NTkwNFx1NzQwNlx1RkYwQ1x1NkNBMVx1NjcwOVx1NTIxOVx1OTcwMFx1ODk4MVx1NTNCQlx1NjM4OVxyXG4gICAgICAgICAgICAgIHJld3JpdGU6IHBhdGggPT5cclxuICAgICAgICAgICAgICAgIHBhdGgucmVwbGFjZShuZXcgUmVnRXhwKGBeJHtWSVRFX0FQUF9QUk9YWV9QUkVGSVh9YCksICcnKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IHVuZGVmaW5lZCxcclxuICAgIH0sXHJcbiAgICBlc2J1aWxkOiB7XHJcbiAgICAgIGRyb3A6IFZJVEVfREVMRVRFX0NPTlNPTEUgPT09ICd0cnVlJyA/IFsnY29uc29sZScsICdkZWJ1Z2dlciddIDogW10sXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgc291cmNlbWFwOiBmYWxzZSxcclxuICAgICAgLy8gXHU2NUI5XHU0RkJGXHU5NzVFaDVcdTdBRUZcdThDMDNcdThCRDVcclxuICAgICAgLy8gc291cmNlbWFwOiBWSVRFX1NIT1dfU09VUkNFTUFQID09PSAndHJ1ZScsIC8vIFx1OUVEOFx1OEJBNFx1NjYyRmZhbHNlXHJcbiAgICAgIHRhcmdldDogJ2VzNicsXHJcbiAgICAgIC8vIFx1NUYwMFx1NTNEMVx1NzNBRlx1NTg4M1x1NEUwRFx1NzUyOFx1NTM4Qlx1N0YyOVxyXG4gICAgICBtaW5pZnk6IG1vZGUgPT09ICdkZXZlbG9wbWVudCcgPyBmYWxzZSA6ICdlc2J1aWxkJyxcclxuICAgIH0sXHJcbiAgfSlcclxufSlcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxBTExcXFxcY29kZVxcXFxWc0NvZGVcXFxcRVRQXFxcXHNjcmlwdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEFMTFxcXFxjb2RlXFxcXFZzQ29kZVxcXFxFVFBcXFxcc2NyaXB0c1xcXFxvcGVuLWRldi10b29scy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQUxML2NvZGUvVnNDb2RlL0VUUC9zY3JpcHRzL29wZW4tZGV2LXRvb2xzLmpzXCI7aW1wb3J0IHsgZXhlYyB9IGZyb20gJ25vZGU6Y2hpbGRfcHJvY2VzcydcclxuaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJ1xyXG5cclxuLyoqXHJcbiAqIFx1NjI1M1x1NUYwMFx1NUYwMFx1NTNEMVx1ODAwNVx1NURFNVx1NTE3N1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gZW52IC0gXHU3M0FGXHU1ODgzXHVGRjBDJ2RldicgXHU2MjE2ICdidWlsZCdcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBcdTkxNERcdTdGNkVcdTkwMDlcdTk4NzlcclxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMud2VjaGF0RGV2dG9vbHNDbGlQYXRoIC0gXHU1RkFFXHU0RkUxXHU1RjAwXHU1M0QxXHU4MDA1XHU1REU1XHU1MTc3IENMSSBcdThERUZcdTVGODRcclxuICovXHJcbmZ1bmN0aW9uIF9vcGVuRGV2VG9vbHMoZW52ID0gJ2RldicsIG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IHsgd2VjaGF0RGV2dG9vbHNDbGlQYXRoIH0gPSBvcHRpb25zXHJcbiAgY29uc3QgcGxhdGZvcm0gPSBwcm9jZXNzLnBsYXRmb3JtIC8vIGRhcndpbiwgd2luMzIsIGxpbnV4XHJcbiAgY29uc3QgeyBVTklfUExBVEZPUk0gfSA9IHByb2Nlc3MuZW52IC8vICBtcC13ZWl4aW4sIG1wLWFsaXBheSwgbXAtbGFya1xyXG5cclxuICBjb25zdCB1bmlQbGF0Zm9ybVRleHQgPSBVTklfUExBVEZPUk0gPT09ICdtcC13ZWl4aW4nID8gJ1x1NUZBRVx1NEZFMVx1NUMwRlx1N0EwQlx1NUU4RicgOiBVTklfUExBVEZPUk0gPT09ICdtcC1hbGlwYXknID8gJ1x1NjUyRlx1NEVEOFx1NUI5RFx1NUMwRlx1N0EwQlx1NUU4RicgOiBVTklfUExBVEZPUk0gPT09ICdtcC1sYXJrJyA/ICdcdTYyOTZcdTk3RjNcdTVDMEZcdTdBMEJcdTVFOEYnIDogJ1x1NUMwRlx1N0EwQlx1NUU4RidcclxuXHJcbiAgLy8gXHU5ODc5XHU3NkVFXHU4REVGXHU1Rjg0XHVGRjA4XHU2Nzg0XHU1RUZBXHU4RjkzXHU1MUZBXHU3NkVFXHU1RjU1XHVGRjA5XHVGRjBDXHU2ODM5XHU2MzZFXHU3M0FGXHU1ODgzXHU5MDA5XHU2MkU5XHU0RTBEXHU1NDBDXHU3NkVFXHU1RjU1XHJcbiAgY29uc3Qgb3V0cHV0RGlyID0gZW52ID09PSAnYnVpbGQnID8gYGRpc3QvYnVpbGQvJHtVTklfUExBVEZPUk19YCA6IGBkaXN0L2Rldi8ke1VOSV9QTEFURk9STX1gXHJcbiAgY29uc3QgcHJvamVjdFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgb3V0cHV0RGlyKVxyXG5cclxuICAvLyBcdTY4QzBcdTY3RTVcdTY3ODRcdTVFRkFcdThGOTNcdTUxRkFcdTc2RUVcdTVGNTVcdTY2MkZcdTU0MjZcdTVCNThcdTU3MjhcclxuICBpZiAoIWZzLmV4aXN0c1N5bmMocHJvamVjdFBhdGgpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgXHUyNzRDICR7dW5pUGxhdGZvcm1UZXh0fVx1Njc4NFx1NUVGQVx1NzZFRVx1NUY1NVx1NEUwRFx1NUI1OFx1NTcyODpgLCBwcm9qZWN0UGF0aClcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coYFx1RDgzRFx1REU4MCBcdTZCNjNcdTU3MjhcdTYyNTNcdTVGMDAke3VuaVBsYXRmb3JtVGV4dH1cdTVGMDBcdTUzRDFcdTgwMDVcdTVERTVcdTUxNzcuLi5gKVxyXG5cclxuICAvLyBcdTY4MzlcdTYzNkVcdTRFMERcdTU0MENcdTY0Q0RcdTRGNUNcdTdDRkJcdTdFREZcdTYyNjdcdTg4NENcdTRFMERcdTU0MENcdTU0N0RcdTRFRTRcclxuICBsZXQgY29tbWFuZCA9ICcnXHJcblxyXG4gIGlmIChwbGF0Zm9ybSA9PT0gJ2RhcndpbicpIHtcclxuICAgIC8vIG1hY09TXHJcbiAgICBpZiAoVU5JX1BMQVRGT1JNID09PSAnbXAtd2VpeGluJykge1xyXG4gICAgICBjb25zdCBjbGlQYXRoID0gd2VjaGF0RGV2dG9vbHNDbGlQYXRoIHx8ICcvQXBwbGljYXRpb25zL3dlY2hhdHdlYmRldnRvb2xzLmFwcC9Db250ZW50cy9NYWNPUy9jbGknXHJcbiAgICAgIGNvbW1hbmQgPSBgXCIke2NsaVBhdGh9XCIgLW8gXCIke3Byb2plY3RQYXRofVwiYFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoVU5JX1BMQVRGT1JNID09PSAnbXAtYWxpcGF5Jykge1xyXG4gICAgICBjb21tYW5kID0gYC9BcHBsaWNhdGlvbnMvXHU1QzBGXHU3QTBCXHU1RThGXHU1RjAwXHU1M0QxXHU4MDA1XHU1REU1XHU1MTc3LmFwcC9Db250ZW50cy9NYWNPUy9cdTVDMEZcdTdBMEJcdTVFOEZcdTVGMDBcdTUzRDFcdTgwMDVcdTVERTVcdTUxNzcgLS1wIFwiJHtwcm9qZWN0UGF0aH1cImBcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKFVOSV9QTEFURk9STSA9PT0gJ21wLWxhcmsnKSB7XHJcbiAgICAgIGNvbW1hbmQgPSBgL0FwcGxpY2F0aW9ucy9cdTYyOTZcdTk3RjNcdTVGMDBcdTUzRDFcdTgwMDVcdTVERTVcdTUxNzcuYXBwL0NvbnRlbnRzL01hY09TL1x1NjI5Nlx1OTdGM1x1NUYwMFx1NTNEMVx1ODAwNVx1NURFNVx1NTE3NyAtLXAgXCIke3Byb2plY3RQYXRofVwiYFxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmIChwbGF0Zm9ybSA9PT0gJ3dpbjMyJyB8fCBwbGF0Zm9ybSA9PT0gJ3dpbjY0Jykge1xyXG4gICAgLy8gV2luZG93c1xyXG4gICAgaWYgKFVOSV9QTEFURk9STSA9PT0gJ21wLXdlaXhpbicpIHtcclxuICAgICAgY29uc3QgY2xpUGF0aCA9IHdlY2hhdERldnRvb2xzQ2xpUGF0aCB8fCAnQzpcXFxcUHJvZ3JhbSBGaWxlcyAoeDg2KVxcXFxUZW5jZW50XFxcXFx1NUZBRVx1NEZFMXdlYlx1NUYwMFx1NTNEMVx1ODAwNVx1NURFNVx1NTE3N1xcXFxjbGkuYmF0J1xyXG4gICAgICBjb21tYW5kID0gYFwiJHtjbGlQYXRofVwiIC1vIFwiJHtwcm9qZWN0UGF0aH1cImBcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICAvLyBMaW51eCBcdTYyMTZcdTUxNzZcdTRFRDZcdTdDRkJcdTdFREZcclxuICAgIGNvbnNvbGUubG9nKCdcdTI3NEMgXHU1RjUzXHU1MjREXHU3Q0ZCXHU3RURGXHU0RTBEXHU2NTJGXHU2MzAxXHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU1RkFFXHU0RkUxXHU1RjAwXHU1M0QxXHU4MDA1XHU1REU1XHU1MTc3JylcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgZXhlYyhjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coYFx1Mjc0QyBcdTYyNTNcdTVGMDAke3VuaVBsYXRmb3JtVGV4dH1cdTVGMDBcdTUzRDFcdTgwMDVcdTVERTVcdTUxNzdcdTU5MzFcdThEMjU6YCwgZXJyb3IubWVzc2FnZSlcclxuICAgICAgaWYgKFVOSV9QTEFURk9STSA9PT0gJ21wLXdlaXhpbicpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnXHVEODNEXHVEQ0ExIFx1NUY1M1x1NTI0RFx1NEY3Rlx1NzUyOFx1NzY4NFx1NUZBRVx1NEZFMVx1NUYwMFx1NTNEMVx1ODAwNVx1NURFNVx1NTE3NyBDTEkgXHU1NDdEXHU0RUU0OicsIGNvbW1hbmQpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1x1RDgzRFx1RENBMSBcdTU5ODJcdTY3OUNcdTVCODlcdTg4QzVcdTRGNERcdTdGNkVcdTRFMERcdTU0MENcdUZGMENcdTUzRUZcdTRFRTVcdTU3MjggZW52Ly5lbnYgXHU5MTREXHU3RjZFIFdFQ0hBVF9ERVZUT09MU19DTElfUEFUSCBcdTRFM0FcdTY3MkNcdTY3M0FcdTVCOUVcdTk2NDUgQ0xJIFx1OERFRlx1NUY4NCcpXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coYFx1RDgzRFx1RENBMSBcdThCRjdcdTc4NkVcdTRGREQke3VuaVBsYXRmb3JtVGV4dH1cdTVGMDBcdTUzRDFcdTgwMDVcdTVERTVcdTUxNzdcdTY3MERcdTUyQTFcdTdBRUZcdTUzRTNcdTVERjJcdTU0MkZcdTc1MjhgKVxyXG4gICAgICBjb25zb2xlLmxvZyhgXHVEODNEXHVEQ0ExIFx1NTNFRlx1NEVFNVx1NjI0Qlx1NTJBOFx1NjI1M1x1NUYwMCR7dW5pUGxhdGZvcm1UZXh0fVx1NUYwMFx1NTNEMVx1ODAwNVx1NURFNVx1NTE3N1x1NUU3Nlx1NUJGQ1x1NTE2NVx1OTg3OVx1NzZFRTpgLCBwcm9qZWN0UGF0aClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0ZGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZygnXHUyNkEwXHVGRTBGIFx1OEI2Nlx1NTQ0QTonLCBzdGRlcnIpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coYFx1MjcwNSAke3VuaVBsYXRmb3JtVGV4dH1cdTVGMDBcdTUzRDFcdTgwMDVcdTVERTVcdTUxNzdcdTVERjJcdTYyNTNcdTVGMDBgKVxyXG5cclxuICAgIGlmIChzdGRvdXQpIHtcclxuICAgICAgY29uc29sZS5sb2coc3Rkb3V0KVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTUyMUJcdTVFRkEgVml0ZSBcdTYzRDJcdTRFRjZcdUZGMENcdTc1MjhcdTRFOEVcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTVGMDBcdTUzRDFcdTgwMDVcdTVERTVcdTUxNzdcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBcdTkxNERcdTdGNkVcdTkwMDlcdTk4NzlcclxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubW9kZSAtIFx1Njc4NFx1NUVGQVx1NkEyMVx1NUYwRlx1RkYwQydkZXZlbG9wbWVudCcgXHU2MjE2ICdwcm9kdWN0aW9uJ1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy53ZWNoYXREZXZ0b29sc0NsaVBhdGggLSBcdTVGQUVcdTRGRTFcdTVGMDBcdTUzRDFcdTgwMDVcdTVERTVcdTUxNzcgQ0xJIFx1OERFRlx1NUY4NFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3BlbkRldlRvb2xzKG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IHsgbW9kZSA9ICdkZXZlbG9wbWVudCcsIHdlY2hhdERldnRvb2xzQ2xpUGF0aCB9ID0gb3B0aW9uc1xyXG4gIC8vIFx1NjgzOVx1NjM2RSBtb2RlIFx1Nzg2RVx1NUI5QVx1NzNBRlx1NTg4M1x1RkYxQWRldmVsb3BtZW50IC0+IGRldiwgcHJvZHVjdGlvbiAtPiBidWlsZFxyXG4gIGNvbnN0IGVudiA9IG1vZGUgPT09ICdwcm9kdWN0aW9uJyA/ICdidWlsZCcgOiAnZGV2J1xyXG5cclxuICAvLyBcdTk5OTZcdTZCMjFcdTY3ODRcdTVFRkFcdTY4MDdcdThCQjBcclxuICBsZXQgaXNGaXJzdEJ1aWxkID0gdHJ1ZVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ3VuaS1kZXZ0b29scycsXHJcbiAgICB3cml0ZUJ1bmRsZSgpIHtcclxuICAgICAgaWYgKGlzRmlyc3RCdWlsZCAmJiBwcm9jZXNzLmVudi5VTklfUExBVEZPUk0/LmluY2x1ZGVzKCdtcCcpKSB7XHJcbiAgICAgICAgaXNGaXJzdEJ1aWxkID0gZmFsc2VcclxuICAgICAgICBfb3BlbkRldlRvb2xzKGVudiwgeyB3ZWNoYXREZXZ0b29sc0NsaVBhdGggfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxBTExcXFxcY29kZVxcXFxWc0NvZGVcXFxcRVRQXFxcXHNjcmlwdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEFMTFxcXFxjb2RlXFxcXFZzQ29kZVxcXFxFVFBcXFxcc2NyaXB0c1xcXFx2aXRlLXBsdWdpbi1lcnVkYS5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQUxML2NvZGUvVnNDb2RlL0VUUC9zY3JpcHRzL3ZpdGUtcGx1Z2luLWVydWRhLmpzXCI7LyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBcdTkwMUFcdThGQzcgdml0ZSBcdTgxRUFcdTVCOUFcdTRFNDlcdTY3NjFcdTRFRjZcdTUyQThcdTYwMDFcdTVCRkNcdTUxNjUgZXJ1ZGFcclxuICogQGRlc2NyaXB0aW9uIEVydWRhIFx1OTE0RFx1N0Y2RVx1NTNDMlx1ODAwMyBodHRwczovL2VydWRhLmxpcmlsaXJpLmlvL3poL2RvY3MvXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMub3Blbl0gLSBcdTY2MkZcdTU0MjZcdTVGMDBcdTU0MkYgZXJ1ZGFcclxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLmVydWRhT3B0aW9uc10gLSBlcnVkYSBcdTkxNERcdTdGNkVcclxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmVydWRhVXJsXSAtIGVydWRhIFx1NTczMFx1NTc0MFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdml0ZVBsdWdpbkVydWRhKG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IHsgb3BlbiA9IHRydWUsIGVydWRhT3B0aW9ucyA9IHt9LCBlcnVkYVVybCA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2VydWRhJyB9ID0gb3B0aW9uc1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ3ZpdGUtcGx1Z2luLWVydWRhJyxcclxuXHJcbiAgICB0cmFuc2Zvcm1JbmRleEh0bWwoaHRtbCkge1xyXG4gICAgICBjb25zdCB0YWdzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRhZzogJ3NjcmlwdCcsXHJcbiAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICBzcmM6IGVydWRhVXJsLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGluamVjdFRvOiAnaGVhZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0YWc6ICdzY3JpcHQnLFxyXG4gICAgICAgICAgY2hpbGRyZW46IGBlcnVkYS5pbml0KCR7SlNPTi5zdHJpbmdpZnkoZXJ1ZGFPcHRpb25zKX0pO2AsXHJcbiAgICAgICAgICBpbmplY3RUbzogJ2hlYWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF1cclxuXHJcbiAgICAgIGlmICghb3Blbikge1xyXG4gICAgICAgIHJldHVybiBodG1sXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgaHRtbCwgdGFncyB9XHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXEFMTFxcXFxjb2RlXFxcXFZzQ29kZVxcXFxFVFBcXFxcdml0ZS1wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxBTExcXFxcY29kZVxcXFxWc0NvZGVcXFxcRVRQXFxcXHZpdGUtcGx1Z2luc1xcXFxjb3B5LW5hdGl2ZS1yZXNvdXJjZXMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0FMTC9jb2RlL1ZzQ29kZS9FVFAvdml0ZS1wbHVnaW5zL2NvcHktbmF0aXZlLXJlc291cmNlcy50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnXHJcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcclxuXHJcbi8qKlxyXG4gKiBcdTUzOUZcdTc1MUZcdTYzRDJcdTRFRjZcdThENDRcdTZFOTBcdTU5MERcdTUyMzZcdTkxNERcdTdGNkVcdTYzQTVcdTUzRTNcclxuICpcclxuICogXHU2ODM5XHU2MzZFIFVuaUFwcCBcdTVCOThcdTY1QjlcdTY1ODdcdTY4NjNcdUZGMUFodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL3BsdWdpbi9uYXRpdmUtcGx1Z2luLmh0bWwjJUU2JTlDJUFDJUU1JTlDJUIwJUU2JThGJTkyJUU0JUJCJUI2LSVFOSU5RCU5RSVFNSU4NiU4NSVFNyVCRCVBRSVFNSU4RSU5RiVFNyU5NCU5RiVFNiU4RiU5MiVFNCVCQiVCNlxyXG4gKiBcdTY3MkNcdTU3MzBcdTYzRDJcdTRFRjZcdTVFOTRcdThCRTVcdTVCNThcdTUwQThcdTU3MjhcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTVcdTc2ODQgbmF0aXZlcGx1Z2lucyBcdTc2RUVcdTVGNTVcdTRFMEJcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29weU5hdGl2ZVJlc291cmNlc09wdGlvbnMge1xyXG4gIC8qKiBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTYzRDJcdTRFRjYgKi9cclxuICBlbmFibGU/OiBib29sZWFuXHJcbiAgLyoqXHJcbiAgICogXHU2RTkwXHU3NkVFXHU1RjU1XHU4REVGXHU1Rjg0XHVGRjBDXHU3NkY4XHU1QkY5XHU0RThFXHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1XHJcbiAgICogXHU5RUQ4XHU4QkE0XHU0RTNBICduYXRpdmVwbHVnaW5zJ1x1RkYwQ1x1N0IyNlx1NTQwOCBVbmlBcHAgXHU1Qjk4XHU2NUI5XHU4OUM0XHU4MzAzXHJcbiAgICogQHNlZSBodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL3BsdWdpbi9uYXRpdmUtcGx1Z2luLmh0bWwjJUU2JTlDJUFDJUU1JTlDJUIwJUU2JThGJTkyJUU0JUJCJUI2LSVFOSU5RCU5RSVFNSU4NiU4NSVFNyVCRCVBRSVFNSU4RSU5RiVFNyU5NCU5RiVFNiU4RiU5MiVFNCVCQiVCNlxyXG4gICAqL1xyXG4gIHNvdXJjZURpcj86IHN0cmluZ1xyXG4gIC8qKlxyXG4gICAqIFx1NzZFRVx1NjgwN1x1NzZFRVx1NUY1NVx1NTQwRFx1NzlGMFx1RkYwQ1x1Njc4NFx1NUVGQVx1NTQwRVx1NTcyOCBkaXN0IFx1NzZFRVx1NUY1NVx1NEUyRFx1NzY4NFx1NjU4N1x1NEVGNlx1NTkzOVx1NTQwRFxyXG4gICAqIFx1OUVEOFx1OEJBNFx1NEUzQSAnbmF0aXZlcGx1Z2lucydcdUZGMENcdTRFMEVcdTZFOTBcdTc2RUVcdTVGNTVcdTRGRERcdTYzMDFcdTRFMDBcdTgxRjRcclxuICAgKi9cclxuICB0YXJnZXREaXJOYW1lPzogc3RyaW5nXHJcbiAgLyoqIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1OEJFNlx1N0VDNlx1NjVFNVx1NUZEN1x1RkYwQ1x1NEZCRlx1NEU4RVx1OEMwM1x1OEJENVx1NTQ4Q1x1NzZEMVx1NjNBN1x1NTkwRFx1NTIzNlx1OEZDN1x1N0EwQiAqL1xyXG4gIHZlcmJvc2U/OiBib29sZWFuXHJcbiAgLyoqIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjVFNVx1NUZEN1x1NTI0RFx1N0YwMFx1RkYwQ1x1NzUyOFx1NEU4RVx1NTMzQVx1NTIwNlx1NEUwRFx1NTQwQ1x1NjNEMlx1NEVGNlx1NzY4NFx1NjVFNVx1NUZEN1x1OEY5M1x1NTFGQSAqL1xyXG4gIGxvZ1ByZWZpeD86IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogXHU5RUQ4XHU4QkE0XHU5MTREXHU3RjZFXHJcbiAqXHJcbiAqIFx1NjgzOVx1NjM2RSBVbmlBcHAgXHU1Qjk4XHU2NUI5XHU2NTg3XHU2ODYzXHU4OUM0XHU4MzAzXHU4QkJFXHU3RjZFXHU5RUQ4XHU4QkE0XHU1MDNDXHVGRjFBXHJcbiAqIC0gc291cmNlRGlyOiAnbmF0aXZlcGx1Z2lucycgLSBcdTdCMjZcdTU0MDhcdTVCOThcdTY1QjlcdTY3MkNcdTU3MzBcdTYzRDJcdTRFRjZcdTVCNThcdTUwQThcdTg5QzRcdTgzMDNcclxuICogLSB0YXJnZXREaXJOYW1lOiAnbmF0aXZlcGx1Z2lucycgLSBcdTY3ODRcdTVFRkFcdTU0MEVcdTRGRERcdTYzMDFcdTc2RjhcdTU0MENcdTc2ODRcdTc2RUVcdTVGNTVcdTdFRDNcdTY3ODRcclxuICovXHJcbmNvbnN0IERFRkFVTFRfT1BUSU9OUzogUmVxdWlyZWQ8Q29weU5hdGl2ZVJlc291cmNlc09wdGlvbnM+ID0ge1xyXG4gIGVuYWJsZTogdHJ1ZSxcclxuICBzb3VyY2VEaXI6ICduYXRpdmVwbHVnaW5zJyxcclxuICB0YXJnZXREaXJOYW1lOiAnbmF0aXZlcGx1Z2lucycsXHJcbiAgdmVyYm9zZTogdHJ1ZSxcclxuICBsb2dQcmVmaXg6ICdbY29weS1uYXRpdmUtcmVzb3VyY2VzXScsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVbmlBcHAgXHU1MzlGXHU3NTFGXHU2M0QyXHU0RUY2XHU4RDQ0XHU2RTkwXHU1OTBEXHU1MjM2XHU2M0QyXHU0RUY2XHJcbiAqXHJcbiAqIFx1NTI5Rlx1ODBGRFx1OEJGNFx1NjYwRVx1RkYxQVxyXG4gKiAxLiBcdTg5RTNcdTUxQjMgVW5pQXBwIFx1NEY3Rlx1NzUyOFx1NjcyQ1x1NTczMFx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1NjVGNlx1RkYwQ1x1NjI1M1x1NTMwNVx1NTQwRVx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1OEQ0NFx1NkU5MFx1NjI3RVx1NEUwRFx1NTIzMFx1NzY4NFx1OTVFRVx1OTg5OFxyXG4gKiAyLiBcdTVDMDZcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTVcdTRFMEJcdTc2ODQgbmF0aXZlcGx1Z2lucyBcdTc2RUVcdTVGNTVcdTU5MERcdTUyMzZcdTUyMzBcdTY3ODRcdTVFRkFcdThGOTNcdTUxRkFcdTc2RUVcdTVGNTVcdTRFMkRcclxuICogMy4gXHU2NTJGXHU2MzAxIEFuZHJvaWQgXHU1NDhDIGlPUyBcdTVFNzNcdTUzRjBcdTc2ODRcdTUzOUZcdTc1MUZcdTYzRDJcdTRFRjZcdThENDRcdTZFOTBcdTU5MERcdTUyMzZcclxuICogNC4gXHU0RUM1XHU1NzI4IGFwcCBcdTVFNzNcdTUzRjBcdTY3ODRcdTVFRkFcdTY1RjZcdTc1MUZcdTY1NDhcdUZGMENcdTUxNzZcdTRFRDZcdTVFNzNcdTUzRjBcdUZGMDhINVx1MzAwMVx1NUMwRlx1N0EwQlx1NUU4Rlx1RkYwOVx1NEUwRFx1NjI2N1x1ODg0Q1xyXG4gKlxyXG4gKiBcdTRGN0ZcdTc1MjhcdTU3M0FcdTY2NkZcdUZGMUFcclxuICogLSBcdTRGN0ZcdTc1MjhcdTRFODYgVW5pQXBwIFx1NjcyQ1x1NTczMFx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1RkYwOFx1OTc1RVx1NEU5MVx1N0FFRlx1NjNEMlx1NEVGNlx1RkYwOVxyXG4gKiAtIFx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1NTMwNVx1NTQyQlx1OTg5RFx1NTkxNlx1NzY4NFx1OEQ0NFx1NkU5MFx1NjU4N1x1NEVGNlx1RkYwOFx1NTk4MiAuc28gXHU1RTkzXHU2NTg3XHU0RUY2XHUzMDAxXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU3QjQ5XHVGRjA5XHJcbiAqIC0gXHU5NzAwXHU4OTgxXHU1NzI4XHU2MjUzXHU1MzA1XHU1NDBFXHU0RkREXHU2MzAxXHU1MzlGXHU3NTFGXHU2M0QyXHU0RUY2XHU3Njg0XHU1QjhDXHU2NTc0XHU3NkVFXHU1RjU1XHU3RUQzXHU2Nzg0XHJcbiAqXHJcbiAqIFx1NUI5OFx1NjVCOVx1NjU4N1x1Njg2M1x1NTNDMlx1ODAwM1x1RkYxQVxyXG4gKiBAc2VlIGh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vcGx1Z2luL25hdGl2ZS1wbHVnaW4uaHRtbCMlRTYlOUMlQUMlRTUlOUMlQjAlRTYlOEYlOTIlRTQlQkIlQjYtJUU5JTlEJTlFJUU1JTg2JTg1JUU3JUJEJUFFJUU1JThFJTlGJUU3JTk0JTlGJUU2JThGJTkyJUU0JUJCJUI2XHJcbiAqIEBzZWUgaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi90dXRvcmlhbC9udnVlLWFwaS5odG1sI2RvbVxyXG4gKlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBcdTYzRDJcdTRFRjZcdTkxNERcdTdGNkVcdTkwMDlcdTk4NzlcclxuICogQHJldHVybnMgVml0ZSBcdTYzRDJcdTRFRjZcdTVCRjlcdThDNjFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5TmF0aXZlUmVzb3VyY2VzKG9wdGlvbnM6IENvcHlOYXRpdmVSZXNvdXJjZXNPcHRpb25zID0ge30pOiBQbHVnaW4ge1xyXG4gIGNvbnN0IGNvbmZpZyA9IHsgLi4uREVGQVVMVF9PUFRJT05TLCAuLi5vcHRpb25zIH1cclxuXHJcbiAgLy8gXHU1OTgyXHU2NzlDXHU2M0QyXHU0RUY2XHU4OEFCXHU3OTgxXHU3NTI4XHVGRjBDXHU4RkQ0XHU1NkRFXHU0RTAwXHU0RTJBXHU3QTdBXHU2M0QyXHU0RUY2XHJcbiAgaWYgKCFjb25maWcuZW5hYmxlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiAnY29weS1uYXRpdmUtcmVzb3VyY2VzLWRpc2FibGVkJyxcclxuICAgICAgYXBwbHk6ICdidWlsZCcsXHJcbiAgICAgIHdyaXRlQnVuZGxlKCkge1xyXG4gICAgICAgIC8vIFx1NjNEMlx1NEVGNlx1NURGMlx1Nzk4MVx1NzUyOFx1RkYwQ1x1NEUwRFx1NjI2N1x1ODg0Q1x1NEVGQlx1NEY1NVx1NjRDRFx1NEY1Q1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6ICdjb3B5LW5hdGl2ZS1yZXNvdXJjZXMnLFxyXG4gICAgYXBwbHk6ICdidWlsZCcsIC8vIFx1NTNFQVx1NTcyOFx1Njc4NFx1NUVGQVx1NjVGNlx1NUU5NFx1NzUyOFxyXG4gICAgZW5mb3JjZTogJ3Bvc3QnLCAvLyBcdTU3MjhcdTUxNzZcdTRFRDZcdTYzRDJcdTRFRjZcdTYyNjdcdTg4NENcdTVCOENcdTZCRDVcdTU0MEVcdTYyNjdcdTg4NENcclxuXHJcbiAgICBhc3luYyB3cml0ZUJ1bmRsZSgpIHtcclxuICAgICAgY29uc3QgeyBzb3VyY2VEaXIsIHRhcmdldERpck5hbWUsIHZlcmJvc2UsIGxvZ1ByZWZpeCB9ID0gY29uZmlnXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFx1ODNCN1x1NTNENlx1OTg3OVx1NzZFRVx1NjgzOVx1NzZFRVx1NUY1NVx1OERFRlx1NUY4NFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RSb290ID0gcHJvY2Vzcy5jd2QoKVxyXG5cclxuICAgICAgICAvLyBcdTY3ODRcdTVFRkFcdTZFOTBcdTc2RUVcdTVGNTVcdTdFRERcdTVCRjlcdThERUZcdTVGODRcdUZGMDhcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTVcdTRFMEJcdTc2ODQgbmF0aXZlcGx1Z2lucyBcdTc2RUVcdTVGNTVcdUZGMDlcclxuICAgICAgICBjb25zdCBzb3VyY2VQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBzb3VyY2VEaXIpXHJcblxyXG4gICAgICAgIC8vIFx1Njc4NFx1NUVGQVx1NzZFRVx1NjgwN1x1OERFRlx1NUY4NFx1RkYxQWRpc3QvW2J1aWxkfGRldl0vW3BsYXRmb3JtXS9uYXRpdmVwbHVnaW5zXHJcbiAgICAgICAgLy8gYnVpbGRNb2RlOiAnYnVpbGQnIChcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODMpIFx1NjIxNiAnZGV2JyAoXHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzKVxyXG4gICAgICAgIC8vIHBsYXRmb3JtOiAnYXBwJyAoQXBwXHU1RTczXHU1M0YwKSBcdTYyMTZcdTUxNzZcdTRFRDZcdTVFNzNcdTUzRjBcdTY4MDdcdThCQzZcclxuICAgICAgICBjb25zdCBidWlsZE1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2J1aWxkJyA6ICdkZXYnXHJcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBwcm9jZXNzLmVudi5VTklfUExBVEZPUk0gfHwgJ2FwcCdcclxuICAgICAgICBjb25zdCB0YXJnZXRQYXRoID0gcGF0aC5yZXNvbHZlKFxyXG4gICAgICAgICAgcHJvamVjdFJvb3QsXHJcbiAgICAgICAgICAnZGlzdCcsXHJcbiAgICAgICAgICBidWlsZE1vZGUsXHJcbiAgICAgICAgICBwbGF0Zm9ybSxcclxuICAgICAgICAgIHRhcmdldERpck5hbWUsXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICAvLyBcdTY4QzBcdTY3RTVcdTZFOTBcdTc2RUVcdTVGNTVcdTY2MkZcdTU0MjZcdTVCNThcdTU3MjhcclxuICAgICAgICAvLyBcdTU5ODJcdTY3OUNcdTRFMERcdTVCNThcdTU3MjggbmF0aXZlcGx1Z2lucyBcdTc2RUVcdTVGNTVcdUZGMENcdThCRjRcdTY2MEVcdTk4NzlcdTc2RUVcdTZDQTFcdTY3MDlcdTRGN0ZcdTc1MjhcdTY3MkNcdTU3MzBcdTUzOUZcdTc1MUZcdTYzRDJcdTRFRjZcclxuICAgICAgICBjb25zdCBzb3VyY2VFeGlzdHMgPSBhd2FpdCBmcy5wYXRoRXhpc3RzKHNvdXJjZVBhdGgpXHJcbiAgICAgICAgaWYgKCFzb3VyY2VFeGlzdHMpIHtcclxuICAgICAgICAgIGlmICh2ZXJib3NlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtsb2dQcmVmaXh9IFx1NkU5MFx1NzZFRVx1NUY1NVx1NEUwRFx1NUI1OFx1NTcyOFx1RkYwQ1x1OERGM1x1OEZDN1x1NTkwRFx1NTIzNlx1NjRDRFx1NEY1Q2ApXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtsb2dQcmVmaXh9IFx1NkU5MFx1NzZFRVx1NUY1NVx1OERFRlx1NUY4NDogJHtzb3VyY2VQYXRofWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtsb2dQcmVmaXh9IFx1NTk4Mlx1OTcwMFx1NEY3Rlx1NzUyOFx1NjcyQ1x1NTczMFx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1RkYwQ1x1OEJGN1x1NTcyOFx1OTg3OVx1NzZFRVx1NjgzOVx1NzZFRVx1NUY1NVx1NTIxQlx1NUVGQSBuYXRpdmVwbHVnaW5zIFx1NzZFRVx1NUY1NWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtsb2dQcmVmaXh9IFx1NUU3Nlx1NjMwOVx1NzE2N1x1NUI5OFx1NjVCOVx1NjU4N1x1Njg2M1x1NjUzRVx1NTE2NVx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1NjU4N1x1NEVGNmApXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtsb2dQcmVmaXh9IFx1NTNDMlx1ODAwMzogaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi9wbHVnaW4vbmF0aXZlLXBsdWdpbi5odG1sYClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gXHU2OEMwXHU2N0U1XHU2RTkwXHU3NkVFXHU1RjU1XHU2NjJGXHU1NDI2XHU0RTNBXHU3QTdBXHJcbiAgICAgICAgLy8gXHU1OTgyXHU2NzlDXHU3NkVFXHU1RjU1XHU1QjU4XHU1NzI4XHU0RjQ2XHU0RTNBXHU3QTdBXHVGRjBDXHU0RTVGXHU4REYzXHU4RkM3XHU1OTBEXHU1MjM2XHU2NENEXHU0RjVDXHJcbiAgICAgICAgY29uc3Qgc291cmNlRmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKHNvdXJjZVBhdGgpXHJcbiAgICAgICAgaWYgKHNvdXJjZUZpbGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgaWYgKHZlcmJvc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2xvZ1ByZWZpeH0gXHU2RTkwXHU3NkVFXHU1RjU1XHU0RTNBXHU3QTdBXHVGRjBDXHU4REYzXHU4RkM3XHU1OTBEXHU1MjM2XHU2NENEXHU0RjVDYClcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2xvZ1ByZWZpeH0gXHU2RTkwXHU3NkVFXHU1RjU1XHU4REVGXHU1Rjg0OiAke3NvdXJjZVBhdGh9YClcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2xvZ1ByZWZpeH0gXHU4QkY3XHU1NzI4IG5hdGl2ZXBsdWdpbnMgXHU3NkVFXHU1RjU1XHU0RTJEXHU2NTNFXHU1MTY1XHU1MzlGXHU3NTFGXHU2M0QyXHU0RUY2XHU2NTg3XHU0RUY2YClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gXHU3ODZFXHU0RkREXHU3NkVFXHU2ODA3XHU3NkVFXHU1RjU1XHU1M0NBXHU1MTc2XHU3MjM2XHU3NkVFXHU1RjU1XHU1QjU4XHU1NzI4XHJcbiAgICAgICAgYXdhaXQgZnMuZW5zdXJlRGlyKHRhcmdldFBhdGgpXHJcblxyXG4gICAgICAgIGlmICh2ZXJib3NlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtsb2dQcmVmaXh9IFx1NUYwMFx1NTlDQlx1NTkwRFx1NTIzNiBVbmlBcHAgXHU2NzJDXHU1NzMwXHU1MzlGXHU3NTFGXHU2M0QyXHU0RUY2Li4uYClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2xvZ1ByZWZpeH0gXHU2RTkwXHU3NkVFXHU1RjU1OiAke3NvdXJjZVBhdGh9YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2xvZ1ByZWZpeH0gXHU3NkVFXHU2ODA3XHU3NkVFXHU1RjU1OiAke3RhcmdldFBhdGh9YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2xvZ1ByZWZpeH0gXHU2Nzg0XHU1RUZBXHU2QTIxXHU1RjBGOiAke2J1aWxkTW9kZX1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7bG9nUHJlZml4fSBcdTc2RUVcdTY4MDdcdTVFNzNcdTUzRjA6ICR7cGxhdGZvcm19YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2xvZ1ByZWZpeH0gXHU1M0QxXHU3M0IwICR7c291cmNlRmlsZXMubGVuZ3RofSBcdTRFMkFcdTUzOUZcdTc1MUZcdTYzRDJcdTRFRjZcdTY1ODdcdTRFRjYvXHU3NkVFXHU1RjU1YClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFx1NjI2N1x1ODg0Q1x1NjU4N1x1NEVGNlx1NTkwRFx1NTIzNlx1NjRDRFx1NEY1Q1xyXG4gICAgICAgIC8vIFx1NUMwNlx1NjU3NFx1NEUyQSBuYXRpdmVwbHVnaW5zIFx1NzZFRVx1NUY1NVx1NTkwRFx1NTIzNlx1NTIzMFx1Njc4NFx1NUVGQVx1OEY5M1x1NTFGQVx1NzZFRVx1NUY1NVxyXG4gICAgICAgIGF3YWl0IGZzLmNvcHkoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwge1xyXG4gICAgICAgICAgb3ZlcndyaXRlOiB0cnVlLCAvLyBcdTg5ODZcdTc2RDZcdTVERjJcdTVCNThcdTU3MjhcdTc2ODRcdTY1ODdcdTRFRjZcdUZGMENcdTc4NkVcdTRGRERcdTRGN0ZcdTc1MjhcdTY3MDBcdTY1QjBcdTcyNDhcdTY3MkNcclxuICAgICAgICAgIGVycm9yT25FeGlzdDogZmFsc2UsIC8vIFx1NTk4Mlx1Njc5Q1x1NzZFRVx1NjgwN1x1NjU4N1x1NEVGNlx1NUI1OFx1NTcyOFx1NEUwRFx1NjJBNVx1OTUxOVxyXG4gICAgICAgICAgcHJlc2VydmVUaW1lc3RhbXBzOiB0cnVlLCAvLyBcdTRGRERcdTYzMDFcdTY1ODdcdTRFRjZcdTc2ODRcdTY1RjZcdTk1RjRcdTYyMzNcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtsb2dQcmVmaXh9IFx1MjcwNSBVbmlBcHAgXHU2NzJDXHU1NzMwXHU1MzlGXHU3NTFGXHU2M0QyXHU0RUY2XHU1OTBEXHU1MjM2XHU1QjhDXHU2MjEwOiAke3NvdXJjZVBhdGh9IC0+ICR7dGFyZ2V0UGF0aH1gKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke2xvZ1ByZWZpeH0gXHU1REYyXHU2MjEwXHU1MjlGXHU1OTBEXHU1MjM2ICR7c291cmNlRmlsZXMubGVuZ3RofSBcdTRFMkFcdTY1ODdcdTRFRjYvXHU3NkVFXHU1RjU1XHU1MjMwXHU2Nzg0XHU1RUZBXHU3NkVFXHU1RjU1YClcclxuICAgICAgfVxyXG4gICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGAke2NvbmZpZy5sb2dQcmVmaXh9IFx1Mjc0QyBcdTU5MERcdTUyMzYgVW5pQXBwIFx1NjcyQ1x1NTczMFx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1NTkzMVx1OEQyNTpgLCBlcnJvcilcclxuICAgICAgICBjb25zb2xlLmVycm9yKGAke2NvbmZpZy5sb2dQcmVmaXh9IFx1OTUxOVx1OEJFRlx1OEJFNlx1NjBDNTpgLCBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFN0cmluZyhlcnJvcikpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgJHtjb25maWcubG9nUHJlZml4fSBcdThCRjdcdTY4QzBcdTY3RTVcdTZFOTBcdTc2RUVcdTVGNTVcdTY3NDNcdTk2NTBcdTU0OENcdTc4QzFcdTc2RDhcdTdBN0FcdTk1RjRgKVxyXG4gICAgICAgIC8vIFx1NEUwRFx1NjI5Qlx1NTFGQVx1OTUxOVx1OEJFRlx1RkYwQ1x1OTA3Rlx1NTE0RFx1NUY3MVx1NTRDRFx1NjU3NFx1NEUyQVx1Njc4NFx1NUVGQVx1OEZDN1x1N0EwQlx1RkYwQ1x1NEY0Nlx1NEYxQVx1OEJCMFx1NUY1NVx1OEJFNlx1N0VDNlx1NzY4NFx1OTUxOVx1OEJFRlx1NEZFMVx1NjA2RlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTIxQlx1NUVGQSBVbmlBcHAgXHU2NzJDXHU1NzMwXHU1MzlGXHU3NTFGXHU2M0QyXHU0RUY2XHU4RDQ0XHU2RTkwXHU1OTBEXHU1MjM2XHU2M0QyXHU0RUY2XHU3Njg0XHU0RkJGXHU2Mzc3XHU1MUZEXHU2NTcwXHJcbiAqXHJcbiAqIFx1OEZEOVx1NjYyRlx1NEUwMFx1NEUyQVx1NEZCRlx1NjM3N1x1NzY4NFx1NURFNVx1NTM4Mlx1NTFGRFx1NjU3MFx1RkYwQ1x1NzUyOFx1NEU4RVx1NUZFQlx1OTAxRlx1NTIxQlx1NUVGQVx1NjNEMlx1NEVGNlx1NUI5RVx1NEY4QlxyXG4gKiBcdTcyNzlcdTUyMkJcdTkwMDJcdTc1MjhcdTRFOEVcdTU3Mjggdml0ZS5jb25maWcudHMgXHU0RTJEXHU4RkRCXHU4ODRDXHU2NzYxXHU0RUY2XHU2MDI3XHU2M0QyXHU0RUY2XHU5MTREXHU3RjZFXHJcbiAqXHJcbiAqIFx1NEY3Rlx1NzUyOFx1NzkzQVx1NEY4Qlx1RkYxQVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIC8vIFx1NTcyOCB2aXRlLmNvbmZpZy50cyBcdTRFMkRcclxuICogcGx1Z2luczogW1xyXG4gKiAgIC8vIFx1NEVDNVx1NTcyOCBhcHAgXHU1RTczXHU1M0YwXHU0RTE0XHU1NDJGXHU3NTI4XHU2NUY2XHU3NTFGXHU2NTQ4XHJcbiAqICAgVU5JX1BMQVRGT1JNID09PSAnYXBwJ1xyXG4gKiAgICAgPyBjcmVhdGVDb3B5TmF0aXZlUmVzb3VyY2VzUGx1Z2luKFxyXG4gKiAgICAgICAgIFZJVEVfQ09QWV9OQVRJVkVfUkVTX0VOQUJMRSA9PT0gJ3RydWUnLFxyXG4gKiAgICAgICAgIHsgdmVyYm9zZTogbW9kZSA9PT0gJ2RldmVsb3BtZW50JyB9XHJcbiAqICAgICAgIClcclxuICogICAgIDogbnVsbCxcclxuICogXVxyXG4gKiBgYGBcclxuICpcclxuICogQHBhcmFtIGVuYWJsZSBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTYzRDJcdTRFRjZcdUZGMENcdTkwMUFcdTVFMzhcdTkwMUFcdThGQzdcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcdTYzQTdcdTUyMzZcclxuICogQHBhcmFtIG9wdGlvbnMgXHU1MTc2XHU0RUQ2XHU5MTREXHU3RjZFXHU5MDA5XHU5ODc5XHVGRjBDXHU0RTBEXHU1MzA1XHU1NDJCIGVuYWJsZSBcdTVDNUVcdTYwMjdcclxuICogQHJldHVybnMgVml0ZSBcdTYzRDJcdTRFRjZcdTVCRjlcdThDNjFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb3B5TmF0aXZlUmVzb3VyY2VzUGx1Z2luKFxyXG4gIGVuYWJsZTogYm9vbGVhbiA9IHRydWUsXHJcbiAgb3B0aW9uczogT21pdDxDb3B5TmF0aXZlUmVzb3VyY2VzT3B0aW9ucywgJ2VuYWJsZSc+ID0ge30sXHJcbik6IFBsdWdpbiB7XHJcbiAgcmV0dXJuIGNvcHlOYXRpdmVSZXNvdXJjZXMoeyBlbmFibGUsIC4uLm9wdGlvbnMgfSlcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXEFMTFxcXFxjb2RlXFxcXFZzQ29kZVxcXFxFVFBcXFxcdml0ZS1wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxBTExcXFxcY29kZVxcXFxWc0NvZGVcXFxcRVRQXFxcXHZpdGUtcGx1Z2luc1xcXFxzeW5jLW1hbmlmZXN0LXBsdWdpbnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0FMTC9jb2RlL1ZzQ29kZS9FVFAvdml0ZS1wbHVnaW5zL3N5bmMtbWFuaWZlc3QtcGx1Z2lucy50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJ1xyXG5cclxuaW50ZXJmYWNlIE1hbmlmZXN0VHlwZSB7XHJcbiAgJ3BsdXMnPzoge1xyXG4gICAgZGlzdHJpYnV0ZT86IHtcclxuICAgICAgcGx1Z2lucz86IFJlY29yZDxzdHJpbmcsIGFueT5cclxuICAgIH1cclxuICB9XHJcbiAgJ2FwcC1wbHVzJz86IHtcclxuICAgIGRpc3RyaWJ1dGU/OiB7XHJcbiAgICAgIHBsdWdpbnM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzeW5jTWFuaWZlc3RQbHVnaW4oKTogUGx1Z2luIHtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ3N5bmMtbWFuaWZlc3QnLFxyXG4gICAgYXBwbHk6ICdidWlsZCcsXHJcbiAgICBlbmZvcmNlOiAncG9zdCcsXHJcbiAgICB3cml0ZUJ1bmRsZToge1xyXG4gICAgICBvcmRlcjogJ3Bvc3QnLFxyXG4gICAgICBoYW5kbGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHNyY01hbmlmZXN0UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLi9zcmMvbWFuaWZlc3QuanNvbicpXHJcbiAgICAgICAgY29uc3QgZGlzdEFwcFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy4vZGlzdC9kZXYvYXBwL21hbmlmZXN0Lmpzb24nKVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgLy8gXHU4QkZCXHU1M0Q2XHU2RTkwXHU2NTg3XHU0RUY2XHJcbiAgICAgICAgICBjb25zdCBzcmNNYW5pZmVzdCA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHNyY01hbmlmZXN0UGF0aCwgJ3V0ZjgnKSkgYXMgTWFuaWZlc3RUeXBlXHJcblxyXG4gICAgICAgICAgLy8gXHU3ODZFXHU0RkREXHU3NkVFXHU2ODA3XHU3NkVFXHU1RjU1XHU1QjU4XHU1NzI4XHJcbiAgICAgICAgICBjb25zdCBkaXN0QXBwRGlyID0gcGF0aC5kaXJuYW1lKGRpc3RBcHBQYXRoKVxyXG4gICAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKGRpc3RBcHBEaXIpKSB7XHJcbiAgICAgICAgICAgIGZzLm1rZGlyU3luYyhkaXN0QXBwRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFx1OEJGQlx1NTNENlx1NzZFRVx1NjgwN1x1NjU4N1x1NEVGNlx1RkYwOFx1NTk4Mlx1Njc5Q1x1NUI1OFx1NTcyOFx1RkYwOVxyXG4gICAgICAgICAgbGV0IGRpc3RNYW5pZmVzdDogTWFuaWZlc3RUeXBlID0ge31cclxuICAgICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGRpc3RBcHBQYXRoKSkge1xyXG4gICAgICAgICAgICBkaXN0TWFuaWZlc3QgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhkaXN0QXBwUGF0aCwgJ3V0ZjgnKSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBcdTU5ODJcdTY3OUNcdTZFOTBcdTY1ODdcdTRFRjZcdTVCNThcdTU3MjggcGx1Z2luc1xyXG4gICAgICAgICAgaWYgKHNyY01hbmlmZXN0WydhcHAtcGx1cyddPy5kaXN0cmlidXRlPy5wbHVnaW5zKSB7XHJcbiAgICAgICAgICAgIC8vIFx1Nzg2RVx1NEZERFx1NzZFRVx1NjgwN1x1NjU4N1x1NEVGNlx1NEUyRFx1NjcwOVx1NUZDNVx1ODk4MVx1NzY4NFx1NUJGOVx1OEM2MVx1N0VEM1x1Njc4NFxyXG4gICAgICAgICAgICBpZiAoIWRpc3RNYW5pZmVzdC5wbHVzKVxyXG4gICAgICAgICAgICAgIGRpc3RNYW5pZmVzdC5wbHVzID0ge31cclxuICAgICAgICAgICAgaWYgKCFkaXN0TWFuaWZlc3QucGx1cy5kaXN0cmlidXRlKVxyXG4gICAgICAgICAgICAgIGRpc3RNYW5pZmVzdC5wbHVzLmRpc3RyaWJ1dGUgPSB7fVxyXG5cclxuICAgICAgICAgICAgLy8gXHU1OTBEXHU1MjM2IHBsdWdpbnMgXHU1MTg1XHU1QkI5XHJcbiAgICAgICAgICAgIGRpc3RNYW5pZmVzdC5wbHVzLmRpc3RyaWJ1dGUucGx1Z2lucyA9IHNyY01hbmlmZXN0WydhcHAtcGx1cyddLmRpc3RyaWJ1dGUucGx1Z2luc1xyXG5cclxuICAgICAgICAgICAgLy8gXHU1MTk5XHU1MTY1XHU2NkY0XHU2NUIwXHU1NDBFXHU3Njg0XHU1MTg1XHU1QkI5XHJcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZGlzdEFwcFBhdGgsIEpTT04uc3RyaW5naWZ5KGRpc3RNYW5pZmVzdCwgbnVsbCwgMikpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcdTI3MDUgTWFuaWZlc3QgcGx1Z2lucyBcdTU0MENcdTZCNjVcdTYyMTBcdTUyOUYnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1Mjc0QyBcdTU0MENcdTZCNjUgbWFuaWZlc3QgcGx1Z2lucyBcdTU5MzFcdThEMjU6JywgZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UCxPQUFPQSxXQUFVO0FBQy9RLE9BQU9DLGNBQWE7QUFDcEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sbUJBQW1CO0FBRTFCLE9BQU8sZ0JBQWdCO0FBRXZCLE9BQU8saUJBQWlCO0FBRXhCLE9BQU8sY0FBYztBQUdyQixPQUFPLGlCQUFpQjtBQU14QixPQUFPLHFCQUFxQjtBQUU1QixPQUFPLGVBQWU7QUFDdEIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLGlCQUFpQjs7O0FDM0JzUSxTQUFTLFlBQVk7QUFDblQsT0FBTyxRQUFRO0FBQ2YsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sYUFBYTtBQVFwQixTQUFTLGNBQWMsTUFBTSxPQUFPLFVBQVUsQ0FBQyxH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QUFTLGVBQWUsRUFBRTtBQUFBO0FBQUEsTUFFdkMsT0FBTyxLQUFLLE1BQU0scUJBQXFCLElBQ25DO0FBQUEsUUFDRSxDQUFDLHFCQUFxQixHQUFHO0FBQUEsVUFDdkIsUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBO0FBQUEsVUFFZCxTQUFTLENBQUFDLFVBQ1BBLE1BQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxxQkFBcUIsRUFBRSxHQUFHLEVBQUU7QUFBQSxRQUM1RDtBQUFBLE1BQ0YsSUFDQTtBQUFBLElBQ047QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU0sd0JBQXdCLFNBQVMsQ0FBQyxXQUFXLFVBQVUsSUFBSSxDQUFDO0FBQUEsSUFDcEU7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLFdBQVc7QUFBQTtBQUFBO0FBQUEsTUFHWCxRQUFRO0FBQUE7QUFBQSxNQUVSLFFBQVEsU0FBUyxnQkFBZ0IsUUFBUTtBQUFBLElBQzNDO0FBQUEsRUFDRixDQUFDO0FBQ0gsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCIsICJwcm9jZXNzIiwgInBhdGgiLCAicHJvY2VzcyIsICJmcyIsICJwcm9jZXNzIiwgInBhdGgiLCAiZnMiLCAiZnMiLCAicGF0aCIsICJwcm9jZXNzIiwgInBhdGgiLCAicHJvY2VzcyIsICJmcyIsICJwcm9jZXNzIiwgInBhdGgiXQp9Cg==
