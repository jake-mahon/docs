# Permissions for AD FS Auditing

Before you start creating a monitoring plan to audit your AD FS federation servers, plan for the account that will be used for data collection – it should meet the requirements listed below. Then you will provide this account in the monitoring plan wizard.

__On the target server:__

- If the target AD FS federation server is a domain controller, then the account must belong to the __Administrators__ or __Domain Admins__ group
- Otherwise, if the server is not a domain controller, the account must belong to the __Local Administrators__ group.
