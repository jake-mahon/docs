---
sidebar_position: 7708
title: Import the License File
---

# Import the License File

Netwrix Privilege Secure comes with a temporary 30-day trial license. a banner at the top indicates the expiration date of a license about to expire.

![Dashboard interface showing an expiration banner and pointint to the User Options menu with the About page](../../../../../../static/images/PrivilegeSecure_4.2/Content/Resources/Images/PrivilegeSecure/AccessManagement/Admin/Navigation/ExpirationBanner.png "Dashboard interface showing an expiration banner and pointint to the User Options menu with the About page")

However, you can import your license file on the About page (User Options > About). An expired license does not necessarily prevent users from logging in. If a license is expired, and the login attempt does not exceed the license count, users will still be able to log in. If a license is expired, and the login attempt does exceed the license count, Privilege Secure will prevent the login.

Licensing is done according to user count. Any user who has provisioned access will consume a license after their first login. This is true for all users, regardless of role.

**CAUTION:** If your license is expired, and you can still log in, you will not be able to create activity sessions or add new users.

Follow the steps to import the license key file.

**Step 1 –** Login to the Privilege Secure console as an administrator.

**Step 2 –** Click the User icon in the upper-right corner beside your login name to open the User Options menu.

**Step 3 –** Select About. The About page opens.

![About page showing trial license details](../../../../../../static/images/PrivilegeSecure_4.2/Content/Resources/Images/PrivilegeSecure/AccessManagement/Admin/Navigation/TrialLicenseDetails.png "About page showing trial license details")

**Step 4 –** In the Upload License File section, click Import License.

**Step 5 –** Navigate to the license file and click Open to import the license.

![About page showing successful upload of a license](../../../../../../static/images/PrivilegeSecure_4.2/Content/Resources/Images/PrivilegeSecure/AccessManagement/Admin/Navigation/LicenseImportSuccess.png "About page showing successful upload of a license")

A message indicates the license file uploaded successfully. The license information displays at the top of the page, and the expiration banner disappears from the top. See the [About Page](AboutPage "About Page") topic for additional details available on this page.