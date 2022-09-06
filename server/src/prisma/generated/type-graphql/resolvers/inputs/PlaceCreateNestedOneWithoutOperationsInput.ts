import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceCreateOrConnectWithoutOperationsInput } from "../inputs/PlaceCreateOrConnectWithoutOperationsInput";
import { PlaceCreateWithoutOperationsInput } from "../inputs/PlaceCreateWithoutOperationsInput";
import { PlaceWhereUniqueInput } from "../inputs/PlaceWhereUniqueInput";

@TypeGraphQL.InputType("PlaceCreateNestedOneWithoutOperationsInput", {
  isAbstract: true
})
export class PlaceCreateNestedOneWithoutOperationsInput {
  @TypeGraphQL.Field(_type => PlaceCreateWithoutOperationsInput, {
    nullable: true
  })
  create?: PlaceCreateWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PlaceCreateOrConnectWithoutOperationsInput, {
    nullable: true
  })
  connectOrCreate?: PlaceCreateOrConnectWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PlaceWhereUniqueInput, {
    nullable: true
  })
  connect?: PlaceWhereUniqueInput | undefined;
}
