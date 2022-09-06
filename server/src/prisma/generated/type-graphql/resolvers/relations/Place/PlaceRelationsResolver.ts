import * as TypeGraphQL from "type-graphql";
import { Operation } from "../../../models/Operation";
import { Place } from "../../../models/Place";
import { PlaceOperationsArgs } from "./args/PlaceOperationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Place)
export class PlaceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Operation], {
    nullable: false
  })
  async Operations(@TypeGraphQL.Root() place: Place, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PlaceOperationsArgs): Promise<Operation[]> {
    return getPrismaFromContext(ctx).place.findUnique({
      where: {
        id: place.id,
      },
    }).Operations(args);
  }
}
