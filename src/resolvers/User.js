
const User =  {
  properties: {
    resolve(parent, args, { prisma }, info) {
      return prisma.query.property({
        where: {
          owner: {
            id: parent.id
          },
          published: true
        }
      });
    }
  }
};

export default User;