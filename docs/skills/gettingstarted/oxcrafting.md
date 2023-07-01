---
sidebar_position: 2
---

# Crafting integration - ox_inventory

:::note
The skill system integrates seamlessly with ox_inventory. Simply add the following entries below to each recipe you would like to be either restricted by or gain xp for crafting.

It is not required to use both entries if you only want to restrict a crafting item and not reward xp etc.
:::
```lua
requiredskills = {crafting = 5} -- You can specify as many skills here as you want e.g: {crafting = 5, strength = 2}
rewardskills = {crafting = 10} -- You can specify as many skills here as you want e.g: {crafting = 10, strength = 10}
```

#### Below is an edited version of data/crafting.lua with the neccasary changes for OT_skills integration to only allow the lockpick to be craftable at level 5 crafting and reward 10xp to crafting, Use this as an example to adapt your current crafting items.

```lua
return {
	{
		items = {
			{
				name = 'lockpick',
				ingredients = {
					scrapmetal = 5,
					WEAPON_HAMMER = 0.05
				},
				duration = 5000,
				count = 2,
                // highlight-start
                requiredskills = {crafting = 5} -- You can specify as many skills here as you want e.g: {crafting = 5, strength = 3}
                rewardskills = {crafting = 10} -- You can specify as many skills here as you want e.g: {crafting = 10, strength = 10}
                // highlight-end
			},
            {
				name = 'armour',
				ingredients = {
					scrapmetal = 5,
					WEAPON_HAMMER = 0.05
				},
				duration = 5000,
				count = 2
			},
		},
		points = {
			vec3(-1147.083008, -2002.662109, 13.180260),
			vec3(-345.374969, -130.687088, 39.009613)
		},
		zones = {
			{
				coords = vec3(-1146.2, -2002.05, 13.2),
				size = vec3(3.8, 1.05, 0.15),
				distance = 1.5,
				rotation = 315.0,
			},
			{
				coords = vec3(-346.1, -130.45, 39.0),
				size = vec3(3.8, 1.05, 0.15),
				distance = 1.5,
				rotation = 70.0,
			},
		},
		blip = { id = 566, colour = 31, scale = 0.8 },
	},
}
```