import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationUpdateManyWithoutPlaceNestedInput } from "../inputs/OperationUpdateManyWithoutPlaceNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PlaceUpdateInput", {
  isAbstract: true
})
export class PlaceUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OperationUpdateManyWithoutPlaceNestedInput, {
    nullable: true
  })
  Operations?: OperationUpdateManyWithoutPlaceNestedInput | undefined;
}
