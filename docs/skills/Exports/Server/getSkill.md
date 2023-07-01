---
sidebar_position: 2
---

# getSkill

Returns table of data for specified skill.

```lua
exports.OT_skills:getSkill(source, skill)
```
- source: `number`
    - Target players server id.
- skill: `string`
    - Skill to get data for.

**Example:**
```lua
local skill = exports.OT_skills:getSkill(source, 'strength')

print(json.encode(skill, {indent=true}))
--[[
    {
        "xp": 2000,
        "level": 10,
        "statlevel": 33.3,
    }
]]
```
- skill: `table`
    - xp: `number`
    - level: `number`
    - statlevel: `number`