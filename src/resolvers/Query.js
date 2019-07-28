const Query = {
  search(parent, { query }, { prisma }, info) {
    const userArgsObj = {};
    if (query) {
      userArgsObj.where = {
        OR: [
          {
            firstName_contains: query,
            lastName_contains: query
          }
        ]
      };
    }
    const propertyArgsObj = {};
    if (query) {
      propertyArgsObj.where = {
        OR: [{}]
      };
    }
  },

  users(parent, { query }, { prisma }, info) {
    const argsObj = {};
    if (query) {
      argsObj.where = {
        OR: [
          {
            firstName_contains: query,
            lastName_contains: query
          }
        ]
      };
    }

    return prisma.query.users(null, info);
  },
  properties(parent, { query }, { prisma }, info) {
    const argsObj = {};
    if (query) {
      argsObj.where.OR = [
        {
          state_contains: query
        },
        {
          city_contains: query
        },
        {
          zip_contains: query
        },
        {
          rent_contains: query
        }
      ];
    }

    return prisma.query.properties(argsObj, info);
  }
};

export default Query;
