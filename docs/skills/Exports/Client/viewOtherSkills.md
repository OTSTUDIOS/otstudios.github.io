---
sidebar_position: 5
---
# viewOtherSkills

```lua
exports.OT_skills:viewOtherSkills(serverid)
```
- serverid: `number`
    - target player to view skills.

#### Example use with ox_target

```lua
exports.ox_target:addGlobalPlayer({
    {
        label = 'View Skills',
        name  = 'viewOtherSkills',
        distance = 3.0,
        icon = 'fas fa-clipboard-question',
        iconColor = '#29c785',
        onSelect = function(data)
            local serverId = GetPlayerServerId(NetworkGetPlayerIndexFromPed(data.entity))
            exports.OT_skills:viewOtherSkills(serverId)
        end
    }
})
```