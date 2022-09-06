import * as TypeGraphQL from "type-graphql";

export enum OperationTypeScalarFieldEnum {
  id = "id",
  name = "name",
  postive = "postive"
}
TypeGraphQL.registerEnumType(OperationTypeScalarFieldEnum, {
  name: "OperationTypeScalarFieldEnum",
  description: undefined,
});
