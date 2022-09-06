import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaceCreateInput } from "../../../inputs/PlaceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePlaceArgs {
  @TypeGraphQL.Field(_type => PlaceCreateInput, {
    nullable: false
  })
  data!: PlaceCreateInput;
}
