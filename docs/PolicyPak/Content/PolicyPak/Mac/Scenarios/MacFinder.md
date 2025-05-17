---
sidebar_position: 3735
title: Finder Policy
---

# Finder Policy

**NOTE:** See [Endpoint Policy Manager MacOS: Mac Finder Policies](../../Video/LeastPrivilege/Mac/Finder "Endpoint Policy Manager MacOS: Mac Finder Policies") video for an overview of this section.

## Finder Install / Uninstall Overview

If Standard Users attempt to install applications as a user, this is the common experience.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Mac/Scenarios/MacFinder01.png)

Standard Users also get similar behavior if they attempt to remove an application from the machine.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Mac/Scenarios/MacFinder02.png)

Additionally, if the Standard User has to perform some special operations in a folder (like a file copy), this is not permitted:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Mac/Scenarios/MacFinder03.png)

Additionally, when duplicating files, creating folders, etc., in all cases the Finder will stop the standard user from performing the action.

## Finder Policy Type

This policy type enables all of the above scenarios. Start out by creating a new Finder policy like this:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Mac/Scenarios/MacFinder04.png)

This first example policy will allow users to add/remove applications to the `/Applications` folder.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Mac/Scenarios/MacFinder05.png)

This policy will enable end-users to Add or Remove files and folders to the example `/Users/test` folder (a place they would not normally have access).

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Mac/Scenarios/MacFinder06.png)

## Testing your Policies

First synchronize your policies with Endpoint Policy Manager Cloud using the `policypak cloud-sync` command.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Mac/Scenarios/MacFinder07.png)

An example of the results for the first policy which enabled installation are seen below.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Mac/Scenarios/MacFinder08.png)

And copying a file to `/Users/Test` also succeeds:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Mac/Scenarios/MacFinder09.png)

## Understanding Action Types

The three action types on a rule are:

* Deny Execution — Blocks the action for Standard Users and Administrators
* Allow Execution — Performs the action as if the MacOS system were in charge. You can think of this as Not configured
* Elevate — Perform the overcome action required to perform the task

See the [Endpoint Policy Manager MacOS: Mac Finder Policies](../../Video/LeastPrivilege/Mac/Finder "Endpoint Policy Manager MacOS: Mac Finder Policies") video for examples of Action types with Finder policies