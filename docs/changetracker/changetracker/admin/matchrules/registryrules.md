# Registry Inclusion/Exclusion Match Rules

Similar to __Folder/File Match Rules__, __Registry Key/Value Match Rules__ can be defined and used to precisely track only keys and values of interest.

__For example__, tracking the ‘__WinLogon__’ registry key and values is important because there are a number of session management security controls defined in this key. However, in certain environments, the ‘DCacheUpdate’ values may change causing spurious alerts that are not significant from a security perspective (DCacheUpdate stores domain names in binary form for internal Winlogon programming code to use). Therefore the ability to easily track all keys and values below the Winlogon key, but exclude DCacheUpdate changes may be desirable.

The ‘__All Registry Values__’ Match Rule is available by default but to define the ‘Isolate DCacheUpdate Value Changes’ exclusion, the following Custom PathMatch Definition would be added:

![RegistryInclusion](/static/img/product_docs/changetracker/changetracker/admin/matchrules/registryinclusion.png)

__Step 1 –__ __KeyMatchType__ - Available options are:

- All;
- Exact;
- Wildcards;
- Regex.

__Step 2 –__ __KeyMatchExpression__. Available options are:

- If using ‘__All__’, then use “”;
- If using ‘__Exact__’, then specify an exact “keyname”;
- If using ‘__Wildcards__’, then specify a separated wildcards list eg “key\_abc\*|key\_def\*”;
- If using ‘__Regex__’, then specify a regular expression eg “^S-1-5-21-[0-9]+-[0-9]+-[0-9]+-[0-9]{4,}\\Software\\Policies\\Microsoft\\Windows\\Control Panel\\Desktop”.

__Step 3 –__ ValueMatchType. oAvailable options are:ptions the same as for the ‘foldermatchtype’ (All|Exact|Wildcards|Regex).

__Step 4 –__ __ValueMatchExpression__ – Available options are:

- If using ‘__All__’, then use “”;
- If using ‘__Exact__’, then specify an exact “filename”;
- If using ‘__Wildcards__’, then specify a separated wildcards list eg “\*.exe|\*.dll”;
- If using ‘__Regex__’, then specify a regular expression eg “^audit[0-9]\*\.(log|txt)$”.

__Step 5 –__ __SkipRootKey__ – Available options are: __true__ or __false__

__Step 6 –__ __Subkey Recursion__. Available options are:

- Unlimited;
- None (operate on specified folder only);
- “n” = recurse through 1, 2 or 3 subfolders.
