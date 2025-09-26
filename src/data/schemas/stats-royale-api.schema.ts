import { z } from "zod";

const BuffWhenNotAttackingDataSchema = z.object({
  damageReduction: z.number().optional(),
}).passthrough();

const StatCharacterDataSchema = z.object({
  hitpoints: z.number().optional(),
  hitSpeed: z.number().optional(),
  loadTime: z.number().optional(),
  range: z.number().optional(),
  targets: z.string().optional(),
  projectileData: z.object({
    damage: z.number().optional(),
  }).optional(),
}).passthrough();

const imagesUrlSchema = z.object({
  card: z.string().optional(),
  evoCard: z.string().optional(),
  usage: z.string().optional(),
  evoUsage: z.string().optional(),
  render: z.string().optional(),
  evoRender: z.string().optional(),
  badge: z.string().optional()
}).passthrough();

const ProjectileDataSchema = z.object({
  damage: z.number().optional(),
  crownTowerDamagePercent: z.number().optional(),
  buffTime: z.number().optional(),
  radius: z.number().optional(),
  tidTarget: z.string().optional(),
}).passthrough();

const AreaEffectObjectDataSchema = z.object({
  hitPolifeDurationints: z.number().optional(),
  lifeDuration: z.number().optional(),
  radius: z.number().optional(),
  damage: z.number().optional(),
  onlyEnemies: z.boolean().optional(),
  hitsGround: z.boolean().optional(),
  hitsAir: z.boolean().optional(),
  projectileData: ProjectileDataSchema.optional(),
}).passthrough();

export const SummonCharacterDataSchema = z.object({
  name: z.string(),
  base: z.string().optional(),
  rarity: z.string().optional(),
  sightRange: z.number().optional(),
  deployTime: z.number().optional(),
  speed: z.number().optional(),
  hitpoints: z.number().optional(),
  hitSpeed: z.number().optional(),
  loadTime: z.number().optional(),
  damage: z.number().optional(),
  range: z.number().optional(),
  attacksGround: z.boolean().optional(),
  collisionRadius: z.number().optional(),
  dashMaxRange: z.number().optional(),
  jumpSpeed: z.number().optional(),
  tid: z.string().optional(),
  source: z.string().optional(),
  tidTarget: z.string().optional(),
  tidSpeed: z.string().optional(),
  buffWhenNotAttackingData: BuffWhenNotAttackingDataSchema.optional()
}).passthrough();

const EvolvedSpellsDataSchema = z.object({
  tidInfo: z.string().optional(),
  buffWhenNotAttackingData: BuffWhenNotAttackingDataSchema.optional(),
  summonCharacterData: SummonCharacterDataSchema.optional()
}).passthrough();

export const SpellSchema = z.object({
  name: z.string(),
  iconFile: z.string(),
  unlockArena: z.string().optional(),
  rarity: z.string(),
  notVisible: z.string().optional(),
  manaCost: z.number().optional(),
  tid: z.string(),
  tidInfo: z.string().optional(),
  id: z.number().optional(),
  tidType: z.string().optional(),
  summonNumber: z.number().optional(),
  summonRadius: z.number().optional(),
  summonCharacterData: SummonCharacterDataSchema.optional(),
  statCharacterData: StatCharacterDataSchema.optional(),
  evolvedSpellsData: EvolvedSpellsDataSchema.optional(),
  projectileWaves: z.number().optional(),
  radius: z.number().optional(),
  projectileData: ProjectileDataSchema.optional(),
  areaEffectObjectData: AreaEffectObjectDataSchema.optional(),
  imagesUrl: imagesUrlSchema,
  englishName: z.string().optional(),
}).passthrough();

export const RoyaleAPIResponseSchema = z.object({
  meta: z.object({
    fingerprint: z.string()
  }),
  items: z.object({
    spells: z.array(SpellSchema),
    arenas: z.array(z.unknown()).optional(),
    gameModes: z.array(z.unknown()).optional(),
    rarities: z.array(z.unknown()).optional(),
    badges: z.array(z.unknown()).optional(),
    explevels: z.array(z.unknown()).optional(),
    clanLeagues: z.array(z.unknown()).optional(),
    regions: z.array(z.unknown()).optional(),
  }).passthrough(),
}).passthrough();

export type Spell = z.infer<typeof SpellSchema>;
export type RoyaleAPIResponse = z.infer<typeof RoyaleAPIResponseSchema>;