import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceCreateWithoutOperationsInput } from "../inputs/PlaceCreateWithoutOperationsInput";
import { PlaceUpdateWithoutOperationsInput } from "../inputs/PlaceUpdateWithoutOperationsInput";

@TypeGraphQL.InputType("PlaceUpsertWithoutOperationsInput", {
  isAbstract: true
})
export class PlaceUpsertWithoutOperationsInput {
  @TypeGraphQL.Field(_type => PlaceUpdateWithoutOperationsInput, {
    nullable: false
  })
  update!: PlaceUpdateWithoutOperationsInput;

  @TypeGraphQL.Field(_type => PlaceCreateWithoutOperationsInput, {
    nullable: false
  })
  create!: PlaceCreateWithoutOperationsInput;
}
