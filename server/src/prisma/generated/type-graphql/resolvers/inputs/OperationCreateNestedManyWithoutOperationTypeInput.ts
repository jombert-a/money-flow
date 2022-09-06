import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateManyOperationTypeInputEnvelope } from "../inputs/OperationCreateManyOperationTypeInputEnvelope";
import { OperationCreateOrConnectWithoutOperationTypeInput } from "../inputs/OperationCreateOrConnectWithoutOperationTypeInput";
import { OperationCreateWithoutOperationTypeInput } from "../inputs/OperationCreateWithoutOperationTypeInput";
import { OperationWhereUniqueInput } from "../inputs/OperationWhereUniqueInput";

@TypeGraphQL.InputType("OperationCreateNestedManyWithoutOperationTypeInput", {
  isAbstract: true
})
export class OperationCreateNestedManyWithoutOperationTypeInput {
  @TypeGraphQL.Field(_type => [OperationCreateWithoutOperationTypeInput], {
    nullable: true
  })
  create?: OperationCreateWithoutOperationTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [OperationCreateOrConnectWithoutOperationTypeInput], {
    nullable: true
  })
  connectOrCreate?: OperationCreateOrConnectWithoutOperationTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => OperationCreateManyOperationTypeInputEnvelope, {
    nullable: true
  })
  createMany?: OperationCreateManyOperationTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OperationWhereUniqueInput], {
    nullable: true
  })
  connect?: OperationWhereUniqueInput[] | undefined;
}
