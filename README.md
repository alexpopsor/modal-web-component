# modal-web-component

This is a Web Component to implement a modal box, based on LitElement.

# Installation

To locally test this component, please run the following command from the terminal:

```bash
git clone https://github.com/alexpopsor/modal-web-component.git
npm install
npm run serve
```

Now, you can visit the address: http://localhost:8000/dev where you will find 3 examples of this web component. Please be aware that on your machine, the port may be different.

# Usage

Import the component in your HTML file:
```
<script type="module" src="../my-element.js"></script>
```

Use the ```<my-element>``` tag to create a new modal:
```
<my-element id="modal-1" title="This is my first modal">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua.</p>
      <p slot="button1">Button 1</p>
      <p slot="button2">Button 2</p>
      <p slot="button3">Button 3</p>
      <p slot="button4">Button 4</p>
</my-element>
```

The modal window may have up to four buttons that can be as a `<p>` element which has the slot attribute value one of the following: `button1`, `button2`, `button3`, `button4`. The number represents the position of the button in the modal, starting from the left to right.

# Properties

Property        | Type    | Default  | Description                                                    
--------------- | ------- | -------- | ------------                                                   
`displatModal`  | Boolean | `false`  | State of the modal, when set to `true` the modal is displayed
`title`         | String  | `''`     | Title to be shown on the modal
`notitle`       | Boolean | `false`  | Set to `true` if you do not need a title

Properties can be set as attributes of the element:

```
<my-element displayModal>

<my-element title="This is my first modal custom element">

<my-element notitle>
```

# Methods

Method       | Arguments | Description                              
------------ | --------- | ------------                               
`open()`     | `none`    | Sets the `displayModal` property to true. The modal is displayed.
`close()`    | `none`    | Sets the `displayeModal` property to false. The modal is not displayed.

# Styling

Simple modal is easily styleable with custom properties and CSS mixins

Property                          | Default            | Description                                   
--------------------------------- | ------------------ | ------------                                  
`--modal-background-color`        | `white`            | Color of the modal window                        
`--modal-title-color`             | `black`            | Text color of the title              
`--modal-width`                   | `600px`            | Size of the modal window                    
`--modal-border-radius`           | `0px`              | Radius of each corner of modal window                    
`--button-x-background-color`     | `tranparent`       | Background color of the x button from the modal. (x should be substitute with 1, 2, 3 or 4)
`--button-x-color`                | `black`            | Text color of the x button from the modal. (x should be substitute with 1, 2, 3 or 4)

The styling can be applied as shown in this example:

```css
my-modal {
        --modal-background-color: yellow;
        --modal-title-color: green;
        --modal-width: 800px;
        --modal-border-radius: 10px;
        --button-1-background-color: red;
        --button-2-background-color: green;
        --button-3-background-color: grey;
        --button-4-background-color: brown;
        --button-1-color: black;
        --button-2-color: white;
        --button-3-color: blue;
        --button-4-color: red:
      }
```
