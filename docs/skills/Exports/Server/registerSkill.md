---
sidebar_position: 3
---

# registerSkill

Use this as an alternative to creating resources in the config. You can use this export from other resources on server startup to register skills in to the system. if you do this while there are players in the server you may run in to issues.

```lua
exports.OT_skills:registerSkill(data)
```
- data: table
    - name: `string`
        - name of skill, Only string with no whitespace characters.
    - label: `string`
        - Skill label to appear in UI
    - description: `string`
        - Skill description for tooltip
    - multiplier: `number`
        - Affects the amount of xp required for each level.
    - maxlevel: `number`
        - Skills max level.
    - maxReward: `number`
        - Maximum allowed xp reward.
    - maxDeduction: `number`
        - Maximum allowed xp deduction.
    - autoRemove: `boolean`
        - Enable/Disable autoRemove for skill, runs a periodic check on the skill and if the skill has not been trained, will start to remove xp.
    - autoRemoveTimer: `number`
        - Time in hours. In this example if skill is not trained or gained xp, for 5 days they will lose the amount of xp specified below.
    - autoRemoveAmount: `number`
        - Amount of xp to remove every x amount of hours specified above.
    - icon?: `string`
        - Font-awesome icon short name.
    - iconColor?: `string`
        - Hex colour code


**Example:**
```lua
local data = {
    name = 'testskill',
    label = 'Test Skill',
    description = 'This is a test'
    multiplier = 2.0, 
    maxlevel = 30, 
    maxReward = 40,
    maxDeduction = 40
}
exports.OT_skills:registerSkill(data)
```