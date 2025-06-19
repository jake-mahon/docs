# Policy Templates: Processes and Services

The **Processes** and **Services** tab allows Processes and/or Services (Windows only) and their
states to be defined within your **Configuration Policy** as either Whitelisted or Blacklisted.

A key indicator of breach or malware activity is the existence of new processes or services.
Likewise, configuration hardening and vulnerability mitigation always requires unnecessary services
and daemons to be removed or disabled. Therefore, it is important to track process lists and
services and their states.

Any non-necessary Services or Services you are generally unconcerned about should be marked as
**Ignore State**.

![PolicyTemplatesProcessesServices](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/policytemplates/policytemplatesprocessesservices2.webp)

- \_**\_Uncategorized Process/Service Action\_\_** - Use this option if you want to be alerted to
  the presence of any new, uncategorized processes or services. This is an option as in some
  situations it may be convenient to be alerted to missing, key processes.

- \_**\_Polling Frequency\_\_** - See previous Change Tracker notes.

- Define Process (Service) Name - Processes/Services can be defined as either Required, Blacklisted,
  Whitelisted or Graylisted.

  - \_**\_Required\_\_** - The Process/Service must be in the state required and an alert will be
    raised if this is not the case.
  - Whitelisted - The Process/Service is allowed to be present, but this is not mandatory.
  - Blacklisted - The Process/Service is never allowed to be present, and an alert will be raised
    if this is not the case.
  - Graylisted- The process/service has not yet been allocated to another category.

# Policy Templates: Process/Command Output

Where required, Netwrix Change Tracker can also execute commands on the endpoint device. Note that
commands must be pre-approved for usage. All standard commands employed within Change Tracker
Compliance Reports and the built-in Policy Templates are pre-approved but if you add any new
commands these may require Admin approval. See the
[Allowed Commands](/docs/changetracker/8.0/administration/system-settings/allowed-commands.md)
topic for additional information.

- **Agent-Based Monitoring** – Where an Agent is being used for monitoring the commands will be
  executed directly by the Agent and the initial baseline stored in the local Agent database, with
  any subsequent changes detected being reported back to the Hub. The commands will be run using
  whichever service account has been assigned to it. When run on Windows any commands are run from
  the standard Windows\System32 shell and therefore may require a full executable path to be
  specified e.g.

cmd /C %systemroot%\system32\inetsrv\appcmd list VDIR /text:VDIR.NAME

![ProcessCommandOutput](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/policytemplates/processcommandoutput.webp)

- Commands will be executed indirectly by the **Master Proxy Agent** being used and the initial
  baseline stored in the **Proxy Agent** database, with any subsequent changes detected being
  reported back to the Hub. The commands will be run using whichever service account has been used
  in the assigned **Credentials**.

![ProcessCommandOutputCredentials](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/policytemplates/processcommandoutputcredentials.webp)

- **Use of RegEx** – Whether using Agent-based or Agentless Command Output Trackers, a Regular
  Expression can be applied to the command output to filter/match specific keywords/patterns. Note
  that any device-offered RegEx capabilities e.g. egrep on Linux, can still be used instead of or to
  complement the Agent regex applied.

The Agent will only trust a signed **Configuration Template** issued from its assigned Hub. Please
contact [Netwrix Support](https://www.netwrix.com/support.html) for additional information.
