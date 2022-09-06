import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateManyUserInputEnvelope } from "../inputs/OperationCreateManyUserInputEnvelope";
import { OperationCreateOrConnectWithoutUserInput } from "../inputs/OperationCreateOrConnectWithoutUserInput";
import { OperationCreateWithoutUserInput } from "../inputs/OperationCreateWithoutUserInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class OperationCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [OperationCreateWithoutUserInput], {
    nullable: true
  })
  create?: OperationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: OperationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => OperationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: OperationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OperationWhereUniqueInput], {
    nullable: true
  })
  connect?: OperationWhereUniqueInput[] | undefined;
}
