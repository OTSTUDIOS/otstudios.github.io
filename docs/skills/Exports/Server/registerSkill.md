---
sidebar_position: 3
---

# registerSkill

Use this from other resources on server startup to register skills in to the system. if you do this while there are players in the server you may run in to issues.

```lua
-- data: table
    -- name: string
    -- label: string
    -- description: string
    -- multiplier: number
    -- maxlevel: number
    -- maxReward: number
exports.OT_skills:registerSkill(data)
```

**Example:**
```lua
exports.OT_skills:registerSkill({
    name = 'testskill',
    label = 'Test Skill',
    description = 'This is a test'
    multiplier = 2.0, 
    maxlevel = 30, 
    maxReward = 40
})
```