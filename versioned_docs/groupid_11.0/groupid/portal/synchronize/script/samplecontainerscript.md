# Sample Container Scripts

## Object Routing Case-By-Case

__Assumptions__:

- Source data contains a __DeptCode__ field with 2-character codes.
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

__Assumptions:__

- Source data contains a __DeptCode__ field.
- Each department has a container to which new user objects should be directed.
- XML file __DeptCodes.xml__ contains root element with __<Department>__ child elements, each of which contains __<DeptCode>__ and __<Container>__ attributes specifying desired location for user objects belonging to each department.

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

__Assumptions:__

- Source data contains a __DeptCode__ field.
- Each department has a container to which new user objects should be directed.
- Excel file __DeptCodes.xls__ contains columns: __DeptCode__ and __Container__ specifying desired location for user objects belonging to each
  department.

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

__See Also__

- [Script](/versioned_docs/groupid_11.0/groupid/portal/synchronize/script/dtmscript.md)
- [Visual Basic .NET for GroupID](/versioned_docs/groupid_11.0/groupid/portal/synchronize/script/visualbasicnetbasic.md)
- [Sample Transform Scripts](/versioned_docs/groupid_11.0/groupid/portal/synchronize/script/sampletransformscript.md)
