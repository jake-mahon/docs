# How can I keep the same or specify different parameters for Event Collection for child groups? How does a computer behave if a member of multiple groups?

The default behavior is that a child group automatically inherits the parent's existing Event Collector
configuration. This is called __Allow Child Merge__ and is automatically put upon any new child group, as
seen below.

If you want a different behavior in a child group than its parent, then change __Event Collector | Inheritance__ to
__Allow Child Override__ then specify the event collection scheme you want, using the provided fields.

__NOTE:__  If a single computer is a member of several groups with conflicting Event Collection settings, then the
following rules apply:

- Event Submission Interval will be minimal of all group(s), meaning the lowest number in Event
  submission interval between all groups wins.
- Event Filters will be merged. For instance, if Computer1 in GROUP A has Events __101-105, 108__ and same
  Computer1 in Group B has __102-106, 110__ the final result of event IDs to be uploaded is __101-106,
  108, 110__.
- If any group of which a computer is a member has the __Collect Events__ filter set to __All__, then the previous
  rule doesn't apply. All always takes precedence.

![940_1_image002_950x536](/static/img/product_docs/policypak/policypak/cloud/eventcollection/940_1_image002_950x536.png)
