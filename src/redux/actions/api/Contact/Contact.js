class ContactApi {
  constructor(api) {
    this.api = api;
  }

  add = async (fields) => {
    return await this.api.Get(
      'crm.contact.add',
      {
        fields,
        params: { "REGISTER_SONET_EVENT": "Y" },
      }
    );
  };
  
  update = async (id, fields) => {
    return this.api.Get(
      'crm.contact.update',
      {
        id,
        fields,
        params: { "REGISTER_SONET_EVENT": "Y" },
      }
    );
  };

  get = async (id) => {
    return await this.api.Get(
      'crm.contact.get',
      {
        id
      }
    );
  }

  getByFilter = async ({ select, order, filter }) => {
    return await this.api.BatchQuery(
      'crm.contact.list',
      {
        select,
        order,
        filter,
      },
      true
    );
  }

  getFields = async () => {
    return await this.api.Get(
      'crm.contact.fields', {}
    );
  }

  // getLinkedItems = async (obBusinessProcess, projectId) => {
  //   return this.api.BatchQuery(
  //     'crm.item.list',
  //     {
  //       entityTypeId: obBusinessProcess.entityTypeId,
  //       filter: {
  //         [obBusinessProcess.fields.project.code]: `${obBusinessProcess.fields.project.prefix}_${projectId}`
  //       },
  //     },
  //     true
  //   );
  // }
}

export default ContactApi;