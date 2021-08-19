const { ApolloServer, gql } = require('apollo-server')
const { RESTDataSource } = require('apollo-datasource-rest')

const typeDefs = gql`
  type Item {
    _id : String!,
    title: String!
  }

  type Tasks {
    _id :String!,
    title: String!,
    items : [Item!]!,
  }
  type Query {
    allTasks: [Tasks!]!,
    getTask (title: String!): Tasks!,
  }

  type Mutation {
		addTask(title: String!): Tasks
	}
`
const resolvers = {
    Query: {
      allTasks: async (parent, args, { dataSources }) => {
        return dataSources.tasksAPI.getAllTasks()
      },

      getOrCreateTask: async (parent, {title}, { dataSources }) => {
        return dataSources.tasksAPI.getOrCreateTask(title)
      },

    },

    Mutation: {
      addTask: async (parent, {title}, { dataSources }) => {
        return dataSources.tasksAPI.postTask(title)
      },
    }
    
  }


class TasksAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:5000'
  }

  async getAllTasks() {
    return this.get('/tasks')
  }

  async getOrCreateTask(title) {
    return this.post(
      `tasks`, // path
      {title :title}, // request body
    );
  }

  async postTask(title) {
    return this.post(
      `tasks`, // path
      {title :title}, // request body
    );
  }

}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
        tasksAPI: new TasksAPI(),
    }
  },
  
})
server.listen().then(({ url }) => console.log(`Server running at ${url}`))



  
  