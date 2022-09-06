import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaceWhereUniqueInput } from "../../../inputs/PlaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePlaceArgs {
  @TypeGraphQL.Field(_type => PlaceWhereUniqueInput, {
    nullable: false
  })
  where!: PlaceWhereUniqueInput;
}
