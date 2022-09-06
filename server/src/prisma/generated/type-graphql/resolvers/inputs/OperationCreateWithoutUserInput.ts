import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationTypeCreateNestedOneWithoutOperationsInput } from "../inputs/OperationTypeCreateNestedOneWithoutOperationsInput";
import { PlaceCreateNestedOneWithoutOperationsInput } from "../inputs/PlaceCreateNestedOneWithoutOperationsInput";

@TypeGraphQL.InputType("OperationCreateWithoutUserInput", {
  isAbstract: true
})
export class OperationCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => OperationTypeCreateNestedOneWithoutOperationsInput, {
    nullable: false
  })
  operationType!: OperationTypeCreateNestedOneWithoutOperationsInput;

  @TypeGraphQL.Field(_type => PlaceCreateNestedOneWithoutOperationsInput, {
    nullable: true
  })
  place?: PlaceCreateNestedOneWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  value!: number;
}
