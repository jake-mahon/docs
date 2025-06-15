# Configuration

Click __Start__ >__[All] Programs__ > __PPE Web Configuration Console__ to open the Password Policy Enforcer Web Configuration Console.

## General Tab

Use the General tab to maintain the list of managed domains, and to configure Password Policy Enforcer integration. See the Password Policy Enforcer topic for additional information.

![configuring_ppe_web](../../../../static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/web/configuring_ppe_web.webp)

### Domain List

When Password Policy Enforcer Web is first installed, the Domain List is empty and users must type their domain name. You can configure Password Policy Enforcer Web to display a list of domains instead of an empty text box.

Add Domain

Follow the steps below to add a domain to the list.

__Step 1 –__ Click the __Add...__ button.

__Step 2 –__ Enter a NetBIOS (NT Compatible) or DNS domain name.

__Step 3 –__ Click __OK__, the click __Apply__.

__NOTE:__ The most frequently used domain should be first in the list as it will be the default. You can rearrange the domains by dragging them to another position. You can also click __Sort__ to sort them alphabetically.

Remove Domain

Follow the steps below to remove a domain from the list.

__Step 1 –__ Select the domain name from the Domain List.

__Step 2 –__ Click __Remove__, then click __Yes__ when asked to confirm.

__Step 3 –__ Click __Apply__.

### Password Policy Enforcer

Password Policy Enforcer is a configurable password filter that enforces granular password policies with many advanced features. Password Policy Enforcer Web can integrate with Password Policy Enforcer to help users choose a compliant password.

![configuring_ppe_web_1](../../../../static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/web/configuring_ppe_web_1.webp)

Password Policy Enforcer Web displays the Password Policy Enforcer password policy message when a user is prompted for their new password, and the Password Policy Enforcer rejection message if the new password does not comply with the password policy. Select the __Password Policy Enforcer integration__ check box if you have installed and configured Password Policy Enforcer on your domain controllers.

You can also set the Port, Timeout, and number of Retries for the Password Policy Protocol if the defaults are not suitable.

__NOTE:__ A Password Policy Enforcer Web license does not include a Password Policy Enforcer license. Go to [netwrix.com/password_policy_enforcer](https://www.netwrix.com/password_policy_enforcer.html) to learn more about Password Policy Enforcer.

## About Tab

The __About__ tab contains version and license key information.

To install a new license key.

__Step 1 –__ Copy the entire license e-mail to the clipboard.

__Step 2 –__ Click __Get license from clipboard__.

__Step 3 –__ Click __Apply__.
