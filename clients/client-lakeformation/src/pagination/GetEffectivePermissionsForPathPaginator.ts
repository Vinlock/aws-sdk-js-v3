// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetEffectivePermissionsForPathCommand,
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
} from "../commands/GetEffectivePermissionsForPathCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LakeFormationClient,
  input: GetEffectivePermissionsForPathCommandInput,
  ...args: any
): Promise<GetEffectivePermissionsForPathCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEffectivePermissionsForPathCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetEffectivePermissionsForPath(
  config: LakeFormationPaginationConfiguration,
  input: GetEffectivePermissionsForPathCommandInput,
  ...additionalArguments: any
): Paginator<GetEffectivePermissionsForPathCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetEffectivePermissionsForPathCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LakeFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LakeFormation | LakeFormationClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
