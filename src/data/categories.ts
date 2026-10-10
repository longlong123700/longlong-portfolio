import type { Category } from "../types";

export const categories: Category[] = [
  {
    id: "set-analysis",
    name: "活动套装强度与养成性价比",
    description:
      "围绕月度 / 节日限定活动套装，拆解装备机制、阶数收益、资源投入产出比与兑换优先级。",
    tags: ["套装强度", "兑换路径", "机制联动", "质变节点", "养成性价比"],
    order: 1,
  },
  {
    id: "resource-economy",
    name: "资源经济与长期养成规划",
    description:
      "围绕钻石、招募器、钥匙、转运石、活动积分等资源，建立玩家侧定价与消耗决策框架。",
    tags: ["资源定价", "钻石汇率", "礼包性价比", "活动循环", "玩家分层", "长期养成"],
    order: 2,
  },
  {
    id: "runes-reforge",
    name: "词条、符文与装备洗练体系",
    description:
      "围绕词条收益、独立乘区、洗练优先级和收益衰减，给出装备与符文优化建议。",
    tags: ["独立乘区", "收益衰减", "词条优先级", "洗练策略", "装备配置"],
    order: 3,
  },
  {
    id: "character-analysis",
    name: "梦灵机制与阵容定位分析",
    description:
      "围绕梦灵技能机制、角色定位、阵容职责和输出模式，分析不同角色的实战价值。",
    tags: ["角色定位", "技能机制", "阵容职责", "前排收益", "输出模型"],
    order: 4,
  },
  {
    id: "pve-strategy",
    name: "PvE 关卡与活动实战策略",
    description:
      "围绕主线关卡、Boss 机制、活动打法和输出窗口，拆解实战节奏与阵容选择。",
    tags: ["Boss 机制", "关卡节奏", "输出窗口", "召唤物利用", "极限推图"],
    order: 5,
  },
  {
    id: "pvp-strategy",
    name: "PvP 对抗与高阶操作技巧",
    description:
      "围绕 PvP 阵容克制、技能释放、挂件切换、操作细节和胜率优化，展示高阶实战理解。",
    tags: ["PvP 策略", "阵容克制", "操作细节", "胜率优化", "防守反击"],
    order: 6,
  },
  {
    id: "community-content",
    name: "社区内容与玩家互动",
    description:
      "展示社区内容创作、角色二创和玩家互动能力，作为作品集的补充模块。",
    tags: ["社区互动", "角色二创", "玩家内容", "表情包设计"],
    order: 7,
  },
];

export const allCategoryId = "all" as const;
