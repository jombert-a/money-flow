import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateManyUserInput } from "../inputs/OperationCreateManyUserInput";

@TypeGraphQL.InputType("OperationCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class OperationCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [OperationCreateManyUserInput], {
    nullable: false
  })
  data!: OperationCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
