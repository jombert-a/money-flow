import * as TypeGraphQL from "type-graphql";
import { Operation } from "../../../models/Operation";
import { OperationType } from "../../../models/OperationType";
import { Place } from "../../../models/Place";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Operation)
export class OperationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() operation: Operation, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).operation.findUnique({
      where: {
        id: operation.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => OperationType, {
    nullable: false
  })
  async operationType(@TypeGraphQL.Root() operation: Operation, @TypeGraphQL.Ctx() ctx: any): Promise<OperationType> {
    return getPrismaFromContext(ctx).operation.findUnique({
      where: {
        id: operation.id,
      },
    }).operationType({});
  }

  @TypeGraphQL.FieldResolver(_type => Place, {
    nullable: true
  })
  async place(@TypeGraphQL.Root() operation: Operation, @TypeGraphQL.Ctx() ctx: any): Promise<Place | null> {
    return getPrismaFromContext(ctx).operation.findUnique({
      where: {
        id: operation.id,
      },
    }).place({});
  }
}
