title: Match Rules Overview
sidebar_label: Match Rules
description: Configure file, folder, and registry inclusion/exclusion match filters and rules for ChangeTracker policy templates with prebuilt options.

# Match Rules Overview

(missing or bad snippet)

- [File and Folder Match Filters for Inclusion and Exclusion Rules ](/docs/changetracker/8.0/administration/policies/match-rules.md)
- [Registry Inclusion/Exclusion Match Rules ](/docs/changetracker/8.0/administration/policies/match-rules.md)

# File and Folder Match Filters for Inclusion and Exclusion Rules

There are a range of prebuilt Match Filters provided with Netwrix Change Tracker. Enterprise which
enable precision monitoring of only the attributes required (including prebuilt exclusion filters
for popular AV packages that update often and create lots of 'change noise'). Often due to paths
containing a mixture of files that are to be monitored, alongside files for which changes can be
ignored, it is desirable to define multidimensional rules for includes and excludes.

For example, if I wish to monitor all files within a specified path and all sub-paths, I can use the
built-in 'All files (recursive)' match filter.

However, it may be desirable to reduce 'noise' from the route path by applying an exclusion for any
changes relating to temporary files, for example, swp, swx or ~ file variants. There is actually a
built-in Pathmatch Definition for this provided 'Linux temp files in folder'.

However, by way of example, the example **Custom Pathmatch Definition** below provides this policy:

![CustomPathmatchDefinition](/img/versioned_docs/changetracker_8.0/changetracker/admin/matchrules/custompathmatchdefinition.webp)

**Step 1 –** **FolderMatchType** - (missing or bad snippet)

- All|Exact
- Wildcards
- Regex

**Step 2 –** **FolderMatchExpression** - (missing or bad snippet)

- If using 'All', then use ""
- If using 'Exact', then specify an exact "foldername"
- If using 'Wildcards', then specify a separated wildcards list eg "backup\*|old\*"
- If using 'Regex', then specify a regular expression e.g., "^backup"

**Step 3 –** **FileMatchType** – options the same as for the 'foldermatchtype' (All, Exact,
Wildcards, Regex);

**Step 4 –** **FileMatchExpression** – (missing or bad snippet)

- If using 'All', then use ""
- If using 'Exact', then specify an exact "filename"
- If using 'Wildcards', then specify a separated wildcards list eg "\*.exe|\*.dll"
- If using 'Regex', then specify a regular expression eg "^audit[0-9]\*\.(log|txt)$".

**Step 5 –** **SubfolderRecursion** – (missing or bad snippet)

- Unlimited
- None (operate on specified folder only)
- 'n' — recurse through 1, 2 or 3 subfolders.

# Registry Inclusion/Exclusion Match Rules

Similar to **Folder/File Match Rules**, **Registry Key/Value Match Rules** can be defined and used
to precisely track only keys and values of interest.

**For example**, tracking the ‘**WinLogon**’ registry key and values is important because there are
a number of session management security controls defined in this key. However, in certain
environments, the ‘DCacheUpdate’ values may change causing spurious alerts that are not significant
from a security perspective (DCacheUpdate stores domain names in binary form for internal Winlogon
programming code to use). Therefore the ability to easily track all keys and values below the
Winlogon key, but exclude DCacheUpdate changes may be desirable.

The ‘**All Registry Values**’ Match Rule is available by default but to define the ‘Isolate
DCacheUpdate Value Changes’ exclusion, the following Custom PathMatch Definition would be added:

![RegistryInclusion](/img/versioned_docs/changetracker_8.0/changetracker/admin/matchrules/registryinclusion.webp)

**Step 1 –** **KeyMatchType** - (missing or bad snippet)

- All;
- Exact;
- Wildcards;
- Regex.

**Step 2 –** **KeyMatchExpression**. (missing or bad snippet)

- If using ‘**All**’, then use “”;
- If using ‘**Exact**’, then specify an exact “keyname”;
- If using ‘**Wildcards**’, then specify a separated wildcards list eg “key_abc\*|key_def\*”;
- If using ‘**Regex**’, then specify a regular expression eg
  “^S-1-5-21-[0-9]+-[0-9]+-[0-9]+-[0-9]\{4,\}\\Software\\Policies\\Microsoft\\Windows\\Control
  Panel\\Desktop”.

**Step 3 –** ValueMatchType. o(missing or bad snippet)ptions the same as for the ‘foldermatchtype’
(All|Exact|Wildcards|Regex).

**Step 4 –** **ValueMatchExpression** – (missing or bad snippet)

- If using ‘**All**’, then use “”;
- If using ‘**Exact**’, then specify an exact “filename”;
- If using ‘**Wildcards**’, then specify a separated wildcards list eg “\*.exe|\*.dll”;
- If using ‘**Regex**’, then specify a regular expression eg “^audit[0-9]\*\.(log|txt)$”.

**Step 5 –** **SkipRootKey** – (missing or bad snippet) **true** or **false**

**Step 6 –** **Subkey Recursion**. (missing or bad snippet)

- Unlimited;
- None (operate on specified folder only);
- “n” = recurse through 1, 2 or 3 subfolders.
