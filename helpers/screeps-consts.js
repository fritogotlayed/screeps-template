// NOTE: Values can be obtained by either referencing the screeps.d.ts or by running JSON.stringify(COLORS_ALL) in the screeps console
const init = () => {
    global.OK = 0
    global.ERR_NOT_OWNER = -1
    global.ERR_NO_PATH = -2
    global.ERR_NAME_EXISTS = -3
    global.ERR_BUSY = -4
    global.ERR_NOT_FOUND = -5
    global.ERR_NOT_ENOUGH_RESOURCES = -6
    global.ERR_NOT_ENOUGH_ENERGY = -6
    global.ERR_INVALID_TARGET = -7
    global.ERR_FULL = -8
    global.ERR_NOT_IN_RANGE = -9
    global.ERR_INVALID_ARGS = -10
    global.ERR_TIRED = -11
    global.ERR_NO_BODYPART = -12
    global.ERR_NOT_ENOUGH_EXTENSIONS = -6
    global.ERR_RCL_NOT_ENOUGH = -14
    global.ERR_GCL_NOT_ENOUGH = -15
    global.FIND_EXIT_TOP = 1
    global.FIND_EXIT_RIGHT = 3
    global.FIND_EXIT_BOTTOM = 5
    global.FIND_EXIT_LEFT = 7
    global.FIND_EXIT = 10
    global.FIND_CREEPS = 101
    global.FIND_MY_CREEPS = 102
    global.FIND_HOSTILE_CREEPS = 103
    global.FIND_SOURCES_ACTIVE = 104
    global.FIND_SOURCES = 105
    global.FIND_DROPPED_RESOURCES = 106
    global.FIND_DROPPED_ENERGY = 106
    global.FIND_STRUCTURES = 107
    global.FIND_MY_STRUCTURES = 108
    global.FIND_HOSTILE_STRUCTURES = 109
    global.FIND_FLAGS = 110
    global.FIND_CONSTRUCTION_SITES = 111
    global.FIND_MY_SPAWNS = 112
    global.FIND_HOSTILE_SPAWNS = 113
    global.FIND_MY_CONSTRUCTION_SITES = 114
    global.FIND_HOSTILE_CONSTRUCTION_SITES = 115
    global.FIND_MINERALS = 116
    global.FIND_NUKES = 117
    global.TOP = 1
    global.TOP_RIGHT = 2
    global.RIGHT = 3
    global.BOTTOM_RIGHT = 4
    global.BOTTOM = 5
    global.BOTTOM_LEFT = 6
    global.LEFT = 7
    global.TOP_LEFT = 8
    global.COLOR_RED = 1
    global.COLOR_PURPLE = 2
    global.COLOR_BLUE = 3
    global.COLOR_CYAN = 4
    global.COLOR_GREEN = 5
    global.COLOR_YELLOW = 6
    global.COLOR_ORANGE = 7
    global.COLOR_BROWN = 8
    global.COLOR_GREY = 9
    global.COLOR_WHITE = 10
    global.COLORS_ALL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    global.CREEP_SPAWN_TIME = 3
    global.CREEP_LIFE_TIME = 1500
    global.CREEP_CLAIM_LIFE_TIME = 500
    global.CREEP_CORPSE_RATE = 0.2
    global.OBSTACLE_OBJECT_TYPES = ["spawn", "creep", "powerCreep", "source", "mineral", "controller", "constructedWall", "extension", "link", "storage", "tower", "observer", "powerSpawn", "powerBank", "lab", "terminal", "nuker"]
    global.ENERGY_REGEN_TIME = 300
    global.ENERGY_DECAY = 1000
    global.REPAIR_COST = 0.01
    global.RAMPART_DECAY_AMOUNT = 300
    global.RAMPART_DECAY_TIME = 100
    global.RAMPART_HITS = 1
    global.RAMPART_HITS_MAX = {
        2: 300000,
        3: 1000000,
        4: 3000000,
        5: 10000000,
        6: 30000000,
        7: 100000000,
        8: 300000000
    }
    global.SPAWN_HITS = 5000
    global.SPAWN_ENERGY_START = 300
    global.SPAWN_ENERGY_CAPACITY = 300
    global.SOURCE_ENERGY_CAPACITY = 3000
    global.SOURCE_ENERGY_NEUTRAL_CAPACITY = 1500
    global.SOURCE_ENERGY_KEEPER_CAPACITY = 4000
    global.WALL_HITS = 1
    global.WALL_HITS_MAX = 300000000
    global.EXTENSION_HITS = 1000
    global.EXTENSION_ENERGY_CAPACITY = {
        0: 50,
        1: 50,
        2: 50,
        3: 50,
        4: 50,
        5: 50,
        6: 50,
        7: 100,
        8: 200,
    }
    global.ROAD_HITS = 5000
    global.ROAD_WEAROUT = 1
    global.ROAD_DECAY_AMOUNT = 100
    global.ROAD_DECAY_TIME = 1000
    global.LINK_HITS = 1000
    global.LINK_HITS_MAX = 1000
    global.LINK_CAPACITY = 800
    global.LINK_COOLDOWN = 1
    global.LINK_LOSS_RATIO = 0.03
    global.STORAGE_CAPACITY = 1000000
    global.STORAGE_HITS = 10000
    global.BODYPART_COST = {
        move: 50,
        work: 100,
        attack: 80,
        carry: 50,
        heal: 250,
        ranged_attack: 150,
        tough: 10,
        claim: 600,
    }
    global.BODYPARTS_ALL = ["move", "work", "carry", "attack", "ranged_attack", "tough", "heal", "claim"]
    global.CARRY_CAPACITY = 50
    global.HARVEST_POWER = 2
    global.HARVEST_MINERAL_POWER = 1
    global.REPAIR_POWER = 100
    global.DISMANTLE_POWER = 50
    global.BUILD_POWER = 5
    global.ATTACK_POWER = 30
    global.UPGRADE_CONTROLLER_POWER = 1
    global.RANGED_ATTACK_POWER = 10
    global.HEAL_POWER = 12
    global.RANGED_HEAL_POWER = 4
    global.DISMANTLE_COST = 0.005
    global.MOVE = "move"
    global.WORK = "work"
    global.CARRY = "carry"
    global.ATTACK = "attack"
    global.RANGED_ATTACK = "ranged_attack"
    global.TOUGH = "tough"
    global.HEAL = "heal"
    global.CLAIM = "claim"
    global.CONSTRUCTION_COST = {
        spawn: 15000,
        extension: 3000,
        road: 300,
        constructedWall: 1,
        rampart: 1,
        link: 5000,
        storage: 30000,
        tower: 5000,
        observer: 8000,
        powerSpawn: 100000,
        extractor: 5000,
        lab: 50000,
        terminal: 100000,
        container: 5000,
        nuker: 100000,
    }
    global.CONSTRUCTION_COST_ROAD_SWAMP_RATIO = 5
    global.STRUCTURE_EXTENSION = "extension"
    global.STRUCTURE_RAMPART = "rampart"
    global.STRUCTURE_ROAD = "road"
    global.STRUCTURE_SPAWN = "spawn"
    global.STRUCTURE_LINK = "link"
    global.STRUCTURE_WALL = "wall"
    global.STRUCTURE_KEEPER_LAIR = "keeperLair"
    global.STRUCTURE_CONTROLLER = "controller"
    global.STRUCTURE_STORAGE = "storage"
    global.STRUCTURE_TOWER = "tower"
    global.STRUCTURE_OBSERVER = "observer"
    global.STRUCTURE_POWER_BANK = "powerBank"
    global.STRUCTURE_POWER_SPAWN = "powerSpawn"
    global.STRUCTURE_EXTRACTOR = "extractor"
    global.STRUCTURE_LAB = "lab"
    global.STRUCTURE_TERMINAL = "terminal"
    global.STRUCTURE_CONTAINER = "container"
    global.STRUCTURE_NUKER = "nuker"
    global.STRUCTURE_PORTAL = "portal"
    global.RESOURCE_ENERGY = "energy"
    global.RESOURCE_POWER = "power"
    global.RESOURCE_UTRIUM = "U"
    global.RESOURCE_LEMERGIUM = "L"
    global.RESOURCE_KEANIUM = "K"
    global.RESOURCE_GHODIUM = "G"
    global.RESOURCE_ZYNTHIUM = "Z"
    global.RESOURCE_OXYGEN = "O"
    global.RESOURCE_HYDROGEN = "H"
    global.RESOURCE_CATALYST = "X"
    global.RESOURCE_HYDROXIDE = "OH"
    global.RESOURCE_ZYNTHIUM_KEANITE = "ZK"
    global.RESOURCE_UTRIUM_LEMERGITE = "UL"
    global.RESOURCE_UTRIUM_HYDRIDE = "UH"
    global.RESOURCE_UTRIUM_OXIDE = "UO"
    global.RESOURCE_KEANIUM_HYDRIDE = "KH"
    global.RESOURCE_KEANIUM_OXIDE = "KO"
    global.RESOURCE_LEMERGIUM_HYDRIDE = "LH"
    global.RESOURCE_LEMERGIUM_OXIDE = "LO"
    global.RESOURCE_ZYNTHIUM_HYDRIDE = "ZH"
    global.RESOURCE_ZYNTHIUM_OXIDE = "ZO"
    global.RESOURCE_GHODIUM_HYDRIDE = "GH"
    global.RESOURCE_GHODIUM_OXIDE = "GO"
    global.RESOURCE_UTRIUM_ACID = "UH2O"
    global.RESOURCE_UTRIUM_ALKALIDE = "UHO2"
    global.RESOURCE_KEANIUM_ACID = "KH2O"
    global.RESOURCE_KEANIUM_ALKALIDE = "KHO2"
    global.RESOURCE_LEMERGIUM_ACID = "LH2O"
    global.RESOURCE_LEMERGIUM_ALKALIDE = "LHO2"
    global.RESOURCE_ZYNTHIUM_ACID = "ZH2O"
    global.RESOURCE_ZYNTHIUM_ALKALIDE = "ZHO2"
    global.RESOURCE_GHODIUM_ACID = "GH2O"
    global.RESOURCE_GHODIUM_ALKALIDE = "GHO2"
    global.RESOURCE_CATALYZED_UTRIUM_ACID = "XUH2O"
    global.RESOURCE_CATALYZED_UTRIUM_ALKALIDE = "XUHO2"
    global.RESOURCE_CATALYZED_KEANIUM_ACID = "XKH2O"
    global.RESOURCE_CATALYZED_KEANIUM_ALKALIDE = "XKHO2"
    global.RESOURCE_CATALYZED_LEMERGIUM_ACID = "XLH2O"
    global.RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = "XLHO2"
    global.RESOURCE_CATALYZED_ZYNTHIUM_ACID = "XZH2O"
    global.RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = "ZXHO2"
    global.RESOURCE_CATALYZED_GHODIUM_ACID = "XGH2O"
    global.RESOURCE_CATALYZED_GHODIUM_ALKALIDE = "XGHO2"
    global.RESOURCES_ALL = ["energy", "power", "H", "O", "U", "K", "L", "Z", "X", "G", "OH", "ZK", "UL", "UH", "UO", "KH", "KO", "LH", "LO", "ZH", "ZO", "GH", "GO", "UH2O", "UHO2", "KH2O", "KHO2", "LH2O", "LHO2", "ZH2O", "ZHO2", "GH2O", "GHO2", "XUH2O", "XUHO2", "XKH2O", "XKHO2", "XLH2O", "XLHO2", "XZH2O", "XZHO2", "XGH2O", "XGHO2", "ops"]
    global.SUBSCRIPTION_TOKEN = "TOKEN"
    global.CONTROLLER_LEVELS = {
        1: 200,
        2: 45000,
        3: 135000,
        4: 405000,
        5: 1215000,
        6: 3645000,
        7: 10935000
    }
    global.CONTROLLER_STRUCTURES = {
        "spawn": { "0": 0, "1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "7": 2, "8": 3 },
        "extension": { "0": 0, "1": 0, "2": 5, "3": 10, "4": 20, "5": 30, "6": 40, "7": 50, "8": 60 },
        "link": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 2, "6": 3, "7": 4, "8": 6 },
        "road": { "0": 2500, "1": 2500, "2": 2500, "3": 2500, "4": 2500, "5": 2500, "6": 2500, "7": 2500, "8": 2500 },
        "constructedWall": { "1": 0, "2": 2500, "3": 2500, "4": 2500, "5": 2500, "6": 2500, "7": 2500, "8": 2500 },
        "rampart": { "1": 0, "2": 2500, "3": 2500, "4": 2500, "5": 2500, "6": 2500, "7": 2500, "8": 2500 },
        "storage": { "1": 0, "2": 0, "3": 0, "4": 1, "5": 1, "6": 1, "7": 1, "8": 1 },
        "tower": { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 6 },
        "observer": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 1 },
        "powerSpawn": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 1 },
        "extractor": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 1, "7": 1, "8": 1 },
        "terminal": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 1, "7": 1, "8": 1 },
        "lab": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 3, "7": 6, "8": 10 },
        "container": { "0": 5, "1": 5, "2": 5, "3": 5, "4": 5, "5": 5, "6": 5, "7": 5, "8": 5 },
        "nuker": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 1 }
    }
    global.CONTROLLER_DOWNGRADE = {
        "1":20000,
        "2":10000,
        "3":20000,
        "4":40000,
        "5":80000,
        "6":120000,
        "7":150000,
        "8":200000
    }
    global.CONTROLLER_CLAIM_DOWNGRADE = 300
    global.CONTROLLER_RESERVE = 1
    global.CONTROLLER_RESERVE_MAX = 5000
    /*
    declare const CONTROLLER_MAX_UPGRADE_PER_TICK: number;
    declare const CONTROLLER_ATTACK_BLOCKED_UPGRADE: number;
    declare const TOWER_HITS: number;
    declare const TOWER_CAPACITY: number;
    declare const TOWER_ENERGY_COST: number;
    declare const TOWER_POWER_ATTACK: number;
    declare const TOWER_POWER_HEAL: number;
    declare const TOWER_POWER_REPAIR: number;
    declare const TOWER_OPTIMAL_RANGE: number;
    declare const TOWER_FALLOFF_RANGE: number;
    declare const TOWER_FALLOFF: number;
    declare const OBSERVER_HITS: number;
    declare const OBSERVER_RANGE: number;
    declare const POWER_BANK_HITS: number;
    declare const POWER_BANK_CAPACITY_MAX: number;
    declare const POWER_BANK_CAPACITY_MIN: number;
    declare const POWER_BANK_CAPACITY_CRIT: number;
    declare const POWER_BANK_DECAY: number;
    declare const POWER_BANK_HIT_BACK: number;
    declare const POWER_SPAWN_HITS: number;
    declare const POWER_SPAWN_ENERGY_CAPACITY: number;
    declare const POWER_SPAWN_POWER_CAPACITY: number;
    declare const POWER_SPAWN_ENERGY_RATIO: number;
    declare const EXTRACTOR_HITS: number;
    declare const LAB_HITS: number;
    declare const LAB_MINERAL_CAPACITY: number;
    declare const LAB_ENERGY_CAPACITY: number;
    declare const LAB_BOOST_ENERGY: number;
    declare const LAB_BOOST_MINERAL: number;
    declare const LAB_COOLDOWN: number;
    declare const LAB_REACTION_AMOUNT: number;
    declare const GCL_POW: number;
    declare const GCL_MULTIPLY: number;
    declare const GCL_NOVICE: number;
    declare const MODE_SIMULATION: string;
    declare const MODE_SURVIVAL: string;
    declare const MODE_WORLD: string;
    declare const MODE_ARENA: string;
    declare const TERRAIN_MASK_WALL: number;
    declare const TERRAIN_MASK_SWAMP: number;
    declare const TERRAIN_MASK_LAVA: number;
    declare const MAX_CONSTRUCTION_SITES: number;
    declare const MAX_CREEP_SIZE: number;
    declare const MINERAL_REGEN_TIME: number;
    declare const MINERAL_MIN_AMOUNT: {
        H: number;
        O: number;
        L: number;
        K: number;
        Z: number;
        U: number;
        X: number;
    };
    declare const MINERAL_RANDOM_FACTOR: number;
    declare const MINERAL_DENSITY: {
        1: number;
        2: number;
        3: number;
        4: number;
    };
    declare const MINERAL_DENSITY_PROBABILITY: {
        1: number;
        2: number;
        3: number;
        4: number;
    };
    declare const MINERAL_DENSITY_CHANGE: number;
    declare const DENSITY_LOW: number;
    declare const DENSITY_MODERATE: number;
    declare const DENSITY_HIGH: number;
    declare const DENSITY_ULTRA: number;
    declare const TERMINAL_CAPACITY: number;
    declare const TERMINAL_HITS: number;
    declare const TERMINAL_SEND_COST: number;
    declare const TERMINAL_MIN_SEND: number;
    declare const TERMINAL_COOLDOWN: number;
    declare const CONTAINER_HITS: number;
    declare const CONTAINER_CAPACITY: number;
    declare const CONTAINER_DECAY: number;
    declare const CONTAINER_DECAY_TIME: number;
    declare const CONTAINER_DECAY_TIME_OWNED: number;
    declare const NUKER_HITS: number;
    declare const NUKER_COOLDOWN: number;
    declare const NUKER_ENERGY_CAPACITY: number;
    declare const NUKER_GHODIUM_CAPACITY: number;
    declare const NUKE_LAND_TIME: number;
    declare const NUKE_RANGE: number;
    declare const NUKE_DAMAGE: {
        0: number;
        1: number;
        4: number;
    };
    declare const REACTIONS: {
        [reagent: string]: {
            [reagent: string]: string;
        };
    };
    declare const BOOSTS: {
        [part: string]: {
            [boost: string]: {
                [action: string]: number;
            };
        };
    };
    declare const LOOK_CREEPS: "creep";
    declare const LOOK_ENERGY: "energy";
    declare const LOOK_RESOURCES: "resource";
    declare const LOOK_SOURCES: "source";
    declare const LOOK_MINERALS: "mineral";
    declare const LOOK_STRUCTURES: "structure";
    declare const LOOK_FLAGS: "flag";
    declare const LOOK_CONSTRUCTION_SITES: "constructionSite";
    declare const LOOK_NUKES: "nuke";
    declare const LOOK_TERRAIN: "terrain";
    declare const ORDER_SELL: "sell";
    declare const ORDER_BUY: "buy";
    */
}

// TODO: Finish teardown if necessary.
const teardown = () => {
    delete global.OK
    delete global.ERR_NOT_OWNER
    delete global.ERR_NO_PATH
    delete global.ERR_NAME_EXISTS
    delete global.ERR_BUSY
    delete global.ERR_NOT_FOUND
    delete global.ERR_NOT_ENOUGH_RESOURCES
    delete global.ERR_NOT_ENOUGH_ENERGY
    global.ERR_INVALID_TARGET = -7
    global.ERR_FULL = -8
    global.ERR_NOT_IN_RANGE = -9
    global.ERR_INVALID_ARGS = -10
    global.ERR_TIRED = -11
    global.ERR_NO_BODYPART = -12
    global.ERR_NOT_ENOUGH_EXTENSIONS = -6
    global.ERR_RCL_NOT_ENOUGH = -14
    global.ERR_GCL_NOT_ENOUGH = -15
    global.FIND_EXIT_TOP = 1
    global.FIND_EXIT_RIGHT = 3
    global.FIND_EXIT_BOTTOM = 5
    global.FIND_EXIT_LEFT = 7
    global.FIND_EXIT = 10
    global.FIND_CREEPS = 101
    global.FIND_MY_CREEPS = 102
    global.FIND_HOSTILE_CREEPS = 103
    global.FIND_SOURCES_ACTIVE = 104
    global.FIND_SOURCES = 105
    global.FIND_DROPPED_RESOURCES = 106
    global.FIND_DROPPED_ENERGY = 106
    global.FIND_STRUCTURES = 107
    global.FIND_MY_STRUCTURES = 108
    global.FIND_HOSTILE_STRUCTURES = 109
    global.FIND_FLAGS = 110
    global.FIND_CONSTRUCTION_SITES = 111
    global.FIND_MY_SPAWNS = 112
    global.FIND_HOSTILE_SPAWNS = 113
    global.FIND_MY_CONSTRUCTION_SITES = 114
    global.FIND_HOSTILE_CONSTRUCTION_SITES = 115
    global.FIND_MINERALS = 116
    global.FIND_NUKES = 117
    global.TOP = 1
    global.TOP_RIGHT = 2
    global.RIGHT = 3
    global.BOTTOM_RIGHT = 4
    global.BOTTOM = 5
    global.BOTTOM_LEFT = 6
    global.LEFT = 7
    global.TOP_LEFT = 8
    global.COLOR_RED = 1
    global.COLOR_PURPLE = 2
    global.COLOR_BLUE = 3
    global.COLOR_CYAN = 4
    global.COLOR_GREEN = 5
    global.COLOR_YELLOW = 6
    global.COLOR_ORANGE = 7
    global.COLOR_BROWN = 8
    global.COLOR_GREY = 9
    global.COLOR_WHITE = 10
    global.COLORS_ALL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    global.CREEP_SPAWN_TIME = 3
    global.CREEP_LIFE_TIME = 1500
    global.CREEP_CLAIM_LIFE_TIME = 500
    global.CREEP_CORPSE_RATE = 0.2
    global.OBSTACLE_OBJECT_TYPES = ["spawn", "creep", "powerCreep", "source", "mineral", "controller", "constructedWall", "extension", "link", "storage", "tower", "observer", "powerSpawn", "powerBank", "lab", "terminal", "nuker"]
    global.ENERGY_REGEN_TIME = 300
    global.ENERGY_DECAY = 1000
    global.REPAIR_COST = 0.01
    global.RAMPART_DECAY_AMOUNT = 300
    global.RAMPART_DECAY_TIME = 100
    global.RAMPART_HITS = 1
    global.RAMPART_HITS_MAX = {
        2: 300000,
        3: 1000000,
        4: 3000000,
        5: 10000000,
        6: 30000000,
        7: 100000000,
        8: 300000000
    }
    global.SPAWN_HITS = 5000
    global.SPAWN_ENERGY_START = 300
    global.SPAWN_ENERGY_CAPACITY = 300
    global.SOURCE_ENERGY_CAPACITY = 3000
    global.SOURCE_ENERGY_NEUTRAL_CAPACITY = 1500
    global.SOURCE_ENERGY_KEEPER_CAPACITY = 4000
    global.WALL_HITS = 1
    global.WALL_HITS_MAX = 300000000
    global.EXTENSION_HITS = 1000
    global.EXTENSION_ENERGY_CAPACITY = {
        0: 50,
        1: 50,
        2: 50,
        3: 50,
        4: 50,
        5: 50,
        6: 50,
        7: 100,
        8: 200,
    }
    global.ROAD_HITS = 5000
    global.ROAD_WEAROUT = 1
    global.ROAD_DECAY_AMOUNT = 100
    global.ROAD_DECAY_TIME = 1000
    global.LINK_HITS = 1000
    global.LINK_HITS_MAX = 1000
    global.LINK_CAPACITY = 800
    global.LINK_COOLDOWN = 1
    global.LINK_LOSS_RATIO = 0.03
    global.STORAGE_CAPACITY = 1000000
    global.STORAGE_HITS = 10000
    global.BODYPART_COST = {
        move: 50,
        work: 100,
        attack: 80,
        carry: 50,
        heal: 250,
        ranged_attack: 150,
        tough: 10,
        claim: 600,
    }
    global.BODYPARTS_ALL = ["move", "work", "carry", "attack", "ranged_attack", "tough", "heal", "claim"]
    global.CARRY_CAPACITY = 50
    global.HARVEST_POWER = 2
    global.HARVEST_MINERAL_POWER = 1
    global.REPAIR_POWER = 100
    global.DISMANTLE_POWER = 50
    global.BUILD_POWER = 5
    global.ATTACK_POWER = 30
    global.UPGRADE_CONTROLLER_POWER = 1
    global.RANGED_ATTACK_POWER = 10
    global.HEAL_POWER = 12
    global.RANGED_HEAL_POWER = 4
    global.DISMANTLE_COST = 0.005
    global.MOVE = "move"
    global.WORK = "work"
    global.CARRY = "carry"
    global.ATTACK = "attack"
    global.RANGED_ATTACK = "ranged_attack"
    global.TOUGH = "tough"
    global.HEAL = "heal"
    global.CLAIM = "claim"
    global.CONSTRUCTION_COST = {
        spawn: 15000,
        extension: 3000,
        road: 300,
        constructedWall: 1,
        rampart: 1,
        link: 5000,
        storage: 30000,
        tower: 5000,
        observer: 8000,
        powerSpawn: 100000,
        extractor: 5000,
        lab: 50000,
        terminal: 100000,
        container: 5000,
        nuker: 100000,
    }
    global.CONSTRUCTION_COST_ROAD_SWAMP_RATIO = 5
    global.STRUCTURE_EXTENSION = "extension"
    global.STRUCTURE_RAMPART = "rampart"
    global.STRUCTURE_ROAD = "road"
    global.STRUCTURE_SPAWN = "spawn"
    global.STRUCTURE_LINK = "link"
    global.STRUCTURE_WALL = "wall"
    global.STRUCTURE_KEEPER_LAIR = "keeperLair"
    global.STRUCTURE_CONTROLLER = "controller"
    global.STRUCTURE_STORAGE = "storage"
    global.STRUCTURE_TOWER = "tower"
    global.STRUCTURE_OBSERVER = "observer"
    global.STRUCTURE_POWER_BANK = "powerBank"
    global.STRUCTURE_POWER_SPAWN = "powerSpawn"
    global.STRUCTURE_EXTRACTOR = "extractor"
    global.STRUCTURE_LAB = "lab"
    global.STRUCTURE_TERMINAL = "terminal"
    global.STRUCTURE_CONTAINER = "container"
    global.STRUCTURE_NUKER = "nuker"
    global.STRUCTURE_PORTAL = "portal"
    global.RESOURCE_ENERGY = "energy"
    global.RESOURCE_POWER = "power"
    global.RESOURCE_UTRIUM = "U"
    global.RESOURCE_LEMERGIUM = "L"
    global.RESOURCE_KEANIUM = "K"
    global.RESOURCE_GHODIUM = "G"
    global.RESOURCE_ZYNTHIUM = "Z"
    global.RESOURCE_OXYGEN = "O"
    global.RESOURCE_HYDROGEN = "H"
    global.RESOURCE_CATALYST = "X"
    global.RESOURCE_HYDROXIDE = "OH"
    global.RESOURCE_ZYNTHIUM_KEANITE = "ZK"
    global.RESOURCE_UTRIUM_LEMERGITE = "UL"
    global.RESOURCE_UTRIUM_HYDRIDE = "UH"
    global.RESOURCE_UTRIUM_OXIDE = "UO"
    global.RESOURCE_KEANIUM_HYDRIDE = "KH"
    global.RESOURCE_KEANIUM_OXIDE = "KO"
    global.RESOURCE_LEMERGIUM_HYDRIDE = "LH"
    global.RESOURCE_LEMERGIUM_OXIDE = "LO"
    global.RESOURCE_ZYNTHIUM_HYDRIDE = "ZH"
    global.RESOURCE_ZYNTHIUM_OXIDE = "ZO"
    global.RESOURCE_GHODIUM_HYDRIDE = "GH"
    global.RESOURCE_GHODIUM_OXIDE = "GO"
    global.RESOURCE_UTRIUM_ACID = "UH2O"
    global.RESOURCE_UTRIUM_ALKALIDE = "UHO2"
    global.RESOURCE_KEANIUM_ACID = "KH2O"
    global.RESOURCE_KEANIUM_ALKALIDE = "KHO2"
    global.RESOURCE_LEMERGIUM_ACID = "LH2O"
    global.RESOURCE_LEMERGIUM_ALKALIDE = "LHO2"
    global.RESOURCE_ZYNTHIUM_ACID = "ZH2O"
    global.RESOURCE_ZYNTHIUM_ALKALIDE = "ZHO2"
    global.RESOURCE_GHODIUM_ACID = "GH2O"
    global.RESOURCE_GHODIUM_ALKALIDE = "GHO2"
    global.RESOURCE_CATALYZED_UTRIUM_ACID = "XUH2O"
    global.RESOURCE_CATALYZED_UTRIUM_ALKALIDE = "XUHO2"
    global.RESOURCE_CATALYZED_KEANIUM_ACID = "XKH2O"
    global.RESOURCE_CATALYZED_KEANIUM_ALKALIDE = "XKHO2"
    global.RESOURCE_CATALYZED_LEMERGIUM_ACID = "XLH2O"
    global.RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = "XLHO2"
    global.RESOURCE_CATALYZED_ZYNTHIUM_ACID = "XZH2O"
    global.RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = "ZXHO2"
    global.RESOURCE_CATALYZED_GHODIUM_ACID = "XGH2O"
    global.RESOURCE_CATALYZED_GHODIUM_ALKALIDE = "XGHO2"
    global.RESOURCES_ALL = ["energy", "power", "H", "O", "U", "K", "L", "Z", "X", "G", "OH", "ZK", "UL", "UH", "UO", "KH", "KO", "LH", "LO", "ZH", "ZO", "GH", "GO", "UH2O", "UHO2", "KH2O", "KHO2", "LH2O", "LHO2", "ZH2O", "ZHO2", "GH2O", "GHO2", "XUH2O", "XUHO2", "XKH2O", "XKHO2", "XLH2O", "XLHO2", "XZH2O", "XZHO2", "XGH2O", "XGHO2", "ops"]
    global.SUBSCRIPTION_TOKEN = "TOKEN"
    global.CONTROLLER_LEVELS = {
        1: 200,
        2: 45000,
        3: 135000,
        4: 405000,
        5: 1215000,
        6: 3645000,
        7: 10935000
    }
    global.CONTROLLER_STRUCTURES = {
        "spawn": { "0": 0, "1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "7": 2, "8": 3 },
        "extension": { "0": 0, "1": 0, "2": 5, "3": 10, "4": 20, "5": 30, "6": 40, "7": 50, "8": 60 },
        "link": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 2, "6": 3, "7": 4, "8": 6 },
        "road": { "0": 2500, "1": 2500, "2": 2500, "3": 2500, "4": 2500, "5": 2500, "6": 2500, "7": 2500, "8": 2500 },
        "constructedWall": { "1": 0, "2": 2500, "3": 2500, "4": 2500, "5": 2500, "6": 2500, "7": 2500, "8": 2500 },
        "rampart": { "1": 0, "2": 2500, "3": 2500, "4": 2500, "5": 2500, "6": 2500, "7": 2500, "8": 2500 },
        "storage": { "1": 0, "2": 0, "3": 0, "4": 1, "5": 1, "6": 1, "7": 1, "8": 1 },
        "tower": { "1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 6 },
        "observer": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 1 },
        "powerSpawn": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 1 },
        "extractor": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 1, "7": 1, "8": 1 },
        "terminal": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 1, "7": 1, "8": 1 },
        "lab": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 3, "7": 6, "8": 10 },
        "container": { "0": 5, "1": 5, "2": 5, "3": 5, "4": 5, "5": 5, "6": 5, "7": 5, "8": 5 },
        "nuker": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 1 }
    }
    /*
    declare const CONTROLLER_DOWNGRADE: {
        [level: number]: number;
    };
    declare const CONTROLLER_CLAIM_DOWNGRADE: number;
    declare const CONTROLLER_RESERVE: number;
    declare const CONTROLLER_RESERVE_MAX: number;
    declare const CONTROLLER_MAX_UPGRADE_PER_TICK: number;
    declare const CONTROLLER_ATTACK_BLOCKED_UPGRADE: number;
    declare const TOWER_HITS: number;
    declare const TOWER_CAPACITY: number;
    declare const TOWER_ENERGY_COST: number;
    declare const TOWER_POWER_ATTACK: number;
    declare const TOWER_POWER_HEAL: number;
    declare const TOWER_POWER_REPAIR: number;
    declare const TOWER_OPTIMAL_RANGE: number;
    declare const TOWER_FALLOFF_RANGE: number;
    declare const TOWER_FALLOFF: number;
    declare const OBSERVER_HITS: number;
    declare const OBSERVER_RANGE: number;
    declare const POWER_BANK_HITS: number;
    declare const POWER_BANK_CAPACITY_MAX: number;
    declare const POWER_BANK_CAPACITY_MIN: number;
    declare const POWER_BANK_CAPACITY_CRIT: number;
    declare const POWER_BANK_DECAY: number;
    declare const POWER_BANK_HIT_BACK: number;
    declare const POWER_SPAWN_HITS: number;
    declare const POWER_SPAWN_ENERGY_CAPACITY: number;
    declare const POWER_SPAWN_POWER_CAPACITY: number;
    declare const POWER_SPAWN_ENERGY_RATIO: number;
    declare const EXTRACTOR_HITS: number;
    declare const LAB_HITS: number;
    declare const LAB_MINERAL_CAPACITY: number;
    declare const LAB_ENERGY_CAPACITY: number;
    declare const LAB_BOOST_ENERGY: number;
    declare const LAB_BOOST_MINERAL: number;
    declare const LAB_COOLDOWN: number;
    declare const LAB_REACTION_AMOUNT: number;
    declare const GCL_POW: number;
    declare const GCL_MULTIPLY: number;
    declare const GCL_NOVICE: number;
    declare const MODE_SIMULATION: string;
    declare const MODE_SURVIVAL: string;
    declare const MODE_WORLD: string;
    declare const MODE_ARENA: string;
    declare const TERRAIN_MASK_WALL: number;
    declare const TERRAIN_MASK_SWAMP: number;
    declare const TERRAIN_MASK_LAVA: number;
    declare const MAX_CONSTRUCTION_SITES: number;
    declare const MAX_CREEP_SIZE: number;
    declare const MINERAL_REGEN_TIME: number;
    declare const MINERAL_MIN_AMOUNT: {
        H: number;
        O: number;
        L: number;
        K: number;
        Z: number;
        U: number;
        X: number;
    };
    declare const MINERAL_RANDOM_FACTOR: number;
    declare const MINERAL_DENSITY: {
        1: number;
        2: number;
        3: number;
        4: number;
    };
    declare const MINERAL_DENSITY_PROBABILITY: {
        1: number;
        2: number;
        3: number;
        4: number;
    };
    declare const MINERAL_DENSITY_CHANGE: number;
    declare const DENSITY_LOW: number;
    declare const DENSITY_MODERATE: number;
    declare const DENSITY_HIGH: number;
    declare const DENSITY_ULTRA: number;
    declare const TERMINAL_CAPACITY: number;
    declare const TERMINAL_HITS: number;
    declare const TERMINAL_SEND_COST: number;
    declare const TERMINAL_MIN_SEND: number;
    declare const TERMINAL_COOLDOWN: number;
    declare const CONTAINER_HITS: number;
    declare const CONTAINER_CAPACITY: number;
    declare const CONTAINER_DECAY: number;
    declare const CONTAINER_DECAY_TIME: number;
    declare const CONTAINER_DECAY_TIME_OWNED: number;
    declare const NUKER_HITS: number;
    declare const NUKER_COOLDOWN: number;
    declare const NUKER_ENERGY_CAPACITY: number;
    declare const NUKER_GHODIUM_CAPACITY: number;
    declare const NUKE_LAND_TIME: number;
    declare const NUKE_RANGE: number;
    declare const NUKE_DAMAGE: {
        0: number;
        1: number;
        4: number;
    };
    declare const REACTIONS: {
        [reagent: string]: {
            [reagent: string]: string;
        };
    };
    declare const BOOSTS: {
        [part: string]: {
            [boost: string]: {
                [action: string]: number;
            };
        };
    };
    declare const LOOK_CREEPS: "creep";
    declare const LOOK_ENERGY: "energy";
    declare const LOOK_RESOURCES: "resource";
    declare const LOOK_SOURCES: "source";
    declare const LOOK_MINERALS: "mineral";
    declare const LOOK_STRUCTURES: "structure";
    declare const LOOK_FLAGS: "flag";
    declare const LOOK_CONSTRUCTION_SITES: "constructionSite";
    declare const LOOK_NUKES: "nuke";
    declare const LOOK_TERRAIN: "terrain";
    declare const ORDER_SELL: "sell";
    declare const ORDER_BUY: "buy";
    */
}



module.exports = {
    init,
    teardown,
}