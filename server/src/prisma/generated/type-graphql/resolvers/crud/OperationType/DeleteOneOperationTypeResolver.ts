import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneOperationTypeArgs } from "./args/DeleteOneOperationTypeArgs";
import { OperationType } from "../../../models/OperationType";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OperationType)
export class DeleteOneOperationTypeResolver {
  @TypeGraphQL.Mutation(_returns => OperationType, {
    nullable: true
  })
  async deleteOneOperationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneOperationTypeArgs): Promise<OperationType | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).operationType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
