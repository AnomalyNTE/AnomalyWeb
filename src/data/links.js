/**
 * 与语言无关的链接常量（各语言共用同一批 URL），供各语言字典引用。
 * 所有链接默认指向 AnomalyNTE/Anomaly 主仓库。
 */

const REPO = 'https://github.com/AnomalyNTE/Anomaly'
const BLOB = `${REPO}/blob/main`

export const links = {
  repo: REPO,
  releases: `${REPO}/releases/latest`,
  issues: `${REPO}/issues`,
  license: `${BLOB}/LICENSE`,
  notice: `${BLOB}/NOTICE`,
  userGuide: `${BLOB}/docs/user-guide/README.md`,
  developerGuide: `${BLOB}/docs/developer-guide/README.md`,
  apiReference: `${BLOB}/docs/api-reference/README.md`,
  architecture: `${BLOB}/docs/developer-guide/architecture.md`,
  thirdParty: `${BLOB}/docs/user-guide/third-party-plugins.md`,
  troubleshooting: `${BLOB}/docs/user-guide/troubleshooting.md`,
  profiles: `${BLOB}/docs/user-guide/nte-profiles.md`,
  template: 'https://github.com/AnomalyNTE/Anomaly-Plugin-Template',
  fairPlay: 'https://yh.wanmei.com/news/gamebroad/20260202/260701.html',
  crediting: [
    { name: 'Dear ImGui', url: 'https://github.com/ocornut/imgui' },
    { name: 'MinHook', url: 'https://github.com/TsudaKageyu/minhook' },
    { name: 'nlohmann/json', url: 'https://github.com/nlohmann/json' },
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

/** 首页界面预告配图（/promo/ 里其余截图仍按 key 拼路径） */
export const promoAssets = {
  hero: 'promo/img/new-plugins.webp'
}
