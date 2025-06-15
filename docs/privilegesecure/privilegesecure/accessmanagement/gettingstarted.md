# Getting Started

Once Privilege Secure is installed, complete the following configuration sections to enable users to create activity based sessions on defined resources.

Additional capabilities such as Access Certification, email notifications, and SIEM service integration can be enabled in their respective configuration pages.

## Configure MFA

Privilege Secure requires a multi-factor authentication (MFA) solution (Authenticator, DUO, Symantec VIP, etc.) for all user accounts. First time users must register an MFA to use with their Active Directory credentials:

- Configure multi-factor authentication (MFA). See the [First Launch](install/firstlaunch.md) topic for additional information.
- Login to the Privilege Secure Console. See the [Log Into the Privilege Secure Console](admin/login.md) topic for additional information.

## Update the License

Netwrix Privilege Secure comes with a temporary 30-day license. Contact the organization’s Netwrix sales representative to purchase a license:

- Import the license file. See the [Import the License File](admin/importlicense.md) topic for additional information.

Privilege Secure licensing is done according to user count. Any user who is provisioned access to Privilege Secure will consume a license after their first login. This is true for all users, regardless of role (Administrator, Reviewer, User, or Custom Role).

## Add Service Accounts & Domains

Prior to using Privilege Secure, it is necessary to add the service accounts and domains that contain the users, groups and resources:

- [Service Accounts Page](admin/configuration/page/serviceaccounts.md) — Add the account credentials that will grant access to the required resources
- [Add New Domain](admin/policy/add/domain.md) — Add the Active Directory domains that contain the users, groups, resources and service accounts that Privilege Secure will use to grant access

## Add Users, Resources & Activities

Before users can create sessions, it is necessary to setup an access policy. A user must be a part of an access policy to create a session. The access policy determines what activities the users can perform and on what resources. An Access Policy consists of three parts that must be configured first:

- [Users & Groups Page](admin/policy/page/usersgroups.md) — Add the Users and Groups from AD that will use the Privilege Secure Console
- [Resources Page](admin/policy/page/resources.md) — Add the resources such as Windows or Linux servers that the users will access via the Privilege Secure Console
- [Activities Page](admin/policy/page/activities.md) — Add the actions that Privilege Secure will perform before, during and after a session, such as temporarily adding the user to a local admins group

## Configure Access Policies

Once the users, groups and resources are added to the console, it is now possible to create access policies to control privileged access:

- [Connection Profiles Page](admin/policy/page/connectionprofiles.md) — Add the connection profile that will be used with the access policy
- [Access Policy Page](admin/policy/page/accesspolicy.md) — Create the access policies to control privileged access to resources

## Create Sessions

Privilege Secure is configured and ready to use:

- [Create My Activity Session](enduser/access/createsession.md) — Create a session to grant temporary privileges and gain access to the resources defined by the previously created access policy
- [Browser Extension Interface](enduser/browserextension/interface.md) — Conveniently access all of your previously created activities from within an internet browser
