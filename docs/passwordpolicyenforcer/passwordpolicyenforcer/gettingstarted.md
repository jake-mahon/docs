# Getting Started

Review the [Requirements](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/requirements.md) and the [Domain and Local Policies](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/domain_and_local_policies.md) topics.

## Install Products

Password Policy Enforcer (PPE Server) is installed on every domain controller to enforce the password policy for domain user accounts, or on individual servers and workstations to enforce the password policy for local user accounts. See the [Install Password Policy Enforcer on a Server](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/installationserver.md) or [Install with Group Policy Management](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/installationgpm.md) topics for additional information.

The Configuration Console can be installed on what ever servers are convenient for you to access. It is a selectable feature in the server installation __msi__ package. See the [Install Password Policy Enforcer on a Server](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/installationserver.md) topic for additional information.

The Mailer Service is installed on a single server in each domain. See the [Install Password Policy Enforcer on a Server](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/installationserver.md) topic for additional information.

Password Policy Enforcer client is optional, but recommended. Users receive immediate feedback when setting up their passwords. This saves your users time and frustration when picking compliant passwords. See the [Install Password Policy Enforcer Client](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/installationclient.md) or [Install with Group Policy Management](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/installationgpm.md) topics for additional information.

Password Policy Enforcer Web is a separate product enabling users to change their Windows domain password from a web browser. See the [Password Policy Enforcer Web](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/web/web_overview.md) topic for additional information.

Create the __Compromised Passwords Base__ prior to enabling the Compromised Password Check. See the [HIBP Updater](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/hibpupdater.md) topic for additional information.

## Exclude PPE Files from AntiVirus Checks

Domain Controller

__PPE.DLL__ if this file does not load, the password policy is not enforced.

Clients

__PPEClt.dll__ and __APRClt.dll__ if either of these files are blocked, the client does not run.

## Next Steps

You can work through the [Evaluate Password Policy Enforcer](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/evaluation_overview.md) or open the [Configuration Console](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/configconsoleoverview.md).
