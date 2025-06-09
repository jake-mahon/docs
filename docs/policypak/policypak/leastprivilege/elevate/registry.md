# How do I use Least Privilege Manager to Elevate .reg files to allow import by standard users

The registry requires elevated rights to be updated. Least Privilege Manager can be used to elevate the rights of a standard user to allow specific .reg files be imported without an administrator.

__NOTE:__ We recommend you put the .REG file on a server so the file itself is under permissions which cannot be tampered with. It could be a risk to put the .REG file locally on the hard drive where anyone could edit the raw contents.

## Method 1: New Executable Policy

__Step 1 –__ Create new GPO where required.

__Step 2 –__ Expand Netwrix Endpoint Policy Manager (formerly PolicyPak) node on either Computer, or User Configuration side, and click ,__Least Privilege Manager__.

__Step 3 –__ Add new EXE Policy (a or b).

![621_1_image-20200510100624-1](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_1_image-20200510100624-1.png)

__Step 4 –__ Select __Use Combo Rule …__ and click __NEXT__.

![621_3_image-20200510100625-2](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_3_image-20200510100625-2.png)

__Step 5 –__ Under __Conditions__ check __Path__, and under Settings check __Command-line arguments__ and __Apply to child processes__ . Click __Next__.

![621_5_image-20200510100625-3](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_5_image-20200510100625-3.png)

__Step 6 –__ Under __Path Condition__ click the __Add__ drop-down and select __Add file ...__.

![621_7_image-20200510100625-4](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_7_image-20200510100625-4.png)

__Step 7 –__ Either browse for ```regedit.exe```, or type in "```%SYSTEMROOT%\regedit.exe```" and click  __OK__.

![621_9_po_950x46](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_9_po_950x46.png)

__Step 8 –__ Click on __Command-line Arguments__

1. Under __Check Mode__ select __Strict equality__
2. In the __Arguments__ box type in text entered in Path Condition (step7) and path to ```.reg``` file to elevate
3. Check __Ignore arguments case__
4. Click __Next__.

   ![621_11_image-20200510100625-6](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_11_image-20200510100625-6.png)

__Step 9 –__ Select __Run with elevated privileges__ and Click __Next__.

![621_13_image-20200510100625-7](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_13_image-20200510100625-7.png)

__Step 10 –__ Rename and set Item Level Targeting if required and click __Finish__.

## Method 2: New Script Policy

Before you create the policy, place your script on a server or secure, shared location (e.g. ```\\server\share\PSscript.ps1```). The following is a sample script that can be used with either PowerShell or as a batch file to import a ```.REG``` file:

```
Regedit.exe /s \\server\share\NewRegValue.reg
```

__Step 1 –__ Create new GPO where required.

__Step 2 –__ Expand PolicyPak node on either Computer or User Configuration side and click on .__Least Privilege Manager__.

__Step 3 –__ Create new SCRIPT Policy (a or b).

![621_15_image-20200510100625-8](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_15_image-20200510100625-8.png)

__Step 4 –__ Select __Use Combo Rule …__ and click __Next__.

__NOTE:__ Although you can use a simple rule and simply use path as the qualifying factor, for security purposes it is recommended you have multiple qualifying factors.

![621_17_image-20200510100625-9](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_3_image-20200510100625-2.png)

__Step 5 –__ Under Conditions check __Path__ and __Hash__ and click __Next__.

![621_19_image-20200510100625-10](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_19_image-20200510100625-10.png)

__NOTE:__ If you make changes to the script, the Hash value will need to be updated for the policy to remain valid. Alternatively, if you digitally sign your script, Signature can be used instead of Hash as the second method of validation.

__Step 6 –__ Under Path Condition click the __Add__ drop-down and select .__Add file ...__.

![621_21_image-20200510100625-11](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_21_image-20200510100625-11.png)

__Step 7 –__ Browse to the location of the``` PowerShell script -> When Prompted```, allow to automatically fill in Hash value,

![621_23_image-20200510100625-12](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_23_image-20200510100625-12.png)

![621_25_image-20200510100625-13](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_25_image-20200510100625-13.png)

__Step 8 –__ Click on __Hash Condition__ to confirm Value has been ```set -> If desired```, and change algorithm to setting of .

![621_27_image-20200510100625-14](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_27_image-20200510100625-14.png)

__Step 9 –__ Select "__Run with elevated privileges__and click __Next__.

![621_29_image-20200510100625-15](/img/product_docs/policypak/policypak/leastprivilege/elevate/621_13_image-20200510100625-7.png)

__Step 10 –__ Rename and set Item Level Targeting if required and click __Finish__.
