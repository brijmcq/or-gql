const Mutation = {
  async createUser(parent, args, { prisma }, info) {
    const user = await prisma.mutation.createUser({
      data: {
        ...args.data
      }
    });
    return user;
  },
  async createProperty(parent, {data}, { prisma }, info) {
    const property = await prisma.mutation.createProperty({
      data: {
        street: data.street,
        city: data.city,
        state: data.state,
        zip: data.zip,
        rent: data.rent,
        owner: {
          connect: {
            id: data.owner
          }
        }
      }
    });
    return property;
  }
};

export default Mutation;
