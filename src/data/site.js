/**
 * 站点内容集中在这里，改文案不用翻组件。
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

export const meta = {
  name: 'Anomaly',
  cnName: '异象',
  tagline: '稳定、灵活、开放的《异环》插件平台',
  qq: '1037114140',
  license: 'AGPL-3.0-only'
}

/** 下载渠道：GitHub 为官方发布页，网盘为镜像分流（链接自带提取码） */
export const downloads = [
  {
    key: 'github',
    label: 'GitHub 下载',
    href: links.releases,
    note: '官方发布页，含 runtime / sdk / tools'
  },
  {
    key: 'quark',
    label: '夸克网盘',
    href: 'https://pan.quark.cn/s/81a25f50de52?pwd=gGdV',
    note: '提取码 gGdV'
  },
  {
    key: 'baidu',
    label: '百度网盘',
    href: 'https://pan.baidu.com/s/1x5PpiYT8GM2z0_axmcAJ9w?pwd=hfs5',
    note: '提取码 hfs5'
  }
]

/** 首页上的 Liquid Glass 界面预告（对应 /promo 页面） */
export const promoTeaser = {
  eyebrow: 'Anomaly UI · 全新设计',
  title: '透过玻璃，看见你的世界。',
  text: '实时折射、柔和高光、会流动的选择镜片。一套为游戏内覆盖层重新打造的 Liquid Glass 界面，已在界面预览页开放逐项对比与控件试玩。',
  href: 'promo/',
  image: 'promo/img/new-plugins.webp',
  imageAlt: 'Liquid Glass 版插件页',
  /** 首屏公告条 */
  announce: {
    badge: 'NEW',
    title: 'Anomaly UI · Liquid Glass 全新界面',
    text: '实时折射、流动镜片，新旧版逐项对比',
    cta: '查看界面预览'
  }
}

export const features = [
  {
    icon: '🚀',
    title: '安装与更新',
    text: '解压 Runtime，打开启动器选中 HTGame.exe 所在目录即可安装，后续版本也能直接更新，用户配置与自定义插件不会被覆盖。'
  },
  {
    icon: '🪟',
    title: '游戏内管理界面',
    text: '按 Insert 呼出中文或英文界面，统一管理插件的启用、停用、重载和设置，并支持配色与背景布局自定义。'
  },
  {
    icon: '🌐',
    title: '第三方插件下载',
    text: '在 Plugins > 可用 中浏览安装社区插件，在 更新 中升级，也可以自行添加可信插件源。'
  },
  {
    icon: '🔌',
    title: '实用内建插件',
    text: '坐标显示、实体 ESP、相机工具、伤害仪表盘、资源自动拾取等数十个插件随包提供，全部默认关闭，按需启用。'
  },
  {
    icon: '🧩',
    title: '开放插件框架',
    text: '纯 C ABI v1 SDK 与统一 V1 服务，插件工程无需依赖 Runtime 源码或 C++ ABI。'
  },
  {
    icon: '🔄',
    title: '完整插件生命周期',
    text: 'Manifest、SemVer、依赖与 capability 校验、包校验、文件监控热重载和失败回滚。'
  },
  {
    icon: '🧬',
    title: 'UE5 / NTE 适配',
    text: '经过校验的 UE5 符号解析，以及会话、玩家、相机、实体、地图地标、传送和载具等高层服务；条件不满足时按功能降级。'
  },
  {
    icon: '🔍',
    title: '内存分析与开发工具',
    text: '查看进程模块、PE 节区和内存区域，提供字节签名扫描与离线 TestHost 等开发工具。'
  },
  {
    icon: '🛡️',
    title: '故障隔离',
    text: '单个插件异常后会被隔离；新版本加载失败时自动回滚到上一代，主界面的诊断页直接给出原因。'
  }
]

/** 内建插件：name 显示名，text 说明，tags 搜索关键词 */
export const plugins = [
  { name: 'Coordinate Display', text: '显示玩家坐标、会话状态与采样指标。', tags: '坐标 会话 调试 采样' },
  { name: 'Entity ESP', text: '绘制实体边界框与标签。', tags: 'esp 实体 透视 绘制' },
  { name: 'Deserted', text: '阻止人流和车流生成，不影响站桩 NPC。', tags: '场景 人流 车流 npc' },
  {
    name: 'Pink Paw Heist ESP',
    text: '显示粉爪大劫案的战利品与撤离点，支持价值筛选、银行循环拾取、次数限制及入场动画跳过。',
    tags: 'esp 粉爪 大劫案 撤离点 银行 拾取'
  },
  {
    name: 'NTE Vehicle',
    text: '查看、召唤和调校当前载具，支持载具目录、显示名称、速度、扭矩、车轮摩擦及非玩家载具控制。',
    tags: '载具 车辆 速度 扭矩 开发者'
  },
  { name: '999夜脚本', text: '在 999 夜赤龙古堡按指定次数循环刷怪：营地刷新、双战斗点自动战斗。', tags: '999夜 刷怪 自动 战斗 脚本' },
  { name: 'NTE Damage Dashboard', text: '实时统计玩家角色伤害、命中、暴击、队伍与技能分布及最近命中记录。', tags: '伤害 统计 仪表盘 暴击 队伍' },
  { name: 'Custom UID', text: '自定义客户端界面上显示的 UID。', tags: 'uid 界面 自定义' },
  { name: '换肤器 Lite', text: '提供角色配饰、滑翔翼、觉醒外观预览与自定义车牌。', tags: '换肤 外观 配饰 滑翔翼 车牌' },
  { name: 'Camera Tools', text: '增加视距、调整视角 FOV 和自由相机视角，并可选按自由相机位置加载场景。', tags: '相机 视距 fov 自由相机' },
  { name: 'CameraBlurFix', text: '取消抬头时角色身上的虚化效果。', tags: '相机 虚化 画面' },
  { name: 'Better Pose', text: '调整角色动作速率、暂停与位移缩放，编辑关节姿态，并可导入 MMD 动作与镜头。', tags: '动作 姿态 mmd 骨骼 关节' },
  { name: 'HiFi Vehicle Music', text: '使用本地无损曲库替换车载音乐，支持 WASAPI、DirectSound 与 ASIO。', tags: '音乐 车载 wasapi asio 音频' },
  { name: 'Quick Ultimate', text: '按住 Alt+1/2/3/4，自动切换角色并持续发送 Q，松开后停止。', tags: '连招 终极 快捷键 切换角色' },
  { name: 'Resource Auto Pickup', text: '读取资源点表，按传送或寻路自动拾取角色经验书、家具、食物、钱包等资源点。', tags: '资源 自动 拾取 传送 寻路' },
  { name: 'Combat Resource Points', text: '逐个前往打怪宝箱与异像家具材料点自动战斗，完成后标记并本地缓存。', tags: '资源 战斗 宝箱 自动' },
  { name: 'Clone Enter', text: '按副本与难度自动进本、战斗、领奖并退出，支持循环执行。', tags: '副本 自动 进本 领奖' },
  { name: 'AutoFish', text: '自动抛竿、提竿与遛鱼，支持连续钓鱼、鱼饵补购及按阈值卖鱼。', tags: '钓鱼 自动 鱼饵' },
  { name: 'Free Fly', text: '自由飞行与穿墙：WASD 移动、空格上升、Ctrl 下降，方向跟随视角，开关快捷键可自定义。', tags: '飞行 穿墙 移动 探索' },
  { name: 'WalletCollector', text: '扫描钱包刷新点，按目标数量规划路线并自动拾取。', tags: '钱包 自动 路线 拾取' },
  { name: 'Model Scale', text: '缩放本地角色网格，不影响移动或碰撞。', tags: '模型 缩放 网格' },
  { name: 'UI Buttons', text: '列出可点击的游戏 UI 按钮，并可通过界面服务执行点击。', tags: 'ui 按钮 点击 开发' },
  { name: 'Jelly', text: '让镜头内的人物、载具与动态模型持续挤压拉伸，可调强度、频率、停止间隔与自转。', tags: '趣味 挤压 拉伸 模型' }
]

export const marketPages = [
  { page: '可用', desc: '搜索插件并下载安装' },
  { page: '更新', desc: '查看已安装插件的新版本' },
  { page: '已安装', desc: '启用、停用、重载或卸载插件' },
  { page: '第三方插件', desc: '添加、停用或移除插件源' }
]

const channelLinks = downloads
  .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`)
  .join('、')

export const steps = [
  {
    title: '下载并安装 Runtime',
    html: `从 ${channelLinks} 任选一个渠道下载
      <code>Anomaly-&lt;版本号&gt;-runtime.zip</code>，<strong>完整解压</strong>到一个普通文件夹（不要只拿出启动器），
      运行 <code>AnomalyLauncher.exe</code>，在<b>代理安装</b>页面选择直接包含 <code>HTGame.exe</code> 的文件夹后点击<b>安装</b>。`
  },
  {
    title: '正常启动游戏',
    html: `像平时一样启动游戏，进入后按 <kbd>Insert</kbd> 呼出管理界面。成功启动会生成
      <code>anomaly-runtime.log</code> 与 <code>anomaly-platform.log</code>。`
  },
  {
    title: '启用内建插件',
    html: `打开 <b>Plugins &gt; 已安装</b>，选中插件后启用。内建插件默认全部关闭。`
  },
  {
    title: '安装社区插件',
    html: `打开 <b>Plugins &gt; 可用</b> 点击<b>安装</b>，回到<b>已安装</b>启用；有新版本时在
      <b>Plugins &gt; 更新</b> 中升级。`
  }
]

export const faqs = [
  {
    q: '按 Insert 没反应？',
    a: `在 <b>Anomaly Launcher &gt; 启动设置</b> 中修改主窗口快捷键；也可编辑 <code>anomaly.ini</code> 的
      <code>[Platform] ToggleKey</code>（Win32 虚拟键码，默认 <code>45</code> = <code>VK_INSERT</code>）。`
  },
  {
    q: '「可用」里没有插件？',
    a: `到 <b>Plugins &gt; 第三方插件</b> 确认总开关和插件源都已启用，再回到<b>可用</b>点击刷新。`
  },
  {
    q: '第三方插件安装失败？',
    a: `常见原因是下载地址不可用、ZIP 结构不对，或插件 ID、版本、游戏和 API 与列表不一致。
      界面会显示失败原因，详细记录在 <code>Anomaly\\anomaly-platform.log</code>。`
  },
  {
    q: '插件加载失败？',
    a: `确认它是含 <code>manifest.json</code> 的目录包；根级 DLL 与无 Manifest 的目录不会被加载。`
  },
  {
    q: '坐标 / 实体等功能显示不可用？',
    a: `通常是活动 Profile 中缺少所需签名，或符号、布局校验未通过。见
      <a href="${links.profiles}" target="_blank" rel="noreferrer">NTE Build Profile</a>。`
  },
  {
    q: '和 RE-UE4SS 冲突吗？',
    a: `代理文件名同为 <code>dwmapi.dll</code>，两者不能共用同一目录；Anomaly 是独立入口，不加载 <code>UE4SS.dll</code>。`
  }
]

export const docCards = [
  { icon: '📘', title: '用户文档', text: '安装、内建与第三方插件、更新、配置和故障排查。', url: links.userGuide },
  { icon: '🛠️', title: '开发者文档', text: '插件开发与发布、从源码构建、架构和贡献流程。', url: links.developerGuide },
  { icon: '📑', title: 'API 参考', text: '完整的纯 C ABI v1：生命周期、全部服务表、Manifest 与 capability。', url: links.apiReference }
]

export const navItems = [
  { href: '#features', label: '特性' },
  { href: '#plugins', label: '内建插件' },
  { href: '#market', label: '第三方插件' },
  { href: '#install', label: '快速上手' },
  { href: '#faq', label: '常见问题' },
  { href: '#docs', label: '文档' },
  { href: 'promo/', label: '界面预览', page: 'promo' }
]

/**
 * 当前页面到站点根目录的相对前缀（由各入口 HTML 的 <meta name="site-root"> 声明）：
 * 首页是 './'，/promo/ 页面是 '../'。借助它，public 下的资源在任意深度页面都能正确引用。
 */
export const pageRoot =
  (typeof document !== 'undefined' &&
    document.querySelector('meta[name="site-root"]')?.getAttribute('content')) ||
  import.meta.env.BASE_URL

/** 引用 public/ 下的资源：asset('logo.png')、asset('promo/img/new-plugins.webp') */
export const asset = (name) => `${pageRoot}${name}`

