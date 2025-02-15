// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeNotificationsForBudgetCommand,
  DescribeNotificationsForBudgetCommandInput,
  DescribeNotificationsForBudgetCommandOutput,
} from "../commands/DescribeNotificationsForBudgetCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BudgetsClient,
  input: DescribeNotificationsForBudgetCommandInput,
  ...args: any
): Promise<DescribeNotificationsForBudgetCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeNotificationsForBudgetCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeNotificationsForBudget(
  config: BudgetsPaginationConfiguration,
  input: DescribeNotificationsForBudgetCommandInput,
  ...additionalArguments: any
): Paginator<DescribeNotificationsForBudgetCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeNotificationsForBudgetCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof BudgetsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Budgets | BudgetsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
