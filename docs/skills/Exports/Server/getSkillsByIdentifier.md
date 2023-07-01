---
sidebar_position: 1
---

# getSkillsByIdentifier

#### Get skills for user by identifier

```lua
exports.OT_skills:getSkillsByIdentifier(identifier)
```
- identifier: `number|string`
    - Target players identifier.

#### This should only be used in cases where the player is offline or not yet loaded. 
```lua
local skills = exports.OT_skills:getSkillsByIdentifier(identifier)

print(json.encode(skills, {indent=true}))
--[[
    {
        "name": 'strength,
        "label": 'Strength',
        "xp": 2000,
        "level": 10,
        "statlevel": 33.3,
        "percent": 50
    }
    {
        "name": 'fishing',
        "label": 'Fishing',
        "xp": 2000,
        "level": 10,
        "statlevel": 33.3,
        "percent": 50
    }
]]
```
- skills: `table`
    - name: `string`
    - label: `string`
    - xp: `number`
    - level: `number`
    - statlevel: `number`
    - percent: `number`
