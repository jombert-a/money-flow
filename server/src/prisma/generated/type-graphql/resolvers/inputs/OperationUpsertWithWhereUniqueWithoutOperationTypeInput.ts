import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateWithoutOperationTypeInput } from "../inputs/OperationCreateWithoutOperationTypeInput";
import { OperationUpdateWithoutOperationTypeInput } from "../inputs/OperationUpdateWithoutOperationTypeInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationUpsertWithWhereUniqueWithoutOperationTypeInput", {
  isAbstract: true
})
export class OperationUpsertWithWhereUniqueWithoutOperationTypeInput {
  @TypeGraphQL.Field(_type => OperationWhereUniqueInput, {
    nullable: false
  })
  where!: OperationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OperationUpdateWithoutOperationTypeInput, {
    nullable: false
  })
  update!: OperationUpdateWithoutOperationTypeInput;

  @TypeGraphQL.Field(_type => OperationCreateWithoutOperationTypeInput, {
    nullable: false
  })
  create!: OperationCreateWithoutOperationTypeInput;
}
