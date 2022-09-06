import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateManyOperationTypeInput } from "../inputs/OperationCreateManyOperationTypeInput";

@TypeGraphQL.InputType("OperationCreateManyOperationTypeInputEnvelope", {
  isAbstract: true
})
export class OperationCreateManyOperationTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [OperationCreateManyOperationTypeInput], {
    nullable: false
  })
  data!: OperationCreateManyOperationTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
