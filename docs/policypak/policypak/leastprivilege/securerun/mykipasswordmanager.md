# How to install and run MYKI Password Manager as regular user when SecureRun is enabled

## Option 1:

Use Least Privilege Manager to Elevate the install of MyKi Password Manager for the standard user.

__NOTE:__  This option requires less rules to be created than option 2.

![844_1_image-20210705210753-1_950x127](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_1_image-20210705210753-1_950x127.png)

__Step 1 –__ Create a new Least Privilege Manager policy on either the Computer or User side and add a new Executable policy for the downloaded MyKi installation EXE (i.e., ```MYKI-latest.exe```).  Choose the __use combo rule (advanced)__ option, then select only __Signature__ and __File Info__ before clicking __Next__.

![844_2_image-20210705210753-2](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_2_image-20210705210753-2.png)

__Step 2 –__ Under the __Combo condition__ > __Select reference file__ drop down, choose __From EXE file__ and browse to and select the ```MYKI-latest.exe``` file. Answer __Yes__ when prompted then click __Next__ to continue.

![844_3_image-20210705210753-3](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_3_image-20210705210753-3.png)

__Step 3 –__ In the Select Action window leave the defaults in place then click __Next__.

![844_4_image-20210705210753-4](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_4_image-20210705210753-4.png)

__Step 4 –__ In the Settings window select __User and System processes__ and click __Finish__.

![844_5_image-20210705210753-5](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_5_image-20210705210753-5.png)

__Step 5 –__ Add a new Executable policy and select the __use combo rule (advanced)__ option, then select only __Signature__ and __File Info__ before clicking __Next__.

![844_6_image-20210705210753-6](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_2_image-20210705210753-2.png)

__Step 6 –__ Under the __Combo condition__ > __Select reference file__ drop down, choose From EXE file, then browse to and select ```%LocalAppData%\myki\MYKI.exe```.

__NOTE:__  This file can be found at the specified location only after a successful MyKi installation.

__Step 7 –__ Click __Yes__ when prompted, then click __Next__ to continue.

![844_7_image-20210705210753-7](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_3_image-20210705210753-3.png)

__Step 8 –__ In the Select action window , select __Allow and log__ and click __Next__.

![844_8_image-20210705210753-8](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_8_image-20210705210753-8.png)

__Step 9 –__ In the Settings windowselect __User and System processes__  and click __Finish__.

![844_9_image-20210705210753-9](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_9_image-20210705210753-9.png)

## Option2:

Create Allow and Log rules for a Standard user to be able to install and run MyKi Password Manager.

__NOTE:__  If the user has already installed MyKi using their standard user account, then use this option.

![844_10_image-20210705210753-10_950x133](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_10_image-20210705210753-10_950x133.png)

__Step 1 –__ Create a new Least Privilege Manager policy on either the Computer or User side, then add a new Executable policy for the downloaded MIKY installation EXE (i.e.```, MYKI-latest.exe```).Select the __use combo rule (advanced)__ option, then select only __Signature__ and __File Info__ before clicking __Next__.

![844_11_image-20210705210753-11](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_2_image-20210705210753-2.png)

__Step 2 –__ Under the __Combo condition__ > __Select reference file__ drop down, choose __From EXE file__, then browse to and select the ```MYKI-latest.exe``` file. Click __Yes__  when prompted, then click __Next__ to continue.

![844_12_image-20210705210753-12](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_3_image-20210705210753-3.png)

__Step 3 –__ In the Select action window, select __Allow and log__and click __Next__.

![844_13_image-20210705210753-13](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_8_image-20210705210753-8.png)

__Step 4 –__ In the Settings window select __User and System processes__  and click __Finish__.

![844_14_image-20210705210753-14](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_14_image-20210705210753-14.png)

__Step 5 –__ Next, add a new executable policy. Select the __use combo rule (advanced)__ option, but this time select __Path__ and __Signature__ conditions before clicking __Next__.

__Step 6 –__ Add the three paths below and answer __No__ the first time you are asked if you you want to automatically fill the values from the selected file for signature conditions. Answer __Yes__ the second time you are prompted (when adding ```Update.exe``` path, etc.). Click __Next__ to continue.

```
%LocalAppData%\MyKi\*\Squirrel.exe    %LocalAppData%\MyKi\*\Update.exe    %LocalAppData%\myki\Update.exe
```

Your screen should look similar to what is shown below for __Path Condition__ and __Signature Condition__ respectively.

![844_15_image-20210705210753-15](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_15_image-20210705210753-15.png)

![844_16_image-20210705210753-16](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_16_image-20210705210753-16.png)

__Step 7 –__ In the Select Action window select__Allow and log__ then click __Next__.

![844_17_image-20210705210753-17](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_8_image-20210705210753-8.png)

__Step 8 –__ In the Settings window select __User and System processes__, then click __Finish__.

![844_18_image-20210705210753-18](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_18_image-20210705210753-18.png)

__Step 9 –__ Add a new Executable policyand select the __use combo rule (advanced)__ option, then select only __Signature__ and __File Info__ before clicking __Next__.

![844_19_image-20210705210753-19](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_2_image-20210705210753-2.png)

__Step 10 –__ Under the __Combo condition__ > __Select reference file__ drop-down, choose __From EXE file__ then browse to and select ```%LocalAppData%\myki\MYKI.exe```.

__NOTE:__  This file can be found at the specified location only after a successful MyKi installation.

__Step 11 –__ Click __Yes__ when prompted, then click __Next__ to continue.

![844_20_image-20210705210753-20](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_3_image-20210705210753-3.png)

__Step 12 –__ In the Select window, select __Allow and log__, then click __Next__.

![844_21_image-20210705210753-21](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_8_image-20210705210753-8.png)

__Step 13 –__ In the Settings windows select __User and System processes__ and click __Finish__.

![844_22_image-20210705210753-22](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_9_image-20210705210753-9.png)

__Step 14 –__ Add a new Executable policy and choose the __use combo rule (advanced)__ option, then select only __Path__ and __Command-line arguments__ before clicking __Next__.

![844_23_image-20210705210753-23](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_23_image-20210705210753-23.png)

__Step 15 –__ In the Configure Conditions windowenter ```%SYSTEMROOT%\System32\cmd.exe``` under Path Condition.

![844_24_image-20210705210753-24](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_24_image-20210705210753-24.png)

__Step 16 –__ Then under Command-line Arguments select the __Strict equality__ and __Ignore arguments case__ boxes and also paste in the following text within the Arguments box before clicking __Next__ to continue.

```
/d /c "%localappdata%\myki\*\resources\native_messenger\index-win.exe" chrome-extension://*/*
```

Your screen should look identical to the one below.

![844_25_image-20210705210753-25](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_25_image-20210705210753-25.png)

__Step 17 –__ In the __Select action__ window, select __Allow and log__ then click __Next__.

![844_26_image-20210705210753-26](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_8_image-20210705210753-8.png)

__Step 18 –__ In the Settings window select__User and System processes__  and click __Finish__.

![844_27_image-20210705210753-27](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/844_27_image-20210705210753-27.png)
