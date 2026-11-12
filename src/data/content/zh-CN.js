/**
 * 简体中文文案（站点根目录 /）。
 * 与 en.js 保持完全相同的结构 —— 加字段时两边一起加，缺字段会直接渲染成空白。
 *
 * 内容以 AnomalyNTE/Anomaly 的当前文档为准（README + docs/，2026-11 同步）：
 * 内建插件清单取自各插件目录的 manifest.json 与 locales/zh-CN.json，
 * 安装、配置与排错措辞取自 docs/user-guide/{installation,quickstart,troubleshooting,theme}.md。
 */

import { downloadChannels, links } from '../links.js'

const channelLabels = {
  github: { label: 'GitHub 下载', note: '官方发布页，含 runtime / sdk / tools' },
  quark: { label: '夸克网盘', note: '提取码 gGdV' },
  baidu: { label: '百度网盘', note: '提取码 hfs5' }
}

const downloads = downloadChannels.map((channel) => ({ ...channel, ...channelLabels[channel.key] }))

const channelLinks = downloads
  .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`)
  .join('、')

export default {
  locale: 'zh',
  htmlLang: 'zh-CN',
  /** 语言按钮上显示的目标语言名 */
  switchLabel: 'English',
  switchTitle: '切换到英文页面',

  meta: {
    name: 'Anomaly',
    cnName: '异象',
    tagline: '稳定、灵活、开放的《异环》插件平台',
    qq: '1037114140',
    license: 'AGPL-3.0-only'
  },

  ui: {
    skip: '跳到主要内容',
    navAria: '主导航',
    themeTitle: '切换主题',
    themeToDark: '切换到深色主题',
    themeToLight: '切换到浅色主题'
  },

  nav: [
    { href: '#features', label: '特性' },
    { href: '#plugins', label: '内建插件' },
    { href: '#market', label: '第三方插件' },
    { href: '#install', label: '快速上手' },
    { href: '#faq', label: '常见问题' },
    { href: '#docs', label: '文档' },
    { page: 'promo', label: '界面预览' }
  ],

  downloads,

  hero: {
    support: {
      label: '用着顺手的话，可以请我喝杯奶茶：',
      afdian: '在爱发电赞助 Anomaly',
      kofi: '在 Ko-fi 赞助 Anomaly',
      afdianLabel: '在爱发电支持我',
      kofiLabel: '在 Ko-fi 支持我'
    }
  },

  features: {
    title: '核心特性',
    sub: '从安装、游戏内管理到插件框架，全链路打通。',
    items: [
      {
        icon: '🚀',
        title: '安装与更新',
        text: '解压 Runtime，打开启动器用注入模式直接附加到游戏，不往游戏目录写任何文件；也保留代理模式，后续版本能在启动器里直接更新。'
      },
      {
        icon: '🪟',
        title: '游戏内管理界面',
        text: '按 Insert 呼出中文或英文界面，统一管理插件的启用、停用、重载和设置，界面外观、配色与背景布局都能自定义。'
      },
      {
        icon: '🌐',
        title: '第三方插件下载',
        text: '在 Plugins > 可用 中浏览安装社区插件，在 更新 中升级，在 已安装 中停用或卸载，也可以自行添加可信的 HTTPS 插件源。'
      },
      {
        icon: '🔥',
        title: '模组热加载',
        text: '热加载模式下启用、替换或卸载 Mod 都即时生效，外观原地刷新；无法原地重绑的资源用 Mod 管理插件的「重新加载世界」兜底，全程不需要重启游戏。'
      },
      {
        icon: '🔌',
        title: '实用的内建插件',
        text: '{plugins} 个面向用户的内建插件随运行包提供，覆盖坐标与血量显示、实体 ESP、战斗统计、相机与反虚化、换肤与模型替换、载具、场景切换、音频替换与各类自动化脚本，全部默认关闭、按需启用。'
      },
      {
        icon: '🤖',
        title: '自动化任务',
        text: '资源点拾取、打怪资源点、自动副本、自动捡钱包、999 夜脚本、自动钓鱼、自动出租车与自动抓娃娃支持自动传送、战斗或拾取，随时可在插件窗口里停下。'
      },
      {
        icon: '🧩',
        title: '开放插件框架',
        text: '纯 C ABI v1 SDK 与统一 V1 服务，插件工程无需依赖 Runtime 源码或 C++ ABI；插件 id 统一为 <作者>.<插件名>，不会和别人的包撞名。'
      },
      {
        icon: '🔍',
        title: '内存分析与开发工具',
        text: '查看进程模块、PE 节区和内存区域，提供字节签名扫描、一键内存转储、诊断 CLI 与离线 TestHost 等开发工具。'
      },
    ]
  },

  launcherShot: {
    image: 'launcher-zh.png',
    alt: 'Anomaly 启动器',
    caption: 'Anomaly 启动器'
  },

  pluginsSection: {
    title: '内建插件',
    sub: '随运行包提供，默认全部关闭。输入关键词可筛选，例如「召唤」「相机」「ESP」。',
    placeholder: '搜索内建插件…',
    searchAria: '搜索内建插件',
    empty: '没有匹配的内建插件，换个关键词试试。',
    groups: {
      user: '面向用户'
    },
    groupNotes: {
      user: '随发布版运行包提供，在 Plugins > 已安装 里逐个启用即可。'
    }
  },

  plugins: [
    {
      group: 'user',
      name: '坐标显示',
      text: '显示玩家与相机坐标、会话状态和快照采样指标。',
      tags: '坐标 会话 采样 nteposition coordinate'
    },
    {
      group: 'user',
      name: '实体边界框 ESP',
      text: '为 NTE 实体绘制可配置的 2D／3D 边界框与标签。',
      tags: 'esp 实体 边界框 标签 entityesp'
    },
    {
      group: 'user',
      name: '血量显示',
      text: '独立绘制怪物与角色的血条及当前／最大生命值，可调距离、尺寸与文字。',
      tags: '血量 血条 生命值 healthdisplay'
    },
    {
      group: 'user',
      name: 'NTE 战斗统计',
      text: 'FF14 风格 DPS 面板，采集在插件内完成，呈现交给随包的独立 Overlay 进程。',
      tags: 'dps 战斗统计 伤害 overlay combattracker'
    },
    {
      group: 'user',
      name: '状态条',
      text: '帧率、1% 低帧率、时间、内存，以及 CPU／GPU 的占用、频率、功耗与温度；可独立开关、六个屏幕位置与间距调整。',
      tags: '状态条 帧率 cpu gpu 监控 statusbar'
    },
    {
      group: 'user',
      name: 'UI 按钮',
      text: '分类列出游戏内 UI 按钮，并直接调用按钮的点击事件，不模拟鼠标。',
      tags: 'ui 按钮 点击 uibuttons'
    },
    {
      group: 'user',
      name: '反虚化',
      text: '取消角色与 NPC／人群实体的镜头虚化，同时禁用抬头与近距离镜头隐藏。',
      tags: '相机 虚化 camerablurfix'
    },
    {
      group: 'user',
      name: '相机工具',
      text: '视距与视角 FOV 调整、禁止强制转视角、自由相机，以及按自由相机位置加载场景。',
      tags: '相机 视距 fov 自由相机 cameratools'
    },
    {
      group: 'user',
      name: '角色模型缩放',
      text: '按倍率缩放本地角色模型，不改动移动与碰撞。',
      tags: '模型 缩放 网格 modelscale'
    },
    {
      group: 'user',
      name: '换肤器 Lite',
      text: '角色配饰、滑翔翼、觉醒外观预览、自定义车牌，以及当前驾驶载具的外观。',
      tags: '换肤 外观 配饰 滑翔翼 车牌 skinchanger'
    },
    {
      group: 'user',
      name: '奶龙',
      text: '用 UE 原生模型替换玩家与附近 NPC，36 骨源蒙皮，超出距离自动还原。',
      tags: '换装 模型 奶龙 nailong'
    },
    {
      group: 'user',
      name: '果冻',
      text: '让镜头内的人物、载具与动态模型持续挤压拉伸，可调强度、频率、停止间隔与自转。',
      tags: '趣味 挤压 拉伸 模型 jelly'
    },
    {
      group: 'user',
      name: '更好的动作',
      text: '调整动作速率、暂停与位移缩放，编辑关节姿态，导入 MMD 动作与镜头，并可联动 Blender 骨架。',
      tags: '动作 姿态 mmd blender 骨骼 betterpose'
    },
    {
      group: 'user',
      name: '角色模型工作室',
      text: '按完整角色目录在本地生成模型，支持中文名、重复召唤、待机动作与逐个销毁。',
      tags: '角色 模型 生成 待机 characterstudio'
    },
    {
      group: 'user',
      name: 'Mod 管理',
      text: 'Mod 开关、分类、原地刷新外观与重新加载世界，配合热加载即时生效。',
      tags: 'mod 热加载 管理 外观 modmanager'
    },
    {
      group: 'user',
      name: '自定义 UID',
      text: '自定义客户端界面上显示的 UID、颜色与动态效果，不修改账号数据。',
      tags: 'uid 界面 自定义 fakeuid'
    },
    {
      group: 'user',
      name: '粉爪战利品显示',
      text: '显示粉爪大劫案的战利品与撤离点，支持价值筛选、银行循环拾取、次数限制与入场动画跳过。',
      tags: 'esp 粉爪 大劫案 撤离点 银行 拾取 pinkpaw'
    },
    {
      group: 'user',
      name: '快捷大招',
      text: '按住 Alt+1 至 Alt+4 自动切换对应角色并持续发送 Q，松开即停。',
      tags: '连招 终极 快捷键 切换角色 quickultimate'
    },
    {
      group: 'user',
      name: '召唤实验室',
      text: '按蓝图或角色召唤实体，自定义属性、敌对／宠物模式、分组对战与统一管理。',
      tags: '召唤 蓝图 实体 对战 血量 summonlab'
    },
    {
      group: 'user',
      name: 'NPC 召唤',
      text: '列出世界中真实运行的 NPC 类，关键词筛选后生成到面前，并可清除自己生成的。',
      tags: 'npc 召唤 生成 npcsummon'
    },
    {
      group: 'user',
      name: '木桩训练',
      text: '通过角色自身的召唤路径生成木桩，面板直接控制。',
      tags: '木桩 训练 伤害 trainingdummy'
    },
    {
      group: 'user',
      name: '载具控制',
      text: '浏览载具目录，普通或改装召唤，调节车速、扭矩、车轮摩擦，保持陆地载具满耐久。',
      tags: '载具 车辆 速度 扭矩 调校 vehicle'
    },
    {
      group: 'user',
      name: '场景加载器',
      text: '列出游戏场景并用游戏自己的入口切换，可在场景内换入口、返回大世界、开关数据层。',
      tags: '场景 切换 数据层 大世界 sceneloader'
    },
    {
      group: 'user',
      name: '空无一人',
      text: '阻止人流和车流生成，不影响站桩 NPC。',
      tags: '场景 人流 车流 npc deserted'
    },
    {
      group: 'user',
      name: 'HiFi 载具音乐',
      text: '用本地无损曲库替换车载音乐，支持 WASAPI 独占／共享、DirectSound 与 ASIO 输出。',
      tags: '音乐 车载 wasapi asio 音频 hifivehiclemusic'
    },
    {
      group: 'user',
      name: '更好的电视',
      text: '把住宅电视换成自定义本地视频或哔哩哔哩链接，只改内存不写游戏文件。',
      tags: '电视 视频 bilibili bettertv'
    },
    {
      group: 'user',
      name: '资源点全自动拾取',
      text: '读资源点表自动拾取角色经验书、礼物、家具、食物、钱包、乌鸦石头等资源点。',
      tags: '资源 自动 拾取 经验书 钱包 boxauto pickup'
    },
    {
      group: 'user',
      name: '打怪资源点',
      text: '逐个前往打怪宝箱与异像家具材料点自动战斗，完成后标记并本地缓存。',
      tags: '资源 战斗 宝箱 自动 combatbox'
    },
    {
      group: 'user',
      name: '自动副本',
      text: '按副本与难度自动进本、战斗、领奖、退出，支持循环执行。',
      tags: '副本 自动 进本 领奖 cloneenter'
    },
    {
      group: 'user',
      name: '自动捡钱包',
      text: '扫描钱包刷新点，按目标数量规划路线并自动拾取。',
      tags: '钱包 自动 路线 拾取 walletcollector'
    },
    {
      group: 'user',
      name: '999 夜脚本',
      text: '在 999 夜赤龙古堡按设定次数循环刷怪：营地刷新 + 两个战斗点自动战斗，次数 0 为无限。',
      tags: '999夜 刷怪 自动 战斗 脚本 night999'
    },
    {
      group: 'user',
      name: '自动钓鱼',
      text: '自动抛竿、提竿与遛鱼，支持连续钓鱼、鱼饵补购及按阈值卖鱼。',
      tags: '钓鱼 自动 鱼饵 autofish'
    },
    {
      group: 'user',
      name: '自动出租车',
      text: '自动接单、送达与结算后继续接单，显示游戏确认的完成数。',
      tags: '出租车 接单 自动 taxi autotaxi'
    },
    {
      group: 'user',
      name: '自动抓娃娃',
      text: '选择当前机器内的娃娃，手动投币确认后自动抓取，并显示游戏结算结果。',
      tags: '娃娃机 抓娃娃 自动 autoclaw'
    },
    {
      group: 'user',
      name: '自由飞行',
      text: 'WASD 飞行并穿墙，空格上升、Ctrl 下降，方向跟随视角，开关快捷键可自定义。',
      tags: '飞行 穿墙 移动 探索 freefly'
    },
  ],

  market: {
    title: '第三方插件',
    sub: '按 <kbd>Insert</kbd> 打开 <b>Plugins</b>，就能完成社区插件的日常管理。',
    colPage: '页面',
    colUse: '用来做什么',
    rows: [
      { page: '可用', desc: '搜索插件并下载安装，不兼容的项目会写明原因' },
      { page: '更新', desc: '查看并升级已安装插件的新版本' },
      { page: '已安装', desc: '启用、停用、重载或卸载插件' },
      { page: '第三方插件', desc: '添加、停用或移除插件源' }
    ],
    footnote: `运行包预置了一个已启用的插件源，实际地址以 <code>Anomaly\\plugin-repositories.json</code> 为准。
      也可以在界面中添加自己信任的 HTTPS 插件源。新装插件默认保持关闭；卸载只删除插件包，
      <code>Anomaly\\config\\plugins\\&lt;插件 ID&gt;</code> 和 <code>Anomaly\\state\\plugins\\&lt;插件 ID&gt;</code>
      里的设置与数据会保留。完整步骤见
      <a href="${links.thirdParty}" target="_blank" rel="noreferrer">第三方插件文档</a>。`,
    warningTitle: '⚠️ 第三方插件安全提示',
    warning: `第三方插件是会在游戏进程中运行的原生 DLL，不是受限脚本；Manifest 的 capability 只限制它能调用哪些 Anomaly 服务。
      插件列表和插件包目前没有发布者签名；Anomaly 会检查下载地址、ZIP 路径、Manifest、版本、游戏与 API 是否匹配，
      但这些检查不能证明插件本身安全。<strong>只安装你信任的来源和作者提供的插件。</strong>`
  },

  install: {
    title: '快速上手',
    sub: '普通用户无需构建源码，下载 Runtime 并按下面五步走即可。',
    steps: [
      {
        title: '下载并完整解压 Runtime',
        html: `从 ${channelLinks} 任选一个渠道下载
          <code>Anomaly-&lt;版本号&gt;-runtime.zip</code>，<strong>完整解压</strong>到一个普通文件夹
          （不要在压缩包里运行，也不要只拿出 <code>AnomalyLauncher.exe</code>），
          然后运行其中的 <code>AnomalyLauncher.exe</code>。`
      },
      {
        title: '确认启动器里的两处路径',
        html: `打开<b>启动</b>页，确认上方的两处路径：<b>启动器目录</b>指向官方 <code>NTELauncher.exe</code>，
          <b>游戏目录</b>指向直接包含 <code>HTGame.exe</code> 的文件夹；路径不对就点右侧按钮重选。`
      },
      {
        title: '用注入模式附加到游戏',
        html: `页面下方保持默认的<b>注入模式</b>：游戏还没开就点<b>启动并附加</b>，已经在跑就点
          <b>注入到运行中的进程</b>——两种方式都不往游戏目录写任何文件。想把代理装进游戏目录、
          以后从快捷方式直接带上 Anomaly 时，切到<b>代理模式</b>点<b>安装</b>；两种模式互斥，
          代理已启用时注入按钮不可用，需先点<b>禁用</b>。`
      },
      {
        title: '启动游戏并同意须知',
        html: `像平时一样启动游戏，进入后按 <kbd>Insert</kbd> 呼出管理界面。首次呼出会弹出<b>首次使用须知</b>，
          勾选同意后插件功能才会解锁。成功启动会生成 <code>Anomaly\\logs\\anomaly-runtime.log</code> 与
          <code>Anomaly\\anomaly-platform.log</code>。`
      },
      {
        title: '启用内建插件、安装社区插件',
        html: `打开 <b>Plugins &gt; 已安装</b>，选中内建插件后启用（默认全部关闭，带必需依赖的插件会一并启用依赖项）；
          社区插件在 <b>Plugins &gt; 可用</b> 点<b>安装</b>，回<b>已安装</b>启用，有新版本时在
          <b>Plugins &gt; 更新</b> 中升级。`
      }
    ],
    directoryTitle: '游戏目录',
    layoutTitle: '代理模式安装后的结构',
    directoryNote: `注入模式不会往游戏目录写任何文件，上面的结构只出现在代理模式下。启动器本体不需要复制进游戏目录；更新时把新版 Runtime 解压到新文件夹再点<b>更新</b>。
      启动器会比较新旧 <code>Anomaly.Core.dll</code> 的 SHA-256，只替换 Core、Profile 与内建插件；
      <code>anomaly.ini</code>、<code>config\\</code>、<code>state\\</code>、<code>logs\\</code>
      和自己添加的插件都会保留。`,
    buildTitle: '从源码构建（开发者）',
    buildNote: `<code>build.cmd</code> 是唯一受支持构建路径（CMake Preset <code>windows-vs2022</code> +
      <code>windows-relwithdebinfo</code>）的薄包装器；开发夹具、开发者测试插件与 PDB 用
      <code>build.cmd fixtures|testplugins|symbols</code> 按需开启。`,
  },

  faq: {
    title: '常见问题',
    sub: `更多问题见<a href="${links.troubleshooting}" target="_blank" rel="noreferrer">故障排查与 FAQ</a>。`,
    items: [
      {
        q: '按 Insert 没反应？',
        a: `先确认 Runtime 已注入：<code>Anomaly\\logs\\anomaly-runtime.log</code> 是否生成并记录了游戏 PID。
          再确认主窗口快捷键——在启动器的 <b>设置 &gt; 启动设置</b> 里按键即可修改，也可编辑
          <code>anomaly.ini</code> 的 <code>[Platform] ToggleKey</code>（Win32 虚拟键码，默认
          <code>45</code> = <code>VK_INSERT</code>）。`
      },
      {
        q: '「可用」里没有插件？',
        a: `到 <b>Plugins &gt; 第三方插件</b> 确认总开关和插件源都已启用、地址是 HTTPS，再回到<b>可用</b>点击刷新。
          插件源离线时可能只剩上一次成功获取的缓存列表。`
      },
      {
        q: '第三方插件安装失败？',
        a: `常见原因是下载地址不是 HTTPS 或不可用、ZIP 多套了一层目录，或插件 ID、版本、游戏和 API 与列表不一致。
          界面会显示失败原因，详细记录在 <code>Anomaly\\anomaly-platform.log</code>。`
      },
      {
        q: '插件加载失败？',
        a: `确认它是含 <code>manifest.json</code> 的目录包；根级 DLL 与无 Manifest 的目录不会被加载。
          状态原因里常见的还有 unknown capability，以及必需服务没有对应的 capability 声明。`
      },
      {
        q: '坐标 / 实体等功能显示不可用？',
        a: `通常是活动 Profile 中缺少所需签名，或符号、布局校验未通过，功能会保持 unavailable 而不是让插件崩溃。
          用 CLI 的 <code>ue</code> 命令或 <b>Diagnostics &gt; Developer &gt; NTE Compatibility</b> 查看 Feature Matrix，
          细节见 <a href="${links.profiles}" target="_blank" rel="noreferrer">NTE Build Profile</a>。`
      },
      {
        q: '注入模式的按钮点不动？',
        a: `代理已启用时注入按钮会禁用：先到 <b>启动 &gt; 代理模式</b> 点<b>禁用</b>并退出游戏。
          <b>启动并附加</b>只在没有正在运行的 <code>HTGame.exe</code> 时可用；游戏已经在跑就用
          <b>注入到运行中的进程</b>，它只挂载 Core、不重启游戏。`
      },
      {
        q: '开启 DLSS / 帧生成后出现 D3D12 Present 错误？',
        a: `内嵌后端会把 Streamline 代理设备与命令队列转换成原生 D3D12 接口再提交自己的命令。仍出错时，
          可以把 <code>anomaly.ini</code> 的 <code>[Platform] Embedded</code> 设为 <code>0</code>、
          保留 <code>AttachToProcessWindow=1</code>，退出游戏后改用独立窗口叠加后端。`
      },

      {
        q: '插件设置和启用状态存在哪里？',
        a: `插件自身的 JSON 设置位于 <code>Anomaly\\config\\plugins\\</code>，全局启用状态位于
          <code>Anomaly\\config\\plugin-enablement.json</code>；界面配色与背景布局在
          <code>Anomaly\\config\\platform-settings.json</code> 与 <code>Anomaly\\config\\themes\\</code>。`
      },
      {
        q: '怎么完整卸载 Anomaly？',
        a: `启动器自带卸载：退出游戏，在 <b>启动 &gt; 代理模式</b> 点<b>卸载</b>，核对弹窗中的目录与删除范围后确认，
          它会删掉游戏目录里的 <code>dwmapi.dll</code>（或 <code>dwmapi.dll.disabled</code>）与整个
          <code>Anomaly\\</code> 目录，包括配置、插件与运行数据。只想暂时停用时点<b>禁用</b>。
          用注入模式运行时游戏目录本来没有这些文件，删掉解压目录即可。`
      }
    ]
  },

  docs: {
    title: '文档',
    sub: '全部文档托管在主仓库，中英逐页对应。',
    cards: [
      {
        icon: '📘',
        title: '用户文档',
        text: '安装与部署、快速上手、配置、内建插件、诊断 CLI、主题与背景、故障排查。',
        url: links.userGuide
      },
      {
        icon: '🛠️',
        title: '开发者文档',
        text: '插件开发与发布、从源码构建、架构、贡献流程。',
        url: links.developerGuide
      },
      {
        icon: '📑',
        title: 'API 参考',
        text: '完整的纯 C ABI v1：生命周期、全部服务表、IPC、Manifest 与 capability。',
        url: links.apiReference
      }
    ],
    footnote: `仓库内另有
      <a href="${links.architecture}" target="_blank" rel="noreferrer">架构概览</a>、
      <a href="${links.theme}" target="_blank" rel="noreferrer">主题与背景</a>、
      <a href="${links.diagnosticsCli}" target="_blank" rel="noreferrer">诊断 CLI</a>
      与 <a href="${links.examples}" target="_blank" rel="noreferrer">独立 SDK 示例</a>；新插件仓库可从
      <a href="${links.template}" target="_blank" rel="noreferrer">Anomaly 插件模板</a> 开始。`
  },

  risk: {
    summary: '⚠️ 免责声明与风险提示',
    p1: `Anomaly 是<strong>面向研究、诊断与插件开发</strong>的工具，不得用于作弊行为。内存读写、hook、patch、
      实体扫描会修改或读取其他进程的运行状态，可能导致游戏崩溃、数据损坏或账号封禁。日志、崩溃转储、
      Profile 数据与诊断包<strong>可能包含敏感信息</strong>，分享前请审查并脱敏。`,
    p2: `根据<a href="${links.fairPlay}" target="_blank" rel="noreferrer">《异环》公平游戏宣言</a>，
      严禁使用任何第三方工具破坏游戏公平性。<strong>您应充分了解并自愿承担使用本工具可能带来的所有风险。</strong>`
  },

  footer: {
    project: '项目',
    docs: '文档',
    community: '社区',
    source: '源码仓库',
    releases: '发布页',
    license: '许可证',
    notice: 'NOTICE',
    userGuide: '用户文档',
    developerGuide: '开发者文档',
    apiReference: 'API 参考',
    qq: 'QQ 群',
    discord: 'Discord',
    issues: '问题反馈',
    credits: '鸣谢：',
    creditSep: '、',
    copyright: '© {year} AnomalyNTE · 以 GNU Affero General Public License v3.0（{license}）分发.'
  },

  promo: {
    hero: {
      eyebrow: 'Anomaly UI · Liquid Glass',
      title: '透过玻璃，<br /><span class="grad">看见你的世界。</span>',
      lede: `实时折射、柔和高光、会流动的选择镜片。<br />一套为游戏内覆盖层重新打造的 Liquid Glass 界面。`,
      shotAlt: 'Liquid Glass 版插件页',
      jumpAria: '页内导航',
      jumps: [
        { href: '#compare', label: '新旧对比' },
        { href: '#glass', label: '液态玻璃' },
        { href: '#details', label: '细节' },
        { href: '#gallery', label: '插件画廊' }
      ],
      scrollHint: '向下滚动',
      meta: `已随 v2.6.0 起的运行包提供，源码在
        <a href="${links.repo}" target="_blank" rel="noreferrer">Anomaly 主仓库</a>。`
    },
    compare: {
      title: '拖动，看看变化有多大。',
      sub: '左边是旧版，右边是全新的 Liquid Glass。',
      tabsAria: '对比项目',
      tabs: [
        { key: 'plugins', label: '插件' },
        { key: 'diagnostics', label: '诊断' },
        { key: 'settings', label: '设置' },
        { key: 'developer', label: '开发者' },
        { key: 'naiwa', label: '奶蛙主题' }
      ],
      newAlt: '新版界面',
      oldAlt: '旧版界面',
      tagOld: '旧版',
      tagNew: '新版'
    },
    glass: {
      title: '每一个控件，都是一块玻璃。',
      sub: '选择镜片会被拉伸、会回弹，背景在它下面折射。动手试试。',
      segAria: '分段控件演示',
      dockAria: '浮动标签栏演示',
      segItems: [
        { key: 'installed', label: '已安装' },
        { key: 'available', label: '可用' },
        { key: 'updates', label: '更新' },
        { key: 'thirdparty', label: '第三方' }
      ],
      dockItems: [
        { key: 'plugins', label: '插件', icon: '▦' },
        { key: 'diagnostics', label: '诊断', icon: '◫' },
        { key: 'settings', label: '设置', icon: '⚙' }
      ],
      seg: { title: '分段控件', text: '镜片在选项之间滑动，移动时会被拉长。' },
      switches: { title: '开关', text: '所有复选框都换成了开关，按下时拇指会变宽。' },
      slider: { title: '滑块', text: '拖动时拇指变成透明镜片，能看到下面的轨道。' },
      dock: { title: '浮动标签栏', text: '导航沉到底部，浮在内容上方。' }
    },
    details: {
      title: '藏在细节里。',
      hint: '把鼠标移到这里',
      videoFallback: '你的浏览器不支持内嵌视频播放。',
      features: [
        {
          title: '搜索，只在需要时出现',
          text: '平时只是一个放大镜。指针靠近，搜索框向左展开。',
          alt: '插件页',
          altAlt: '搜索框展开'
        },
        {
          title: '一行顶栏',
          text: '标签、搜索、筛选、排序收进同一行，内容区更大。',
          alt: '顶栏高亮',
          altAlt: ''
        },
        {
          title: '主题依然由你决定',
          text: '自定义背景、配色和贴纸系统全部保留。奶蛙主题也换上了玻璃。',
          alt: '奶蛙主题',
          altAlt: ''
        }
      ]
    },
    gallery: {
      title: '插件，也是玻璃做的。',
      sub: '插件窗口直接浮在游戏画面上，背景透过来，界面仍然清楚。',
      items: [
        { alt: '旧版插件窗口', caption: '旧版' },
        { alt: '新版插件窗口', caption: '新版' }
      ]
    },
    end: {
      title: '<span class="grad">Anomaly</span> Liquid Glass',
      text: 'v2.6.0 起随运行包提供，按 <kbd>Insert</kbd> 就能看到。',
      home: '返回官网首页',
      plugins: '内建插件',
      repo: '源码仓库'
    }
  }
}
