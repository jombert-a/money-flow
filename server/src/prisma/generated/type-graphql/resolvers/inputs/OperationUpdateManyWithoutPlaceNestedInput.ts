import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateManyPlaceInputEnvelope } from "../inputs/OperationCreateManyPlaceInputEnvelope";
import { OperationCreateOrConnectWithoutPlaceInput } from "../inputs/OperationCreateOrConnectWithoutPlaceInput";
import { OperationCreateWithoutPlaceInput } from "../inputs/OperationCreateWithoutPlaceInput";
import { OperationScalarWhereInput } from "../inputs/OperationScalarWhereInput";
import { OperationUpdateManyWithWhereWithoutPlaceInput } from "../inputs/OperationUpdateManyWithWhereWithoutPlaceInput";
import { OperationUpdateWithWhereUniqueWithoutPlaceInput } from "../inputs/OperationUpdateWithWhereUniqueWithoutPlaceInput";
import { OperationUpsertWithWhereUniqueWithoutPlaceInput } from "../inputs/OperationUpsertWithWhereUniqueWithoutPlaceInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationUpdateManyWithoutPlaceNestedInput", {
  isAbstract: true
})
export class OperationUpdateManyWithoutPlaceNestedInput {
  @TypeGraphQL.Field(_type => [OperationCreateWithoutPlaceInput], {
    nullable: true
  })
  create?: OperationCreateWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationCreateOrConnectWithoutPlaceInput], {
    nullable: true
  })
  connectOrCreate?: OperationCreateOrConnectWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationUpsertWithWhereUniqueWithoutPlaceInput], {
    nullable: true
  })
  upsert?: OperationUpsertWithWhereUniqueWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => OperationCreateManyPlaceInputEnvelope, {
    nullable: true
  })
  createMany?: OperationCreateManyPlaceInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OperationUpdateWithWhereUniqueWithoutPlaceInput], {
    nullable: true
  })
  update?: OperationUpdateWithWhereUniqueWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationUpdateManyWithWhereWithoutPlaceInput], {
    nullable: true
  })
  updateMany?: OperationUpdateManyWithWhereWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OperationScalarWhereInput[] | undefined;
}
