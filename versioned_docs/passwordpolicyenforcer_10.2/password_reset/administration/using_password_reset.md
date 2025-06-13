# Using Password Reset

Netwrix Password Policy Enforcer is a web application. Users can access it from a web browser, or from the Password Reset Client. The default URL for the Web Interface is:``` http://[server]/pwreset/```  
See the [Password Reset Client](/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/password_reset_client.md) topic for more information.

You can use URL parameters to open a specific page, and to set the user and domain names. For example: ```http://[server]/pwreset/apr.dll? cmd=enroll&username=johnsmith&domain=CORP```

Where [server] is the name or IP address of the server hosting the Web Interface.

![using_npr_866x634](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_866x634.png)

Users access the Enroll, Reset, Unlock, and Change features from the menu. These features are explained on the following pages.

__CAUTION:__ The connection between the Web Interface and Password Reset Server is always encrypted. Install an SSL certificate on the web server and use HTTPS to encrypt connections from the browser to the web server. See the [Installing and Using an SSL Certificate](/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/securing_password_reset.md#installing-and-using-an-ssl-certificate) topic for more information.

## Enroll

Only enrolled users can reset their password and unlock their account. Users can enroll manually by answering some questions about themselves, or they can be enrolled automatically if automatic enrollment is enabled. Users only need to enroll once, but they can enroll again if they are locked out of Password Reset, or if they want to change their questions or answers. See the [Verification Codes](/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/verification_tab.md#verification-codes) and [Verification Tab](/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/verification_tab.md) topics for more information.

Follow the steps below to manually enroll into Password Reset.

__Step 1 –__ Click the __Enroll__ item in the menu.

![using_npr_0_765x963](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_0_765x963.png)

__Step 2 –__ Type a __Username__, __Domain__, and __Password__.

__Step 3 –__ Type an e-mail address if the __E-mail__ text box is visible. See the [Options](/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/enroll_tab.md#options) topic for more information.

__Step 4 –__ Select a question from each of the __Question__ drop-down lists, and type an answer to each question in the __Answer__ text boxes.

__Step 5 –__ Click __Next__, and then click __OK__ to return to the menu.

__NOTE:__ Windows increments the bad password count in Active Directory when a user tries to enroll with an incorrect password. This may trigger a lockout if the Windows account lockout policy is enabled.

## Reset

Users should use the Reset feature if they have forgotten their password. Resetting a password also unlocks the account if it is locked.

Follow the steps below to reset an account password.

__Step 1 –__ Click the __Reset__ item in the menu.

![using_npr_1_824x469](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_1_824x469.png)

__Step 2 –__ Type a __Username__ and __Domain__, and then click __Next__.

![using_npr_2_809x640](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_2_809x640.png)

__Step 3 –__ Type the __Answer__ to the first question, and then click __Next__. Repeat until all questions are answered correctly.

![using_npr_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_3.png)

__Step 4 –__ You may be asked to enter a verification code. The verification code is sent to your phone by e-mail or SMS. Type the __Code__, and then click __Next__.

![using_npr_5](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_5.png)

__Step 5 –__ Type the new __Password__ into both text boxes, and then click __Next__.

![using_npr_6](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_6.png)

__Step 6 –__ Click __OK__ to return to the menu.

## Unlock

Users should use the Unlock feature if they know their password, but have entered it incorrectly too many times and locked out their account.

Follow the steps below to unlock an account.

__Step 1 –__ Click the __Unlock__ item in the menu.

![using_npr_7](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_7.png)

__Step 2 –__ Type a __Username__ and __Domain__, and then click __Next__.

![using_npr_4_842x816](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_4_842x816.png)

__Step 3 –__ Type the __Answer__ to the first question, and then click __Next__. Repeat until all questions are answered correctly.

![using_npr_8](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_8.png)

__Step 4 –__ You may be asked to enter a verification code. The verification code is sent to your phone by e-mail or SMS. Type the __Code__, and then click __Next__.

![using_npr_9_789x276](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_9_789x276.png)

__Step 5 –__ Click __OK__ to return to the menu.

__NOTE:__ The Unlock feature unlocks accounts in Active Directory. Users who are locked out of Password Reset should re-enroll to gain access to Password Reset. See the [Verification Codes](/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/verification_tab.md#verification-codes) topic for more information.

## Change

Users should use the Change feature if they know their password and would like to change it.

Follow the steps below to change an account password.

__Step 1 –__ Click the __Change__ item in the menu.

![using_npr_10_771x440](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_10_771x440.png)

__Step 2 –__ Type a __Username__ and __Domain__, and then click __Next__.

![using_npr_11_773x593](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_11_773x593.png)

__Step 3 –__ Type the __Old Password__, __New Password__, and __Confirm Password__, and then click __Next__.

__Step 4 –__ Click __OK__ to return to the menu.

__NOTE:__ Windows increments the bad password count in Active Directory when a user tries to change their password with an incorrect password. This may trigger a lockout if the Windows account lockout policy is enabled.

## Error Messages

Validation errors are shown in a red box below the page instructions. Validation errors are normally caused by invalid user input. They can often be overcome by changing the value of one or more input fields and resubmitting the form.

![using_npr_12](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_12.png)

Critical errors are shown on their own page. These errors are mostly a result of configuration or system errors. An event may be written to the Windows Application event log on the Password Reset Server computer when a critical error occurs. Users can sometimes overcome a critical error by following the instructions in the error message, but most critical errors are beyond the user's control.

![using_npr_13](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_13.png)

Validation and critical error messages are stored in the HTML templates. You can modify the default messages by editing the templates. See the [Resource Strings](/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/editing_the_html_templates.md#resource-strings) topic for more information.
