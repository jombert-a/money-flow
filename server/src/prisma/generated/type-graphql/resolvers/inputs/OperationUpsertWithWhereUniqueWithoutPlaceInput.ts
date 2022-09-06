import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateWithoutPlaceInput } from "../inputs/OperationCreateWithoutPlaceInput";
import { OperationUpdateWithoutPlaceInput } from "../inputs/OperationUpdateWithoutPlaceInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationUpsertWithWhereUniqueWithoutPlaceInput", {
  isAbstract: true
})
export class OperationUpsertWithWhereUniqueWithoutPlaceInput {
  @TypeGraphQL.Field(_type => OperationWhereUniqueInput, {
    nullable: false
  })
  where!: OperationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OperationUpdateWithoutPlaceInput, {
    nullable: false
  })
  update!: OperationUpdateWithoutPlaceInput;

  @TypeGraphQL.Field(_type => OperationCreateWithoutPlaceInput, {
    nullable: false
  })
  create!: OperationCreateWithoutPlaceInput;
}
