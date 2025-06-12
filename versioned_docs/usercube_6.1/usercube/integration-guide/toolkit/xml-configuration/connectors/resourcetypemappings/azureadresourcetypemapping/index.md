# AzureADResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<AzureADResourceTypeMapping Identifier="MicrosoftEntraID_DirectoryObject_Guest" Connection="MicrosoftEntraIDExportFulfillment" DefaultObjectClass="users" InvitationMode="MicrosoftInvitation" InvitationRedirectUrl="https://demo.usercube.com" PasswordResetSetting="ToSponsor">  <Property Property="objectid" IsDNProperty="true" />  <Property Property="groups" DataSourceBacklinkColumnName="member" />  <Property Property="displayName" IsDisplayNameProperty="true" />  <Property Property="mail" IsMailProperty="true" /></AzureADResourceTypeMapping>

```

## Properties

| Property | Details |
| --- | --- |
| Connection   required | __Type__    String   __Description__   Identifier of the corresponding connection. |
| DefaultObjectClass   required | __Type__    String   __Description__   Default object class used by the provisioner, for example ```person```, ```organizationalPerson```, ```user```, etc.   __Note:__ multiple default object classes are separated with ```&#xA;```. |
| InvitationCustomizedMessageBody   optional | __Type__    String   __Description__   Message that will replace Azure's default message in the invitation.   __Note:__ only used when ```InvitationMode``` is set to ```MicrosoftInvitation```. |
| InvitationMessageLanguage   optional | __Type__    String   __Description__   Language of the invitation's message.   __Note:__ when not specified, the message is in English.   __Note:__ only used when ```InvitationMode``` is set to ```MicrosoftInvitation```. |
| InvitationMode   default value: None | __Type__    InvitationMode   __Description__   Mode of the invitation email sent during the creation of a guest Microsoft Entra ID account.   - __None__: nothing is sent.   - __MicrosoftInvitation__: an invitation email is sent to another person to initiate the external user's guest account in Microsoft Entra ID according to the related password reset setting (one-way, two-way, etc.). |
| InvitationRedirectUrl   optional | __Type__    String   __Description__   URL that will be displayed in the invitation email.   __Note:__ required when ```InvitationMode``` is set to ```MicrosoftInvitation```. |
| PasswordResetSetting   optional | __Type__    String   __Description__   Identifier of the corresponding password reset setting.   __Note:__ required when ```InvitationMode``` is set to ```None``` and ```DefaultObjectClass``` set to ```users```. |
