# Two-Factor Authentication in the Endpoint Policy Manager Portal

In order to safegard license keys and any other potentially sensitive company information, two-factor authentication (2FA) is enabled for all customer accounts in the Netwrix Netwrix Endpoint Policy Manager (formerly PolicyPak) Portal.

__NOTE:__  If for some reason you do not want to use 2FA to secure access to your portal, you have the option to open a ticket with support, who will assist you in completing that process.  However, disabling Portal 2FA is strongly discouraged.  In addition, only the PRIMARY user account has access to the 2FA control that is seen below.  This includes controlling which authentication method is enabled, resetting 2FA settings, and requesting that it be disabled for every user on the account.

Here's what to expect the first time (as a Primary or Secondary user) you will be prompted for a code which will be emailed to the address you used to log in with:

![461_1_image-20220908114735-1_541x257](../../../../static/img/product_docs/policypak/policypak/cloud/461_1_image-20220908114735-1_541x257.webp)

And the email to loo for:

![461_2_image-20210507112848-3_560x180](../../../../static/img/product_docs/policypak/policypak/cloud/461_2_image-20210507112848-3_560x180.webp)

__Step 1 –__ It is recommended that the Primary user then enable __App__ 2FA for the account.  This will provide everyone with the ability to choose either email or an app (such as Authy or Google Authenticator) to authenticate their login.

![461_3_image-20220908115257-2_636x390](../../../../static/img/product_docs/policypak/policypak/cloud/461_3_image-20220908115257-2_636x390.webp)

__Step 2 –__ Here's how to do that.

![461_4_image-20220908115629-4_734x303](../../../../static/img/product_docs/policypak/policypak/cloud/461_4_image-20220908115629-4_734x303.webp)

![461_11_image-20220908134421-9_640x396](../../../../static/img/product_docs/policypak/policypak/cloud/461_11_image-20220908134421-9_640x396.webp)

__Step 3 –__ Navigate to Your Contacts > 2FA Config For Your Company tabLocate the 2FA Config tab under Your Contacts, then click __App 2FA__ and click __Apply__.

__Step 4 –__ You are prompted for another code to authorize App 2FA enablement.

__Step 5 –__ Enter the code and click __Commit Changes__ to complete the process.

__Step 6 –__ A message appears in the lower right and App 2FA will be checked, indicating it is now enabled for all users.

__Step 7 –__ Once App 2FA is enabled, users who log in get the screen shown earlier, where they can choose which method they want to authenticate with:  Email or app.  If they choose app and have not yet setup their authenticator app, they will be prompted to do so.  Scan the code with the app and supply the code shown in the app.  If for any reason the QR code is not displayed properly, most apps allow the use of the alternate code that you will see displayed.

![461_5_image-20220908160453-12_782x451](../../../../static/img/product_docs/policypak/policypak/cloud/461_5_image-20220908160453-12_782x451.webp)

__Step 8 –__ After supplying the code from the app they'll be returned to the logon screen where they will see an acknowledgment if the Authenticator app setup was successful.

![461_6_image-20220908160820-13_625x427](../../../../static/img/product_docs/policypak/policypak/cloud/461_6_image-20220908160820-13_625x427.webp)

__Step 9 –__ When they log in and choose the authentication app method, they will be prompted to enter the code from their authenticator app.

![461_7_image-20220908121115-5_763x335](../../../../static/img/product_docs/policypak/policypak/cloud/461_7_image-20220908121115-5_763x335.webp)

## Resetting 2FA for an Individual Secondary

If an individual needs to have their App 2FA reset, they can request that when logging in. Clicking the link send a notification to the Primary on the account.

![461_8_image-20220908121906-6_736x356](../../../../static/img/product_docs/policypak/policypak/cloud/461_8_image-20220908121906-6_736x356.webp)

The Primary can then log in to the Portal and perform the reset as shown below.  Navigate to __Contacts__, select either __Secondary__ or __Billing__, locate the individual and click __Reset App 2FA__.

![461_9_image-20220908134018-7_918x317](../../../../static/img/product_docs/policypak/policypak/cloud/461_9_image-20220908134018-7_918x317.webp)

## Resetting 2FA for the Primary

If you are the Primary on the account and need to have App 2FA reset, you can do that on the same page above by selecting the __Primary__ tab and clicking __Reset App 2FA__.

## Resetting 2FA GLOBALLY

If you ever need to reset 2FA, you can do this by clicking __Reset 2FA__.

__NOTE:__  This will reset the 2FA setting for all users. Everyone will need to re-setup their authenticator app.

![461_10_image-20220908134312-8_862x390](../../../../static/img/product_docs/policypak/policypak/cloud/461_10_image-20220908134312-8_862x390.webp)

## Disable 2FA

Though we strongly advise against it, you can disable 2FA completely on your account.  Do this by clicking __Disable 2FA__ and confirming your request.  The request will be submitted on your behalf and handled by the support team.  You will hear from them when the request is completed.

![461_11_image-20220908134421-9_640x396](../../../../static/img/product_docs/policypak/policypak/cloud/461_11_image-20220908134421-9_640x396.webp)

You will get a confirmation email anytime 2FA is disabled for your account.  Please note that this is for the entire account so 2FA will be disabled for ALL users/contacts as indicated below.

![461_12_image-20210507115645-15_631x225](../../../../static/img/product_docs/policypak/policypak/cloud/461_12_image-20210507115645-15_631x225.webp)

Looking in your portal afterwards, you'll see that 2FA is entirely disabled, as neither box is checked. You can re-enable it at any time by simply selecting the 2FA you want to enable and clicking __Apply__.  Since no 2FA is active at this moment you won't be requested to supply a code to re-enable it.  It will just be immediately enabled and everyone will once again be prompted to supply a code received via email or from their app.

__NOTE:__  In this particular scenario, if anyone had app 2FA previously configured (had scanned the QR code) then that code will still work.
