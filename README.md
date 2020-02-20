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

<TxtFrame size=(2rem,1rem)>textframe</TxtFrame>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | text | mixed | string: contents text |
| | | | mofron-comp-text: contents component |
| | center | boolean | horizonal center position flag |
| | | boolean | vertical center position flag |
| | xCenter | boolean | true: text is centered horizontally (default) |
| | | | false: text is not centered |
| | yCenter | boolean | true: text is centered vertically (default) |
| | | | false: text is not centered |
| | mainColor | mixed (color) | string: color name, #hex |
| | | | array: [red, green, blue, alpha] |
| | | option | style option |

