---
sidebar_position: 1
---

# Config

```lua
Config = {}

Config.Target = true
Config.Sound = true
Config.maxVolume = 0.2

Config.Framework = 'ESX' -- ESX | QBCORE 
Config.inventory = 'OX' -- ESX | QBCORE | OX


Config.Items = {
    ['phone'] = {
        rewards = {
            plastic = {durationPerItem = 1000, max = 2, chance = 100}
        },
    },
    ['laptop'] = {
        rewards = {
            plastic = {durationPerItem = 1000, max = 4, chance = 100},
            rubber = {durationPerItem = 1000, max = 4, chance = 100}
        },
    },
}

Config.Recyclers = {
    {
        coords = vector3(2410.07, 3030.69, 47.15),
        heading = 270.0
    }
}
```