import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceCreateOrConnectWithoutOperationsInput } from "../inputs/PlaceCreateOrConnectWithoutOperationsInput";
import { PlaceCreateWithoutOperationsInput } from "../inputs/PlaceCreateWithoutOperationsInput";
import { PlaceUpdateWithoutOperationsInput } from "../inputs/PlaceUpdateWithoutOperationsInput";
import { PlaceUpsertWithoutOperationsInput } from "../inputs/PlaceUpsertWithoutOperationsInput";
import { PlaceWhereUniqueInput } from "../inputs/PlaceWhereUniqueInput";

@TypeGraphQL.InputType("PlaceUpdateOneWithoutOperationsNestedInput", {
  isAbstract: true
})
export class PlaceUpdateOneWithoutOperationsNestedInput {
  @TypeGraphQL.Field(_type => PlaceCreateWithoutOperationsInput, {
    nullable: true
  })
  create?: PlaceCreateWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PlaceCreateOrConnectWithoutOperationsInput, {
    nullable: true
  })
  connectOrCreate?: PlaceCreateOrConnectWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PlaceUpsertWithoutOperationsInput, {
    nullable: true
  })
  upsert?: PlaceUpsertWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PlaceWhereUniqueInput, {
    nullable: true
  })
  connect?: PlaceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PlaceUpdateWithoutOperationsInput, {
    nullable: true
  })
  update?: PlaceUpdateWithoutOperationsInput | undefined;
}
