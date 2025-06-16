# Hierarchy in Configuration Files

Every configuration's element falls under the ` urn:schemas-usercube-com:configuration` namespace.
Element `<ConfigurationFile>` is the root element of each configuration file.

```

<ConfigurationFile xmlns="urn:schemas-usercube-com:configuration">    ...
<ConfigurationFile>

```

Each configuration element matches to an entry in the database. Detailed description of the element
can be found in the Data model. See the [ XML Configuration Schema ](../xml-configuration/index.md)
topic for additional information.

For example, the structure of the `<Connector>` element can be found in the
[Connectors](../../connectors/index.md) topic.

In some case, the element name will not match directly the data model type name.

For example, the element `<Entry>` in the following XML fragment is a
[Access Control Rule](../xml-configuration/access-control/accesscontrolrule/index.md) item in the
database.

```

<AccessControlRule Profile="Administrator" EntityType="Resource" Identifier="Administrator_Resource" DisplayName_L1="Administrator_Resource">  <Entry Permission="/Connectors/SynchronizeSession" CanExecute="true" />  <Entry Permission="/Connectors/ProvisioningSession" CanExecute="true" /></AccessControlRule>

```
