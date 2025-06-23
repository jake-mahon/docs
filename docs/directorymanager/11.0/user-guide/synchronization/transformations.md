---
title: transformations
sidebar_label: transformations
description: Directory Manager 11.0 documentation for transformations with configuration details, usage instructions, and implementation guidance.
---

# Script

Synchronize scripts are written in Visual Basic .NET. A script is run after having established a
current source row (”object”). The script determines a single value--the ”result” value--and assigns
that value to the keyword **DTM.Result**.

The type of script determines the nature of the script result:

- **Transform scripts:** the script result is the value of a destination field.
- **Container scripts:** the script result is the distinguished name of a parent container.

## Examples and Language Overview

- For examples of transform scripts, see the
  [Sample Transform Scripts](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
  topic
- For examples of container scripts, see the
  [Sample Container Scripts](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
  topic
- For general information, see
  [Visual Basic .NET for GroupID](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
  topic
- For general information, see Python for GroupID topic

## DTM keywords

DTM keywords give you access to the data being processed.

- DTM.Source(**`<fieldname>`**)

  This function has a single string argument: field name. DTM.Source returns the value of the
  specified field (or "attribute") for the current row ("object") in the source data.

- DTM.Result

  This is a write-only property. This script must assign a value to DTM.Result. This type of
  script determines what the value signifies.

  - Transform script – assign to DTM.Result the desired value of the transform’s destination
    field.
  - Container script – assign to DTM.Result the distinguished name of the new object’s container.

  In any script, each branch of execution must assign a value to DTM.Result. Failure to assign a
  value to DTM.Result causes a runtime error, and the destination row ("object") is not updated or
  created . The job still runs to completion.

- DTM.ExpandVariables(**`<text>`**)

  This function has a single string argument: text. It returns the valueof the specified text as a
  string after replacing each environment variable embedded in the text with its string
  equivalent. Environment variables are surrounded by "%" characters, as in "%now%" and
  "%SystemDrive%".

- DTM.CancelRow()

  This subroutine contains no arguments. The current destination row ("object") is not updated or
  created. DTM.CancelRow provides a way to bypass certain objects based on their attributes. (In
  general, using a filter query for this purpose gives better performance.)

- DTM.AddToContext(`<__Key__>`,`<__Value__>`)

  This function has two arguments: Key and Value. When data is to be shared across segments of
  code in different editors supported by the Synchronize job wizard, it needs to be placed in the
  Context. This practice prevents errors and exceptions.

- DTM.Context(`<__Key__>`)

  This property has a single argument: Key. An object that has been added to the Context is
  retrieved by passing its key (identity) to this property.

## Context

The Context plays a central role in the Synchronize job model. In a Synchronize job, assemblies for
Synchronize PowerTools and other third-party libraries can only be referenced in the Global Script
Editor, therefore, manipulating objects of these libraries in other code segments in a job is only
possible by adding them to the Context.

The Context is an implementation of the .NET Hashtable collection, which is an in-memory data
structure that stores and retrieves objects using key/value pairs. The DTM object in the Synchronize
job model provides two members, AddToContext and Context, for adding and retrieving objects from the
Context. To learn more about these two members, please see the previous section on DTM keywords.

Although a Context makes it possible to share objects added to it across different code segments of
a Synchronize job, it is not possible to test code for each segment individually without actually
running the job. For this reason, you may encounter one of the following situations:

- You receive an exception when trying to compile the code in the Script Editor, stating that the
  object reference is not found.
- Testing your script using the built-in Script Tester with random data does not provide the
  expected results, even though the code handles the exception and checks are placed for null object
  references.

## Scripting restrictions enforced by Synchronize

Behind the scenes, Synchronize inserts each script into the body of a subroutine before compiling.
Therefore, any Visual Basic .NET constructs that are only valid outside of a subroutine/function
will fail to compile and will be disallowed.

These restrictions apply to creating a Synchronize script:

- Subroutines, functions, classes, modules, and namespaces are not allowed.
- Module-level statements, such as Import or Option statements, are not permitted.
- Shared (that is, static, and global) variables are not supported.

## Visual Basic options set by Synchronize

Synchronize establishes the following Option statements which apply to all scripts and cannot be
overridden:

- Option Explicit On – all variables must be declared before use via a Dim statement. With Visual
  Basic .Net, it is possible to both declare and assign variables at their first use, as follows:

  ```
  Dim MyVariable = "Hello"
  ```

  ```
  Dim MyObject = New Object()
  ```

- Option Strict Off – data types do not need to be declared for each variable. Conversions between
  types, when possible, are performed implicitly. (By declaring data types, unnecessary conversions
  can be avoided, and performance improved).

## .Net assembly references

Synchronize establishes certain system assembly references before compiling your scripts. These
references apply to all scripts and cannot be overridden.

These references are:

- MsCorLib.dll
- System.dll
- System.Data.dll
- System.Xml.dll

System.DirectoryServices, in particular, is ”off-limits” to your scripts so as to prevent direct
access to Active Directory and other LDAP identity providers. This restriction is desirable, as it
prevents your script from acting in conflict with Synchronize, which, after all, has ultimate
responsibility for updating these providers.

## .Net Namespaces

Synchronize imports certain namespaces when compiling your scripts. These imports apply to all
scripts and cannot be overridden.

These imports are:

- Imports System
- Imports System.Text
- Imports System.Text.RegularExpressions
- Imports System.IO
- Imports System.Math

.Net namespaces other than those listed here can still be accessed by specifying the fully-qualified
namespace. For example, a DataSet (which belongs to the System.Data namespace) can be read from a
file as follows:

```
 Dim ds = New System.Data.DataSet()<br xmlns="http://www.w3.org/1999/xhtml" /> ds.ReadXml("C:\Temp\MyFile.xml")
                
```

**See Also**

- [Visual Basic .NET for GroupID](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
- [Sample Transform Scripts](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
- [Sample Container Scripts](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Sample Container Scripts

## Object Routing Case-By-Case

**Assumptions**:

- Source data contains a **DeptCode** field with 2-character codes.
- Each department has a container to which new user objects should be directed.

  ```
  Select Case DTM.Source("DeptCode")
  Case "SA"
   DTM.Result = "CN=Sales,CN=Users,DC=dc2000,DC=imanami,DC=biz"
  Case "EN"
   DTM.Result = "CN=Engineering,CN=Users,DC=dc2000,DC=imanami,DC=biz"
  Case "AD"
   DTM.Result = "CN=Administration,CN=Users,DC=dc2000,DC=imanami,DC=biz"
  Case Else
   DTM.Result = "CN=Users,DC=dc2000,DC=imanami,DC=biz"
  End Select
  ```

## Object Routing Via an XML File

**Assumptions:**

- Source data contains a **DeptCode** field.
- Each department has a container to which new user objects should be directed.
- XML file **DeptCodes.xml** contains root element with **`<Department>`** child elements, each of
  which contains **`<DeptCode>`** and **`<Container>`** attributes specifying desired location for
  user objects belonging to each department.

  ```
  Dim dsDeptCodes As System.Data.DataSet = New System.Data.DataSet
  dsDeptCodes.ReadXml("C:\temp\DeptCodes.xml")
  Dim Rows As System.Data.DataRow() = _
  dsDeptCodes.Tables[0].Select("DeptCode='" & DTM.Source("DeptCode") & "'")
  If Rows.Length > 0 Then
  DTM.Result = Rows(0)("Container").ToString()
  Else
  DTM.Result = "CN=Users,DC=dc2000,DC=imanami,DC=biz"
  End If
  ```

## Object routing using an Excel file

**Assumptions:**

- Source data contains a **DeptCode** field.
- Each department has a container to which new user objects should be directed.
- Excel file **DeptCodes.xls** contains columns: **DeptCode** and **Container** specifying desired
  location for user objects belonging to each department.

  ```
  Dim dtDeptCodes As System.Data.DataTable = New System.Data.DataTable
  Dim sConnString As String = "Provider=Microsoft.Jet.OLEDB.4.0;" & _
  "Data Source=C:\temp\DeptCodes.xls;" & _
  "Persist Security Info=false;" & _
  "Extended Properties='Excel 8.0;HDR=YES'"
  Dim sCmdString As String = "SELECT * FROM [Sheet1$]"
  Dim daExcel As System.Data.OleDb.OleDbDataAdapter = _
  New System.Data.OleDb.OleDbDataAdapter(sCmdString, sConnString)
  daExcel.Fill(dtDeptCodes)
  daExcel.Dispose()
  Dim Rows As System.Data.DataRow() = _
  dtDeptCodes.Select("DeptCode='" & DTM.Source("DeptCode") & "'")
  If Rows.Length > 0 Then
  DTM.Result = Rows(0)("Container").ToString()
  Else
  DTM.Result = "CN=Users,DC=dc2000,DC=imanami,DC=biz"
  End If
  ```

**See Also**

- [Script](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
- [Visual Basic .NET for GroupID](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
- [Sample Transform Scripts](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Sample Transform Scripts

## Assembling a Full Name: `<last name>`, `<first name>`

**Assumptions:**

- Last name is present in a source field named "sn" (for surname)
- First name may or may not be present in a source field named "givenName"

```
If Len(DTM.Source("givenName")) > 0 Then
DTM.Result = DTM.Source("sn") & ", " & DTM.Source("givenName")
Else
DTM.Result = DTM.Source("sn")
End If
```

## Assembling a Full Name: `<last name>`, `<middle initial>`. `<first name>`

**Assumptions:**

- Last name is present in a source field named "sn" (for surname)
- First name may or may not be present in a source field named "givenName"
- Middle name may or may not be present in a source field named "middleName"

```
Dim LastName = DTM.Source("sn")
Dim FirstName = DTM.Source("givenName")
Dim MiddleName = DTM.Source("middleName")
Dim FullName = LastName
If Len(FirstName) > 0 Or Len(MiddleName) > 0 Then
 FullName = FullName & ", "
End If
FullName = FullName & FirstName
If Len(FirstName) > 0 And Len(MiddleName) > 0 Then
 FullName = FullName & " "
End If
If Len(MiddleName) > 0 Then
 FullName = FullName & Left(MiddleName, 1) & "."
End If
DTM.Result = FullName
```

## Formulating a UserName: 6 chars of last name & first initial, all lower case

**Assumptions:**

- Last name is present in a source field named "sn" (for surname)
- First name is present in a source field named "givenName"

```
DTM.Result = LCase(Left(DTM.Source("sn"), 6) & Left(DTM.Source("givenName"), 1))
```

## Formulating a UserName: Combine first letter of each part of name, all lower case

**Assumptions:**

- Last name is present in a source field named "sn" (for surname)
- First name may or may not be present in a source field named "givenName"
- Middle name may or may not be present in a source field named "middleName"
- Each part of name may be composed of multiple words separated by hyphens, spaces or commas, and
  script must pick out the first character of each word – for example,. "Reginald Howard-Hughes
  Thompson, Jr." converts to "rhhtj".

```
Dim Fullname As String = DTM.Source("givenName") & " " _
& DTM.Source("middleName") & " " _
& DTM.Source("sn")
Dim Nameparts As String() = Fullname.Split(" ,-".ToCharArray())
Dim Initials As String = ""
For Each Namepart As String In Nameparts
 Initials = Initials & Left(Namepart, 1)
Next 
 DTM.Result = LCase(Initials)
```

## Code Translation: Translating Case-By-Case

**Assumptions:**

- Source data contains a "DeptCode" field with 2-character codes.
- Corres. destination field data needs full spelling of department name.

```
Select Case DTM.Source("DeptCode")
Case "SA"
  DTM.Result = "Sales"
Case "EN"
  DTM.Result = "Engineering"
Case "AD"
  DTM.Result = "Administration"       
Case Else   
  DTM.Result = "Other"
End Select
```

**See Also**

- [Script](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
- [Visual Basic .NET for GroupID](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
- [Sample Container Scripts](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Visual Basic .NET for GroupID

This topic discusses some points of information relevant to DTM scripting in GroupID. See
[Visual Basic Language Reference](https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/)
article for additional information.

## Differences between Visual Basic .NET and other Visual Basic versions

Visual Basic .NET is largely a superset of Visual Basic 6. If you are familiar with Visual Basic
before the advent of .NET technology, you may wish to refer to
[Language Changes in Visual Basic](<https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2008/skw8dhdd(v%3dvs.90)>),
and particularly to
[Programming Element Support Changes Summary](<https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2008/kaf4ssya(v%3dvs.90)>).
For the most part, statements and constructs that worked in Visual Basic 6, Visual BasicScript, and
Visual BasicA continue to work in Visual Basic .NET.

Important: A key difference, however, is that the Set keyword is no longer used to assign a value to
an object. Simply omit it!

## Declaring variables

Variables must be declared via the Dim keyword prior to, or concurrent with, their first use.
Optionally, you can indicate the data type of the variable in the declaration.

The following declarations are valid:

- Dim Lastname
- Dim Lastname, Firstname
- Dim Lastname, Firstname As String
- Dim Lastname = DTM.Source("sn")
- Dim Lastname As String = DTM.Source("sn")

## Manipulating Strings

The most common use of Synchronize scripting is to dissect and combine strings. String literals are
always enclosed in quotes, and Visual Basic provides the operator for concatenating strings.

```
Dim Fullname = Lastname & ", " & Firstname
```

Visual Basic also provides a host of global functions that perform various string manipulations, for
example:

- Len(Str): e.g.,

  ```
  Dim LengthOfName = Len(Fullname)
  ```

- Left(Str, Length): e.g.,

  ```
  Dim MiddleInitial = Left(DTM.Source("middleName"), 1)
  ```

- Mid(Str, Start, Length): e.g.,

  ```
  Dim SeventhCharacter = Mid(Fullname, 7, 1)
  ```

- LCase(Str): e.g.,

  ```
  Dim LowerCaseName = LCase(Fullname)
  ```

For a list of such string functions, see the
[String Manipulation Summary](https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/keywords/string-manipulation-summary)
topic.

As an alternative to global functions (which are handed down from Visual Basic before the advent of
.NET technology) you can instead use the .NET string class and related classes. These methods can
only be applied to a variable if you declare the data type of the variable to be As String (as in
Dim Lastname As String). Unlike global functions, positions within a string are 0-based (that is,
the first character occupies position 0) instead of 1-based (the first character occupies position
1).

- String.Length: e.g.,

  ```
  Dim LengthOfName As Integer = Fullname.Length
  ```

- String.Substring(Start, Length): e.g.,

  ```
  Dim MiddleInitial As String = DTM.Source("middleName").Substring(0, 1)
  ```

- String.ToLower(): e.g.

  ```
  Dim LowerCaseName As String = Fullname.ToLower()
  ```

For a list of such string methods, see
[.NET String Methods](<https://msdn.microsoft.com/en-us/library/system.string_methods(v%3dvs.110).aspx>).

## Line Continuation

With extensive string manipulation, statement lines frequently become quite long. In order to break
a statement into two or more lines, insert a space followed by an underline (”\_”) just prior to
each line break.

NOTE: Be sure to insert the line break characters ("\_") outside of a string literal.

Example:

```
Dim DistinguishedName = "cn=Sales,CN=SF,CN=WestCoast,CN=Users," _
& "OU=corporation,DC=dc2000,DC=imanami,DC=biz"
```

## Decision Structures

You can make decisions in your script using the If-Then or If-Then-Else constructs. These require a
condition clause that evaluates to true or false.

Example 1:

```
Dim Fullname = DTM.Source("sn")
If Len(DTM.Source("givenName")) > 0 Then
Fullname = Fullname & ", " & DTM.Source("givenName")
End If
```

Example 2:

```
If DTM.Source("Department") = "Sales" Then
DTM.Result = "cn=Sales,CN=Users,DC=dc2000,DC=imanami,DC=biz"
Else
DTM.Result = "CN=Users,DC=dc2000,DC=imanami,DC=biz"
End If
```

To perform one of a number of alternative actions based on the value of a variable, the Select Case
construct comes in handy. In this example, note the use of the global LCase function. This example
illustrates a how to make case-insensitive string comparisons.

```
Select Case LCase(DTM.Source("Department"))
Case "sales"
DTM.Result = "cn=Sales,CN=Users,DC=dc2000,DC=imanami,DC=biz"
Case "engineering"
DTM.Result = "cn=Eng,CN=Users,DC=dc2000,DC=imanami,DC=biz"
Case "admin"
DTM.Result = "cn=Admin,CN=Users,DC=dc2000,DC=imanami,DC=biz"
Case Else
DTM.Result = "CN=Users,DC=dc2000,DC=imanami,DC=biz"
End Select
```

## Loops

It is uncommon to use loops in a DTM script, since the script itself is executed in the context of a
single source row (or object) and a single destination row (or object). However, complex string
manipulations may require iterating through the characters of a string. Iteration through the
characters is most easily accomplished using the or Each construct.

**Example:**

Count the number of numeric digits in an alphanumeric ID source field using the IsDigit() shared
function of the .Net Char class.

```
 Dim Count = 0
 For Each ch As Char In DTM.Source("ID")
 If Char.IsDigit(ch) Then
 Count = Count + 1
 End If
 Next
                
```

**See Also**

- [Script](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
- [Sample Transform Scripts](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
- [Sample Container Scripts](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Auto-Generate Unique, Complex Passwords

In GroupID Portal, you can auto-generate passwords based on password complexity rules through
Synchronize.

Common uses:

- Provisioning a user, providing a login and temporary password
- Providing users with a new password after password expiration or account lock
- Generating a password for multiple objects

Launched from within the Transform (Password) dialog box, the Password Complexity Options dialog box
enables you to set password complexity rules to generate passwords randomly for the objects being
synced. You can assign a single password to all synced objects or generate individual passwords for
each object. This feature requires that notifications are configured, since the new password for
each object will be sent to the administrator by email.

If the destination is Active Directory, the Password Complexity Options dialog box also ensures that
options set here comply with the password policy of the target domain.

In addition, should a user choose to ignore a generated password and enter their own, Synchronize
validates their entry according to the complexity requirements set on the destination Active
Directory. If the user’s password does not meet those requirements, Synchronize requires the user to
correct the password before continuing, with the exception of these two conditions:

- Password history: The user tries to enter a previously used password.
- Account name containment: The user tries to enter a password that includes the username in it.

If the destination is an Active Directory domain, the password transformation is available only for
the objects that support the password attribute; for example, users, mail-enabled users, and
mailbox-enabled users. The same applies to other directory services that Synchronize supports. For
destination providers such as CSV and text files, password transformation is performed for the
fields under any column labeled Password in the header.

## To auto-generate unique, complex passwords

1. In GroupID Portal, click **Synchronize**, to open Synchronize portal.
2. On the left navigation bar, click **Create New**, and select **Job** or open an existing job.
3. Click **Next** until you reach the **Map Fields** section on the **Objects, Fields and Mappings**
   page.
4. In the **Password** row, click the **More Options** button next to the **Transform** column. The
   Transformation [Password] dialog box opens.
5. Select _Static – assign a static value_. A dialog box with specific settings appears.
6. Select one of the following options:

   - **Use a single static password for all rows** – Select this option to assign the same password
     to all objects. You can either enter the password manually or click the Generate Password
     button to auto generate a password. This password is based on the rules defined in the
     Password Complexity Options dialog box.
   - **Use unique password generated dynamically against each row**- Select this option to generate
     a unique password for every object.

7. Select the **Send email notification to manager** check box if you want to send the new password
   for each object to the user’s manager by email when the job runs. This applies to both static and
   dynamic passwords. Note that the email is not sent if the user doesn’t have a manager.
8. Click the **Password Complexity Options** button. The Password Complexity Options dialog box
   opens. If you have selected the **Use unique password generated dynamically against each row**
   option, then this dialog box must be configured because unique passwords are generated on the
   basis of the rules you specify here.
9. In the **Password Length** box, type or select the number of characters within the given range
   that a password should contain.

   The minimum value displayed in the range may vary depending on the selected destination
   provider. For an Active Directory destination, the minimum value is determined on the basis of
   the password complexity requirements and minimum password length set for the domain.

   The following table explains the rules that determine how the minimum value is calculated.

   |     | Password Complexity Requirements | Minimum Password Length                         | Minimum Value Displayed in the Range |
   | --- | -------------------------------- | ----------------------------------------------- | ------------------------------------ |
   | 1   | Enabled                          | Less than or equal to 6                         | 6                                    |
   |     | Greater than 6                   | 6                                               |                                      |
   | 2   | Disabled                         | Less than or equal to 6                         | 6                                    |
   |     | Greater than 6                   | The minimum password length set for the domain. |                                      |

   For any other destination providers, you can type a value from 6 to 99.

10. Select the Upper case alphabets (A-Z) check box if you want the password to contain any
    uppercase English alphabets (A through Z).
11. Select the Lower case alphabets (a-z) check box if you want the password to contain any
    lowercase English alphabets (a through z).
12. Select the Digits (0-9) check box if you want the password to contain any base 10 digits (0
    through 9).
13. Select the Special Symbols check box if you want the password to contain special characters.
    When the check box is selected, the box next to it becomes available. You can specify special
    characters in the box that you want the password to contain.

    NOTE: For Active Directory destinations, if password complexity requirements are enabled for the
    domain, then you must select three of the preceding four settings.

14. Select the **Exclude similar symbols** check box if you do not want a special character to
    appear more than once in the password.
15. The **Password** box shows a sample password based on the settings you have selected on this
    dialog box. It is displayed as text rather than placeholder characters if the **Show Password**
    check box is selected.
16. You can view as many sample passwords as you want by clicking the **Generate** button.
17. Click the **Transform** button to save your settings and close the dialog box.

    If you chose to assign a static password for all synced objects on the Transform (Password)
    dialog box, the auto-generated password will be shown in the corresponding box. If you selected
    the dynamic password assignment option, a password is auto generated for each object based on
    the rules defined in the Password Complexity Options dialog box.

18. Click **Next Step**.
19. In the **Notifications** page, select **Enable Notifications**. If you have selected the Use
    unique password generated dynamically against each row option on the Transformation [Password]
    dialog box, then the new password for each object is sent to the administrator by email when the
    job runs.

    NOTE: Notifications will be sent if an SMTP server and notification recipients have been
    configured for the destination identity store.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Manage a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Transform](/docs/directorymanager/11.0/user-guide/synchronization/index.md)
- [Objects, Fields and Mapping ](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
