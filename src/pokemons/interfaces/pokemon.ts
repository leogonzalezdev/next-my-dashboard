export interface Pokemon {
  id:                       number;
  name:                     string;
  base_experience:          number;
  height:                   number;
  is_default:               boolean;
  order:                    number;
  weight:                   number;
  abilities:                Ability[];
  forms:                    Species[];
  game_indices:             GameIndex[];
  held_items:               HeldItem[];
  location_area_encounters: string;
  moves:                    Move[];
  species:                  Species;
  sprites:                  Sprites;
  cries:                    Cries;
  stats:                    Stat[];
  types:                    Type[];
  past_types:               PastType[];
  past_abilities:           PastAbility[];
}

export interface Ability {
  is_hidden: boolean;
  slot:      number;
  ability:   Species | null;
}

export interface Species {
  name: string;
  url:  string;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface GameIndex {
  game_index: number;
  version:    Species;
}

export interface HeldItem {
  item:            Species;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity:  number;
  version: Species;
}

export interface Move {
  move:                  Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at:  number;
  version_group:     Species;
  move_learn_method: Species;
  order:             number;
}

export interface PastAbility {
  generation: Species;
  abilities:  Ability[];
}

export interface PastType {
  generation: Species;
  types:      Type[];
}

export interface Type {
  slot: number;
  type: Species;
}

export interface GenerationV {
  "black-white": Sprites;
}

export interface GenerationIv {
  "diamond-pearl":        Sprites;
  "heartgold-soulsilver": Sprites;
  platinum:               Sprites;
}

export interface Versions {
  "generation-i":    GenerationI;
  "generation-ii":   GenerationIi;
  "generation-iii":  GenerationIii;
  "generation-iv":   GenerationIv;
  "generation-v":    GenerationV;
  "generation-vi":   { [key: string]: Home };
  "generation-vii":  GenerationVii;
  "generation-viii": GenerationViii;
}

export interface Other {
  dream_world:        DreamWorld;
  home:               Home;
  "official-artwork": OfficialArtwork;
  showdown:           Sprites;
}

export interface Sprites {
  back_default:       string;
  back_female:        null;
  back_shiny:         string;
  back_shiny_female:  null;
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
  other?:             Other;
  versions?:          Versions;
  animated?:          Sprites;
}

export interface GenerationI {
  "red-blue": RedBlue;
  yellow:     RedBlue;
}

export interface RedBlue {
  back_default:  string;
  back_gray:     string;
  front_default: string;
  front_gray:    string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold:    Crystal;
  silver:  Crystal;
}

export interface Crystal {
  back_default:  string;
  back_shiny:    string;
  front_default: string;
  front_shiny:   string;
}

export interface GenerationIii {
  emerald:             OfficialArtwork;
  "firered-leafgreen": Crystal;
  "ruby-sapphire":     Crystal;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny:   string;
}

export interface Home {
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
}

export interface GenerationVii {
  icons:                  DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
  front_default: string;
  front_female:  null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Stat {
  base_stat: number;
  effort:    number;
  stat:      Species;
}
