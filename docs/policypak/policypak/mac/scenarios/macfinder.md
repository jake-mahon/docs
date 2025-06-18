# Finder Policy

**NOTE:** See
[Endpoint Policy Manager MacOS: Mac Finder Policies](/docs/policypak/policypak/video/leastprivilege/mac/finder.md) video
for an overview of this section.

## Finder Install / Uninstall Overview

If Standard Users attempt to install applications as a user, this is the common experience.

![macfinder01](/img/product_docs/policypak/policypak/mac/scenarios/macfinder01.webp)

Standard Users also get similar behavior if they attempt to remove an application from the machine.

![macfinder02](/img/product_docs/policypak/policypak/mac/scenarios/macfinder02.webp)

Additionally, if the Standard User has to perform some special operations in a folder (like a file
copy), this is not permitted:

![macfinder03](/img/product_docs/policypak/policypak/mac/scenarios/macfinder03.webp)

Additionally, when duplicating files, creating folders, etc., in all cases the Finder will stop the
standard user from performing the action.

## Finder Policy Type

This policy type enables all of the above scenarios. Start out by creating a new Finder policy like
this:

![macfinder04](/img/product_docs/policypak/policypak/mac/scenarios/macfinder04.webp)

This first example policy will allow users to add/remove applications to the `/Applications` folder.

![macfinder05](/img/product_docs/policypak/policypak/mac/scenarios/macfinder05.webp)

This policy will enable end-users to Add or Remove files and folders to the example `/Users/test`
folder (a place they would not normally have access).

![macfinder06](/img/product_docs/policypak/policypak/mac/scenarios/macfinder06.webp)

## Testing your Policies

First synchronize your policies with Endpoint Policy Manager Cloud using the `policypak cloud-sync`
command.

![macfinder07](/img/product_docs/policypak/policypak/mac/scenarios/macfinder07.webp)

An example of the results for the first policy which enabled installation are seen below.

![macfinder08](/img/product_docs/policypak/policypak/mac/scenarios/macfinder08.webp)

And copying a file to `/Users/Test` also succeeds:

![macfinder09](/img/product_docs/policypak/policypak/mac/scenarios/macfinder09.webp)

## Understanding Action Types

The three action types on a rule are:

- Deny Execution — Blocks the action for Standard Users and Administrators
- Allow Execution — Performs the action as if the MacOS system were in charge. You can think of this
  as Not configured
- Elevate — Perform the overcome action required to perform the task

See the
[Endpoint Policy Manager MacOS: Mac Finder Policies](/docs/policypak/policypak/video/leastprivilege/mac/finder.md) video
for examples of Action types with Finder policies
