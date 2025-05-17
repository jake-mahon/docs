---
sidebar_position: 2494
title: Local Host Target Actions
---

# Local Host Target Actions

The following actions target the Threat Manager server.

## PowerShell Script

The PowerShell Script action executes a specified PowerShell script. This action can be used to build a custom threat response, using PowerShell, to handle scenarios not covered by other preconfigured action steps.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/PowershellScriptActionStep.png)

* PowerShell Script – Select the PowerShell script to execute. By default, the PowerShell script includes a comment section which includes Threat Manager threat variables that can be used in PowerShell script action steps.
* Credential – Select a credential profile using the drop-down list. This will provide the PowerShell action step with a PowerShell credential object, based upon the Threat Manager credential specified for use in the script. For example:

  $Session = New-PSSession -ComputerName "Computer01" -Credential $Credential

  Invoke-Command -Session $Session -ScriptBlock {Write-Host "Hello World"}

## Send Email

The Send Email action sends an email.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/SendEmail.png)

* Subject – The subject of the email
* To – Specify the email addresses receiving the email
* Body – The body of the email. HTML is supported.

## Stop Process

The Stop Process action stops a process running locally on the host associated with the threat.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/StopProcess.png)

* Credential – Select a credential profile that contains valid Active Directory credentials. Credential profiles are configured on the [Credential Profile Page](../../Configuration/Integrations/CredentialProfile "Credential Profile Page"). If not specified, the action will be run as the credentials of the Action Service.

## End User Session

The End User Session action attempts to log the specified user out of any active RDP sessions on the target client.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/EndUserSession.png)

* Users – The users to log out of RDP sessions. If not specified, only the perpetrator will be used. Select the users from the drop-down list:

  * Perpetrator – The account that initiated the threat
  * Both Users and Perpetrators Affected – The account that initiated the threat and also the users affected by the threat
* Computers – The computers to log a user out of a RDP session. If not specified, only the perpetrator client will be used. Select computers from the drop down list:

  * Perpetrator Client – The computer that initiated the threat
  * Host – The host client that initiated the threat
  * Both Perpetrator Client and Host – The computer and the host client affected by the threat
* Credential – The domain credential used to run the action. Domain credentials are populated by credential profiles that are created on the Integrations page. If not specified, the action will be run under the credentials of the action. Select the credentials from the drop-down list. See the [Credential Profile Page](../../Configuration/Integrations/CredentialProfile "Credential Profile Page") topic for additional information.