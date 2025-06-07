# How do I elevate MMC snap ins without granting administrative rights?

A standard user may not be able to run an MMC console without elevated rights. For instance, a standard user does not
have the ability to start, stop, or change the configuration within any service. This article takes you through the
process to create a policy to allow this and other items similar to this.

__Step 1 –__ Create a new GPO or edit an existing one.

__Step 2 –__ Expand the Endpoint Policy Manager node and select __Least Privilege Manager__.

__NOTE:__  User or Computer policies may be used, but general recommendation is to target to users.

__Step 3 –__ Create a new __New Executable Policy__.

![203_1_image-20200229095829-1](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/203_1_image-20200229095829-1.png)

__Step 4 –__ Select __Use combo rule (advanced)__ and click __NEXT__.

![203_3_image-20200229095829-2](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/203_3_image-20200229095829-2.png)

__Step 5 –__ Select __Apply command-line arguments__, leaving everything else as-is and click __NEXT__.

![203_5_image-20200229095829-3](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/203_5_image-20200229095829-3.png)

__Step 6 –__ Under __Path Condition__, click __Add__  > __Add file__ __...__

![203_7_image-20200229095829-4](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/203_7_image-20200229095829-4.png)

__Step 7 –__ In the Path field, type in ```*\mmc.exe"``` and click __OK__.

![203_9_image-20200229095829-5](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/203_9_image-20200229095829-5.png)

__Step 8 –__ Click on __Command-line Arguments__, select __Strict equality__, and under __Arguments__ type in the exact path to
```services.msc``` ("```C:\Windows\system32\services.msc```") and click __NEXT__.

![203_11_image-20210521112229-2](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/203_11_image-20210521112229-2.png)

__Step 9 –__ Ensure "__Run with elevated privileges__" is selected and click __NEXT__.

![203_12_image-20200229095829-7](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/203_12_image-20200229095829-7.png)

__Step 10 –__ Name it according to your conventions (e.g. "```Elevate Services.msc```") and click __FINISH__.

__NOTE:__ Users will not acquire this new GPO until Group Policy is refreshed on the user's computer either through
automatic or manual means.

## TESTING

To test this out, you can use the RUN command.Be sure to type in the exact command you've specified in
step 8. Only then will elevation occur.

![203_14_image001_950x730](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/203_14_image001_950x730.png)

Additionally, you can test with a command prompt. Again, the command has to match exactly.

![203_15_image002_950x541](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/203_15_image002_950x541.png)

__NOTE:__ If you attempt other avenues, like from the Start menu or alternate command lines, they will not work. In the example below it does not work because it is notthe exact same command line.

![203_16_image003_950x496](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/203_16_image003_950x496.png)

In order to make this work, you need to specify a second policy with alternate approved command lines. For instance,
you could do this, which removes the requirement for ```c:\windows\system32\services.msc```

![203_17_image004_950x475](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/203_17_image004_950x475.png)

The result would be that the shorter command line:``` mmc services.msc``` is accepted and runs elevated.

![203_18_image005_950x579](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/203_18_image005_950x579.png)

However, at no time would the shortest expression, of only "```services.msc```" work. The required MMC must appear before
the command line.

![203_19_image006_950x612](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/203_19_image006_950x612.png)
