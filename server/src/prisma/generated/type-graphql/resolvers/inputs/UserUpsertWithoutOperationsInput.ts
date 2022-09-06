import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutOperationsInput } from "../inputs/UserCreateWithoutOperationsInput";
import { UserUpdateWithoutOperationsInput } from "../inputs/UserUpdateWithoutOperationsInput";

@TypeGraphQL.InputType("UserUpsertWithoutOperationsInput", {
  isAbstract: true
})
export class UserUpsertWithoutOperationsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutOperationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutOperationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutOperationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutOperationsInput;
}
