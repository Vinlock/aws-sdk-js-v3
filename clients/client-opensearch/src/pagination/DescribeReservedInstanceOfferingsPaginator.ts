// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeReservedInstanceOfferingsCommand,
  DescribeReservedInstanceOfferingsCommandInput,
  DescribeReservedInstanceOfferingsCommandOutput,
} from "../commands/DescribeReservedInstanceOfferingsCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
  input: DescribeReservedInstanceOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedInstanceOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedInstanceOfferingsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeReservedInstanceOfferings(
  config: OpenSearchPaginationConfiguration,
  input: DescribeReservedInstanceOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedInstanceOfferingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedInstanceOfferingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpenSearchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearch | OpenSearchClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
