import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationCreateManyPlaceInput } from "../inputs/OperationCreateManyPlaceInput";

@TypeGraphQL.InputType("OperationCreateManyPlaceInputEnvelope", {
  isAbstract: true
})
export class OperationCreateManyPlaceInputEnvelope {
  @TypeGraphQL.Field(_type => [OperationCreateManyPlaceInput], {
    nullable: false
  })
  data!: OperationCreateManyPlaceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
