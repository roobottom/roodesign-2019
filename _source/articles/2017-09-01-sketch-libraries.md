---
title: My thoughts on libraries in Sketch
preface: The new libraries functionality is long overdue, but is it any good?
date: 2017-09-01
tags:
  - Sketch
---
I’m thrilled by [libraries](https://www.sketch.com/docs/libraries/) in Sketch Beta. I know it’s rather sad to be excited by a new feature in software, however, I’ve been waiting for this particular bit of functionality ever since we started using Sketch to manage our design pattern library.

We currently use Brand.ai to share symbols across the team. This works surprisingly well for a third party add-on, especially given the fact we have 100’s of symbols in our library. But it’s not cheap, and had always felt like a bit of a stop-gap. The most obvious place for shared symbols has always been within Sketch itself.

After playing with the beta its immediately obvious how useful this will be with minimum change to our workflow. No more two-step publishing; making changes to the master sketch library file, then exporting to brand.ai. Now we simply have to save the master file and all users are alerted to the update. We can simply remove brand.ai from the process. Nice.

We also use [Abstract](https://www.abstract.com/) to manage our design files. This allows us to work on the same file at the same time without fear of overwriting each other's work. Herein lies a problem: Sketch libraries rely on the fact that the library is a single file in a known location. Make an update to that file, and Sketch picks up the changes. However, Abstract uses filename [hashing](https://en.wikipedia.org/wiki/Hash_function) so it can track which version of the file is the latest, and allow rollbacks. Merge in a change from a branch, and the master filename changes.

I contacted Abstract about this, and was informed that:

> We’re planning to fully support Sketch Libraries once it’s out of beta. Keep an eye out for updates!

Which is excellent news. But does lead to another thought: Maybe we should start publishing versions of the pattern library. That is, once changes have been made, reviewed and approved in Abstract, we then “publish” a new version to a shared drive. Maybe this workflow would give us greater control over what’s in everyone’s shared libraries, so we’re guaranteed to all be designing with the same set of elements.

I’m sure there’s some pretty smart people at Abstract thinking about this, so I’m excited — I need to get out more—to see what they come up with.