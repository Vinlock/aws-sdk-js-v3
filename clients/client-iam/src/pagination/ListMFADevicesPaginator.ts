// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListMFADevicesCommand,
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput,
} from "../commands/ListMFADevicesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListMFADevicesCommandInput,
  ...args: any
): Promise<ListMFADevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMFADevicesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListMFADevices(
  config: IAMPaginationConfiguration,
  input: ListMFADevicesCommandInput,
  ...additionalArguments: any
): Paginator<ListMFADevicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMFADevicesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
