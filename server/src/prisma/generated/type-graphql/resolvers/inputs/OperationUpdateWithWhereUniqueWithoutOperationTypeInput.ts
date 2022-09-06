import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationUpdateWithoutOperationTypeInput } from "../inputs/OperationUpdateWithoutOperationTypeInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationUpdateWithWhereUniqueWithoutOperationTypeInput", {
  isAbstract: true
})
export class OperationUpdateWithWhereUniqueWithoutOperationTypeInput {
  @TypeGraphQL.Field(_type => OperationWhereUniqueInput, {
    nullable: false
  })
  where!: OperationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OperationUpdateWithoutOperationTypeInput, {
    nullable: false
  })
  data!: OperationUpdateWithoutOperationTypeInput;
}
