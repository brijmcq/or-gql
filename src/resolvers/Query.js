const Query = {
  async search(parent, { query, first }, { prisma }, info) {
    const userArgsObj = {
      first
    };

    if (query) {
      userArgsObj.where = {
        OR: [{ firstName_contains: query }, { lastName_contains: query }]
      };
    }
    const users = await prisma.query.users(userArgsObj);

    const propertyArgsObj = {
      first
    };
    let rentObj;
    if (!isNaN(parseFloat(query))) {
      rentObj = { rent: parseFloat(query) };
    } else {
      rentObj = {};
    }

    if (query) {
      propertyArgsObj.where = {
        OR: [
          { street_contains: query },
          { city_contains: query },
          { state_contains: query },
          { zip_contains: query },
          rentObj
        ]
      };
    }
    const properties = await prisma.query.properties(propertyArgsObj);
    return { users, properties };
  },

  async users(parent, { query }, { prisma }, info) {
    const argsObj = {};
    if (query) {
      argsObj.where = {
        OR: [{ firstName_contains: query }, { lastName_contains: query }]
      };
    }
    return prisma.query.users(argsObj, info);
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
