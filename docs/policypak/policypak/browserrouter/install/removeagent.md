# How to remove the Endpoint Policy Manager Browser Router Agent from the list of available Web Browser handlers under Default Apps in Windows 10

If you decide not to use Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router in your environment and your environment does not have any Endpoint Policy Manager Browser Router (PPBR) policies enabled, you may still notice that you see the PPBR Agent as an available option under __Settings__ > __Default Apps__ > __Web Browser__.

![483_1_image-20190911221425-1](../../../../../static/img/product_docs/policypak/policypak/browserrouter/install/483_1_image-20190911221425-1.webp)

If you would like to remove the PPBR agent from this list please see the steps under the two scenarios below, and follow the steps in the scenario relevant to your environment.

## SCENARIO 1: You have never used Endpoint Policy Manager Browser Router and there are no PPBR policies enabled in your environment:

You can remove the PPBR Agent from this list by unlicensing the Endpoint Policy Manager Browser Router component and removing the PPBR Agent entry from the list of default Web Browsers utilizing the steps below.

![483_2_image-20190911221425-2](../../../../../static/img/product_docs/policypak/policypak/browserrouter/install/483_2_image-20190911221425-2.webp)

__Step 1 –__ Add a new policy under __PolicyPak__ > __Administrative Templates Manager__:

![483_3_image-20190911221425-3_950x559](../../../../../static/img/product_docs/policypak/policypak/browserrouter/install/483_3_image-20190911221425-3_950x559.webp)

__Step 2 –__ Under __New Admin Templates Entry__ select __Administrative Templates__ > __Admin Templates (ADMX files)__ > __PolicyPak__ > __Browser Router__ > Prevent PPBR component from being licensed then click __Add__ to create the policy.

![483_4_image-20190911221425-4_950x354](../../../../../static/img/product_docs/policypak/policypak/browserrouter/install/483_4_image-20190911221425-4_950x354.webp)

__Step 3 –__ Next set the policy as enabled, and click __OK__.

![483_5_image-20190911221425-5_950x150](../../../../../static/img/product_docs/policypak/policypak/browserrouter/install/483_5_image-20190911221425-5_950x150.webp)

__Step 4 –__ Next, create a new policy item under __Group Policy Preferences__ > __Windows Settings__ > __Registry__ that will delete the following registry key.

[```HKEY_LOCAL_MACHINE\SOFTWARE\Clients\StartMenuInternet\PPBRAgent.exe```]

__NOTE:__ You can add this policy to your existing unlicensed PPBR policy instead of creating a new policy if so desired.

__Step 5 –__ Set the GPO (or GPOs) containing these two policy items to apply to the OU or Domain level as needed (i.e. wherever your affected computers or users happen to live).

__Step 6 –__ Login to one of the computers where the PPBR Agent is still present as a choice under __Settings__ > __Default Apps__ > __Default Apps__ > __Web Browser__, open CMD, then run GPUPDATE.

__Step 7 –__ Once GPUPDATE is successful, log off of the computer and then log back in.

![483_6_image-20190911221425-6](../../../../../static/img/product_docs/policypak/policypak/browserrouter/install/483_6_image-20190911221425-6.webp)

__Step 8 –__ Now check under __Settings__ > __Default Apps__ > __Web Browser__ and the option to select the PPBR Agent should no longer be present.

## SCENARIO 2: You HAVE used Endpoint Policy Manager Browser Router in Legacy Browser Mode (either currently or sometime in the past) but no longer wish to, AND currently have no PPBR policies enabled in your environment:

![483_7_image-20210105155954-1](../../../../../static/img/product_docs/policypak/policypak/browserrouter/install/483_7_image-20210105155954-1.webp)

__Step 1 –__ Follow steps 1-4 above from Scenario 1 then continue with the steps below.

![483_8_image-20190911221425-7_950x315](../../../../../static/img/product_docs/policypak/policypak/browserrouter/install/483_8_image-20190911221425-7_950x315.webp)

__Step 2 –__ Add a new GPPrefs Policy item to one of your existing GPOs above, or create a new GPO using __Group Policy__ > __Policy Preferences__ > __Windows Settings__ to delete the following file:

```C:\ProgramData\PolicyPak\Common\ppFileAssociations.xml```

![483_9_image-20190911221425-8](../../../../../static/img/product_docs/policypak/policypak/browserrouter/install/483_9_image-20190911221425-8.webp)

__Step 3 –__ Set the GPO (or GPOs) containing these three policy items to apply to the OU or Domain level as needed (i.e. wherever your affected computers or users happen to live).

For Example:

__Step 4 –__ Then login to one of these computers where the PPBR Agent is still present as a choice under __Settings__ > __Default Apps__ > __Default Apps__ > __Web Browser__, open CMD then run ```GPUPDATE```.

__Step 5 –__ Once ```GPUDATE``` is successful, log off of the computer and then log back in.

![483_10_image-20190911221425-9](../../../../../static/img/product_docs/policypak/policypak/browserrouter/install/483_6_image-20190911221425-6.webp)

__Step 6 –__ Now check under __Settings__ > __Default Apps__ > __Web Browser__ and the option to select the PPBR Agent should no longer be present.
