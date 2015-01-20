# Bootstrap for Meteor

This package integrates Bootstrap into Meteor project. Unlike other similar packages, it provides LESS version of Bootstrap, but does not include Bootstrap `.less` files into your code. You should do it yourself. It could be not so convenient, but gives you more flexibility.

## Intallation
1. Run `meteor add longuniquename:bootstrap` in project's root
2. Create `.less` file somewhere in your project (for example `main.less` in project's root)
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
