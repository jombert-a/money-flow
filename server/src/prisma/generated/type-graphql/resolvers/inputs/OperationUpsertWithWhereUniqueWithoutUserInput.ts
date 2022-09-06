import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateWithoutUserInput } from "../inputs/OperationCreateWithoutUserInput";
import { OperationUpdateWithoutUserInput } from "../inputs/OperationUpdateWithoutUserInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class OperationUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => OperationWhereUniqueInput, {
    nullable: false
  })
  where!: OperationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OperationUpdateWithoutUserInput, {
    nullable: false
  })
  update!: OperationUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => OperationCreateWithoutUserInput, {
    nullable: false
  })
  create!: OperationCreateWithoutUserInput;
}
