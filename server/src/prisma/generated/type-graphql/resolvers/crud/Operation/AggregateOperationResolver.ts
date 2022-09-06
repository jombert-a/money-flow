import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOperationArgs } from "./args/AggregateOperationArgs";
import { Operation } from "../../../models/Operation";
import { AggregateOperation } from "../../outputs/AggregateOperation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Operation)
export class AggregateOperationResolver {
  @TypeGraphQL.Query(_returns => AggregateOperation, {
    nullable: false
  })
  async aggregateOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOperationArgs): Promise<AggregateOperation> {
    return getPrismaFromContext(ctx).operation.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
