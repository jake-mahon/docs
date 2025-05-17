---
sidebar_position: 6597
title: Compromised Rule
---

# Compromised Rule

The Compromised rule rejects passwords from prior breaches. These passwords should not be used as they are vulnerable to credential stuffing attacks.

![Compromised password rule](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Admin/Policies/compromised.png "Compromised password rule")

Select the **Compromised** check box to enable the Compromised rule.

You can browse to your compromised passwords base files or type a path into the text box. The path can contain environment variables like

**CAUTION:** %SystemRoot%. hash files should only be read from a local disk. Using shared hash files degrades performance, and could jeopardize security.

See the [HIBP Updater](HIBPUpdater "HIBP Updater") topic for the information about the Have I Been Pwnd (HIBP) database usage.