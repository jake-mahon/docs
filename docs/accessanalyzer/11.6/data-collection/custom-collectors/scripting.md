# Add a Script to an Existing Query

The Query Properties window provides the ability to add a script to an existing query. Typically, a
script is used to augment a query providing services such as conversion of returned data.

Follow the steps to add a script.

**Step 1 –** Navigate to the job's **Configure** node and select **Queries**.

**Step 2 –** Click **Create Query** to open the Query Properties window.

**Step 3 –** Select the **Data Source** tab and select the desired data collector in the Data
Collector drop-down menu.

![Query Properties window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/script/querypropertiesexisting.webp)

**Step 4 –** Click the **Browse Data Source** button to open the VBScript Editor page and add the
script to run after data collection.

See the
[VBScript Editor](/docs/accessanalyzer/11.6/data-collection/custom-collectors/scripting.md)
topic for additional information.

# VBScript Editor

The VBScript Editor window provides the means to add a script. The window is ideal for editing small
scripts and for pasting larger scripts from external scripting tools.

![VBScript Editor window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/script/vbscripteditor.webp)

The options in the VBScript Editor are:

- Save and Close – Use this option to save the script and close the window
- Syntax Check – Use this option to check the syntax of your script. This does not identify logic
  errors, only cases where the script syntax is incorrect. It helps reduce the overhead of debugging
  a script. When selected, a Script Errors window opens and a syntax check is performed. Any
  syntactical errors are displayed within the window.
- Load from file – Use this option to load a VB script from a .vbs file
- Save to file – Use this option to save the current script in the Editor
- Undo – Undo previous changes made to the script (Shortcut is Ctrl+Z)
- Redo – Redo previous changes made to the script (Shortcut is Shift+Ctrl+Z)
- Cut – Cut the highlighted text
- Copy – Copy the highlighted text
- Paste – Paste cut or copied text into the VB Script Editor
- Online VBScript Language Reference – Opens internet browser to the Microsoft Technical
  Documentation website from where documentation for Visual Basic Script can be navigated to

After adding or modifying a script, click **Save and close**.

See the
[Script Example 1: Conversion of Data](/docs/accessanalyzer/11.6/data-collection/custom-collectors/scripting.md)
and
[Script Example 2: Command Query](/docs/accessanalyzer/11.6/data-collection/custom-collectors/scripting.md)
topics for additional information.

# Script Example 1: Conversion of Data

This script example demonstrates how to perform a query and modify returned data. The script
provides the data collector with the information that would have been provided if the user interface
had been used to design the query. However, in this case it is all done through script. The data
collector returns a value that is then converted and stored by Enterprise Auditor.

This script starts by defining a query using the Perfmon Data Collector. Notice that the
**WorkingQuery** object is used, not the Query object. This is done to preserve the Query object,
since the Query object will be used to store the results that are different from what the data
collector is providing.

The script then issues the query by calling `WorkingQuery.Execute`. When the query completes,
**WorkingQuery** is set to view the first row of results by setting the **ResultRow** property. The
value within the **System Up Time** property is then transferred into the `REMAINDER` variable so
that it can be more easily manipulated.

The script then takes the value of `REMAINDER`, which is in seconds, and converts it to days, hours,
minutes, and seconds. These values are then recorded in the Query object so that Enterprise Auditor
can store this data.

**NOTE:** In this task, the hours, minutes, and seconds properties were specified manually using the
task dialog. See the
[Script Properties](/docs/accessanalyzer/11.6/data-collection/custom-collectors/scripting.md)
topic for additional information.

## Example of Conversion of Data Script

The conversation of data script example is:

```
Sub Task()
Dim DAYS
Dim HRS
Dim MINS
Dim SECS
Dim REMAINDER 
WorkingQuery.Host=Query.Host
WorkingQuery.Source="Perfmon"
WorkingQuery.Paths=1
WorkingQuery.Path(0)="System\System Up Time"
WorkingQuery.AddProperty  "NAME=System Up Time,DATATYPE=NUMERIC,VALUE=,COLUMN=UPTIME"
WorkingQuery.Execute
WorkingQuery.ResultRow=0
REMAINDER=WorkingQuery.ResultData("System Up Time") 
Query.ResultRows=1
Query.ResultRow=0 
'Calculate days/hrs/mins/secs
DAYS=INT(REMAINDER/86400)
REMAINDER=REMAINDER-(DAYS*86400)
HRS=INT(REMAINDER/3600)
REMAINDER=REMAINDER-(HRS*3600)
MINS=INT(REMAINDER/60)
SECS=INT(REMAINDER-(MINS*60)) 
Query.ResultData("SecondsElapsed")=INT(WorkingQuery.ResultData("System Up Time"))
Query.ResultData("Days")=DAYS
Query.ResultData("Hrs")=HRS
Query.ResultData("Mins")=MINS
Query.ResultData("Secs")=SECS
End Sub

```

# Script Example 2: Command Query

The following example illustrates the use of scripts within Enterprise Auditor. This script reads a
database list from SQL Server and then proceeds to the File System Data Collector for the size of
the database file, essentially inventorying the installed databases, their paths, and sizes.

**NOTE:** Because the object instances are not thread-safe, scripts like these that use objects
external to Enterprise Auditor should be run with only one thread.

In this example, a connection is opened with a SQL server. The SQL server name is provided by
Enterprise Auditor during the query. Enterprise Auditor provides the active host to the script using
the **Query.Host** property.

The script then queries the Master database, requesting a **recordset** containing all databases and
proceeds to get the row count. Setting the **Query.ResultRows** property creates a row of storage
for each record in the recordset. It then proceeds to read data from each row by looping row by row.
For each row, the database name, filename, and ID are captured. The script then calls a function to
get the size of the file. The **FileSize** function uses the database filename to construct a query
to the File System Data Collector, which ultimately returns the size of the file.

The data for each database is stored in the Query object.

Finally, the SQL objects are freed.

## Example of Compound Query Script

The compound query script example is:

```
Sub Task() 
Const adOpenStatic = 3
Const adLockPessimistic = 2 
Dim cnnSQL
Dim rstSQL
Dim I
Dim sFilespec, sPath, sFile 
' CONNECT TO THE DATABASE
' **** NOTE *****
' Set Uid and pwd to username and password
' OR set both to blank for trusted connections 
Set cnnSQL = CreateObject("ADODB.Connection")
cnnSQL.Open "Driver={SQL Server};" & _ 
"Server=" & Query.Host & ";" & _
"Database=Master;" & _
"Uid=SA;" & _ 
"Pwd="
Set rstSQL = CreateObject("ADODB.Recordset")
rstSQL.Open "SELECT dbid, name, filename FROM sysdatabases;", cnnSQL, _
adOpenStatic, adLockPessimistic 
' AS LONG AS RECORDS CAME BACK, PROCEED TO CAPTURE DATABASE INFO 
If NOT(rstSQL.EOF) Then
Query.ResultRows=rstSQL.RecordCount
rstSQL.MoveFirst
For i=0 to Query.ResultRows-1
Query.ResultRow=i
Query.ResultData("DbId")=rstSQL.Fields("dbid")
Query.ResultData("Name")=rstSQL.Fields("name")
sFilespec=rstSQL.Fields("filename")
SplitPath sFileSpec, sPath, sFile
Query.ResultData("Path")=sPath 
'GET DB SIZE 
iSize=GetFileSize(Query.Host, sPath, sFile)
Query.ResultData("Size")=iSize 
'MOVE TO NEXT DB
rstSQL.MoveNext 
Next 
End If 
' CLEAN UP 
rstSQL.Close
Set rstSQL = Nothing 
cnnSQL.Close
Set cnnSQL = Nothing 
End Sub 
'--------------------------------------------------------------------- 
Function GetFileSize (sHost, sPath, sFile) 
sFile=Chr(34) & sFile & Chr(34)
sPath=Chr(34) & sPath & Chr(34)
WorkingQuery.Reset
WorkingQuery.Host=Query.Host
WorkingQuery.Source="FILE"
sQueryPath="Type=FILEPATH?FilePath=" & sPath & _
"?Target=FILES?FileSpec=" & sFile & _
"?SubFolders=FALSE?GroupSize=FALSE?Units=Mb"
WorkingQuery.Paths1
WorkingQuery.Path(0)=sQueryPath
WorkingQuery.AddProperty("NAME=Size,DATATYPE=NUMERIC,VALUE=")
WorkingQuery.Execute
WorkingQuery.ResultRow=0 
GetFileSize=WorkingQuery.ResultData("Size") 
End Function 
'--------------------------------------------------------------------- 
Sub SplitPath(sFileSpec, ByRef sPath, ByRef sFile)
Dim iPos
If sFileSpec<>"" then
iPos=instrRev(sFileSpec,"\")
sPath=mid(sFileSpec,1,iPos-1)
sFile=mid(sFileSpec,iPos+1)
End If
End Sub
'---------------------------------------------------------------------

```

# Script Methods and Properties

The Query and Working Query objects support the following methods and properties.

## Supported Methods

| Methods                                | Description                                                                                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Execute                                | Executes the object query. Use this to perform the query after setting the source, path, and properties.                                                      |
| Reset                                  | Resets the object’s properties to their original values. Use this if the source, path, or properties have been modified, but the original values are desired. |
| AddProperty (attributes : string)      | Adds a property to the query. Using the following format: `NAME=<value>;COLUMN=<value>;VALUE=<reserved>;DATATYPE=<datatype>;SIZE=<value>;KEY=<value>`         |
| DeleteProperty (propertyname : string) | Removes a property from a query.                                                                                                                              |

## Supported Properties

| Pproperties                                    | Description                                                                                                                                                                      |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host : string                                  | Sets or retrieves the current host                                                                                                                                               |
| Source : string                                | Sets or retrieves the data source                                                                                                                                                |
| Path : sting                                   | Sets or retrieves the path                                                                                                                                                       |
| Paths : integer                                | Sets or retrieves the current path for multi-path tasks                                                                                                                          |
| ResultData (Property : string) : Variant       | Sets or retrieves the value for the property specified                                                                                                                           |
| ResultData (PropertyIndex : integer) : Variant | Sets ResultRow to the desired row before accessing this property                                                                                                                 |
| ResultRow : integer                            | Sets or retrieves the current row. For non-enumerated tasks, ResultRow will always be 0.                                                                                         |
| ResultRows : integer                           | Sets or returns the count of rows. Use this to determine the number of rows returned after an enumerated task is executed. Set this property to create a multi-row return value. |
| Message (index : integer, type : string)       | Sets or returns a message in the indicated position. Use MessageCount to determine the number of messages. These messages appear in the job MessageLog.                          |

# Script Data Collector

The Script Data Collector provides VB Script exit from Enterprise Auditor. Static queries are
sometimes inadequate for demanding auditing tasks. The Script Data Collector provides a means to add
a custom script to a query. Enterprise Auditor implements Microsoft Visual Basic Script (VB Script)
with extensions that provide script writers the ability to interface directly with Enterprise
Auditor.

The following examples describe situations where using a script may be useful:

- Conversions – One of the most frequent uses of a scriptis for converting a value from one thing to
  another, for example `build1230` to `at risk`. See the
  [Script Example 1: Conversion of Data](/docs/accessanalyzer/11.6/data-collection/custom-collectors/scripting.md)
  topic for additional information.
- Compound Queries – This is a query that cannot be performed using a single query. See the
  [Script Example 2: Command Query](/docs/accessanalyzer/11.6/data-collection/custom-collectors/scripting.md)
  topic for additional information.
- Interfacing with External Systems – This is a query that requires access to external data. For
  example, the query needs to access a corporate database to obtain a location code.

The Script Data Collector is a core component of Enterprise Auditor, but it has been preconfigured
within the Windows Solution. While the data collector is available with all Enterprise Auditor
license options, the Windows Solution is only available with a special Enterprise Auditor license.
See the
[Windows Solution](/docs/accessanalyzer/11.6/accessanalyzer/solutions/windows/overview.md)
topic for additional information.

Protocols

- VB Script

Ports

- Randomly allocated high TCP ports

Permissions

- Member of the Local Administrators group
- Member of the Domain Administrators group (if targeting domain controllers)

# Script Properties

The Data Source tab is used to select the data collector to be used. The configurable options are:

- Source – Used to select data collector
- Path – Displays the returned path from the data collector

  **CAUTION:** Editing the path is considered an advanced operation. Entering an incorrect value
  may render the query inoperable.

  - The path is used to identify the selection from within the data collector. The path
    essentially tells the data collector where the data is and depending on the data collector,
    may define selected options. It is sometimes convenient to edit the path manually.
  - For example: If defining a file system query using the File System Data Collector, the path
    would automatically be filled in with the selected details. A minor change like changing the
    file location can be done manually by editing the path.

- Properties – As the Path is used to define where the target data is, the properties are used to
  define what data is desired. Each property has a series of attributes including:

  - Name – Identifies the target data. Modifying this affects what data the data collector
    returns.
  - Column – Specifies the column name within the result data. Use this to specify the column name
    that will be used within the report output. This is set by default to match the **Name**
    attribute.
  - DataType – Used to determine the format of the data for reporting purposes. It affects sorting
    order and the ability to graph content. In some cases, the data collector is unable to
    determine the correct data type for the returned data.

  **CAUTION:** Setting this value manually to an incorrect data type may render your results
  invalid and inaccessible by Enterprise Auditor.

  - For example: Querying the registry for a value stored as **REG_SZ** returns a string, as
    **REG_SZ** is a string type in the registry. However, sometimes numbers are recorded in
    **REG_SZ** entries. If you determine that the content returned could always be interpreted as
    numeric, you could override the default `STRING` value and set it to `NUMERIC`. This provides
    proper sorting and charting ability.

- Size – Used to determine the width of the field used to hold String data. Setting the size smaller
  than the actual returned data will cause Enterprise Auditor to truncate the data in the view.
  However, the actual stored data in the result table will contain the full result.
- Value – Reserved for internal use
- Key – Used to identify a key property. A key property is used to identify the property that
  contains a unique value for enumerated tasks. A Key value is required for Change Detection and
  Conformance Management on enumerated tasks. To identify a property that uniquely identifies each
  row, set the Key attribute to `YES`.

## Adding and Removing Properties Manually

Although the property list is automatically populated by the data collectors, additional properties
may be added manually. Doing so allocates storage within Enterprise Auditor during data collection
and creates corresponding columns in the output table. Use a script to reference and populate these
properties.

![Properties on the Query Properties window](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/properties.webp)

To add properties manually, click the plus (**+**) button at the bottom of the property window. To
remove properties, click the minus (-) button.

# Script Reference

Enterprise Auditor provides extensions to standard Visual Basic Script. These extensions allow
access to and manipulation of task data, in addition to invoking queries. They are implemented
through two objects.

Query Object

The Query object provides access to the current query configuration and data. Use this to examine
the results of a query or to manipulate the query before it is executed. Changing properties of this
object will change the way the task is executed by Enterprise Auditor.

Working Query Object

The Working Query object is identical to the Query object. This object supports the same methods and
properties as the Query object but its properties and methods do not access the current query. Think
of this object as allowing the ability to create a task on the fly. Use this object to perform
queries, while leaving the original task undisturbed. This is valuable when performing compound
queries isneeded. See the
[Script Example 2: Command Query](/docs/accessanalyzer/11.6/data-collection/custom-collectors/scripting.md)
topic for additional information.

# Run a Stand-Alone Script

Some situations require a script to be used exclusively without defining a data source. The Query
Properties window provides the ability to add and run a script.

Follow the steps to add a script.

**Step 1 –** Go to the job's **Configure** node and select **Queries**.

**Step 2 –** Click **Create Query** to open the Query Properties window.

**Step 3 –** Select the **Data Source** tab, and select **SCRIPT** in the Data Collector drop-down
menu.

![Query Properties window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/script/querypropertiesstandalone.webp)

**Step 4 –** Click **Configure** or the **Browse Data Source** button to open the VBScript Editor
page and add the script to run.

See the
[VBScript Editor](/docs/accessanalyzer/11.6/data-collection/custom-collectors/scripting.md)
topic for additional information.
