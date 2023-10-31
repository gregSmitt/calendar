import { FIELD_TYPES } from "../../../../../consts";
import CrmItemApi from "../../../api/CrmItem";
import { entityTypeId, schema } from "./dto";

const {
  dateMulti,
} = FIELD_TYPES;

class Recommendation {
  entityTypeId = entityTypeId;
  schema = schema;

  constructor(api) {
    this.api = new CrmItemApi(api, this.entityTypeId);
  }

  add = async (sections, parentId) => {
    const result = [];

    for (const section of Object.values(sections)) {
      const fields = {};
      const data = section.items;
      let isFilled = false;

      fields.parentId159 = parentId;

      for (const [apiCode, code] of Object.entries(schema)) {
        if (code && data[code]) {
          fields[apiCode] = data[code].value;

          if (data[code].value) {
            isFilled = true;
          }
        }
      }

      if (isFilled) {
        const res = await this.api.add(fields);
        result.push(res.item.id);
      }
    }

    return result;
  }

  getFields = async () => {
    return await this.api.getFields();
  }
}

export default Recommendation;