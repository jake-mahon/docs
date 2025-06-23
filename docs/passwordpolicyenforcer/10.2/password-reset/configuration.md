---
title: Password Reset Configuration Settings
sidebar_label: Configuration
description: Configure Password Reset settings including version information, license management, and system configuration options.
---

# About Tab

Use the **About** tab to check the version and license information, and to install a new license
key.

![configuring_npr_10](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/configuring_npr_10.webp)

To install a new license key, copy the entire license e-mail to the clipboard, and then click Get
license from clipboard.

**NOTE:** Password Reset includes a 30-day evaluation license for up to 50 users. Please
[contact Netwrix support](mailto:support@netwrix.com)[](mailto:support@anixis.com) if you would like
to evaluate Password Reset with more than 50 users.

# Configuring Password Reset

In the previous section, you used Password Reset with a default configuration. You can use the
Configuration Console to edit the configuration settings. Click **Start** > **Netwrix Password
Reset** > **NPR Configuration Console**on the Password Reset Server computer to open the
Configuration Console.

![configuring_npr](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/configuring_npr.webp)

Information about the configuration console tabs can be found in the following topics:

- [General Tab](/docs/passwordpolicyenforcer/10.2/password-reset/configuration.md)
- [Enroll Tab](/docs/passwordpolicyenforcer/10.2/password-reset/enrollment.md)
- [E-mail Tab](/docs/passwordpolicyenforcer/10.2/password-reset/configuration.md)
- [Verification Tab](/docs/passwordpolicyenforcer/10.2/password-reset/enrollment.md)
- [Security Tab](/docs/passwordpolicyenforcer/10.2/password-reset/security-settings.md)
- [Permissions Tab](/docs/passwordpolicyenforcer/10.2/password-reset/security-settings.md)
- [About Tab](/docs/passwordpolicyenforcer/10.2/password-reset/configuration.md)

# Editing the HTML Templates

Password Reset's user interface is built with customizable templates. You can easily modify the user
interface by editing the templates. The templates are written in HTML5 and formatted with CSS3, so
they work with all modern web browsers. Older browsers such as Internet Explorer 8 may work, but the
pages may be badly formatted. Please [contact Netwrix support](mailto:support@netwrix.com) if you
need to use Password Reset with older web browsers.

## User Interface Files

Password Reset installs seven `.htm` files for every language. Each filename starts with a language
code. The files for the US English language are:

| Filename          | Content                              |
| ----------------- | ------------------------------------ |
| `en_default.htm`  | Static HTML for the menu page        |
| `en_enroll.htm`   | Template for the Enroll page         |
| `en_reset.htm`    | Template for the Reset pages         |
| `en_unlock.htm`   | Template for the Unlock pages        |
| `en_change.htm`   | Template for the Change pages        |
| `en_finished.htm` | Template for the Finished page       |
| `en_error.htm`    | Template for the Critical Error page |

The formatting information is in `apr.css`, and the image files are in the images folder. These
files are installed into the `\Inetpub\wwwroot\pwreset\` folder by default.

**NOTE:** Always backup the user interface files before and after editing them. Your changes may be
overwritten when Password Reset is upgraded, and some changes could stop Password Reset from working
correctly. Having a backup allows you to quickly revert to a working setup.  
Web browsers display pages differently, so test your changes with several versions of the most
popular browsers to ensure compatibility.

### Ranges and Fields

`en_default.htm` contains static HTML, but the other .htm files contain special comment tags that
are used to prepare the pages. Some of these comments define ranges. A range looks like this:

<!--RANGE_NAME-->Some text or HTML<!--/RANGE_NAME-->

The Web Interface deletes ranges (and the text inside them) when they are not needed. Some ranges
span only one word, while others span several lines. The other type of comment tag is called a
field.

<!--USERNAME-->

Fields are replaced by some other information. For example, the field above is replaced with a
username.

### Resource Strings

Each template ends with a resource string section.

<!--RESOURCE_STRINGS--><!--

@RES_EMPTY_FIELD_USERNAME: Enter your username in the Username box. @RES_EMPTY_FIELD_DOMAIN: Enter
your domain name in the Domain box.

--><!--/RESOURCE_STRINGS-->

Resource strings are mostly validation error messages, but they can contain any text Password Reset
may need to build the page. Do not modify the identifiers on the left, only edit the text on the
right. Resource strings are always inside a range called RESOURCE_STRINGS. Password Reset deletes
this range before sending the page to the user's web browser. See the
[Error Messages](/docs/passwordpolicyenforcer/10.2/password-reset/using-password-reset.md#error-messages) topic
for additional information.

### Responsive Content

Password Reset's templates are responsive. The page layout and content changes to suit the user's
screen size. The layout is defined in the CSS file, and the content in the HTML files. The
text_short and text_long classes are used to display different content depending on the screen size.
text_short elements are shown on small screens (up to 420 pixels wide). text_long elements are shown
on larger screens.

**CAUTION:** You may rebrand the Password Reset user interface, but it is a violation of the License
Agreement to modify, remove or obscure any copyright notice.

## Examples

This section contains examples of common customizations. Use these examples to gain a better
understanding of Password Reset's templates. You don't need to be an expert in HTML to follow these
examples, but a basic understanding of HTML will help.

Work through them carefully, and backup files before you edit them. The examples in this section are
from the US English files, but the format is the same for all languages.

### Replace the Netwrix Logo

The Netwrix logo is shown at the top of the page. The logo is installed into the
`\Inetpub\wwwroot\pwreset\images\` folder by default, and it is called logo.svg. You can replace
this file with one containing your organization's logo.

You will also need to edit the HTML files if your logo is not in SVG format, or if it has a
different aspect ratio to the Netwrix logo. Open every HTML file in a text editor such as Notepad,
and search for the line shown below. Change the filename (logo.svg), height (70 pixels) and width
(116 pixels) to suit your logo.

`<img class="logo" src="images/logo.svg" height="70" width="116" alt="NETWRIX" onerror="this.style.display='none';" />`

### Edit Page Instructions

Instructions appear at the top of each page. You can edit the instructions by opening the relevant
.htm file and searching for the text you wish to modify.

Instructions are often inside a range called SECTION_A, SECTION_B, SECTION_C, or SECTION_D. Each
section contains instructions for the different pages in the template. Make sure you edit the
instructions in the correct section, or they may be displayed on the wrong page. The text_long and
text_short classes are used in page instructions to tailor content to the screen size.

```html
<!--SECTION_A-->
<p>Enter your username and domain, and then click Next to continue…</p>
<p class="text_long">Use the reset feature if you have forgotten y…</p>
<!--/SECTION_A-->
```

```html
<!--SECTION_B-->
<p>Answer the question below to confirm your identity. Your answer…</p>
<p class="text_long">You may need to answer additional questions b…</p>
<!--/SECTION_B-->
```

### Edit Validation Error Messages

Validation error messages are shown in a red box below the page instructions. Validation errors are
normally caused by invalid user input.

![using_npr_12](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_12.webp)

Validation error messages are defined in the relevant template (en_enroll.htm, en_reset.htm,
en_unlock.htm, or en_change.htm). The error messages are in the resource strings section near the
end of the file. Some messages are defined in more than one file, so you may need to edit several
files to change all instances of a message. See the [Resource Strings](#resource-strings) topic for
more information.

You may see placeholders like %1 and %2 in some error messages. These are replaced with more
information about the error. You should keep these, but you can delete them if you do not want them.

| String                      | Message                                         |
| --------------------------- | ----------------------------------------------- |
| `@RES_EMPTY_FIELD_EMAIL`    | `Enter your e-mail address in the E-mail box.`  |
| `@RES_EMPTY_FIELD_QUESTION` | `Select a question from the Question %1 list.`  |
| `@RES_IDENTICAL_QUESTIONS`  | `Question %1 and %2 are the same. Select a di…` |

### Edit Critical Error Messages

All the critical error messages are defined in en_error.htm. The messages are in the resource
strings section near the end of the file. See the [Resource Strings](#resource-strings) topic for
more information.

![using_npr_13](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_13.webp)

You may see placeholders like %1 and %2 in some error messages. These are replaced with more
information about the error. You should keep these, but you can delete them if you do not want them.

| String                | Message                                               |
| --------------------- | ----------------------------------------------------- |
| `@RES_LOCKED_OUT`     | `This feature has been disabled because too many qu…` |
| `@RES_LOCKED_OUT_AD`  | `Your account is locked because an incorrect passwo…` |
| `@RES_REQUEST_FAILED` | `The server %1 could not handle your request. Pleas…` |

If you want to display some text for all error messages, then insert your text above or below the
`<p>{/*ERROR*/}</p>` line. For example:

<p>{/*ERROR*/}</p>  
<p>The help desk phone number is 555-555-5555.</p>

### Edit Finished Messages

Finished messages are shown after users successfully complete an enroll, reset, unlock, or change.
These messages are defined in the Resource Strings section near the end of `en_finished.htm`. See
the [Resource Strings](#resource-strings) topic for more information.

![using_npr_9](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_npr_9.webp)

`en_finished.htm` has two resource strings for password changes (RES_FINISHED_CHANGE and
RES_FINISHED_CHANGE_INVITE). The first is shown when a user who has enrolled into NPR changes their
password. The second is shown when a user who has not enrolled changes their password. The second
message invites the user to enroll so they can also use the reset and unlock features in future.

### Replace Enroll Question Lists with Text Boxes

When users enroll into Password Reset, they choose their questions from the Question List. You can
replace some or all of the question lists with text boxes so users can enter their own questions.
See the
[Question List](/docs/passwordpolicyenforcer/10.2/password-reset/enrollment.md#question-list)
topic for additional information.

The lines you need to edit in en_enroll.htm look like this:

```html
<select class="field_question_list" name="q1" id="q1">
  <!--QL1-->
</select>
```

There are ten of these lines in en_enroll.htm, each with their own question number (the number after
the q). You do not have to edit all ten lines. If users will be allowed to enter two questions, then
only edit the q1 and q2 lines. Replace these lines with a line like this:

```html
<input class="field_question" name="q1" id="q1" value="<!--Q1-->" maxlength="64" />
```

Change the three question numbers on each line so they match the original numbers, otherwise
Password Reset will not work correctly. You should also edit the validation error messages in
`en_enroll.htm` as some of them make reference to selecting questions from a list.

**NOTE:** Users may not choose appropriate security questions, so it is advisable to leave the
question lists for some of the enrollment questions.

### Change Font Sizes and Colors

apr.css contains the user interface formatting information. You can change font sizes and colors by
editing this file. You can even reposition and resize items, but you will need some understanding of
CSS to do this. For example, this is the CSS for the validation error box:

```css
.apr_form .error {
  background-color: #ce482f;
  border-radius: 5px;
  color: #fff;
  margin: 0 15px 15px;
  padding: 10px 13px;
}
```

Edit these properties to change the appearance of the error box. You may need to clear your web
browser's cache to see the changes.

### Change Icon Colors

The Web Interface icons are in Scalable Vector Graphics (SVG) format. Vector graphics maintain their
sharpness when resized. You can easily change the colors of the icons with a text editor. Open the
SVG file with a text editor like Notepad, and edit this section of the file:

fill="#FF7F00"

Replace the hexadecimal color code with your desired color code. You can use a color picker like
this one to generate the color code:
[https://www.w3schools.com/colors/colors_picker.asp](https://www.w3schools.com/colors/colors_picker.asp)

**NOTE:** Some old web browsers with basic HTML5 support cannot display SVG images. Password Reset
works with these browsers, but the SVG images are not shown. You can convert the icons to GIF or PNG
format if you want them shown on these older browsers.

# E-mail Tab

Use the **E-mail** tab to configure how e-mail is sent to users, when it is sent, and also to edit
the e-mail templates.

![configuring_npr_3_709x772](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/configuring_npr_3_709x772.webp)

### E-mail Delivery

Password Reset can send e-mail alerts directly to an SMTP server, or save them to a pickup folder.
Select the **Send e-mail to an SMTP server** option if Password Reset should send e-mails directly
to an SMTP server. Type the name or IP address of an SMTP server in the **Server** text box, and the
SMTP port number in the **Port** text box.  
Select the **Save e-mail to a pickup folder** option if NPR should save e-mails to a folder for
delivery by a mail server. Click **Browse...** to select a folder. The mail server must monitor this
folder for new e-mail.

**NOTE:** Saving e-mail to a pickup folder is the fastest and most reliable delivery method. Use
this option if your mail server supports pickup folders.

### Triggers

Triggers define when e-mails are sent. If the trigger for an event is enabled, then Password Reset
sends an e-mail when the event occurs. Enabled triggers are underlined.

Click the name of an enabled trigger to edit the trigger's e-mail template.

![configuring_npr_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/configuring_npr_4.webp)

Type the name and e-mail address you wish to appear in the e-mail's From field in the **From** text
box. The correct format is `"Display Name" <mailbox@domain.com>`  
Type the recipient's e-mail address in the **To** text box. The correct format is
`"Display Name" <mailbox@domain.com>`. Separate multiple recipients with a semicolon. You can also
use these macros.

| Macro             | Replace with                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------------- |
| [AD_EMAIL]        | The e-mail address in Active Directory                                                        |
| [NPR_EMAIL]       | The e-mail address in Password Reset's database                                               |
| [AD_OR_NPR_EMAIL] | The e-mail address in AD, or the e-mail address in Password Resetif the AD address is blank   |
| [NPR_OR_AD_EMAIL] | The e-mail address in NPR, or the e-mail address in AD if the Password Reset address is blank |

**NOTE:** Use [NPR_OR_AD_EMAIL] with caution as Password Reset does not check the validity of e-mail
addresses. If the e-mail address in Password Reset's database is no longer valid, then the alert is
only sent to the invalid address.

Type additional recipient e-mail addresses in the **Bcc** text box if you want to send any blind
carbon copies. Separate multiple recipients with a semicolon.

Type the e-mail's subject in the **Subject** text box.

Type the e-mail's body in the large text box. The e-mail is sent as plain text unless the body
contains the `<html>` tag. Include the entire HTML document when sending e-mail as HTML. You can
also use these macros.

| Macro       | Replaced with                           |
| ----------- | --------------------------------------- |
| [AD_DOMAIN] | The user's Active Directory domain name |
| [AD_USER]   | The user's Active Directory logon name  |

Password Reset stores the user's preferred language every time they successfully complete an Enroll,
Reset, Unlock, or Change. E-mail alerts are sent in the user's preferred language, or in the current
Web Interface language if the user's preferred language is not known. If an e-mail template is not
defined for the user's preferred language, then the alert is sent in English.

Use the drop-down list at the bottom of the E-mail template editor to switch between template
languages. Changes are preserved as you switch between languages. The **From**, **To**, and **Bcc**
are the same for all languages.  
A warning icon is shown beside the language drop-down list if an e-mail template is not defined for
every language. You should define an e-mail template for every language to ensure that users can
understand their e-mail alerts.

![configuring_npr_5](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/configuring_npr_5.webp)

**CAUTION:** An attacker may choose a specific language to avoid detection. E-mail alerts are sent
in the Web Interface language chosen by the attacker if the target user has not enrolled or changed
their password with Password Reset. The target user will receive the e-mail alerts, but they may not
understand them. Use the Rest API to remind new users to enroll so their preferred language is known
to Password Reset. See the
[Enabling the API](/docs/passwordpolicyenforcer/10.2/password-reset/best-practices.md#enabling-the-api)
topic for additional information.

# General Tab

Use the General tab to maintain the list of managed domains, set the database options, and enable
the Password Policy Enforcer integration. See the
[Netwrix Password Policy Enforcer](#netwrix-password-policy-enforcer) topic for additional
information.

![configuring_npr](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/configuring_npr.webp)

### Domain List

The Domain List is empty when Password Reset is first installed, and users must type their domain
name. You can configure Password Reset to display a list of domains instead of an empty text box.

Add a Domain to the list

Follow the steps below to add a domain to the list.

**Step 1 –** Click **Add...**

**Step 2 –** Type a NetBIOS (NT Compatible) or DNS domain name.

**Step 3 –** Click **OK**, and then click **Apply**.

**NOTE:** The most frequently used domain should be first in the list as it will be the default. You
can rearrange the domains by dragging them to another position. You can also click Sort to sort them
alphabetically.

Remove a Domain from the list

Follow the steps below to remove a domain from the list:

**Step 1 –** Select the domain name in the Domain List.

**Step 2 –** Click **Remove**, and then click **Yes** when asked to confirm.

**Step 3 –** Click **Apply**.

### Database

Password Reset uses an SQL Server Compact database by default. It creates two database files
(apr.sdf and aprlog.sdf) in the Password Reset installation folder.

Follow the steps below to move these files to another folder.

**Step 1 –** Close the Data Console if it is open.

**Step 2 –** Stop the Password Reset service.

**Step 3 –** Move apr.sdf and aprlog.sdf to their new location. The database files should remain on
a local disk.

**Step 4 –** Give the Password Reset service account read and write permissions to the database
files in their new location.

**Step 5 –** Open the Password Reset Configuration Console, and click **Change...** in the
**General** tab.

**Step 6 –** Click **Browse...** and select the new database path.

**Step 7 –** Click **OK** twice, and then click **Apply**.

**Step 8 –** Start the Password Reset service.

**Step 9 –** Update the backup script to copy from the new folder. See the
[Working with the Database](/docs/passwordpolicyenforcer/10.2/password-reset/data-management.md)
topic for additional information.

You can also move the database from SQL Server Compact to SQL Server. See the
[Working with the Database](/docs/passwordpolicyenforcer/10.2/password-reset/data-management.md)
topic for more information.

### Netwrix Password Policy Enforcer

Password Reset is a configurable password filter that enforces granular password policies with many
advanced features. Password Reset can integrate with Password Policy Enforcer to help users choose a
compliant password.

![configuring_npr_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/configuring_npr_1.webp)

Password Reset displays the Password Policy Enforcer policy message when users are prompted for
their new password, and the Password Policy Enforcer rejection message if the new password does not
comply with the password policy. Select the **Password Policy Enforcer integration** check box if
you have installed and configured Password Policy Enforcer on your domain controllers.

Password Reset locates and queries a domain controller in the user's domain when Password Policy
Enforcer integration is enabled. You can override this behavior and send all Password Policy
Enforcer queries to a specific IP address by setting the `PPEIPAddress` registry value to the IP
address of a Password Policy Server. The `PPEIPAddress` value is in
`HKEY_LOCAL_MACHINE\SOFTWARE\ANIXIS\ANIXIS Password Reset\3.0`.

**NOTE:** Due to a protocol upgrade, Netwrix Password Reset v3.3 is not compatible with Netwrix
Password Policy Enforcer v8.x and earlier versions. If you are using Netwrix Password Reset with any
of those older Netwrix Password Policy Enforcer versions, please consider upgrading Netwrix Password
Policy Enforcer first to a current version, and only then upgrade Netwrix Password Reset to v3.3 (or
later).

Users are more likely to see the Password Policy Enforcer Generic Rejection message rather than the
more detailed Rejection message when this registry value is set. Users may also have the wrong
policy, or no policy enforced if the queried server is not a domain controller in the user's
domain.  
Queries to the Password Policy Server are sent to UDP port 1333 by default. You may need to create
firewall rules to open this port. See the
[Password Policy Client](/docs/passwordpolicyenforcer/10.2/installation-and-deployment/password-policy-client.md)
topic for more information.

**NOTE:** Due to a protocol upgrade, it is now recommended to enable protocol encryption for
clients. To do so, please navigate to the PPS Properties in your Netwrix Password Policy Enforcer
server configuration, and enable "Only accept encrypted client request".

![using_ppe_with_npr](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_ppe_with_npr.webp)

Please do not enable this option if you are using Netwrix Password Reset v3.3 with Netwrix Password
Policy Enforcer v8.x or earlier versions, or with Netwrix Password Policy Enforcer/Web. If you are
using Netwrix Password Reset v3.3 with any of those older versions of Netwrix Password Policy
Enforcer, please consider upgrading first to a current and supported version.

**NOTE:** Password Policy Enforcer is not included with Password Reset. Go to
[www.netwrix.com/password_policy_enforcer](https://www.netwrix.com/password_policy_enforcer.html) to
learn more about Password Policy Enforcer.
