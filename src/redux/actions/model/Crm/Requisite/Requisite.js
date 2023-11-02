import RequisiteApi from "../../../api/Requisite";
import { schema } from "./dto";

class Requisite {
  schema = schema;

  constructor(api) {
    this.api = new RequisiteApi(api);
  }

  add = async (data, contactId) => {
    const fields = {};

    fields.ENTITY_TYPE_ID = 3;
    fields.ENTITY_ID = contactId;
    fields.PRESET_ID = 5;
    fields.NAME = "Паспортные данные";
    fields.RQ_IDENT_DOC = "Паспорт";

    for (const [apiCode, code] of Object.entries(this.schema)) {
      if (code && data[code]) {
        fields[apiCode] = data[code].value;
      }
    }

    return await this.api.add(fields);
  }

  getEnum = async () => {
    const fields = await this.api.getFields();
    const entities = await this.api.getEntityTypes();
    const presets = await this.api.getPresets();

    return { fields, entities, presets };
  }

  get = async (id) => {
    return await this.api.get(id);
  }
};

export default Requisite;