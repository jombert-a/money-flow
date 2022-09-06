import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationUpdateWithoutPlaceInput } from "../inputs/OperationUpdateWithoutPlaceInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationUpdateWithWhereUniqueWithoutPlaceInput", {
  isAbstract: true
})
export class OperationUpdateWithWhereUniqueWithoutPlaceInput {
  @TypeGraphQL.Field(_type => OperationWhereUniqueInput, {
    nullable: false
  })
  where!: OperationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OperationUpdateWithoutPlaceInput, {
    nullable: false
  })
  data!: OperationUpdateWithoutPlaceInput;
}
