import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OperationTypeUpdateOneRequiredWithoutOperationsNestedInput } from "../inputs/OperationTypeUpdateOneRequiredWithoutOperationsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutOperationsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutOperationsNestedInput";

@TypeGraphQL.InputType("OperationUpdateWithoutPlaceInput", {
  isAbstract: true
})
export class OperationUpdateWithoutPlaceInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutOperationsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutOperationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => OperationTypeUpdateOneRequiredWithoutOperationsNestedInput, {
    nullable: true
  })
  operationType?: OperationTypeUpdateOneRequiredWithoutOperationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  comment?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  value?: FloatFieldUpdateOperationsInput | undefined;
}
