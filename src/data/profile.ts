import type { HeroStat } from "../types";

export const profile = {
  name: "Longlong",
  role: "游戏数值分析 / 机制研究 / 策略规划",
  identity: "《梦境护卫队》官方社区攻略作者 / 梦境智囊团成员",
  featuredTopicTitle: "活动套装强度与养成性价比分析专题",
  featuredTopicDescription:
    "连续 3 期围绕月度 / 节日活动套装构建玩家侧收益评估框架，量化分析装备强度、机制联动、阶数质变点与资源投入产出比，并输出兑换优先级建议；相关分析发布后，对应套装均在后续版本中被官方优化调整。",
  communityHref: "https://pc-bbs.shiyue.com/126",
};

export const heroStats: HeroStat[] = [
  {
    value: "21 篇",
    label: "累计攻略产出",
    detail: "覆盖资源规划、数值拆解、PVE/PVP 与社区内容",
  },
  {
    value: "25w+",
    label: "总阅读量",
    detail: "持续在官方社区稳定触达核心玩家与目标人群",
  },
  {
    value: "连续 3 期",
    label: "活动套装专题分析",
    detail: "围绕月度 / 节日活动形成复用型收益评估框架",
  },
  {
    value: "后续优化调整",
    label: "版本反馈闭环",
    detail: "分析发布后，对应活动套装均在后续版本中被优化",
  },
];
