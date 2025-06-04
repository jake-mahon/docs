---
id: riskmetrics
title: Manage Risk Metrics
---

# Manage Risk Metrics

Follow the steps to view risk metrics within a risk profile.

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click a risk profile. The risk metrics for the profile are displayed in a list. See the [Risk Metrics List](Metrics List.md "Risk Metrics List") topic for a description of each risk metric.

![Risks Metrics list](/img/1secure/admin/RisksList.png "Risk Metrics list")

You can view the following for each risk metric:

- Category – The name of the preconfigured category a risk metric belongs to, which can be Data, Identity, or Infrastructure. The State In Time Risk report generated for this metric can be found under this particular category on the Risk reports page, See the [State In Time Risks Reports](../SearchAndReports/StateInTime.md "State In Time Risks Reports") topic for additional information.
- Measures in – The measurement type used to calculate risk thresholds for a risk metric. Measurement types are:

  - Binary – Indicates that risk level is calculated on the basis of a true/false condition ( e.g., whether third-party applications are allowed or not).
- Low – The low risk threshold for a risk metric.
- Medium – The medium risk threshold for a risk metric
- High – The high risk threshold for a risk metric

## Modify Thresholds For a Number or Percentage Risk Metric

Follow the steps to modify thresholds for a risk metric that is measured in numbers or percentage.

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click a risk profile. The risk metrics for the profile are displayed in a list.

**Step 4 –** Click the **Edit** icon for a risk metric. The  pane is displayed.

![Modify risk threshold pane](/img/1secure/admin/ModifyRiskThreshold.png "Modify risk threshold pane")

**Step 5 –** Select a measurement type to calculate risk thresholds for the metric. Options are:

Follow these rules when setting the low risk threshold:

- The minimum value of the low risk threshold must be equal to 0.
- The maximum value of the low risk threshold is equal to the minimum value of the medium risk threshold.

The medium risk threshold is calculated automatically and you cannot modify it. It follows these rules:

- The minimum value of the medium risk threshold is equal to the maximum value of the low risk threshold.
- The maximum value of the medium risk threshold is equal to the minimum value of the high risk threshold.

Follow this rule when setting the high risk threshold:

- The minimum value of the high risk threshold is equal to the maximum value of the medium risk threshold.

**Step 9 –** Click **Save**.

The risk thresholds have been modified for the metric.

## Modify Severity For a Boolean Risk Metric

Some risks are evaluated based on a true/false condition. For example, if a third party application is not allowed and the system does not detect any, the risk level will be low. However, if the system detects one, the severity level will be set to medium or high, depending on what you set here.

Follow the steps to modify severity for a Boolean risk metric.

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click a risk profile. The risk metrics for the profile are displayed in a list.

**Step 4 –** Click the Edit icon for a Boolean risk metric. The  pane is displayed.

![Modify Boolean metric pane](/img/1secure/admin/ModifyRiskSeverity.png "Modify Boolean metric pane")

**Step 5 –** Select a severity level to apply when the risk is detected.

- High – Set the risk severity level to High
- Medium – Set the risk severity level to Medium

**NOTE:** When the risk is not detected, the severity level is automatically set to Low.

For example, if a third party application is not allowed and the system does not detect any, the risk level will be low. However, if the system detects one, the severity level will be set to medium or high, depending on what you set here.

**Step 7 –** Click **Save**.

The risk thresholds have been modified for the metric.

## Remove a Risk Metric From a Risk Profile

**NOTE:** When you remove a risk metric from a profile, organizations using that risk profile will no longer be assessed against this metric.

Follow the steps to remove a risk metric from a risk profile.

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click a risk profile. The risk metrics for the profile are displayed in a list.

**Step 4 –** Click the Delete icon for a risk metric to remove it. A dialog box is displayed, prompting you to confirm the removal of the metric.

**Step 5 –** Click **Delete**. The risk metric is removed from the profile.

## Add a Number or Percentage Risk Metric to a Risk Profile

If a risk metric is removed from a profile, you can add it back anytime. Re-adding the metric ensures that organizations using the profile will once again be assessed against that metric.

Follow the steps to add a risk metric to a profile.

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click a risk profile. The risk metrics for the profile are displayed in a list.

**Step 4 –** Click **Add**. The Add new risk threshold pane is displayed.

![Add new risk threshold pane](/img/1secure/admin/AddNumberThreshold.png "Add new risk threshold pane")

**Step 5 –** In the Risk Metric drop-down menu, select a number or percentage risk metric you want to add.

**Step 6 –** Use the Measure in option buttons to select a measurement type and specify risk thresholds for the metric. See the [Modify Thresholds For a Number or Percentage Risk Metric](#modify-thresholds-for-a-number-or-percentage-risk-metric "Modify Thresholds For a Number or Percentage Risk Metric") topic, starting at Step 5 for additional information.

**Step 8 –** Click **Save**.

The risk metric is added back to the risk profile.

### Add a Boolean Risk Metric To a Risk Profile

If a Boolean risk metric is removed from a profile, you can add it back anytime.

Follow the steps to add a risk metric to a profile.

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

**Step 2 –** In the left pane, click **Risk profiles**.The Risk profiles page is displayed.

**Step 3 –** Click a risk profile. The risk metrics for the profile are displayed in a list.

**Step 4 –** Click **Add**. The Add new risk threshold pane is displayed.

![Add new risk threshold pane](/img/1secure/admin/AddBooleanRiskMetric.png "Add new risk threshold pane")

**Step 5 –** In the Risk Metric drop-down menu, select a Boolean risk metric you want to add.

**Step 6 –** Select a severity level to apply when the risk is detected.

- High – Set the risk severity level to High
- Medium – Set the risk severity level to Medium

**NOTE:** When the risk is not detected, the severity level is automatically set to Low.

**Step 8 –** Click **Save**.

The risk metric is added back to the risk profile.