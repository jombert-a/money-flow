import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutOperationsInput } from "../inputs/UserCreateOrConnectWithoutOperationsInput";
import { UserCreateWithoutOperationsInput } from "../inputs/UserCreateWithoutOperationsInput";
import { UserUpdateWithoutOperationsInput } from "../inputs/UserUpdateWithoutOperationsInput";
import { UserUpsertWithoutOperationsInput } from "../inputs/UserUpsertWithoutOperationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutOperationsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutOperationsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutOperationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOperationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutOperationsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutOperationsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutOperationsInput | undefined;
}
