const BugLocationsEnum = Object.freeze({
  BeachShells: "Beach (as shells)",
  Flying: "Flying",
  FlyingByLight: "Flying (by light)",
  FlyingHybridFlowers: "Flying (hybrid flowers)",
  HittingRocks: "Hitting rocks",
  OnBeachRocks: "On beach rocks",
  OnFlowers: "On flowers",
  OnFlowersWhite: "On flowers (white)",
  OnPondsRivers: "On ponds and rivers",
  OnRocksRain: "On rocks (rain)",
  OnRottenFood: "On rotten food",
  OnGround: "On the ground",
  OnGroundRollingSnowballs: "On the ground (rolling snowballs)",
  OnTrashItems: "On trash items",
  OnTreeStumps: "On tree stumps",
  OnTrees: "On trees",
  OnTreesCoconut: "On trees (coconut)",
  ShakingTrees: "Shaking trees",
  UnderTreesAsLeafs: "Under trees (as leafs)",
  Underground: "Underground",
  VillagersHeads: "Villagers' heads",
});

const BugLocationUtil = {
  excludeFromSections: () => {
    const enumValues = BugLocationsEnum;
    return [
      enumValues.FlyingByLight,
      enumValues.FlyingHybridFlowers,
      enumValues.FlyingByLight,
      enumValues.OnFlowersWhite,
      enumValues.OnGroundRollingSnowballs,
      enumValues.OnTreesCoconut,
    ];
  },
};

export { BugLocationsEnum, BugLocationUtil };
