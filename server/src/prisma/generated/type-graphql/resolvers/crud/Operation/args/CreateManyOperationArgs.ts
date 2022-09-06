import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationCreateManyInput } from "../../../inputs/OperationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOperationArgs {
  @TypeGraphQL.Field(_type => [OperationCreateManyInput], {
    nullable: false
  })
  data!: OperationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
