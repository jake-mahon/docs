# Web

PPE/Web allows users to change their Windows domain password from a web browser. It can optionally integrate with Password Policy Enforcer to enforce customizable password policies and help users choose a compliant password.

![introduction_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/introduction_4.png)

PPE/Web communicates directly with the domain controllers, so it works best when both the web server and domain controllers are on the same network. If you need to put the web server in a DMZ for extra security, then consider using Netwrix Password Reset instead of PPE/Web.

Password Reset also allows users to change their password from a web browser, but it has many other features including the ability to work in a DMZ without any domain controllers. Use Password Reset if you need to:

- Allow users to reset a forgotten password or unlocked their account by answering questions about themselves, such as their date of birth, first pet's name, etc. Users can access APR from the web browser, or from the Windows Logon and Unlock screens if the APR Client is installed.
- Send e-mail alerts to users whenever their account is used in the password management system.
- Keep a detailed, searchable audit log of all user activity.
- Separate the web server from he internal network for extra security.

See the [Netwrix Password Reset](https://www.netwrix.com/active_directory_password_reset_tool.html) page for additional information on the Password Reset product.
