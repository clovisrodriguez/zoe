/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    title
    price
    description
    category
    images
  }
}
`;
export const listProducts = `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      price
      description
      category
      images
    }
    nextToken
  }
}
`;
export const getMetaData = `query GetMetaData($id: ID!) {
  getMetaData(id: $id) {
    mainBanner
  }
}
`;
export const listMetaDatas = `query ListMetaDatas(
  $filter: ModelMetaDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listMetaDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      mainBanner
    }
    nextToken
  }
}
`;
