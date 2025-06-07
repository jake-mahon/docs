# Send Notifications

An SMTP server is used by the Identity Manager Server to send notification emails to its users, and by the Identity Manager Agent to send Reset Password emails.

## Email Delivery

### Via a local SMTP server and the pickup directory

Both the Agent and the Server can send emails using a __local SMTP server__ with Microsoft's __Pickup Directory__ feature.

__Pickup Directory__ is a feature offered by most of Microsoft's SMTP services, such as IIS SMTP service or Microsoft Exchange Server.

The pickup directory helps reducing network overhead by eliminating SMTP traffic between applications, such as the Identity Manager Server or Identity Manager Agent, and SMTP servers. It is particularly useful when using emails as notifications.

To send an email, an application usually communicates with an SMTP server via the SMTP protocol. In the real world, email notifications generate a lot of traffic on the organization network. This extra traffic can be avoided by having applications (such as the Identity Manager Server or Identity Manager Agent) write emails as local files in a local directory instead of sending SMTP packets.

The SMTP server will then periodically check the directory and send any email found in it. The SMTP exchange between the applications and the SMTP server is replaced by file writing and reading.

The directory where clients write emails as files is called the __pickup directory__.

### Via an external SMTP server

Both the Agent and the Server can get their emails delivered through an __external__ SMTP server.

## Server Emails

The SMTP server used by the Identity Manager Server is configured in the [Application Settings](/docs/product_docs/usercube_saas/usercube/integration-guide/network-configuration/server-configuration/general-purpose/index.md).

Here is an example with an external SMTP server.

```

appsettings.json

{
  ...
  "MailSettings": {
    "Host": "smtp.contoso.com",
    "FromAddress": "no-reply@contoso.com"
  }
}

```

The __Host__ attribute is the hostname or IP address of an external SMTP server. You can also specify a directory path instead, that would be the __pickup directory__ of your __local__ SMTP server.

You can also input a __UserName__ and __Password__ if the SMTP server requires Identity Manager to authenticate to send emails.

## Agent Emails

From the agent side, the email settings dwell in the [Application Settings](/docs/product_docs/usercube_saas/usercube/integration-guide/network-configuration/agent-configuration/appsettings/index.md) file.

Here is a classic example that enables Identity Manager to send emails through the _smtp.contoso.com_ server using _[no-reply@contoso.com](mailto:no-reply@contoso.com)_ as the sender address. The Identity Manager Agent will authenticate to the SMTP server with the _contosoIdentity Manager_ login.

```

"MailSettings": {
    "FromAddress": "no-reply@contoso.com",
    "Host":"smtp.contoso.com",
    "Port":993,
    "Username": "contosousercube",
    "Password": "secret"
  }

```

If you'd rather use a __local__ SMTP server with __pickup directory__, _Host_, _Port_, _Username_ and _Password_ won't be needed.

```

"MailSettings": {
    "FromAddress": "no-reply@contoso.com",
    "UseSpecifiedPickupDirectory": true,
    "PickupDirectory": "C:/Temp/UsercubeContosoPickup",
  }

```

## That's It!

Now, you're all set to start using Identity Manager.

Enjoy the benefits of your new Identity and Access Management solution.
