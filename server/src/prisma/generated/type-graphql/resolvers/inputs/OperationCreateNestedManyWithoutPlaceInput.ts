import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateManyPlaceInputEnvelope } from "../inputs/OperationCreateManyPlaceInputEnvelope";
import { OperationCreateOrConnectWithoutPlaceInput } from "../inputs/OperationCreateOrConnectWithoutPlaceInput";
import { OperationCreateWithoutPlaceInput } from "../inputs/OperationCreateWithoutPlaceInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationCreateNestedManyWithoutPlaceInput", {
  isAbstract: true
})
export class OperationCreateNestedManyWithoutPlaceInput {
  @TypeGraphQL.Field(_type => [OperationCreateWithoutPlaceInput], {
    nullable: true
  })
  create?: OperationCreateWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationCreateOrConnectWithoutPlaceInput], {
    nullable: true
  })
  connectOrCreate?: OperationCreateOrConnectWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => OperationCreateManyPlaceInputEnvelope, {
    nullable: true
  })
  createMany?: OperationCreateManyPlaceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OperationWhereUniqueInput], {
    nullable: true
  })
  connect?: OperationWhereUniqueInput[] | undefined;
}
