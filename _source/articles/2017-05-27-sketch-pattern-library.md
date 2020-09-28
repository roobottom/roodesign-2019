---
title: Creating a pattern library in Sketch
date: 2017-05-27
preface: How having an plan can save days of regret and needless work
tags:
  - Design tools
  - Sketch
---
I don’t think its hyperbole to say that there’s a revolution happening in the design of digital products. Designers have long had the idea of designing interfaces from a kit of pre-built parts, but never really had the tools to do this effectively. Sketch is such a tool.

In my team at Firefly Learning, we’ve recently made the transition to Sketch—specifically because of the power of symbols. These have enabled us to build our pattern library in a way that helps us to do some extremely rapid prototyping and create consistent experiences for our users.

Our Front-End and iOS teams already have their own pattern libraries. These are different, partly due to technical reasons, but there’s another reason we kept the patterns separate. As we continue to strive for feature parity between platforms, its obvious that there are some fundamental differences between web and iOS. There is a way of doing things in iOS — interactions that users expect — that’s different from the web. Hence, web and iOS have the same features, but implemented in the way that makes the most sense to users of that platform.

Our dream was to create two libraries that would contain the same elements as the web and iOS libraries. This would mean that we’d all be working from the same list of patterns, rather than adding another translation step when it came to implementation.

## Structure
We studied the structure of the existing pattern libraries and created a map that included all patterns, their modifiers and states. This gave us the structure for our patterns, and a place to start from when translating programmatic patterns into something that would be useable in Sketch.

In simple terms, our pattern library is a number of Sketch files containing (as symbols) all the elements in the Firefly interface. We divide these into separate files, one for each platform. We’ve also broken web into web-core and one file for each of our four core themes.

In each of the files, we’ve categorised our symbols into areas. This helps massively with your mental model when browsing the symbols page. This also allows us to print a visual style-guide of all our patterns.

![An example of how we’re using layout and labels to categorise symbols in Sketch](/assets/images/articles/2017-05-27-1.png)

## Symbols
Sketch supports symbol nesting and overrides. This makes symbols extremely powerful. This allows you to create a pattern element by combining symbols together.

However, organisation is everything. If you don’t follow a systematic approach to creating patterns, they’re extremely difficult to use in the wild. We know from experience that confusion arises about which symbols are patterns, and which are simply the building blocks of patterns. Let me explain…

## Parts & Patterns

![A button component is made up of Background, Label and Icon parts](/assets/images/articles/2017-05-27-2a.png) A pattern is made up of either parts or other symbols. Each part is a symbol. A Button, for example, is made up of two parts Background and Label, and another pattern Icon. We use [slash notation](https://www.sketch.com/docs/symbols/#organizing-symbols) to contain parts and patterns under one namespace.

![Using slash notation in symbols names to create easily navigable folders within Sketch](/assets/images/articles/2017-05-27-2.png)

## Patterns in the wild
When designing a new feature, we’ll start out with a blank sketch file. Let’s say, for example, that we wanted a very simple interface that required two buttons: OK and Cancel. OK needs to be a cancel type with a tick icon, and Cancel needs to be a default type with a cross icon.

In our pattern library file, we have a page called "scratch" where we can set up a pattern ready to be copied into another file. We select the `Button > Patterns > Button with Icon Left` symbol from the list and drop it into our scratch page. We can then use the symbol overrides to change it’s Background, Icon and Label as required. We can also override the text.

![Using symbol overrides to change the appearance of the button pattern](/assets/images/articles/2017-05-27-3.png)

Once the pattern is set up, we can then copy this into the new document. This only copies the parts required for this instance of the pattern. So trying to change the symbol overrides in the new file won’t work until you copy over all variations of a pattern.

## Tips ’n tricks

There’s a few areas where symbols are ripe for improvement. Given Bohemian’s track record for updates and bug fixes I suspect these can’t be too far off. Meantime, there’s a couple of workarounds that we’ve found particularly useful that I’d like to share.

### Pin to corner
The ability to change resize behaviour in symbols is extremely useful. However, the “Pin to corner” option is somewhat limited as it doesn’t let you specify which corner.

![A transparent shape helps us pin to a corner](/assets/images/articles/2017-05-27-4.png) We solve this by simply grouping a transparent shape in with the layer we wish to align. This allows you pin to other corners than the one that Sketch might have automatically picked for you.

### Override colours of icons
It’s annoying to have to have separate symbols for different icon colours. Especially when adding a new colour, meaning you have to create a new symbol for all the icons in the new colour.

Luckily, we can use layer masks and overrides to easily add colour options. An Icon pattern is actually a grouped rectangle masked out by the icon shape. We are then able to control the icon type and colour from a pre-defined pallet of colours. Adding a new colour is as easy as adding a new icon mask symbol.

![Using a combination of symbol overrides and masks lets you pick an icon and change it’s colour](/assets/images/articles/2017-05-27-5.png)

Another small tip: Make your icons and masks different sizes, that way you won’t get shown all the icons and colours together in the overrides dropdown