---
sidebar_position: 2
---

# Creating a custom skill

:::caution 
This only registers a skill in the system. You still have to integrate the provided exports in other resources to gain/lose xp.

**The script handles all the necessary queries for the database. DO NOT ATTEMPT TO MODIFY THE DATABASE MANUALLY**
:::

**First you  need to create your skill in the config, see the example below.**

```lua
['fishing'] = {
    multiplier = 2.5,
    maxlevel = 30,
    maxReward = 20, 
    maxDeduction = 20,
    autoRemove = true,
    autoRemoveTimer = 120,
    autoRemoveAmount = 100,
    label = 'Fishing', 
    description = 'Experienced fisherman are always patient enough to catch only the best.',
    icon = 'fish',
    iconColor = '#29c785'
}
```
- fishing: `table`
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
  - label: `string`
    - Skill label to appear in UI
  - description: `string`
    - Skill description for tooltip
  - icon?: `string`
    - Font-awesome icon short name.
  - iconColor?: `string`
    - Hex colour code
