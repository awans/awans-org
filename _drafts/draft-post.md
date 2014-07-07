---
layout: post
title: The Ideal Cat Stimulus
---

This is an essay that tries to string together a bunch of concepts I've had floating around for the last several years. May it provide some food for thought if not real insight.

## What is a Cat?

There are a [lot](LINK) of [cats](LINK) out there. But what makes them cats? What gives them their cat-ness?

Plato's [Theory of Forms](LINK) casts the universe into two worlds: the world of Forms and the world of mimes, our world. Somewhere out there in the world of Forms is the ideal form of a cat. Likewise, there's the ideal form of a table, a rock and so on. The world of Forms isn't just inhabited by ordinary objects, important concepts are there as well: Justice, Virtue, and so on.

Down here in the world of mimes, we don't get to see the true forms, merely their shadows—projections from that ideal world into our own. So while we can gain some knowledge, some sense of what cat-ness or justice is, we can't really know what a cat *is*.

## What is a Concept?

One way to understand confusing systems is to try to re-construct them from scratch. If you can successfully replicate the behavior of a system, that doesn't mean you've discovered its exact inner workings, but it might give you a good model for thinking about it, or making predictions about what the real system might do in different situations.

So let's think of cat-ness in terms of a function. Let's say my function *isCatish* takes a SensoryInput parameter. SensoryInput contains all of the raw visual pixels, depth information, sounds, smells and so on. Given a SensoryInput, isCatish will return a score from 1-100 as to how "catish" a given set of sensory inputs are.

So isCatish will return high scores when you're viewing a YouTube video of cats, when you see a cartoon cat, or when a real cat is scratching your leg. 

So how would you build isCatish? It's pretty tough, and for a long time we weren't very good at it. But in the last few years, we've made an impressive amount of progress.

## Machine Learning and Computer Vision

The Google Brain team has done a bunch of research on a new flavor of machine learning system. It does unsupervised learning in a specific layered way. When you apply this sort of machine learning to computer vision problems, it learns in a manner broadly similar to our visual cortex—first finding edges and corners, and assembling those features into higher order shapes.

It's beaten all sorts of CV records. Consider the ImageNet challenge. The Brain algorithm had to look at images of objects and correctly identify what was in the image. It's a hard task for humans as well as machine learning algorithms. To give you a sense: it involves differentiating between different sub-species of manta ray.

Two other interesting properties of the sort of machine learning algorithm implemented by the Google Brain infrastructure: it's highly general, and it's unsupervised.

By "highly general", I mean it can learn a single model over different input types—images and text, for example. That means if it looks at the pixels of an image isn't sure if it sees "Lion, Cheetah, Vending Machine" or "Lion, Cheetah, Gazelle", it can infer that the latter triple is more likely because the concepts co-occur more frequently on Wikipedia.

By "unsupervised", I mean it learns without human instruction. Some machine learning systems are "supervised"; they generalize from a set of human-provided examples. Imagine starting the learning algorithm off with a big set of correctly labeled images of different sorts of animals, and then asking it to identify some novel animal photos. Others don't need that initial "training set". Given a big set of unlabeled input data, they'll automatically learn patterns across the ocean of input.

These two properties are interesting in part because they're both similar to how infants learn to recognize objects. We learn concepts mostly without training (though we do get trained on what labels to use for what concepts -- but how would it be helpful to say "this is a dog" to someone unless they already had some mental concept to attach it to?), and we learn over all sorts of complex features simultaneously.

## The Ideal Cat Stimulus?

One experiment the Brain team did was running their unsupervised learning algorithm over lots of randomly selected frames of YouTube videos. The system learned lots of high-level concepts, including, [unsurprisingly](LINK), the concept of a cat.

One interesting thing about the Brain algorithm is unlike our brains you can run it equally well forwards or backwards. So you can show it a picture, and ask "what concepts are present in this picture", or you can take a concept and ask "what image would most strongly activate this concept".

So they did that for the cat detector. Here's what it looks like:

image! how do i do images?? I should figure this out so I can do it for the pixelsorter post anyway

You'll note it's sorta catish, but definitely not quite like anything in the real world.

## What can we learn about Justice?

We shouldn't expect our mental concepts to be neat or coherent. We should expect them to be complex beasts that react to all sorts of random stimuli. 

Let me be clear: I don't think understanding Justice is as simple as figuring out what our brains respond to as "just" and going with that.

But I do think we can gain a clearer understanding of our own intuitions, and what they're responding to. For example, [irrelevant differences in how you ask students moral questions](LINK TO STUDY) can have a big impact on what they say is immoral or not. That might be surprising if your model for what our brains are doing is understanding some true underlying platonic form. It's a much less surprising if your model for what our brains are doing is pattern matching against some sort of "morality detector".



