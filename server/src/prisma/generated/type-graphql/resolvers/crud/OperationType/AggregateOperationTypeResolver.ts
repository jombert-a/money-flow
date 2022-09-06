import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOperationTypeArgs } from "./args/AggregateOperationTypeArgs";
import { OperationType } from "../../../models/OperationType";
import { AggregateOperationType } from "../../outputs/AggregateOperationType";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OperationType)
export class AggregateOperationTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateOperationType, {
    nullable: false
  })
  async aggregateOperationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOperationTypeArgs): Promise<AggregateOperationType> {
    return getPrismaFromContext(ctx).operationType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
