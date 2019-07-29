const Property = {
  owner(obj, args, { prisma }, info) {
      return prisma.query.user({
        where: {
          id: obj.id
        }
      });
  }
};

export default Property;
