/**
 * 与语言无关的链接常量（各语言共用同一批 URL），供各语言字典引用。
 * 所有链接默认指向 AnomalyNTE/Anomaly 主仓库，路径以 docs/ 目录的当前结构为准。
 */

const REPO = 'https://github.com/AnomalyNTE/Anomaly'
const BLOB = `${REPO}/blob/main`

export const links = {
  repo: REPO,
  releases: `${REPO}/releases/latest`,
  issues: `${REPO}/issues`,
  discord: 'https://discord.gg/tfeh8QQ9Vy',
  license: `${BLOB}/LICENSE`,
  notice: `${BLOB}/NOTICE`,
  docs: `${BLOB}/docs/README.md`,
  userGuide: `${BLOB}/docs/user-guide/README.md`,
  developerGuide: `${BLOB}/docs/developer-guide/README.md`,
  apiReference: `${BLOB}/docs/api-reference/README.md`,
  installation: `${BLOB}/docs/user-guide/installation.md`,
  quickstart: `${BLOB}/docs/user-guide/quickstart.md`,
  configuration: `${BLOB}/docs/user-guide/configuration.md`,
  builtinPlugins: `${BLOB}/docs/user-guide/built-in-plugins.md`,
  thirdParty: `${BLOB}/docs/user-guide/third-party-plugins.md`,
  theme: `${BLOB}/docs/user-guide/theme.md`,
  diagnosticsCli: `${BLOB}/docs/user-guide/diagnostics-cli.md`,
  troubleshooting: `${BLOB}/docs/user-guide/troubleshooting.md`,
  profiles: `${BLOB}/docs/user-guide/nte-profiles.md`,
  architecture: `${BLOB}/docs/developer-guide/architecture.md`,
  building: `${BLOB}/docs/developer-guide/building.md`,
  pluginDevelopment: `${BLOB}/docs/developer-guide/plugin-development.md`,
  pluginDistribution: `${BLOB}/docs/developer-guide/plugin-distribution.md`,
  contributing: `${BLOB}/docs/developer-guide/contributing.md`,
  examples: `${BLOB}/examples/README.md`,
  template: 'https://github.com/AnomalyNTE/Anomaly-Plugin-Template',
  fairPlay: 'https://yh.wanmei.com/news/gamebroad/20260202/260701.html',
  crediting: [
    { name: 'Dear ImGui', url: 'https://github.com/ocornut/imgui' },
    { name: 'MinHook', url: 'https://github.com/TsudaKageyu/minhook' },
    { name: 'nlohmann/json', url: 'https://github.com/nlohmann/json' },
    {
      name: 'JSON schema validator',
      url: 'https://github.com/pboettch/json-schema-validator'
    },
    { name: 'BLAKE3', url: 'https://github.com/BLAKE3-team/BLAKE3' },
    { name: 'miniz', url: 'https://github.com/richgel999/miniz' },
    { name: 'miniaudio', url: 'https://github.com/mackron/miniaudio' },
    { name: 'RtAudio', url: 'https://github.com/thestk/rtaudio' },
    { name: "Monkey's Audio SDK", url: 'https://www.monkeysaudio.com/' },
    { name: 'dsd2pcm', url: 'https://github.com/GiangLH/dsd2pcm' },
    { name: 'libarchive', url: 'https://github.com/libarchive/libarchive' },
    { name: 'XZ Utils liblzma', url: 'https://github.com/tukaani-project/xz' },
    { name: 'zlib', url: 'https://zlib.net/' },
    { name: 'Noto Sans CJK', url: 'https://github.com/notofonts/noto-cjk' },
    { name: 'Dalamud', url: 'https://github.com/goatcorp/Dalamud' }
  ]
}

/** 下载渠道（URL 与语言无关，label / note 放在各语言字典里） */
export const downloadChannels = [
  { key: 'github', href: links.releases },
  {
    key: 'quark',
    href: 'https://pan.quark.cn/s/81a25f50de52?pwd=gGdV',
    code: 'gGdV'
  },
  {
    key: 'baidu',
    href: 'https://pan.baidu.com/s/1x5PpiYT8GM2z0_axmcAJ9w?pwd=hfs5',
    code: 'hfs5'
  }
]

/**
 * 赞助入口（语言无关）：爱发电 + Ko-fi 两个按钮。
 * 爱发电原来的 200×60 位图按钮会随宽度缩放，和 Ko-fi 按钮高度对不齐，
 * 所以只保留从官方图里抠出来的杯子图标（public/afdian-icon.png，已键控透明），
 * 按钮本身用 CSS 重建，尺寸和 Ko-fi 共用一套变量。
 * Widget_2.js 在入口 HTML 里同步加载，Ko-fi 按钮由 HeroSection 用 init + getHTML 渲染。
 */
export const support = {
  afdian: 'https://afdian.com/a/bananachicken',
  afdianIcon: 'afdian-icon.png',
  kofi: 'https://ko-fi.com/bananachicken'
}
