import * as TypeGraphQL from "type-graphql";

export enum OperationScalarFieldEnum {
  id = "id",
  userId = "userId",
  operationTypeId = "operationTypeId",
  placeId = "placeId",
  comment = "comment",
  date = "date",
  value = "value"
}
TypeGraphQL.registerEnumType(OperationScalarFieldEnum, {
  name: "OperationScalarFieldEnum",
  description: undefined,
});
