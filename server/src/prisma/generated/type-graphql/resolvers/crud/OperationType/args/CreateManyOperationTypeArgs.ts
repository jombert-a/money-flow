import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OperationTypeCreateManyInput } from "../../../inputs/OperationTypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOperationTypeArgs {
  @TypeGraphQL.Field(_type => [OperationTypeCreateManyInput], {
    nullable: false
  })
  data!: OperationTypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
