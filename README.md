# mofron-comp-txtframe
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

text frame component for mofron

text contents in the frame component.

## Feature
 - text is automatically centered
 - center position can select vertical or horizonal by center parameter

# Install
```
npm install mofron mofron-comp-txtframe
```

# Sample
```html
<require>
    <tag module="mofron-comp-txtframe">TxtFrame</tag>
</require>

<TxtFrame height="0.5rem">textframe</TxtFrame>
```
# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| ◯  | text | mixed | string/mofron-comp-text: text contents |
| | | | array: text contents list |
| | center | boolean | horizonal center position flag |
| | | boolean | vertical center position flag |
| | x_center | boolean | true: text is centered horizontally (default) |
| | | | false: text is not centered |
| | y_center | boolean | true: text is centered vertically (default) |
| | | | false: text is not centered |
| | mainColor | mixed (color) | string: color name, #hex |
| | | | array: [red, green, blue, alpha] |
| | | option | style option |

