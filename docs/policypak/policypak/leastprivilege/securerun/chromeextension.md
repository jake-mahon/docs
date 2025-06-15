# How do I allow a Chrome extension blocked by SecureRun to be installed?

When SecureRun is enabled, it may block some Chrome Extensions from installing. Two examples of this are Adobe Acrobat and Power Automate Desktop.

The commands that are run to install these extensions are as follows:

```
C:\WINDOWS\system32\cmd.exe /d /c "C:\Program Files (x86)\Power Automate Desktop\PAD.EdgeMessageHost.exe" chrome-extension://njjljiblognghfjfpcdpdbpbfcmhgafg/ --parent-window=0 < \\.\pipe\LOCAL\edge.nativeMessaging.in.8c9048e3136bfe0b > \\.\pipe\LOCAL\edge.nativeMessaging.out.8c9048e3136bfe0b
```

```
C:\WINDOWS\system32\cmd.exe /d /c "C:\Program Files (x86)\Adobe\Acrobat 2017\Acrobat\Browser\WCChromeExtn\WCChromeNativeMessagingHost.exe" chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/ --parent-window=0 < \\.\pipe\chrome.nativeMessaging.in.602ecca2de172262 > \\.\pipe\chrome.nativeMessaging.out.602ecca2de172262
```

To allow the extensions to be installed, create a New Executable Policy for each extension that is being blocked. This can be done on either the Computer or User side, depending on who is a member of the OU.

![700_1_image-20211111230736-1](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/700_1_image-20211111230736-1.webp)

__Step 1 –__ Create a Combo Rule.

![700_2_image-20211111230736-2](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/700_2_image-20211111230736-2.webp)

__Step 2 –__ Select __Path__, __Command-line arguments__ and __Apply to child processes__.

![700_3_image-20211111230736-3](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/700_3_image-20211111230736-3.webp)

__Step 3 –__ Under Path Condition, add file ```%SYSTEMROOT%\System32\cmd.exe```.

![700_4_image-20211111230736-4](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/700_4_image-20211111230736-4.webp)

__Step 4 –__ Under Command-line Arguments, select __Strict equality__; check __Ignore arguments case__; under Arguments, we are going to take the first part of the installation command, after ```cmd.exe```, and replace the last part with asterisks.

![700_5_image-20211111230736-5](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/700_5_image-20211111230736-5.webp)

```
/d /c "C:\Program Files (x86)\Power Automate Desktop\PAD.EdgeMessageHost.exe" chrome-extension://*/*
```

```
/d /c "C:\Program Files (x86)\Adobe\Acrobat 2017\Acrobat\Browser\WCChromeExtn\WCChromeNativeMessagingHost.exe" chrome-extension://*/*
```

__Step 5 –__ Set action as .Allow and Log.

![700_6_image-20211111230736-6](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/700_6_image-20211111230736-6.webp)

__Step 6 –__ Rename, set ILT if required and click __Finish__.

![700_7_image-20211111230736-7](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/securerun/700_7_image-20211111230736-7.webp)
