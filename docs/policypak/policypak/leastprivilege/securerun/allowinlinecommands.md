# How can I allow "Inline commands" blocked by SecureRun when a random path or filename is created each time?

On occasion, applications will pass inline commands that contain a randomly generated path or batch filename. As an example, for demonstration purposes, this command will open a prompt to start camplay.exe in a ‘random' location

cmd /c C:\temp\Random014\camplay.exe

With Secure run enabled, the following message is displayed:

![804_1_image-20210819150136-1](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/804_1_image-20210819150136-1.webp)

To allow this process to work and CamPlay to run, it's not camplay.exe that must be allowed in this example, it's cmd.exe.

To that end, there are two options that you could take:

- Create an Allow and Log rule to allow cmd.exe and everything that is called to run through it (possibly dangerous and not recommended)
- Create an Allow and Log rule with conditions to limit the scope (recommended)

Focusing on #2, below is a common example of how to set up a policy to allow the inline command to run with a random path.

__Step 1 –__ Add a __New Executable Policy__

![804_2_image-20210819150136-2](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/804_2_image-20210819150136-2.webp)

__Step 2 –__ Select __Combo Rule__

![804_3_image-20210819150136-3](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/804_3_image-20210819150136-3.webp)

__Step 3 –__ Select __Path__, __Command line__, and at least one other Condition to guard against a fraudulent parent process (cmd.exe in this case).

![804_4_image-20210819150136-4](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/804_4_image-20210819150136-4.webp)

__NOTE:__ Either __Hash__ or __File Info__ may be used in addition to, or instead of, __Signature__, but it is recommended at least one or more conditions be used in addition to the command-line arguments.

__NOTE:__ __Apply to child processes__ may or may not be required, but removing this checkbox limits the scope further. For this example, however, it was required.

__Step 4 –__ Set up your __Path Condition__: be as specific as possible

![804_5_image-20210819150136-5](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/804_5_image-20210819150136-5.webp)

__Step 5 –__ Set your secondary conditions: __Signature__, in this example

![804_6_image-20210819150136-6](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/804_6_image-20210819150136-6.webp)

__Step 6 –__ Set your __Command-line Condition__: Use __Strict equality__ and set the Arguments using the wildcard character "\*" to replace any randomized, or user-specific sections of the path or filename. Be as specific as possible while still allowing for any variation that may come up in the path. In this example, \Random014\ was replaced by \Random\*\

![804_7_image-20210819150136-7](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/804_7_image-20210819150136-7.webp)

__NOTE:__ "\*" is the only supported wildcard character.

__NOTE:__ __Ignore arguments case__ should be checked by default![804_8_image-20210819150136-8](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/804_8_image-20210819150136-8.webp)

__Step 7 –__ Set action as needed: generally, either __Allow and Log__ (this example) or __Run with elevated Privileges__ (if needed)

![804_9_image-20210819150136-9](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/804_9_image-20210819150136-9.webp)

__NOTE:__ For security and compatibility reasons, only elevate if necessary to do so.
