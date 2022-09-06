import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateNestedManyWithoutOperationTypeInput } from "../inputs/OperationCreateNestedManyWithoutOperationTypeInput";

@TypeGraphQL.InputType("OperationTypeCreateInput", {
  isAbstract: true
})
export class OperationTypeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  postive?: boolean | undefined;

  @TypeGraphQL.Field(_type => OperationCreateNestedManyWithoutOperationTypeInput, {
    nullable: true
  })
  operations?: OperationCreateNestedManyWithoutOperationTypeInput | undefined;
}
