import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceCreateWithoutOperationsInput } from "../inputs/PlaceCreateWithoutOperationsInput";
import { PlaceWhereUniqueInput } from "../inputs/PlaceWhereUniqueInput";

@TypeGraphQL.InputType("PlaceCreateOrConnectWithoutOperationsInput", {
  isAbstract: true
})
export class PlaceCreateOrConnectWithoutOperationsInput {
  @TypeGraphQL.Field(_type => PlaceWhereUniqueInput, {
    nullable: false
  })
  where!: PlaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaceCreateWithoutOperationsInput, {
    nullable: false
  })
  create!: PlaceCreateWithoutOperationsInput;
}
