---
sidebar_position: 4162
title: SecureRun and Inline Commands
---

# SecureRun and Inline Commands

By default PolicyPak SecureRun will also block “inline commands.”

For example, one can run something like this from the Run dialog (or in many other ways.)

```
cmd /c "mkdir C:\TEST & copy c:\Windows\notepad.exe C:\TEST"
```
![A screenshot of a computer error

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/SecureRun/SecureRun and Inline Commands.png)

Normally, users don’t do this. But it could be valid during an application installation or program setup. You can see an example of this used in the Microsoft [Latest Astaroth living-off-the-land attacks are even more invisible but not less observable](https://www.microsoft.com/en-us/security/blog/2020/03/23/latest-astaroth-living-off-the-land-attacks-are-even-more-invisible-but-not-less-observable/ "Latest Astaroth living-off-the-land attacks are even more invisible but not less observable") article.

SecureRun will automatically try to block such attempts. For more information on how to deal wit this issue, please see [Why does Endpoint Policy Manager SecureRun block "inline commands" and what can I do to overcome or revert the behavior ?](../../Troubleshooting/LeastPrivilege/SecureRun/InlineCommands.htm "Why does Endpoint Policy Manager SecureRun block /"inline commands/" and what can I do to overcome or revert the behavior ?") for guidance and details.