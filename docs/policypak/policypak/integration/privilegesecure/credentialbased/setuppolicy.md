# Setting up the Endpoint Policy Manager Policy

After __Selecting Credential Based Policy__, fill in __Domain__ and __User Name__.

![setting_up_the_policypak_policy](/static/img/product_docs/policypak/policypak/integration/privilegesecure/credentialbased/setting_up_the_policypak_policy.png)

- Domain – Enter the name of the domain of the Netwrix Privilege Secure managed user to perform the activity.
- User name – Enter the unqualified name of the Netwrix Privilege Secure managed user to perform the activity.
- Activity name – Nothing to enter when Credential Release / always grayed out.

At the end of the policy you have some settings for __Action__ and __Options__.

![setting_up_the_policypak_policy_1](/static/img/product_docs/policypak/policypak/integration/privilegesecure/credentialbased/setting_up_the_policypak_policy_1.png)

In __Action__, you can select __Run with elevated privileges__ or simply Allow and log if you just want it brokered.

In __Options__, you can have the application launch be exclusively called with a right click __Run with Netwrix Privilege Secure__ context menu, or always call Netwrix Privilege Secure with __Apply on demand__ unchecked. Additionally, you can enable or disable video recording when this policy is issued via __Enable video recording (Netwrix Privilege Secure)__.

Back on the Netwrix Privilege Secure server, you need to make sure there is a matching __Credential Based__ policy.

![setting_up_the_policypak_policy_2](/static/img/product_docs/policypak/policypak/integration/privilegesecure/credentialbased/setting_up_the_policypak_policy_2.png)
