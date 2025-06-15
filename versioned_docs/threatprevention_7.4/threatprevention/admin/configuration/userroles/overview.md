# Users and Roles Window

On the Users and Roles window, you can grant role based access to users on the Administration
Console. See the
[User Access Page](/versioned_docs/threatprevention_7.4/threatprevention/reportingmodule/configuration/systemsettings/useraccess.md)
topic for information on granting access to the Netwrix Threat Manager Reporting Module console.

Click **Configuration** > **Users** on the menu to open the Users and Roles window.

![Users and Roles window](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/userroles/usersroleswindow.png)

**NOTE:** This window is only available to Threat Prevention administrators.

The user account that ran the installation is automatically set with the administrator role. This is
the only active user until more are added. This ensures that no unauthorized accounts can open the
Administration Console.

## Roles

There are two roles that can be applied to a Threat Prevention user:

- Administrator – Full access to the Administration Console, though access can be restricted. See
  the [Administrator Permissions](#administrator-permissions) topic for additional information.
- Console Operator – Can create and run policies, and view event data.

**NOTE:** The Report User role was a legacy feature for the IIS-based Reporting Console and is no
longer applicable. See the
[Reporting Module](/versioned_docs/threatprevention_7.4/threatprevention/reportingmodule/overview.md)
topic for information on the new reporting console.

Administration Console Rights

|                                                             | Administrator                   | Console Operator                |
| ----------------------------------------------------------- | ------------------------------- | ------------------------------- |
| Log into the Administration Console                         | Yes                             | Yes                             |
| Create Policies and Policy Templates                        | Yes                             | Yes                             |
| View, Edit, or Delete Unprotected Policies                  | Yes                             | Yes                             |
| View, Edit, or Delete Protected Policies                    | According to Folder Permissions | According to Folder Permissions |
| Protect Policies at the Folder                              | Yes                             | Yes                             |
| Change Protected Folder Permissions                         | Yes\*                           | No                              |
| Set or Modify Administration Console Configuration Settings | Yes                             | No                              |
| Deploy and Manage Agent                                     | Yes                             | No                              |
| Add or Remove Users                                         | Yes                             | No                              |
| Modify User Access Rights                                   | Yes                             | No                              |
| LDAP Operations Center                                      | Yes                             | No                              |

\*If an administrator changes permissions on protected policies they do not own, a system alert is
generated.

See the
[Policies Interface](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/overview.md)
topic for information on protected and unprotected policies.

A user must have the following minimum permissions on the SQL Server databases, both the
NVMonitorConfig and NVMonitorData databases, according to the assigned role:

- Administrator Role

    - Read/Write data
    - If using
      [Database Maintenance Window](/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/databasemaintenance/overview.md)
      – SQL Admin (sa) rights are required

- Console Operator Role

    - Read/Write data

## Administrator Permissions

The Features button is enabled for users with the Administrator role. It provides options to limit
Administrator permissions to manage features, stop the Agent, or uninstall the Agent.

![Users and Roles window showing the Edit Features window](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/userroles/featuresbutton.png)

Follow the steps to edit the features for the selected user. All listed features are enabled by
default.

**Step 1 –** Click the **Features** button. The Edit features window opens.

**Step 2 –** Check and uncheck features as desired.

**Step 3 –** Click **OK**.

The user is denied rights to the deselected features.
