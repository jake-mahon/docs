# E-mail Tab

Use the __E-mail__ tab to configure how e-mail is sent to users, when it is sent, and also to edit the e-mail templates.

![configuring_npr_3_709x772](/img/product_docs/passwordpolicyenforcer/passwordreset/administration/configuring_npr_3_709x772.png)

### E-mail Delivery

Password Reset can send e-mail alerts directly to an SMTP server, or save them to a pickup folder. Select the __Send e-mail to an SMTP server__ option if Password Reset should send e-mails directly to an SMTP server. Type the name or IP address of an SMTP server in the __Server__ text box, and the SMTP port number in the __Port__ text box.  
Select the __Save e-mail to a pickup folder__ option if NPR should save e-mails to a folder for delivery by a mail server. Click __Browse...__ to select a folder. The mail server must monitor this folder for new e-mail.

__NOTE:__ Saving e-mail to a pickup folder is the fastest and most reliable delivery method. Use this option if your mail server supports pickup folders.

### Triggers

Triggers define when e-mails are sent. If the trigger for an event is enabled, then Password Reset sends an e-mail when the event occurs. Enabled triggers are underlined.

Click the name of an enabled trigger to edit the trigger's e-mail template.

![configuring_npr_4](/img/product_docs/passwordpolicyenforcer/passwordreset/administration/configuring_npr_4.png)

Type the name and e-mail address you wish to appear in the e-mail's From field in the __From__ text box. The correct format is "Display Name" <mailbox@domain.com>  
Type the recipient's e-mail address in the __To__ text box. The correct format is "Display Name" <[mailbox@domain.com](mailto:mailbox@domain.com)>. Separate multiple recipients with a semicolon. You can also use these macros.

| Macro | Replace with |
| --- | --- |
| [AD\_EMAIL] | The e-mail address in Active Directory |
| [NPR\_EMAIL] | The e-mail address in Password Reset's database |
| [AD\_OR\_NPR\_EMAIL] | The e-mail address in AD, or the e-mail address in Password Resetif the AD address is blank |
| [NPR\_OR\_AD\_EMAIL] | The e-mail address in NPR, or the e-mail address in AD if the Password Reset address is blank |

__NOTE:__ Use [NPR\_OR\_AD\_EMAIL] with caution as Password Reset does not check the validity of e-mail addresses. If the e-mail address in Password Reset's database is no longer valid, then the alert is only sent to the invalid address.

Type additional recipient e-mail addresses in the __Bcc__ text box if you want to send any blind carbon copies. Separate multiple recipients with a semicolon.

Type the e-mail's subject in the __Subject__ text box.

Type the e-mail's body in the large text box. The e-mail is sent as plain text unless the body contains the <html> tag. Include the entire HTML document when sending e-mail as HTML. You can also use these macros.

| Macro | Replaced with |
| --- | --- |
| [AD\_DOMAIN] | The user's Active Directory domain name |
| [AD\_USER] | The user's Active Directory logon name |

Password Reset stores the user's preferred language every time they successfully complete an Enroll, Reset, Unlock, or Change. E-mail alerts are sent in the user's preferred language, or in the current Web Interface language if the user's preferred language is not known. If an e-mail template is not defined for the user's preferred language, then the alert is sent in English.

Use the drop-down list at the bottom of the E-mail template editor to switch between template languages. Changes are preserved as you switch between languages. The __From__, __To__, and __Bcc__ are the same for all languages.  
A warning icon is shown beside the language drop-down list if an e-mail template is not defined for every language. You should define an e-mail template for every language to ensure that users can understand their e-mail alerts.

![configuring_npr_5](/img/product_docs/passwordpolicyenforcer/passwordreset/administration/configuring_npr_5.png)

__CAUTION:__ An attacker may choose a specific language to avoid detection. E-mail alerts are sent in the Web Interface language chosen by the attacker if the target user has not enrolled or changed their password with Password Reset. The target user will receive the e-mail alerts, but they may not understand them. Use the Rest API to remind new users to enroll so their preferred language is known to Password Reset. See the [Enabling the API](/docs/passwordpolicyenforcer/passwordreset/administration/persuading_users_to_enroll.md#Enabling-the-API) topic for additional information.
