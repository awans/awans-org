---
layout: post
title: Hats, Robots and the Axiom of Choice
---

Three of my favorite puzzles. They increase in difficulty and nerdiness. If you’ve had some discrete math, give the last one a shot before you look at the answer; there’s a hint for the hard version in the title of this post, but don't get too excited—it's pretty hard.

# The easy version

Ten robots are given hats; each hat is either red or blue. The robots are standing in a line facing forward, so each robot can see the robots ahead of itself in line but not those behind it.

Richard Hamming is going to start with the robot at the back of the line — the robot who can see the hats on the nine robots in front of it — and move up the line, asking each robot what it thinks its hat color is. Robots who answer incorrectly will be sent to the mines on Europa (a truly unpleasant fate for robots). Robots who answer correctly will be spared.

These robots have been programmed to be able to say “red” or “blue” when asked about their hat color. There’s no other way that they can communicate once they have hats, but they can collaborate beforehand to come up with a strategy. Here’s the puzzle: What strategy should the robots use to save as many as possible from nearly certain doom on Europa?

## Here’s the answer:

The first robot looks at the number of red hats it sees in front of itself. If it sees an even number of red hats, it says “red”. If it sees an odd number of red hats, it says “blue”. Aside: it’s an arbitrary convention — let’s just say robots like even numbers, so “red” means “even number of reds”.

So this robot has a 50/50 chance of surviving, but after its sacrifice every other robot can figure out its own hat color. For example, suppose the second robot sees an even number of red hats and the first robot said “red,” indicating that it too saw an even number of red hats. Then that means that the second robot must have a blue hat. If it had a red hat, then the first robot would’ve seen an odd number of red hats and would’ve said “blue”.

Assuming the second robot didn’t screw it up, the third robot can figure out its hat color as well using the same system. Continuing the example from before, suppose the third robot sees an even number of red hats. Then it, too, must have a blue hat. If it had a red hat, then the first robot would have seen an odd number and said “blue”.

Or if it sees an odd number of red hats, it knows it must have a red hat by similar logic.

And so at least nine of the robots can be saved from Hamming.

# The trickier version

What if instead of just getting red or blue hats, the robots got red, blue or green hats? In this instance, robots can reply to questions about their hat color with “red,” “blue,” or “green”, but all of the other rules are the same.

Can we get the same all-but-one result as before?

Yeah they can, and it’s not even too tricky. Here’s the trick: think of each color as 1, 2 or 3. Say red is one, blue is two, green is three. Now all you have to do is do modular arithmetic.

Whoops. OK, it’s pretty simple. We’re going to do addition with only three numbers. When you get to the top, you just wrap around. So 1+1=2, 2+1=3, 3+1=1. 2+2=1. 2+3=2. Awesome!

So here the first robot adds (mod 3) the numbers in front of it. If it sees a red hat, followed by a blue hat, followed by a bunch of green hats, that’s:

1+2+(3*7)=3

So it says “green.”

So the second robot sees 2+(3*7)=2. Knowing that the first robot calculated a value of 3 for all of the hats in front of it, the second robot can figure out the value of its own hat — one. So it knows it has a red hat.

The third robot then sees (3*7)=3 in front, and knowing that the first robot saw a 3 and the second robot had a 1, the difference must be the value of its hat: two.

So now the first robot only has a 1/3 chance of surviving Richard Hamming, but the rest of the robots are safe. In fact, no matter how many hat colors Hamming uses, all but one of the robots can be saved. Instead of mod 3 math, the robots just have to do mod n math where n is the number of different hat colors.

But not everyone is as nice as Richard Hamming

# The really hard version

This is going to get nerdy. Hold on to your hats (ha! ok, sorry. ow.).

Ernst Zermello has not ten, but an infinite number of robots in a line with red or blue hats. Additionally, the robots are now spaced so far apart that they can’t hear anyone behind them. They can, however, still see all of the robots in front of them.

Here the challenge is to come up with a strategy for the robots to follow that guarantees only finitely many robots are sent to Europa.

Somewhat surprisingly, it can be done, but you need The Axiom of Choice.

Observe first that the line of robots can be represented as an infinite binary string. That is, something like 101001011101111… that goes on forever where a 1 represents a robot with a red hat and a 0 represents a robot with a blue hat.

Consider, then, the set of all infinite binary strings. We can define the following equivalence relation: given two strings a and b, we’ll say a = b if and only if there is some finite point after which a and b are identical. So the strings can look different for as long as you like, but there is some finite point beyond which they’re identical.

An equivalence relation has to be reflexive (a = a), symmetric (a = b => b = a) and transitive (a = b and b = c => a = c). For example, we can define an equivalence relation on the natural numbers like n = m iff n mod 3 = m mod 3. In this example, we have 3=3, 3=6, 3=9, 2=5, 2=8 and so on. In fact we’ve partitioned the natural numbers into three equivalence classes which is just a fancy way of saying there are three distinct groups of the natural numbers under this relation all equal to one another but not equal to any in the other groups.

This relation clearly meets all three criteria; proof left as an exercise to the reader.

So that means we can partition the set of infinite binary strings into equivalence classes as we did before. Now we’ve got an infinite set of infinite sets of infinite binary strings. Pretty crazy. What we want to do is pick one representative from each equivalence class. That is, we’ve got something like \{\{10..,1010..},{1101..,01001..},…} and we want something like {10..,1101..,…} such that we’re picking one from each subset of the original set.

Here we need to use The Axiom of Choice. We can use the axiom of choice to pick our set of representatives. Having done all of this, we’re ready to go.

So here’s the strategy for each robot: look at all of the hats in front of you. You can see the equivalence class of the infinite string you’re in; so for your hat, answer according to what the representative picked for that reference class would’ve predicted.

Clearly this can kill a lot of robots — the actual binary string is unlikely to be the representative for its equivalence class — but it will also only kill finitely many, because after some finite point it is identical to the representative. Thus, we have our goal. Phew.
