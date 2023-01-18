import { defineConfig } from 'dumi';
import path from 'path';

let base: string | undefined;
let publicPath: string | undefined;

if (process.env.DUMI_ENV) {
  process.env.NODE_ENV = process.env.DUMI_ENV;
}

// console.log(process.env.NODE_ENV);
// Github Pages 部署时需要更换为自己的仓库名
if (process.env.NODE_ENV === 'production' && process.env.PREVIEW !== '1') {
  base = '/fantasy-ui-react/';
  publicPath = '/fantasy-ui-react/';
}

export default defineConfig({
  base,
  publicPath,
  title: 'Fantasy UI',
  outputPath: 'doc-site',
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
  },
  links: [
    {rel: "icon", href: "/fantasy955logo2.png"},
  ],
  logo: "/fantasy955logo2.png",
  exportStatic: {},
  forkTSChecker: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@fantasy955/fantasy-ui-react',
        libraryDirectory: '',
        customStyleName: (name: string) =>
          path.resolve(__dirname, `src/${name}/style/index.ts`),
      },
    ],
  ],
});
