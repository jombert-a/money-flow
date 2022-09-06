import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationTypeCreateNestedOneWithoutOperationsInput } from "../inputs/OperationTypeCreateNestedOneWithoutOperationsInput";
import { PlaceCreateNestedOneWithoutOperationsInput } from "../inputs/PlaceCreateNestedOneWithoutOperationsInput";
import { UserCreateNestedOneWithoutOperationsInput } from "../inputs/UserCreateNestedOneWithoutOperationsInput";

@TypeGraphQL.InputType("OperationCreateInput", {
  isAbstract: true
})
export class OperationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOperationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutOperationsInput;

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
