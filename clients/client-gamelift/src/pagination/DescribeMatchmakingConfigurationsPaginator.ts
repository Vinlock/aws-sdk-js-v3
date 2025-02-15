// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeMatchmakingConfigurationsCommand,
  DescribeMatchmakingConfigurationsCommandInput,
  DescribeMatchmakingConfigurationsCommandOutput,
} from "../commands/DescribeMatchmakingConfigurationsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeMatchmakingConfigurationsCommandInput,
  ...args: any
): Promise<DescribeMatchmakingConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMatchmakingConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeMatchmakingConfigurations(
  config: GameLiftPaginationConfiguration,
  input: DescribeMatchmakingConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMatchmakingConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMatchmakingConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof GameLiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GameLift | GameLiftClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
