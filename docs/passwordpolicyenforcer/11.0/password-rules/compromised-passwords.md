# Compromised Rule

The Compromised rule rejects passwords from prior breaches. These passwords should not be used as
they are vulnerable to credential stuffing attacks.

![Compromised password rule](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/compromised.webp)

Select the **Compromised** check box to enable the Compromised rule.

You can browse to your compromised passwords base files or type a path into the text box. The path
can contain environment variables like

**CAUTION:** %SystemRoot%. hash files should only be read from a local disk. Using shared hash files
degrades performance, and could jeopardize security.

See the [HIBP Updater](/docs/passwordpolicyenforcer/11.0/administration/compromised-password-management/hibp-updater.md) topic for the information about the Have I Been Pwnd (HIBP)
database usage.
