class CrmItemApi {
  constructor(api, entityTypeId) {
    this.api = api;
    this.entityTypeId = entityTypeId;
  }

  getList = async () => {
    return await this.api.BatchQuery(
      'crm.item.list',
      {
        entityTypeId: this.entityTypeId,
      },
      true
    );
  };

  update = async (id, fields) => {
    return await this.api.Get(
      'crm.item.update',
      {
        entityTypeId: this.entityTypeId,
        id,
        fields,
      }
    );
  };

  add = async (fields) => {
    return await this.api.Get(
      'crm.item.add',
      {
        entityTypeId: this.entityTypeId,
        fields,
      }
    );
  };

  getFields = async () => {
    return await this.api.BatchQuery(
      'crm.item.fields',
      {
        entityTypeId: this.entityTypeId,
      }
    );
  }

  get = async (id) => {
    return await this.api.Get(
      'crm.item.get',
      {
        entityTypeId: this.entityTypeId,
        id
      }
    );
  }

  getByFilter = async ({ select, order, filter }) => {
    return await this.api.BatchQuery(
      'crm.item.list',
      {
        entityTypeId: this.entityTypeId,
        select,
        order,
        filter,
      },
      true
    );
  }

  getLinkedItems = async (obBusinessProcess, projectId) => {
    return await this.api.BatchQuery(
      'crm.item.list',
      {
        entityTypeId: obBusinessProcess.entityTypeId,
        filter: {
          [obBusinessProcess.fields.project.code]: `${obBusinessProcess.fields.project.prefix}_${projectId}`
        },
      },
      true
    );
  }
}

export default CrmItemApi;