const { Model } = require('objection');
const Role = require('./Role');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass: Role,
        join: {
          from: 'users.id',
          through: {
            from: 'user_roles.user_id',
            to: 'user_roles.role_id',
          },
          to: 'roles.id',
        },
      },
    };
  }
}

module.exports = User;
