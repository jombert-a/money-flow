import * as TypeGraphQL from "type-graphql";
import { Operation } from "../../../models/Operation";
import { User } from "../../../models/User";
import { UserOperationsArgs } from "./args/UserOperationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Operation], {
    nullable: false
  })
  async operations(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserOperationsArgs): Promise<Operation[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).operations(args);
  }
}
