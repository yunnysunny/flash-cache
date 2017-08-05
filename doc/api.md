## Classes

<dl>
<dt><a href="#CacheElement">CacheElement</a></dt>
<dd></dd>
<dt><a href="#FlashCache">FlashCache</a></dt>
<dd></dd>
</dl>

<a name="CacheElement"></a>

## CacheElement
**Kind**: global class  
<a name="new_CacheElement_new"></a>

### new CacheElement()
The class of CacheElement

<a name="FlashCache"></a>

## FlashCache
**Kind**: global class  

* [FlashCache](#FlashCache)
    * [new FlashCache()](#new_FlashCache_new)
    * _instance_
        * [.hitRate](#FlashCache+hitRate)
        * [.save(key, value)](#FlashCache+save)
        * [.get(key)](#FlashCache+get) ⇒ <code>any</code>
    * _static_
        * [.FlashCache](#FlashCache.FlashCache)
            * [new FlashCache([option])](#new_FlashCache.FlashCache_new)

<a name="new_FlashCache_new"></a>

### new FlashCache()
The class of FlashCache

<a name="FlashCache+hitRate"></a>

### flashCache.hitRate
Get the percentage of hit rate

**Kind**: instance property of [<code>FlashCache</code>](#FlashCache)  
**Read only**: true  
<a name="FlashCache+save"></a>

### flashCache.save(key, value)
Save data to cache

**Kind**: instance method of [<code>FlashCache</code>](#FlashCache)  

| Param | Type |
| --- | --- |
| key | <code>any</code> | 
| value | <code>any</code> | 

<a name="FlashCache+get"></a>

### flashCache.get(key) ⇒ <code>any</code>
Get data from cache

**Kind**: instance method of [<code>FlashCache</code>](#FlashCache)  

| Param | Type |
| --- | --- |
| key | <code>any</code> | 

<a name="FlashCache.FlashCache"></a>

### FlashCache.FlashCache
**Kind**: static class of [<code>FlashCache</code>](#FlashCache)  
<a name="new_FlashCache.FlashCache_new"></a>

#### new FlashCache([option])
Creates an instance of FlashCache.


| Param | Type | Description |
| --- | --- | --- |
| [option] | <code>Object</code> |  |
| [option.interval] | <code>Number</code> | The interval time to move young area to old. |

