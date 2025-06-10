# Messages

Each Password Policy Enforcer password policy has multiple message templates, one for each of the Password Policy Client messages.

- Password Policy – Displays the password policy guidelines on clients that have the Netwrix Password Policy Enforcer Client installed.
- [POLICY] – Customize the text for the active rules.
- [LIVE\_POLICY] – Password Policy Client (10.2 and above) messages can be configured to display live feedback for the active rules to users as they enter their passwords. This feature enables users to see if their passwords meet the requirements of the policy set by the organization. Here is an example of a live policy message.

  ![Messages](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/mesages2.webp)

  __NOTE:__ Start each custom message with two spaces, a hypen, and a space before your message so the X and checks can appear for the rule. For example: " __- Include an upper case alpha character.__" The quotes are only there to illustrate the message.
- Rejection Reason – Displays why an intended password was rejected on clients that have the Netwrix Password Policy Enforcer Client installed
- Generic Rejection – Displays if Password Policy Enforcer does not have a specific reason for the rejection, generally because the password does not comply with the Windows password policy

__Step 1 –__ Open the Configuration Console:

Click __Start__ > __Netwrix Password Policy Enforcer__ > __PPE Configuration__  
or   
Double click the __PPE Configuration__ desktop shortcut.

__Step 2 –__ Click on a policy name to open the policy configuration page.

__Step 3 –__ Open the __Messages__ tab.

![Set up messages](/img/product_docs/accessanalyzer/enterpriseauditor/admin/jobs/messages.webp)

__Step 4 –__ Select the message language from the drop-down list. You can set messages for multiple languages. You do not have to create a Password Policy Enforcer policy for each language. To set multiple languages, pick one, edit the message templates. Select another language, and edit the message templates. Repeat for each language you want to implement. The correct message is displayed to users based on their selected language.

__Step 5 –__ Edit the message templates in the Password policy, [POLICY], [LIVE\_POLICY], Rejection Reason, and Generic rejection messages for any of the components you want to use.

__Step 6 –__ Insert the macros into your message. Click __Macro__ and pick one to insert it.

![Use macros for your message](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/messagesmacros.webp)

__Step 7 –__ Click __Save__ and review your changes in the Preview area. Click __Save__ f you edit the message.

__NOTE:__ If you do not see the __Preview__, contact your network administrator to set up the firewall to allow Password Policy Enforcer to communicate.
