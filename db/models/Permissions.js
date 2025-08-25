const { Model } = require('objection');
const Role = require('./Role');

class Permission extends Model {
  static get tableName() {
    return 'permissions';
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
          from: 'permissions.id',
          through: {
            from: 'role_permissions.permission_id',
            to: 'role_permissions.role_id',
          },
          to: 'roles.id',
        },
      },
    };
  }
}

module.exports = Permission;
