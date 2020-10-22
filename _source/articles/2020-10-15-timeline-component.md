---
title: An accessible timeline component for GOV.UK
date: 2020-10-15
tags:
  - GDS
  - accessibility
  - web development
---
Last year, I designed a service that allows users to follow the status of their VAT repayments. 

When a company submits a VAT return, HMRC's computer system automatically tracks its progress. Status codes are used to indicate the state of each claim. Basically, our service translated the status codes into English and presented them to the user.

This article is about the design and development of a timeline component.

## Design goals
In designing and building a timeline, my goals were:

1. users should immediately understand that events are part of an overall sequence;
2. users should find it easy to understand which order events are in; 
3. the timeline should fit-in with the overall aesthetic of GOV.UK;
4. the timeline should be accessible by anyone.

## Existing solutions
I'd be crazy to start with a blank page. Especially when working on a government project. There's a rich seam of existing designs that others have tried before. And, of course, there's a core set of styles, components and patterns that should always be the first port of call.

I tried listing the statuses on a page with simple text elements. However, we found users were confused by the relationships between items. Although slightly better, the Summary List component proved confusing too.

<figure class="gallery">
  <div class="gallery-images">
  <img src="/assets/images/articles/2020-10-15-text-only.png" alt="A screenshot of a GOV.UK page showing a text-only timeline" class="screenshot">
  <img src="/assets/images/articles/2020-10-15-summary-list.png" alt="A screenshot of a GOV.UK page showing a timeline using a summary list component" class="screenshot">
  </div>
  <figcaption>
    Picture: (First) An early design for the tracker using simple text elements showed some promise. But users found the lack of visual relationship confusing. (Second) Using the summary list component proved equally as confusing for users.
  </figcaption>
</figure>

### Track progress
I tried the [Track progress or status of an application](https://github.com/alphagov/govuk-design-system-backlog/issues/199) which is in use on some HMRC services. Could this be adapted to our needs?

![My version of the "Track progress or status of an application" component.](/assets/images/articles/2020-10-15-track-progress.png){.screenshot}

This component works well on services with a fixed number of events, but it's not so great for variable events. I couldn't easily show the entire history of repayments without resorting to awkward scroll-bars. 

### Progress bar
At one stage, it looked like obtaining the events from HMRC's system wasn't going to be possible. Therefore, we could only give users a rough idea of progress. We'd do this based on the average time for a repayment; a progress bar seemed perfect for this. 

![When we thought we couldn't show statues to users, we had to give them a rough idea of progress. A progress bar seemed ideal for this.](/assets/images/articles/2020-10-15-progress-bar.png){.screenshot}

Thankfully, it turned out that we could show each status. So I didn't spend too much time on this design. But in testing, we found that:

* users were initially confused by the progress bar. They were waiting for the page load more content;
* users didn't understand how much progress they'd made through the process;
* showing dates was beneficial. 

### Timeline
As we were showing events in time, the [timeline pattern candidate](https://github.com/alphagov/govuk-design-system-backlog/issues/105) seemed like it could be the right solution. The DWP had done some great work on their timeline component and had kindly published the findings from user testing. I based my design on theirs.

We tested the timeline as part of the testing on the VRT in multiple rounds. It tested well and met the first three of my design goals. We found some accessibility issues, but I'll talk more about that in the code section, below.

![The vertical timeline component in VRT based on the DWP component.](/assets/images/articles/2020-10-15-timeline.png){.screenshot}

## Code
I've been fulfilling a hybrid role at HMRC, part designer part front-end developer. I based the markup and styles for the final live timeline on the [DWP timeline pattern](https://dwp-design-examples.herokuapp.com/example/timeline). 

I tweaked the `info` element to allow the use of `<time datetime="…">` so that microformats readers could follow the events. I also replaced paragraph elements with `span` or `div` so I could better control the styling.

The first version was marked-up like so:

```
<ol class="timeline">
  <li class="timeline-event">
    <h2 class="timeline-event-title govuk-heading-m">Checking amount</h2>
    <p class="hmrc-timeline-event-meta">
      <time class="hmrc-timeline-event-time" datetime="2019-07-14">24 July 2019</time>
    </p>
    <p>We received your return and are now checking the repayment amount we owe you.</p>
  </li>
</ol>
```

When testing our timeline component for accessibility issues, we discovered that: 

* some users struggled to read dates in the `govuk-hint` style;
* VoiceOver on a mac would read-out dates multiple times.

As the requirement to make the timeline accessible to microformats-type readers was an edge case, I decided to remove that functionality. 

In our case, rendering the date in the standard text colour worked well. But displaying more than just a date here might get confusing; if you needed to show a date and a reference number, for example. 

Here's the final live service mark-up:

```
<ol class="timeline">
  <li class="timeline-event">
    <h2 class="timeline-event-title">Checking amount</h2>
    <span class="timeline-event-meta">24 July 2019</span>
    <div class="timeline-event-content">
      <p>We received your return and are now checking the repayment amount we owe you.</p>
    </div>
  </li>
</ol>
```

I created a [Nunjucks macro](https://github.com/roobottom/timeline) to make it simple to reuse across different projects.

## Wrapping up
We found the modified DWP component an excellent solution when displaying events. Users understood their time-based nature and which order they appeared in. I made some modifications to the HTML and CSS to fix some accessibility issues. 

*[VRT]: Vat Repayments Tracker
*[HMRC]: Her Majesty's Revenue and Customs
*[GDS]: Government Digital Services
*[DWP]: Department for Work and Pensions
