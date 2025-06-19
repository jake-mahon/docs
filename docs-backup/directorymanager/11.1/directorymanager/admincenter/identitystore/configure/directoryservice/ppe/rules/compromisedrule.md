# Compromised Rule

The Compromised rule rejects passwords from prior breaches. These passwords should not be used as
they are vulnerable to credential stuffing attacks.

- Enable the **Compromised** button to enable the Compromised rule.

- Type path to your compromised passwords base files into the text box. The path can contain
  environment variables like %SystemRoot%.

  **CAUTION:** Using shared hash files degrades performance, and could jeopardize security.
