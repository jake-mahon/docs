# First Login to 1Secure

This topic describes how an MSP can access the 1Secure tenant for the first time, activate their account, and complete the initial login. After logging in, the MSP can add users to the tenant and assign them roles based on the required access levels.

When the Netwrix team adds a new user account for your organization, you will receive an email invitation. This email will be sent from "noreply-account@netwrix.com" and will have the subject "Welcome to Netwrix 1Secure".

This email includes a unique access link to product’s web portal. You need to activate your account via the link within 2 days. If it expires, you will need to follow the link and request a new activation link.

![accountactivation](/img/product_docs/1secure/admin/login/accountactivation.webp)

## Activate an Account

Follow the steps to activate an account:

__Step 1 –__ Open the invitation email and do one of the following:

- Click the __Activate my Netwrix account__ button
- Click the account activation link included in the email.

The Change Your Password page is displayed.

![Change Your Password page](/img/product_docs/groupid/groupid/admincenter/general/changepassword.webp)

__Step 2 –__ In the __New password__ field, enter a password to set for your account.

__Step 3 –__ In the __Re-enter new password__ field, enter the same password again to confirm.

__Step 4 –__ Click the __Reset Password__ button. The account is now activated, and your password has been set.

Once you have set your account password, log in to 1Secure with your credentials. See the [Log In](#log-in) topic for additional information.

## Log In

Follow the steps to log in to 1Secure.

__Step 1 –__ Open the invitation email and click the Netwrix 1Secure tenant link. You are navigated to the 1Secure login page.

![Log In page](/img/product_docs/1secure/admin/login/companylogin.webp)

__Step 2 –__ On the login page, click the __Log In__ button.

__Step 3 –__ In the Email address field, specify a valid email address registered with 1Secure, then click __Continue__. The Enter Your Password page is displayed.

![Enter Your Password page](/img/product_docs/1secure/admin/login/passwordpage.webp)

__Step 4 –__ In the Password field, specify the valid password for the email address, then click __Continue__. The Keep Your Account Safe page is displayed, prompting you to choose an authentication method. When logging in for the first time, you must authorize your account using multi-factor authentication.

![Keep Your Account Safe page](/img/product_docs/1secure/admin/login/authenticationmethods.webp)

__Step 5 –__ Click __Google Authenticator or Similar__ or __Security Key__ to select an authentication method. After that, one of the following happens:

- If you selected Google Authenticator or Similar option, you will be navigated to Secure Your Account page. Scan the QR code using your preferred authenticator app and then enter the provided one time code in the __Enter one time code__ field. See the documentation of your authenticator app for additional information.
- If you selected Security Key option, you will be navigated to the Adding Your Security Key page. See the [Set up a security key as your verification method](https://support.microsoft.com/en-us/account-billing/set-up-a-security-key-as-your-verification-method-2911cacd-efa5-4593-ae22-e09ae14c6698) article for additional information.

After successful authorization, You are redirected to the dashboard. See the [1Secure Dashboard](/docs/1secure/admin/dashboard/overview.md) topic for additional information.

Once the initial login is completed, an MSP can configure Single Sign On (SSO) using supported authentication services, including Entra ID, 1Secure Authentication, or OpenID Connect. See the [SSO Configuration with Authentication Services](/docs/1secure/admin/login/sso.md#sso-configuration-with-authentication-services) topic for additional information.

## Reset Password

Follow the steps to reset the password of an account:

__Step 1 –__ Navigate to the company's login page.

__Step 2 –__ On the login page, click the __Log In__ button.

__Step 3 –__ In the Email address field, specify a valid email address registered with 1Secure, then click __Continue__. The Enter Your Password page is displayed.

![Enter Your Password page](/img/product_docs/1secure/admin/login/passwordpage.webp)

__Step 4 –__ Click the __Forgot password__ link. The Change Your Password page is displayed.

![Change Your Password page](/img/product_docs/groupid/groupid/admincenter/general/changepassword.webp)

__Step 5 –__ In the __New password__ field, enter a password to set for your account.

__Step 6 –__ In the __Re-enter new password__ field, enter the same password again to confirm.

__Step 7 –__ Click the __Reset Password__ button. The password of the account has been reset.

Once you have reset your account password, log in to 1Secure with your new credentials.
