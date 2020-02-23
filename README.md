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
    <tag load="mofron-comp-txtframe">TxtFrame</tag>
</require>

<TxtFrame size=(2rem,1rem)>text frame</TxtFrame>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | text | mixed | string: contents text |
| | | | mofron-comp-text: contents component |
| | | | undefined: call as getter |
| | center | boolean | horizonal center position flag |
| | | | undefined: call as getter |
| | | boolean | vertical center position flag |
| | | | undefined: call as getter |
| | xCenter | boolean | true: text is centered horizontally (default) |
| | | | false: text is not centered |
| | | | undefined: call as getter |
| | yCenter | boolean | true: text is centered vertically (default) |
| | | | false: text is not centered |
| | | | undefined: call as getter |
| | mainColor | mixed(color) | string: color name, #hex |
| | | | array: [red, green, blue, alpha] |
| | | | undefined: call as getter |
| | | key-value | style option |

