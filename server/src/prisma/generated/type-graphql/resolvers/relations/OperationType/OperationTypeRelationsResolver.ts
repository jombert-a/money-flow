import * as TypeGraphQL from "type-graphql";
import { Operation } from "../../../models/Operation";
import { OperationType } from "../../../models/OperationType";
import { OperationTypeOperationsArgs } from "./args/OperationTypeOperationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OperationType)
export class OperationTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Operation], {
    nullable: false
  })
  async operations(@TypeGraphQL.Root() operationType: OperationType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OperationTypeOperationsArgs): Promise<Operation[]> {
    return getPrismaFromContext(ctx).operationType.findUnique({
      where: {
        id: operationType.id,
      },
    }).operations(args);
  }
}
