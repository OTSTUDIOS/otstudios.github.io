---
sidebar_position: 4
---

# removeXP

remove xp from skill for specified user

```lua
exports.OT_skills:removeXP(source, skill, amount)
```
- source: `number`
    - Target players server id.
- skill: `string`
    - The skill to remove xp from.
- amount: `number`
    - The amount of xp to remove.

#### Below we will use a snippet from [wasabi_fishing](https://github.com/wasabirobby/wasabi_fishing) as an example. See the highlighted areas for our code.
```lua
RegisterNetEvent('wasabi_fishing:tryFish', function(data)
    local xPole = HasItem(source, Config.fishingRod.itemName)
    local xBait = HasItem(source, Config.bait.itemName)
    if xPole > 0 and xBait > 0 then
        local chance = math.random(1,100)
        if chance <= Config.bait.loseChance then
            RemoveItem(source, Config.bait.itemName, 1)
            // highlight-next-line
            exports.OT_skills:removeXP(source, 'fishing', 5)
            TriggerClientEvent('wasabi_fishing:notify', source, Strings.bait_lost, Strings.bait_lost_desc, 'error')
        end
	if Framework == 'esx' and not Config.oldESX then
	    local player = GetPlayer(source)
	    if player.canCarryItem(data.item, 1) then
	        AddItem(source, data.item, 1)
		    TriggerClientEvent('wasabi_fishing:notify', source, Strings.fish_success, string.format(Strings.fish_success_desc, data.label), 'success')
	    else
            TriggerClientEvent('wasabi_fishing:notify', source, Strings.cannot_carry, Strings.cannot_carry_desc, 'error')
	    end
	else
        AddItem(source, data.item, 1)
        TriggerClientEvent('wasabi_fishing:notify', source, Strings.fish_success, string.format(Strings.fish_success_desc, data.label), 'success')
        end
    elseif xPole > 0 and xBait < 1 then
        TriggerClientEvent('wasabi_fishing:interupt', source)
        TriggerClientEvent('wasabi_fishing:notify', source, Strings.no_bait, Strings.no_bait_desc, 'error')
    elseif xPole < 1 then
        KickPlayer(source, Strings.kicked)
    end
end)
```