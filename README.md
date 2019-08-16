# FoundrySdk

Foundry SDK is an Angular module that makes creation of software interfaces easier.

# WIP

This module is still in active development and I had no time to write a proper documentation. If you want to preview what's going on, clone the project:

# Installation

To use this module, add it to your existing project:

``` npm install --save foundry-sdk ```

Then add it to your **app.module.ts**:

``` import { FoundrySdkModule } from 'foundry-sdk'; ```

And finally add it to "imports":

```
imports: [
    // ... your other imported modules
    FoundrySdkModule
]
```

To use styles, you must include some SCSS files to your main `styles.scss`:

```
@import '~foundry-sdk/lib/scss/tools.scss';
@import '~foundry-sdk/lib/scss/foundry-sdk-core.scss';
@import '~foundry-sdk/lib/scss/foundry-sdk-themes.scss';
```

To use components that were provided by the module, take a look at this:

**https://github.com/D-LUSiON/foundry-sdk/blob/master/src/app/app.component.html**

Once I finish writing and stabilizing this library, I'm going to write a proper documentation on all of its features and how to use it.

# Contribution

``` git clone https://github.com/D-LUSiON/foundry-sdk.git ```

then open two terminal windows.

In the first window type:

``` ng build foundry-sdk --watch ```

and after build is finished and watching for changes in the second window type:

``` ng serve ```

then open a browser window with url *http://localhost:4200*
