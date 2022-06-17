-----------------------------------------------------------------------------------------------------------------------------------------
-- VRP
-----------------------------------------------------------------------------------------------------------------------------------------
local Tunnel = module("vrp","lib/Tunnel")
local Proxy  = module("vrp","lib/Proxy")
local Tools  = module("vrp","lib/Tools")
vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")
-----------------------------------------------------------------------------------------------------------------------------------------
-- database set
-----------------------------------------------------------------------------------------------------------------------------------------
DB = {}

DB.prepare = function(name, query)
    vRP.prepare(name, query)
end

DB.execute = function(name, param)
    return vRP.execute(name, param)
end

DB.query = function(name, param)
    return vRP.query(name, param)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- getUserSource
-----------------------------------------------------------------------------------------------------------------------------------------
getUserSource = function(user_id)
    return vRP.getUserSource(tonumber(user_id))
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- getUserId
-----------------------------------------------------------------------------------------------------------------------------------------
getUserId = function(source)
    return vRP.getUserId(source)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- getUserIdentity
-----------------------------------------------------------------------------------------------------------------------------------------
getUserIdentity = function(user_id)
    return vRP.getUserIdentity(user_id)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- getUserFullName
-----------------------------------------------------------------------------------------------------------------------------------------
getUserFullName = function(user_id)
    local identity = getUserIdentity(user_id)
    local name = identity.name.." "..identity.name2
    return name
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- getUserByPhone
-----------------------------------------------------------------------------------------------------------------------------------------
getUserByPhone = function(user_id)
    return vRP.getUserByPhone(user_id)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- getUsers
-----------------------------------------------------------------------------------------------------------------------------------------
getUsers = function()
    return vRP.getUsers()
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- getHasPermission
-----------------------------------------------------------------------------------------------------------------------------------------
getHasPermission = function(user_id, perm)
    return vRP.hasPermission(user_id,perm)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- checkIteminInvetory
-----------------------------------------------------------------------------------------------------------------------------------------
checkIteminInvetory = function(user_id, item, amount)
    if vRP.getInventoryItemAmount(user_id, item) >= amount then
        return true
    else
        return false
    end
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- getUsersByPermission
-----------------------------------------------------------------------------------------------------------------------------------------
getUsersByPermission = function(group)
    return vRP.getUsersByPermission(group)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- treatUsersByPermission
-----------------------------------------------------------------------------------------------------------------------------------------
treatUsersByPermission = function(id)
    local player = getUserSource(w)
    local user_id = getUserId(player)
    return player,user_id
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- getUserPosition
-----------------------------------------------------------------------------------------------------------------------------------------
getUserPosition = function(source)
    return vRPclient.getPosition(source)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- playSound
-----------------------------------------------------------------------------------------------------------------------------------------
playSound = function(source,dict,name)
    vRPclient.playSound(source,dict,name)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- createBlipTimeout
-----------------------------------------------------------------------------------------------------------------------------------------
createBlipTimeout = function(source,idgens,x,y,z,title,timeout)
    local id = idgens:gen()
    blips[id] = vRPclient.addBlip(source,x,y,z,358,71,title,0.6,false)
    SetTimeout(timeout,function() vRPclient.removeBlip(source,blips[id]) idgens:free(id) end)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- requestAcceptorNot
-----------------------------------------------------------------------------------------------------------------------------------------
requestAcceptorNot = function(source,title,timeout)
    return vRP.request(source,title,timeout)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- checkPlayerHandcuffed
-----------------------------------------------------------------------------------------------------------------------------------------
checkPlayerHandcuffed = function(source)
    return vRPclient.isHandcuffed(source)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- getBankMoney
-----------------------------------------------------------------------------------------------------------------------------------------
getBankMoney = function(user_id)
    return vRP.getBankMoney(user_id)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- addBankMoney
-----------------------------------------------------------------------------------------------------------------------------------------
addBankMoney = function(user_id, amount)
    local bank  = getBankMoney(user_id)
    local total = bank + amount
    vRP.setBankMoney(user_id, tonumber(total))
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- remBankMoney
-----------------------------------------------------------------------------------------------------------------------------------------
remBankMoney = function(user_id, amount)
    local bank  = getBankMoney(user_id)
    local total = bank - amount
    vRP.setBankMoney(user_id, tonumber(total))
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- expulseUser
-----------------------------------------------------------------------------------------------------------------------------------------
expulseUser = function(user_id, message)
    vRP.kick(user_id,message)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- formatnumber
-----------------------------------------------------------------------------------------------------------------------------------------
formatnumber = function(number)
	local left,num,right = string.match(number,'^([^%d]*%d)(%d*)(.-)$')
	return left..(num:reverse():gsub('(%d%d%d)','%1.'):reverse())..right
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- getUserData
-----------------------------------------------------------------------------------------------------------------------------------------
getUserData = function(user_id, key)
    return vRP.getUData(user_id, key)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- setUserData
-----------------------------------------------------------------------------------------------------------------------------------------
setUserData = function(user_id, key, data)
    vRP.setUData(user_id, key, data)
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- sendnotify
-----------------------------------------------------------------------------------------------------------------------------------------
sendnotify = function(source, type, message, time)
    if time == nil then
        time = 5000
    end
    if source then 
        TriggerClientEvent("Notify",source,type,message,time)
    end
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- sendnotifypush
-----------------------------------------------------------------------------------------------------------------------------------------
sendnotifypush = function(source,title,message,x,y,z,name,phone)
    if source then 
        TriggerClientEvent("NotifyPush",source,{ time = os.date("%H:%M:%S - %d/%m/%Y"), text = message, code = 20, title = title, x = x, y = y, z = z, name = name, phone = phone, rgba = {69,115,41} })
    end
end