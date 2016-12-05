---
date: 2014-08-03T00:00:00Z
title: Mapping Music
url: /music-mapping/
---

I'm a huge [music nerd](http://www.soundcloud.com/awans/likes).

I've had an image in my head for a while. I sent a note to my friend [Alex](http://soundcloud.com/edisonfield) saying something about how I'd like to walk along a landscape of music wherein:

- Things that people listen to together are close together
- Things that get listened to more are higher

There’s an ever growing mountain ridge of top 40. Lower down: Geometric black metal gardens of minimal techno. The twee valley of Rockabilly.

Wander around and find a record label. Find musicians who went to high school together. Find cities, countries, scenes. Grooves of a certain BPM.

OK that's pretty hard to do, so I figured this weekend I'd bite off a much simpler but still pretty neat project in that direction—hack something together on top of the excellent [Echonest API](http://developer.echonest.com/) that does a graph visualization of relatedness and their notion of "hotttnesss", which tracks popularity. Sorta.

Thankfully, they have a nice [python client library](https://github.com/echonest/pyechonest/) and there are some sweet graph visualization tools out there these days.

I decided to use color and size to represent hotttnesss and some reasonable layout algorithm to try and shake out nearness. Roughly.

With a few hours of poking around, I give you a map of **bands that sound like Boards of Canada**:

<p><div class="sigma-container" id="sigma-boc"></div></p>

I've heard of all the big red circles: Caribou, Tycho, M83, Bonobo (all great!). The fun ones are the small blue discs; bands like SeeFeel or Gescom. You've all got homework!

For good measure, I tried out a slightly less popular band, Holy Other. So here's what I'll claim is **the first map of Witch House**:

<p><div class="sigma-container" id="sigma-holyother"></div></p>

There are a few big reds on the edges, but mostly a morass of low energy balls with weird unicode characters. Huzzah!

Tiny bit of echonest code is [here](https://github.com/awans/music-visualizations).


<div>
<style>
    .sigma-container {
    width:100%;
    height:400px;
    border:1px solid #ccc;
    }
</style>
 <script src="/js/sigma/sigma.min.js"></script>
 <script src="/js/sigma/plugins/sigma.parsers.gexf.min.js"></script>
 <script>
   sigma.parsers.gexf(
     '/data/holyother.gexf', { container: 'sigma-holyother' }, function(s) {}
     );

   sigma.parsers.gexf(
         '/data/boc.gexf', { container: 'sigma-boc' }, function(s) {}
         );  
 </script>
</div>
