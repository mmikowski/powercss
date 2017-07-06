# Extendo property feature plans

## Summary
The `__extendo_map_` property feature is planned which will **extend**
style properties with an arbitrary number of keys and values in a named
map. 

## Purpose
Extendo maps should be very handy for quickly creating similar selectors.

## Example
Consider the following selector definition:

```js
  _mixin_map_ : {
    _fred_map_ : {
      _background_ : '_xfff_',
      _margin_     : '_0_'
    },
    _default_font_ : 'arial,sans'
  }

  _style_list_ = [
    { _selector_str_ : '#pcss-_switch_',
      _rule_map_     : {
        _color_        : '_x888_',
        _font_         : '_default_font_',
        __extendo_map_ : '_fred_map_'
      }
    }
  ];
```

The resulting CSS should be:
```css
#pcss-_switch_{background:#fff;margin:000;color:#888;font:arial,sans}
```

## Requirements
The `__extendo_map_` key (or more appropriate alternate) should be
**reserved** and will need to be interpreted as such:

```
Search for the specified anywhere in the cascade, and if found add the
properties of that map to the closure. If a map value for the provided key
(_fred_map_ in this example) is not found ignore this directive.
```

## Status
This is currently WIP and is held in reserve. Prior implementation needs to be
rethought.

## Last updated
2017-07-05 mmikowski
