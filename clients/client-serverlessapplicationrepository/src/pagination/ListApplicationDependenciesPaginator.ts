// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListApplicationDependenciesCommand,
  ListApplicationDependenciesCommandInput,
  ListApplicationDependenciesCommandOutput,
} from "../commands/ListApplicationDependenciesCommand";
import { ServerlessApplicationRepositoryClient } from "../ServerlessApplicationRepositoryClient";
import { ServerlessApplicationRepositoryPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ServerlessApplicationRepositoryClient,
  input: ListApplicationDependenciesCommandInput,
  ...args: any
): Promise<ListApplicationDependenciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationDependenciesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListApplicationDependencies(
  config: ServerlessApplicationRepositoryPaginationConfiguration,
  input: ListApplicationDependenciesCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationDependenciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationDependenciesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof ServerlessApplicationRepositoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error(
        "Invalid client, expected ServerlessApplicationRepository | ServerlessApplicationRepositoryClient"
      );
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
