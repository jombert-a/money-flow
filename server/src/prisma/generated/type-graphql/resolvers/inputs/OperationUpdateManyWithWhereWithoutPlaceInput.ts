import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationScalarWhereInput } from "../inputs/OperationScalarWhereInput";
import { OperationUpdateManyMutationInput } from "../inputs/OperationUpdateManyMutationInput";

@TypeGraphQL.InputType("OperationUpdateManyWithWhereWithoutPlaceInput", {
  isAbstract: true
})
export class OperationUpdateManyWithWhereWithoutPlaceInput {
  @TypeGraphQL.Field(_type => OperationScalarWhereInput, {
    nullable: false
  })
  where!: OperationScalarWhereInput;

  @TypeGraphQL.Field(_type => OperationUpdateManyMutationInput, {
    nullable: false
  })
  data!: OperationUpdateManyMutationInput;
}
