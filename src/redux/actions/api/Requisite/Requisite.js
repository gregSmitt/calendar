class RequisiteApi {
  constructor(api) {
    this.api = api;
  }

  add = async (fields) => {
    return await this.api.Get(
      'crm.requisite.add',
      {
        fields,
      }
    );
  };
  

  get = async (id) => {
    return await this.api.Get(
      'crm.requisite.get',
      {
        id
      }
    );
  }

  getFields = async () => {
    return await this.api.Get(
      'crm.requisite.fields', {}
    );
  }
  
  getPresets = async () => {
    return await this.api.Get(
      'crm.requisite.preset.list', {}
    );
  }

  getEntityTypes = async () => {
    return await this.api.Get(
      'crm.enum.ownertype', {}
    );
  }
}

export default RequisiteApi;