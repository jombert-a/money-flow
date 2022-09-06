import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateManyUserInputEnvelope } from "../inputs/OperationCreateManyUserInputEnvelope";
import { OperationCreateOrConnectWithoutUserInput } from "../inputs/OperationCreateOrConnectWithoutUserInput";
import { OperationCreateWithoutUserInput } from "../inputs/OperationCreateWithoutUserInput";
import { OperationScalarWhereInput } from "../inputs/OperationScalarWhereInput";
import { OperationUpdateManyWithWhereWithoutUserInput } from "../inputs/OperationUpdateManyWithWhereWithoutUserInput";
import { OperationUpdateWithWhereUniqueWithoutUserInput } from "../inputs/OperationUpdateWithWhereUniqueWithoutUserInput";
import { OperationUpsertWithWhereUniqueWithoutUserInput } from "../inputs/OperationUpsertWithWhereUniqueWithoutUserInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class OperationUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [OperationCreateWithoutUserInput], {
    nullable: true
  })
  create?: OperationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: OperationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: OperationUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => OperationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: OperationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OperationWhereUniqueInput], {
    nullable: true
  })
  set?: OperationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OperationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationWhereUniqueInput], {
    nullable: true
  })
  delete?: OperationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationWhereUniqueInput], {
    nullable: true
  })
  connect?: OperationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: OperationUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: OperationUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OperationScalarWhereInput[] | undefined;
}
