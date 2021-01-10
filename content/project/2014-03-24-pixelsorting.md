---
date: 2014-03-24T00:00:00Z
title: Pixel Sorting
url: /pixelsorting/
description: glitchy images
---

A while back, I wanted to experiment with the [Go programming language](http://www.golang.org), and I had been looking at [Kim Asendorf's awesome pixelsorting](http://kimasendorf.com/mountain-tour/) art. Kim released [his implementation](https://twitter.com/kimasendorf/status/254212367561420802) of his algorithm, and so I decided to port it to Go with some minor modifications.

You can find the code I wound up with [here](https://github.com/awans/pixelsort), though don't take it as in any way refined or idiomatic Go—this was just a quick hack for me to play with the technique.

Roughly, the idea is to scan through the image column by column or row by row and look for contiguous runs of pixels above some brightness threshold. Upon finding a run, the pixels are sorted by brightness. Playing with different versions of brightness and different thresholds can produce some interesting results.

I wound up writing a short convenience wrapper to pixelsort a whole directory of images at once at a variety of brightness thresholds.
