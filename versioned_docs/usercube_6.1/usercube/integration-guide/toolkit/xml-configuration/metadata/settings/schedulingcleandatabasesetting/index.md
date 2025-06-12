# SchedulingCleanDataBaseSetting

If the default value for the Task CleanDataBase needs to be overridden.

## Examples

```

    <SchedulingCleanDataBaseSetting Timeout="2" CronTabExpression="* */2 * * *"/>

```

## Properties

| Property | Details |
| --- | --- |
| CronTabExpression   optional | __Type__    String   __Description__   Define the cron to launch the CleanDatabase Job. |
| Identifier   default value: SchedulingCleanDataBase | __Type__    String   __Description__   Unique identifier of the setting. |
| Timeout   optional | __Type__    String   __Description__   Defines the maximum time a Job or Task can wait after the last run. |
