# Dictionary Rule

The Dictionary rule rejects passwords that are vulnerable to guessing, hybrid, and precomputed attacks. These attacks can crack weak passwords in seconds, and they can be very effective if passwords are based on common words.

![Dicitonary Rule](../../../../static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/dictionary.webp)

There are two Dictionary rules in each password policy. You can use the second rule with a different dictionary file, or to enforce a more tolerant policy for passphrases by disabling the primary rule for long passwords.

Select the __Dictionary__ check box to enable the Dictionary rule.

Browse to a dictionary file. A sample file __Dict.txt__ is installed in the __\Program Files\Password Policy Enforcer__ folder. This file is sorted and ready to use. It contains approximately 257,000 words, names, and acronyms.

Select the __Detect inclusion of non-alpha characters__ check box if Password Policy Enforcer should remove all non-alphabetic characters during analysis. This allows Password Policy Enforcer to reject passwords such as "myp8asswor8d."

Select the __Detect character substitution__ check box if Password Policy Enforcer should reject passwords that rely on character substitution to comply with this rule.

Select the __Detect words typed backwards__ check box if Password Policy Enforcer should additionally test passwords with their characters reversed. Enabling bi-directional analysis stops users from circumventing this rule by reversing the order of characters in their password. For example, a user may enter "drowssapym" instead of "mypassword".

Select the __Wildcard analysis__ check box if Password Policy Enforcer should search for wildcard templates in the dictionary file. Wildcard templates are specially formatted dictionary words that Password Policy Enforcer uses to reject a range of passwords. The Dictionary rule supports two wildcard template formats:

| Format | Example | Description |
| --- | --- | --- |
| Prefix |  |  |  | --- |  | !!BAN\*!! |  | !!2\*!! |  |  |  |  | --- |  | Rejects passwords that start with BAN.  For example: band, banish, ban, bank, etc. |  | Rejects passwords that start with the numeric character 2.  For example: 2ABC, 2123, etc. |  |
| Suffix | !!\*ING!! | Rejects passwords that end with ING. For example: pushing, howling, trying, etc. |

Partial matching is performed even if Wildcard analysis is disabled. For example, the dictionary word "password" will reject the passwords "My__Password__$", "__Password__100", and "12__password__34" even if Wildcard analysis is disabled.

Wildcard analysis should only be used to limit matching to the characters at the start or end of a password.

Enabling Wildcard analysis slightly increases search times, so only enable this option if the dictionary file contains wildcard templates. The sample dictionary file included with Password Policy Enforcer does not contain any wildcard templates.

Choose a value from the Tolerance drop-down list to specify the maximum number of consecutive matching characters that Password Policy Enforcer will tolerate before rejecting a password. For example, the dictionary word "__sword__", and the password "4my__sword__%" contain five consecutive matching characters (shown in bold type). Password Policy Enforcer will reject this password if the tolerance is four (or lower), and accept it if the tolerance is five (or higher).

Click the __Browse__ button to select a dictionary file, or type a path into the text box. The path can contain environment variables like %SystemRoot%. A sample dictionary is installed in the \Program Files (x86)\Password Policy Enforcer\ folder. The dictionary file should be read from a local disk. Using a shared dictionary degrades performance, and could jeopardize security.

__NOTE:__ The ```\Program Files (x86)\``` folder does not exist on 32-bit Windows, so move the dictionary into the ```\Program Files\Password Policy Enforcer\``` folder if you have 32-bit and 64-bit computers sharing a common Password Policy Enforcer configuration.

Click the __Sort__ button if the dictionary file is being used with Password Policy Enforcer for the first time, or if words have been added to the file since it was last sorted. The Password Policy Enforcer management console will sort and reformat the file so that Password Policy Enforcer can use it. Sorting also removes duplicate words, so the sorted file may be smaller than the original.

Click the __Messages__ tab to customize the Password Policy Client rule inserts. If both Dictionary rules have identical inserts, then only one of the inserts is shown in the corresponding Password Policy Client message if the password is rejected by both rules.

## Creating a Custom Dictionary

You can add words to the sample dictionary file, or download larger dictionary files from the Internet. Always sort a dictionary file before using it with Password Policy Enforcer, and make sure that all computers have a local copy of the updated and sorted file.

The custom dictionary should meet the following requirements:

1. The dictionary should begin and end with a blank line.
2. All words are capitalized.
3. The sort button is pressed after pointing to a file in the dictionary rule.

__NOTE:__ If you are using a custom dictionary, please provide a different filename. The default dictionary file (dict.txt) may be replaced during an upgrade.

## Dictionary File Replication

Password Policy Enforcer does not distribute dictionary file updates to other computers, but you can use the Windows Distributed File System to ensure that all domain controllers have the latest dictionary file. Copy the dictionary file into the Sysvol share on one domain controller, and the Distributed File System will copy the file into the Sysvol share of all other domain controllers. Configure the Dictionary rule to read the file from \\127.0.0.1\sysvol\your.domain\filename.txt

The path above only works if the computer has a Sysvol share. This won't be the case if you are using a workstation for policy testing, or if you are using Password Policy Enforcer to enforce local polices. If you are using Password Policy Enforcer for local policies and want all computers to receive dictionary file updates, then use the Sysvol share for file replication and a script or scheduled task to copy the file to a local folder.
