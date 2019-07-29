
const User =  {
  properties(parent, args, { prisma }, info) {
      return prisma.query.property({
        where: {
          owner: {
            id: parent.id
          }
        }
      });
    }
  
};

export default User;