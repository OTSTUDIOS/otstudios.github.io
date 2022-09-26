---
sidebar_position: 1
---

# Config

```lua
Config = {}

Config.Locale = 'en'
Config.Framework = 'ESX' -- ESX | QBCORE 
Config.inventory = 'OX' -- ESX | QBCORE | OX
Config.target = true
Config.targetSystem = 'Qtarget' -- Qtarget | Qb-target
Config.UseAddMoney = false
Config.payType = 'cash' -- cash or bank
Config.BonusPerLog = true
Config.BonusPerLogAmount = 1
Config.cleanupTime = 5 -- cleanup timer in minutes
Config.BasePay = 200 -- base pay without skill level bonus
Config.RankPayMultiplier = 10 -- this number * skill level is added to the basepay.
Config.MaxSkillRank = 30 -- max skill level
Config.skillMultiplier = 2.5 -- multipluer of xp per level, higher number means it will take longer to level up
Config.hackEvent = '' -- Event to trigger when a player is suspected of abusing server event.
Config.CommandForXP = false

Config.Zones = {
    ['cedar'] = {
        coords = vector3(-514.27, 5464.43, 80.66), -- coordinates for middle of harvesting zone
		propOffset = 2.1, -- prop Z offset
        dropoff = vector3(-510.17, 5269.21, 80.0), -- drop off point to drop off full trailer of logs.
        mechanicCoords = vector3(-567.63, 5254.76, 70.5), -- vehicle ped location
        mechanicHeading = 67.0, -- vehicle ped heading
        mechanicPed = `S_M_M_AutoShop_02`, -- vehicle ped model
        mechanicSprite = 402,
        mechanicColor = 25,
        vehicle = 'bison', -- vehicle to spawn
        vehicleCoords = vector3(-580.55, 5257.35, 69.5), -- vehicle spawn location
        vehicleHeading = 330.0, -- vehicle spawn heading
        trailerCoords = vector3(-583.389831, 5251.874023, 70.456832), -- trailer spawn location
        trailerHeading = 334.0, -- trailer spawn heading
		prop = 'test_tree_cedar_trunk_001', -- tree prop to be used
        spawnAmount = 20, -- amount of trees to spawn
        item = 'cedar_log', -- item to be given to player
        itemAmount = 1, -- amount of logs to give to player
        xpReward = 5, -- xp reward for harvesting a tree
        cutTime = 15000, -- time in milliseconds to cut a tree
        name = 'Cedar trees', -- blip name
        color = 25, -- blip color
        sprite = 311, -- blip sprite
        radius = 0.0 -- radius of blip
    }
}

Config.trailerData = {
    [`trailersmall`] = {
        offset = vector3(1.0, -1.0, -0.2),
        newrowoffset = vector3(1.5, -1.0, -0.2),
        maxlogs = 5
    },
    [`trflat`] = {
        offset = vector3(1.0, -1.0, 0.675),
        newrowoffset = vector3(1.5, -1.0, 0.675),
        maxlogs = 30
    }
}

Config.vehicles = {
    {
        type = 'truck',
        label = 'Bison',
        model = `bison`,
        level = 1
    },
    {
        type = 'truck',
        label = 'Phantom',
        model = `phantom`,
        level = 3
    },
    {
        type = 'truck',
        label = 'Phantom2',
        model = `phantom2`,
        level = 5
    },
    {
        type = 'truck',
        label = 'Phantom3',
        model = `phantom3`,
        level = 10
    },
    {
        type = 'trailer',
        label = 'Small Trailer',
        model = `trailersmall`,
        level = 1
    },
    {
        type = 'trailer',
        label = 'Large Trailer',
        model = `trflat`,
        level = 3
    }
}
```