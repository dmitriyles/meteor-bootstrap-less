# Bootstrap for Meteor

This package integrates [Bootstrap](http://getbootstrap.com/) into a [Meteor](https://www.meteor.com/)-based project. Unlike other similar packages, it provides [LESS](http://lesscss.org/) version of Bootstrap, but does not include Bootstrap `.less` files into your code. You should do it yourself. It could be not so convenient but gives you more flexibility.

## Installation
1. Run `meteor add longuniquename:bootstrap` in your project root
2. Create a `.less` file somewhere in your project (for example, `main.less` in the project root)
3. Add `@import './packages/longuniquename:bootstrap/less/bootstrap.import.less';` to this file.

## Customization
Now you can override Bootstrap's variables. Just include overrides in your `.less` file:
```less
@brand-primary: #3AA3A3;
```
Or use mixins:
```less
.box {
  .clearfix();
}
```
Also, if you don't need all Bootstrap modules but only one of them, you can do something like this:
```less
@import './packages/longuniquename:bootstrap/less/variables.import.less';
@import './packages/longuniquename:bootstrap/less/mixins.import.less';
@import './packages/longuniquename:bootstrap/less/buttons.import.less';
```
