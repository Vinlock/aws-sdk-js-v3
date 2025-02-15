// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import { SearchRoomsCommand, SearchRoomsCommandInput, SearchRoomsCommandOutput } from "../commands/SearchRoomsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchRoomsCommandInput,
  ...args: any
): Promise<SearchRoomsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchRoomsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchRooms(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchRoomsCommandInput,
  ...additionalArguments: any
): Paginator<SearchRoomsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchRoomsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
