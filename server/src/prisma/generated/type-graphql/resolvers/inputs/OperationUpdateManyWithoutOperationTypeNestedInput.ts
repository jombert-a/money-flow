import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateManyOperationTypeInputEnvelope } from "../inputs/OperationCreateManyOperationTypeInputEnvelope";
import { OperationCreateOrConnectWithoutOperationTypeInput } from "../inputs/OperationCreateOrConnectWithoutOperationTypeInput";
import { OperationCreateWithoutOperationTypeInput } from "../inputs/OperationCreateWithoutOperationTypeInput";
import { OperationScalarWhereInput } from "../inputs/OperationScalarWhereInput";
import { OperationUpdateManyWithWhereWithoutOperationTypeInput } from "../inputs/OperationUpdateManyWithWhereWithoutOperationTypeInput";
import { OperationUpdateWithWhereUniqueWithoutOperationTypeInput } from "../inputs/OperationUpdateWithWhereUniqueWithoutOperationTypeInput";
import { OperationUpsertWithWhereUniqueWithoutOperationTypeInput } from "../inputs/OperationUpsertWithWhereUniqueWithoutOperationTypeInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationUpdateManyWithoutOperationTypeNestedInput", {
  isAbstract: true
})
export class OperationUpdateManyWithoutOperationTypeNestedInput {
  @TypeGraphQL.Field(_type => [OperationCreateWithoutOperationTypeInput], {
    nullable: true
  })
  create?: OperationCreateWithoutOperationTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationCreateOrConnectWithoutOperationTypeInput], {
    nullable: true
  })
  connectOrCreate?: OperationCreateOrConnectWithoutOperationTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationUpsertWithWhereUniqueWithoutOperationTypeInput], {
    nullable: true
  })
  upsert?: OperationUpsertWithWhereUniqueWithoutOperationTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => OperationCreateManyOperationTypeInputEnvelope, {
    nullable: true
  })
  createMany?: OperationCreateManyOperationTypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OperationUpdateWithWhereUniqueWithoutOperationTypeInput], {
    nullable: true
  })
  update?: OperationUpdateWithWhereUniqueWithoutOperationTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationUpdateManyWithWhereWithoutOperationTypeInput], {
    nullable: true
  })
  updateMany?: OperationUpdateManyWithWhereWithoutOperationTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OperationScalarWhereInput[] | undefined;
}
