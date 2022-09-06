import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { OperationUpdateManyWithoutOperationTypeNestedInput } from "../inputs/OperationUpdateManyWithoutOperationTypeNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("OperationTypeUpdateInput", {
  isAbstract: true
})
export class OperationTypeUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  postive?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OperationUpdateManyWithoutOperationTypeNestedInput, {
    nullable: true
  })
  operations?: OperationUpdateManyWithoutOperationTypeNestedInput | undefined;
}
