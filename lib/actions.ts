import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === 'production';


const client = new GraphQLClient('apiUrl')

const makeGraphQLRequest = async (query: string, 
  variables = {}) => {
    try {
      //client.request...
    } catch(error: any) {
      throw error;
    }
  }