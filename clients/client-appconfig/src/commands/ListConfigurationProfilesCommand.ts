// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import {
  ConfigurationProfiles,
  ConfigurationProfilesFilterSensitiveLog,
  ListConfigurationProfilesRequest,
  ListConfigurationProfilesRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListConfigurationProfilesCommand,
  serializeAws_restJson1ListConfigurationProfilesCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListConfigurationProfilesCommand}.
 */
export interface ListConfigurationProfilesCommandInput extends ListConfigurationProfilesRequest {}
/**
 * The output of {@link ListConfigurationProfilesCommand}.
 */
export interface ListConfigurationProfilesCommandOutput extends ConfigurationProfiles, __MetadataBearer {}

/**
 * <p>Lists the configuration profiles for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListConfigurationProfilesCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListConfigurationProfilesCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new ListConfigurationProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationProfilesCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationProfilesCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @example To list the available configuration profiles
 * ```javascript
 * // The following list-configuration-profiles example lists the available configuration profiles for the specified application.
 * const input = {
 *   "ApplicationId": "339ohji"
 * };
 * const command = new ListConfigurationProfilesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Items": [
 *     {
 *       "ApplicationId": "339ohji",
 *       "Id": "ur8hx2f",
 *       "LocationUri": "ssm-parameter://Example-Parameter",
 *       "Name": "Example-Configuration-Profile"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-the-available-configuration-profiles-1632267193265
 * ```
 *
 */
export class ListConfigurationProfilesCommand extends $Command<
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListConfigurationProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConfigurationProfilesCommandInput, ListConfigurationProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConfigurationProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "ListConfigurationProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConfigurationProfilesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationProfilesFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConfigurationProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListConfigurationProfilesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListConfigurationProfilesCommandOutput> {
    return deserializeAws_restJson1ListConfigurationProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
