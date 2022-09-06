import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationUpdateWithoutUserInput } from "../inputs/OperationUpdateWithoutUserInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class OperationUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => OperationWhereUniqueInput, {
    nullable: false
  })
  where!: OperationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OperationUpdateWithoutUserInput, {
    nullable: false
  })
  data!: OperationUpdateWithoutUserInput;
}
